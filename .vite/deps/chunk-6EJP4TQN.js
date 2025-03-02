import {
  __commonJS,
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet,
  __privateWrapper,
  __publicField,
  __require,
  require_react
} from "./chunk-NS5MW37F.js";

// browser-external:fs
var require_fs = __commonJS({
  "browser-external:fs"(exports2, module2) {
    module2.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "fs" has been externalized for browser compatibility. Cannot access "fs.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:canvas
var require_canvas = __commonJS({
  "browser-external:canvas"(exports2, module2) {
    module2.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "canvas" has been externalized for browser compatibility. Cannot access "canvas.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:http
var require_http = __commonJS({
  "browser-external:http"(exports2, module2) {
    module2.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "http" has been externalized for browser compatibility. Cannot access "http.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:https
var require_https = __commonJS({
  "browser-external:https"(exports2, module2) {
    module2.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "https" has been externalized for browser compatibility. Cannot access "https.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:url
var require_url = __commonJS({
  "browser-external:url"(exports2, module2) {
    module2.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "url" has been externalized for browser compatibility. Cannot access "url.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:zlib
var require_zlib = __commonJS({
  "browser-external:zlib"(exports2, module2) {
    module2.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "zlib" has been externalized for browser compatibility. Cannot access "zlib.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/pdfjs-dist/build/pdf.js
var require_pdf = __commonJS({
  "node_modules/pdfjs-dist/build/pdf.js"(exports, module) {
    (function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports === "object" && typeof module === "object")
        module.exports = factory();
      else if (typeof define === "function" && define.amd)
        define("pdfjs-dist/build/pdf", [], factory);
      else if (typeof exports === "object")
        exports["pdfjs-dist/build/pdf"] = factory();
      else
        root["pdfjs-dist/build/pdf"] = root.pdfjsLib = factory();
    })(globalThis, () => {
      return (
        /******/
        (() => {
          "use strict";
          var __webpack_modules__ = [
            ,
            /* 1 */
            /***/
            (__unused_webpack_module2, exports2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.VerbosityLevel = exports2.Util = exports2.UnknownErrorException = exports2.UnexpectedResponseException = exports2.UNSUPPORTED_FEATURES = exports2.TextRenderingMode = exports2.RenderingIntentFlag = exports2.PermissionFlag = exports2.PasswordResponses = exports2.PasswordException = exports2.PageActionEventType = exports2.OPS = exports2.MissingPDFException = exports2.LINE_FACTOR = exports2.LINE_DESCENT_FACTOR = exports2.InvalidPDFException = exports2.ImageKind = exports2.IDENTITY_MATRIX = exports2.FormatError = exports2.FeatureTest = exports2.FONT_IDENTITY_MATRIX = exports2.DocumentActionEventType = exports2.CMapCompressionType = exports2.BaseException = exports2.BASELINE_FACTOR = exports2.AnnotationType = exports2.AnnotationStateModelType = exports2.AnnotationReviewState = exports2.AnnotationReplyType = exports2.AnnotationMode = exports2.AnnotationMarkedState = exports2.AnnotationFlag = exports2.AnnotationFieldFlag = exports2.AnnotationEditorType = exports2.AnnotationEditorPrefix = exports2.AnnotationEditorParamsType = exports2.AnnotationBorderStyleType = exports2.AnnotationActionEventType = exports2.AbortException = void 0;
              exports2.assert = assert;
              exports2.bytesToString = bytesToString;
              exports2.createPromiseCapability = createPromiseCapability;
              exports2.createValidAbsoluteUrl = createValidAbsoluteUrl;
              exports2.getModificationDate = getModificationDate;
              exports2.getVerbosityLevel = getVerbosityLevel;
              exports2.info = info;
              exports2.isArrayBuffer = isArrayBuffer;
              exports2.isArrayEqual = isArrayEqual;
              exports2.objectFromMap = objectFromMap;
              exports2.objectSize = objectSize;
              exports2.setVerbosityLevel = setVerbosityLevel;
              exports2.shadow = shadow;
              exports2.string32 = string32;
              exports2.stringToBytes = stringToBytes;
              exports2.stringToPDFString = stringToPDFString;
              exports2.stringToUTF8String = stringToUTF8String;
              exports2.unreachable = unreachable;
              exports2.utf8StringToString = utf8StringToString;
              exports2.warn = warn;
              ;
              const IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];
              exports2.IDENTITY_MATRIX = IDENTITY_MATRIX;
              const FONT_IDENTITY_MATRIX = [1e-3, 0, 0, 1e-3, 0, 0];
              exports2.FONT_IDENTITY_MATRIX = FONT_IDENTITY_MATRIX;
              const LINE_FACTOR = 1.35;
              exports2.LINE_FACTOR = LINE_FACTOR;
              const LINE_DESCENT_FACTOR = 0.35;
              exports2.LINE_DESCENT_FACTOR = LINE_DESCENT_FACTOR;
              const BASELINE_FACTOR = LINE_DESCENT_FACTOR / LINE_FACTOR;
              exports2.BASELINE_FACTOR = BASELINE_FACTOR;
              const RenderingIntentFlag = {
                ANY: 1,
                DISPLAY: 2,
                PRINT: 4,
                SAVE: 8,
                ANNOTATIONS_FORMS: 16,
                ANNOTATIONS_STORAGE: 32,
                ANNOTATIONS_DISABLE: 64,
                OPLIST: 256
              };
              exports2.RenderingIntentFlag = RenderingIntentFlag;
              const AnnotationMode = {
                DISABLE: 0,
                ENABLE: 1,
                ENABLE_FORMS: 2,
                ENABLE_STORAGE: 3
              };
              exports2.AnnotationMode = AnnotationMode;
              const AnnotationEditorPrefix = "pdfjs_internal_editor_";
              exports2.AnnotationEditorPrefix = AnnotationEditorPrefix;
              const AnnotationEditorType = {
                DISABLE: -1,
                NONE: 0,
                FREETEXT: 3,
                INK: 15
              };
              exports2.AnnotationEditorType = AnnotationEditorType;
              const AnnotationEditorParamsType = {
                FREETEXT_SIZE: 1,
                FREETEXT_COLOR: 2,
                FREETEXT_OPACITY: 3,
                INK_COLOR: 11,
                INK_THICKNESS: 12,
                INK_OPACITY: 13
              };
              exports2.AnnotationEditorParamsType = AnnotationEditorParamsType;
              const PermissionFlag = {
                PRINT: 4,
                MODIFY_CONTENTS: 8,
                COPY: 16,
                MODIFY_ANNOTATIONS: 32,
                FILL_INTERACTIVE_FORMS: 256,
                COPY_FOR_ACCESSIBILITY: 512,
                ASSEMBLE: 1024,
                PRINT_HIGH_QUALITY: 2048
              };
              exports2.PermissionFlag = PermissionFlag;
              const TextRenderingMode = {
                FILL: 0,
                STROKE: 1,
                FILL_STROKE: 2,
                INVISIBLE: 3,
                FILL_ADD_TO_PATH: 4,
                STROKE_ADD_TO_PATH: 5,
                FILL_STROKE_ADD_TO_PATH: 6,
                ADD_TO_PATH: 7,
                FILL_STROKE_MASK: 3,
                ADD_TO_PATH_FLAG: 4
              };
              exports2.TextRenderingMode = TextRenderingMode;
              const ImageKind = {
                GRAYSCALE_1BPP: 1,
                RGB_24BPP: 2,
                RGBA_32BPP: 3
              };
              exports2.ImageKind = ImageKind;
              const AnnotationType = {
                TEXT: 1,
                LINK: 2,
                FREETEXT: 3,
                LINE: 4,
                SQUARE: 5,
                CIRCLE: 6,
                POLYGON: 7,
                POLYLINE: 8,
                HIGHLIGHT: 9,
                UNDERLINE: 10,
                SQUIGGLY: 11,
                STRIKEOUT: 12,
                STAMP: 13,
                CARET: 14,
                INK: 15,
                POPUP: 16,
                FILEATTACHMENT: 17,
                SOUND: 18,
                MOVIE: 19,
                WIDGET: 20,
                SCREEN: 21,
                PRINTERMARK: 22,
                TRAPNET: 23,
                WATERMARK: 24,
                THREED: 25,
                REDACT: 26
              };
              exports2.AnnotationType = AnnotationType;
              const AnnotationStateModelType = {
                MARKED: "Marked",
                REVIEW: "Review"
              };
              exports2.AnnotationStateModelType = AnnotationStateModelType;
              const AnnotationMarkedState = {
                MARKED: "Marked",
                UNMARKED: "Unmarked"
              };
              exports2.AnnotationMarkedState = AnnotationMarkedState;
              const AnnotationReviewState = {
                ACCEPTED: "Accepted",
                REJECTED: "Rejected",
                CANCELLED: "Cancelled",
                COMPLETED: "Completed",
                NONE: "None"
              };
              exports2.AnnotationReviewState = AnnotationReviewState;
              const AnnotationReplyType = {
                GROUP: "Group",
                REPLY: "R"
              };
              exports2.AnnotationReplyType = AnnotationReplyType;
              const AnnotationFlag = {
                INVISIBLE: 1,
                HIDDEN: 2,
                PRINT: 4,
                NOZOOM: 8,
                NOROTATE: 16,
                NOVIEW: 32,
                READONLY: 64,
                LOCKED: 128,
                TOGGLENOVIEW: 256,
                LOCKEDCONTENTS: 512
              };
              exports2.AnnotationFlag = AnnotationFlag;
              const AnnotationFieldFlag = {
                READONLY: 1,
                REQUIRED: 2,
                NOEXPORT: 4,
                MULTILINE: 4096,
                PASSWORD: 8192,
                NOTOGGLETOOFF: 16384,
                RADIO: 32768,
                PUSHBUTTON: 65536,
                COMBO: 131072,
                EDIT: 262144,
                SORT: 524288,
                FILESELECT: 1048576,
                MULTISELECT: 2097152,
                DONOTSPELLCHECK: 4194304,
                DONOTSCROLL: 8388608,
                COMB: 16777216,
                RICHTEXT: 33554432,
                RADIOSINUNISON: 33554432,
                COMMITONSELCHANGE: 67108864
              };
              exports2.AnnotationFieldFlag = AnnotationFieldFlag;
              const AnnotationBorderStyleType = {
                SOLID: 1,
                DASHED: 2,
                BEVELED: 3,
                INSET: 4,
                UNDERLINE: 5
              };
              exports2.AnnotationBorderStyleType = AnnotationBorderStyleType;
              const AnnotationActionEventType = {
                E: "Mouse Enter",
                X: "Mouse Exit",
                D: "Mouse Down",
                U: "Mouse Up",
                Fo: "Focus",
                Bl: "Blur",
                PO: "PageOpen",
                PC: "PageClose",
                PV: "PageVisible",
                PI: "PageInvisible",
                K: "Keystroke",
                F: "Format",
                V: "Validate",
                C: "Calculate"
              };
              exports2.AnnotationActionEventType = AnnotationActionEventType;
              const DocumentActionEventType = {
                WC: "WillClose",
                WS: "WillSave",
                DS: "DidSave",
                WP: "WillPrint",
                DP: "DidPrint"
              };
              exports2.DocumentActionEventType = DocumentActionEventType;
              const PageActionEventType = {
                O: "PageOpen",
                C: "PageClose"
              };
              exports2.PageActionEventType = PageActionEventType;
              const VerbosityLevel = {
                ERRORS: 0,
                WARNINGS: 1,
                INFOS: 5
              };
              exports2.VerbosityLevel = VerbosityLevel;
              const CMapCompressionType = {
                NONE: 0,
                BINARY: 1
              };
              exports2.CMapCompressionType = CMapCompressionType;
              const OPS = {
                dependency: 1,
                setLineWidth: 2,
                setLineCap: 3,
                setLineJoin: 4,
                setMiterLimit: 5,
                setDash: 6,
                setRenderingIntent: 7,
                setFlatness: 8,
                setGState: 9,
                save: 10,
                restore: 11,
                transform: 12,
                moveTo: 13,
                lineTo: 14,
                curveTo: 15,
                curveTo2: 16,
                curveTo3: 17,
                closePath: 18,
                rectangle: 19,
                stroke: 20,
                closeStroke: 21,
                fill: 22,
                eoFill: 23,
                fillStroke: 24,
                eoFillStroke: 25,
                closeFillStroke: 26,
                closeEOFillStroke: 27,
                endPath: 28,
                clip: 29,
                eoClip: 30,
                beginText: 31,
                endText: 32,
                setCharSpacing: 33,
                setWordSpacing: 34,
                setHScale: 35,
                setLeading: 36,
                setFont: 37,
                setTextRenderingMode: 38,
                setTextRise: 39,
                moveText: 40,
                setLeadingMoveText: 41,
                setTextMatrix: 42,
                nextLine: 43,
                showText: 44,
                showSpacedText: 45,
                nextLineShowText: 46,
                nextLineSetSpacingShowText: 47,
                setCharWidth: 48,
                setCharWidthAndBounds: 49,
                setStrokeColorSpace: 50,
                setFillColorSpace: 51,
                setStrokeColor: 52,
                setStrokeColorN: 53,
                setFillColor: 54,
                setFillColorN: 55,
                setStrokeGray: 56,
                setFillGray: 57,
                setStrokeRGBColor: 58,
                setFillRGBColor: 59,
                setStrokeCMYKColor: 60,
                setFillCMYKColor: 61,
                shadingFill: 62,
                beginInlineImage: 63,
                beginImageData: 64,
                endInlineImage: 65,
                paintXObject: 66,
                markPoint: 67,
                markPointProps: 68,
                beginMarkedContent: 69,
                beginMarkedContentProps: 70,
                endMarkedContent: 71,
                beginCompat: 72,
                endCompat: 73,
                paintFormXObjectBegin: 74,
                paintFormXObjectEnd: 75,
                beginGroup: 76,
                endGroup: 77,
                beginAnnotation: 80,
                endAnnotation: 81,
                paintImageMaskXObject: 83,
                paintImageMaskXObjectGroup: 84,
                paintImageXObject: 85,
                paintInlineImageXObject: 86,
                paintInlineImageXObjectGroup: 87,
                paintImageXObjectRepeat: 88,
                paintImageMaskXObjectRepeat: 89,
                paintSolidColorImageMask: 90,
                constructPath: 91
              };
              exports2.OPS = OPS;
              const UNSUPPORTED_FEATURES = {
                forms: "forms",
                javaScript: "javaScript",
                signatures: "signatures",
                smask: "smask",
                shadingPattern: "shadingPattern",
                errorTilingPattern: "errorTilingPattern",
                errorExtGState: "errorExtGState",
                errorXObject: "errorXObject",
                errorFontLoadType3: "errorFontLoadType3",
                errorFontState: "errorFontState",
                errorFontMissing: "errorFontMissing",
                errorFontTranslate: "errorFontTranslate",
                errorColorSpace: "errorColorSpace",
                errorOperatorList: "errorOperatorList",
                errorFontToUnicode: "errorFontToUnicode",
                errorFontLoadNative: "errorFontLoadNative",
                errorFontBuildPath: "errorFontBuildPath",
                errorFontGetPath: "errorFontGetPath",
                errorMarkedContent: "errorMarkedContent",
                errorContentSubStream: "errorContentSubStream"
              };
              exports2.UNSUPPORTED_FEATURES = UNSUPPORTED_FEATURES;
              const PasswordResponses = {
                NEED_PASSWORD: 1,
                INCORRECT_PASSWORD: 2
              };
              exports2.PasswordResponses = PasswordResponses;
              let verbosity = VerbosityLevel.WARNINGS;
              function setVerbosityLevel(level) {
                if (Number.isInteger(level)) {
                  verbosity = level;
                }
              }
              function getVerbosityLevel() {
                return verbosity;
              }
              function info(msg) {
                if (verbosity >= VerbosityLevel.INFOS) {
                  console.log(`Info: ${msg}`);
                }
              }
              function warn(msg) {
                if (verbosity >= VerbosityLevel.WARNINGS) {
                  console.log(`Warning: ${msg}`);
                }
              }
              function unreachable(msg) {
                throw new Error(msg);
              }
              function assert(cond, msg) {
                if (!cond) {
                  unreachable(msg);
                }
              }
              function _isValidProtocol(url) {
                if (!url) {
                  return false;
                }
                switch (url.protocol) {
                  case "http:":
                  case "https:":
                  case "ftp:":
                  case "mailto:":
                  case "tel:":
                    return true;
                  default:
                    return false;
                }
              }
              function createValidAbsoluteUrl(url, baseUrl = null, options = null) {
                if (!url) {
                  return null;
                }
                try {
                  if (options && typeof url === "string") {
                    if (options.addDefaultProtocol && url.startsWith("www.")) {
                      const dots = url.match(/\./g);
                      if (dots && dots.length >= 2) {
                        url = `http://${url}`;
                      }
                    }
                    if (options.tryConvertEncoding) {
                      try {
                        url = stringToUTF8String(url);
                      } catch (ex) {
                      }
                    }
                  }
                  const absoluteUrl = baseUrl ? new URL(url, baseUrl) : new URL(url);
                  if (_isValidProtocol(absoluteUrl)) {
                    return absoluteUrl;
                  }
                } catch (ex) {
                }
                return null;
              }
              function shadow(obj, prop, value, nonSerializable = false) {
                Object.defineProperty(obj, prop, {
                  value,
                  enumerable: !nonSerializable,
                  configurable: true,
                  writable: false
                });
                return value;
              }
              const BaseException = function BaseExceptionClosure() {
                function BaseException2(message, name) {
                  if (this.constructor === BaseException2) {
                    unreachable("Cannot initialize BaseException.");
                  }
                  this.message = message;
                  this.name = name;
                }
                BaseException2.prototype = new Error();
                BaseException2.constructor = BaseException2;
                return BaseException2;
              }();
              exports2.BaseException = BaseException;
              class PasswordException extends BaseException {
                constructor(msg, code) {
                  super(msg, "PasswordException");
                  this.code = code;
                }
              }
              exports2.PasswordException = PasswordException;
              class UnknownErrorException extends BaseException {
                constructor(msg, details) {
                  super(msg, "UnknownErrorException");
                  this.details = details;
                }
              }
              exports2.UnknownErrorException = UnknownErrorException;
              class InvalidPDFException extends BaseException {
                constructor(msg) {
                  super(msg, "InvalidPDFException");
                }
              }
              exports2.InvalidPDFException = InvalidPDFException;
              class MissingPDFException extends BaseException {
                constructor(msg) {
                  super(msg, "MissingPDFException");
                }
              }
              exports2.MissingPDFException = MissingPDFException;
              class UnexpectedResponseException extends BaseException {
                constructor(msg, status) {
                  super(msg, "UnexpectedResponseException");
                  this.status = status;
                }
              }
              exports2.UnexpectedResponseException = UnexpectedResponseException;
              class FormatError extends BaseException {
                constructor(msg) {
                  super(msg, "FormatError");
                }
              }
              exports2.FormatError = FormatError;
              class AbortException extends BaseException {
                constructor(msg) {
                  super(msg, "AbortException");
                }
              }
              exports2.AbortException = AbortException;
              function bytesToString(bytes) {
                if (typeof bytes !== "object" || bytes === null || bytes.length === void 0) {
                  unreachable("Invalid argument for bytesToString");
                }
                const length = bytes.length;
                const MAX_ARGUMENT_COUNT = 8192;
                if (length < MAX_ARGUMENT_COUNT) {
                  return String.fromCharCode.apply(null, bytes);
                }
                const strBuf = [];
                for (let i = 0; i < length; i += MAX_ARGUMENT_COUNT) {
                  const chunkEnd = Math.min(i + MAX_ARGUMENT_COUNT, length);
                  const chunk = bytes.subarray(i, chunkEnd);
                  strBuf.push(String.fromCharCode.apply(null, chunk));
                }
                return strBuf.join("");
              }
              function stringToBytes(str) {
                if (typeof str !== "string") {
                  unreachable("Invalid argument for stringToBytes");
                }
                const length = str.length;
                const bytes = new Uint8Array(length);
                for (let i = 0; i < length; ++i) {
                  bytes[i] = str.charCodeAt(i) & 255;
                }
                return bytes;
              }
              function string32(value) {
                return String.fromCharCode(value >> 24 & 255, value >> 16 & 255, value >> 8 & 255, value & 255);
              }
              function objectSize(obj) {
                return Object.keys(obj).length;
              }
              function objectFromMap(map) {
                const obj = /* @__PURE__ */ Object.create(null);
                for (const [key, value] of map) {
                  obj[key] = value;
                }
                return obj;
              }
              function isLittleEndian() {
                const buffer8 = new Uint8Array(4);
                buffer8[0] = 1;
                const view32 = new Uint32Array(buffer8.buffer, 0, 1);
                return view32[0] === 1;
              }
              function isEvalSupported() {
                try {
                  new Function("");
                  return true;
                } catch (e) {
                  return false;
                }
              }
              class FeatureTest {
                static get isLittleEndian() {
                  return shadow(this, "isLittleEndian", isLittleEndian());
                }
                static get isEvalSupported() {
                  return shadow(this, "isEvalSupported", isEvalSupported());
                }
                static get isOffscreenCanvasSupported() {
                  return shadow(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas !== "undefined");
                }
                static get platform() {
                  if (typeof navigator === "undefined") {
                    return shadow(this, "platform", {
                      isWin: false,
                      isMac: false
                    });
                  }
                  return shadow(this, "platform", {
                    isWin: navigator.platform.includes("Win"),
                    isMac: navigator.platform.includes("Mac")
                  });
                }
              }
              exports2.FeatureTest = FeatureTest;
              const hexNumbers = [...Array(256).keys()].map((n) => n.toString(16).padStart(2, "0"));
              class Util {
                static makeHexColor(r, g, b) {
                  return `#${hexNumbers[r]}${hexNumbers[g]}${hexNumbers[b]}`;
                }
                static scaleMinMax(transform, minMax) {
                  let temp;
                  if (transform[0]) {
                    if (transform[0] < 0) {
                      temp = minMax[0];
                      minMax[0] = minMax[1];
                      minMax[1] = temp;
                    }
                    minMax[0] *= transform[0];
                    minMax[1] *= transform[0];
                    if (transform[3] < 0) {
                      temp = minMax[2];
                      minMax[2] = minMax[3];
                      minMax[3] = temp;
                    }
                    minMax[2] *= transform[3];
                    minMax[3] *= transform[3];
                  } else {
                    temp = minMax[0];
                    minMax[0] = minMax[2];
                    minMax[2] = temp;
                    temp = minMax[1];
                    minMax[1] = minMax[3];
                    minMax[3] = temp;
                    if (transform[1] < 0) {
                      temp = minMax[2];
                      minMax[2] = minMax[3];
                      minMax[3] = temp;
                    }
                    minMax[2] *= transform[1];
                    minMax[3] *= transform[1];
                    if (transform[2] < 0) {
                      temp = minMax[0];
                      minMax[0] = minMax[1];
                      minMax[1] = temp;
                    }
                    minMax[0] *= transform[2];
                    minMax[1] *= transform[2];
                  }
                  minMax[0] += transform[4];
                  minMax[1] += transform[4];
                  minMax[2] += transform[5];
                  minMax[3] += transform[5];
                }
                static transform(m1, m2) {
                  return [m1[0] * m2[0] + m1[2] * m2[1], m1[1] * m2[0] + m1[3] * m2[1], m1[0] * m2[2] + m1[2] * m2[3], m1[1] * m2[2] + m1[3] * m2[3], m1[0] * m2[4] + m1[2] * m2[5] + m1[4], m1[1] * m2[4] + m1[3] * m2[5] + m1[5]];
                }
                static applyTransform(p, m) {
                  const xt = p[0] * m[0] + p[1] * m[2] + m[4];
                  const yt = p[0] * m[1] + p[1] * m[3] + m[5];
                  return [xt, yt];
                }
                static applyInverseTransform(p, m) {
                  const d = m[0] * m[3] - m[1] * m[2];
                  const xt = (p[0] * m[3] - p[1] * m[2] + m[2] * m[5] - m[4] * m[3]) / d;
                  const yt = (-p[0] * m[1] + p[1] * m[0] + m[4] * m[1] - m[5] * m[0]) / d;
                  return [xt, yt];
                }
                static getAxialAlignedBoundingBox(r, m) {
                  const p1 = Util.applyTransform(r, m);
                  const p2 = Util.applyTransform(r.slice(2, 4), m);
                  const p3 = Util.applyTransform([r[0], r[3]], m);
                  const p4 = Util.applyTransform([r[2], r[1]], m);
                  return [Math.min(p1[0], p2[0], p3[0], p4[0]), Math.min(p1[1], p2[1], p3[1], p4[1]), Math.max(p1[0], p2[0], p3[0], p4[0]), Math.max(p1[1], p2[1], p3[1], p4[1])];
                }
                static inverseTransform(m) {
                  const d = m[0] * m[3] - m[1] * m[2];
                  return [m[3] / d, -m[1] / d, -m[2] / d, m[0] / d, (m[2] * m[5] - m[4] * m[3]) / d, (m[4] * m[1] - m[5] * m[0]) / d];
                }
                static singularValueDecompose2dScale(m) {
                  const transpose = [m[0], m[2], m[1], m[3]];
                  const a = m[0] * transpose[0] + m[1] * transpose[2];
                  const b = m[0] * transpose[1] + m[1] * transpose[3];
                  const c = m[2] * transpose[0] + m[3] * transpose[2];
                  const d = m[2] * transpose[1] + m[3] * transpose[3];
                  const first = (a + d) / 2;
                  const second = Math.sqrt((a + d) ** 2 - 4 * (a * d - c * b)) / 2;
                  const sx = first + second || 1;
                  const sy = first - second || 1;
                  return [Math.sqrt(sx), Math.sqrt(sy)];
                }
                static normalizeRect(rect) {
                  const r = rect.slice(0);
                  if (rect[0] > rect[2]) {
                    r[0] = rect[2];
                    r[2] = rect[0];
                  }
                  if (rect[1] > rect[3]) {
                    r[1] = rect[3];
                    r[3] = rect[1];
                  }
                  return r;
                }
                static intersect(rect1, rect2) {
                  const xLow = Math.max(Math.min(rect1[0], rect1[2]), Math.min(rect2[0], rect2[2]));
                  const xHigh = Math.min(Math.max(rect1[0], rect1[2]), Math.max(rect2[0], rect2[2]));
                  if (xLow > xHigh) {
                    return null;
                  }
                  const yLow = Math.max(Math.min(rect1[1], rect1[3]), Math.min(rect2[1], rect2[3]));
                  const yHigh = Math.min(Math.max(rect1[1], rect1[3]), Math.max(rect2[1], rect2[3]));
                  if (yLow > yHigh) {
                    return null;
                  }
                  return [xLow, yLow, xHigh, yHigh];
                }
                static bezierBoundingBox(x0, y0, x1, y1, x2, y2, x3, y3) {
                  const tvalues = [], bounds = [[], []];
                  let a, b, c, t, t1, t2, b2ac, sqrtb2ac;
                  for (let i = 0; i < 2; ++i) {
                    if (i === 0) {
                      b = 6 * x0 - 12 * x1 + 6 * x2;
                      a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
                      c = 3 * x1 - 3 * x0;
                    } else {
                      b = 6 * y0 - 12 * y1 + 6 * y2;
                      a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
                      c = 3 * y1 - 3 * y0;
                    }
                    if (Math.abs(a) < 1e-12) {
                      if (Math.abs(b) < 1e-12) {
                        continue;
                      }
                      t = -c / b;
                      if (0 < t && t < 1) {
                        tvalues.push(t);
                      }
                      continue;
                    }
                    b2ac = b * b - 4 * c * a;
                    sqrtb2ac = Math.sqrt(b2ac);
                    if (b2ac < 0) {
                      continue;
                    }
                    t1 = (-b + sqrtb2ac) / (2 * a);
                    if (0 < t1 && t1 < 1) {
                      tvalues.push(t1);
                    }
                    t2 = (-b - sqrtb2ac) / (2 * a);
                    if (0 < t2 && t2 < 1) {
                      tvalues.push(t2);
                    }
                  }
                  let j = tvalues.length, mt;
                  const jlen = j;
                  while (j--) {
                    t = tvalues[j];
                    mt = 1 - t;
                    bounds[0][j] = mt * mt * mt * x0 + 3 * mt * mt * t * x1 + 3 * mt * t * t * x2 + t * t * t * x3;
                    bounds[1][j] = mt * mt * mt * y0 + 3 * mt * mt * t * y1 + 3 * mt * t * t * y2 + t * t * t * y3;
                  }
                  bounds[0][jlen] = x0;
                  bounds[1][jlen] = y0;
                  bounds[0][jlen + 1] = x3;
                  bounds[1][jlen + 1] = y3;
                  bounds[0].length = bounds[1].length = jlen + 2;
                  return [Math.min(...bounds[0]), Math.min(...bounds[1]), Math.max(...bounds[0]), Math.max(...bounds[1])];
                }
              }
              exports2.Util = Util;
              const PDFStringTranslateTable = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 728, 711, 710, 729, 733, 731, 730, 732, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224, 8225, 8230, 8212, 8211, 402, 8260, 8249, 8250, 8722, 8240, 8222, 8220, 8221, 8216, 8217, 8218, 8482, 64257, 64258, 321, 338, 352, 376, 381, 305, 322, 339, 353, 382, 0, 8364];
              function stringToPDFString(str) {
                if (str[0] >= "ï") {
                  let encoding;
                  if (str[0] === "þ" && str[1] === "ÿ") {
                    encoding = "utf-16be";
                  } else if (str[0] === "ÿ" && str[1] === "þ") {
                    encoding = "utf-16le";
                  } else if (str[0] === "ï" && str[1] === "»" && str[2] === "¿") {
                    encoding = "utf-8";
                  }
                  if (encoding) {
                    try {
                      const decoder = new TextDecoder(encoding, {
                        fatal: true
                      });
                      const buffer = stringToBytes(str);
                      return decoder.decode(buffer);
                    } catch (ex) {
                      warn(`stringToPDFString: "${ex}".`);
                    }
                  }
                }
                const strBuf = [];
                for (let i = 0, ii = str.length; i < ii; i++) {
                  const code = PDFStringTranslateTable[str.charCodeAt(i)];
                  strBuf.push(code ? String.fromCharCode(code) : str.charAt(i));
                }
                return strBuf.join("");
              }
              function stringToUTF8String(str) {
                return decodeURIComponent(escape(str));
              }
              function utf8StringToString(str) {
                return unescape(encodeURIComponent(str));
              }
              function isArrayBuffer(v) {
                return typeof v === "object" && v !== null && v.byteLength !== void 0;
              }
              function isArrayEqual(arr1, arr2) {
                if (arr1.length !== arr2.length) {
                  return false;
                }
                for (let i = 0, ii = arr1.length; i < ii; i++) {
                  if (arr1[i] !== arr2[i]) {
                    return false;
                  }
                }
                return true;
              }
              function getModificationDate(date = /* @__PURE__ */ new Date()) {
                const buffer = [date.getUTCFullYear().toString(), (date.getUTCMonth() + 1).toString().padStart(2, "0"), date.getUTCDate().toString().padStart(2, "0"), date.getUTCHours().toString().padStart(2, "0"), date.getUTCMinutes().toString().padStart(2, "0"), date.getUTCSeconds().toString().padStart(2, "0")];
                return buffer.join("");
              }
              function createPromiseCapability() {
                const capability = /* @__PURE__ */ Object.create(null);
                let isSettled = false;
                Object.defineProperty(capability, "settled", {
                  get() {
                    return isSettled;
                  }
                });
                capability.promise = new Promise(function(resolve, reject) {
                  capability.resolve = function(data) {
                    isSettled = true;
                    resolve(data);
                  };
                  capability.reject = function(reason) {
                    isSettled = true;
                    reject(reason);
                  };
                });
                return capability;
              }
            },
            /* 2 */
            /***/
            (__unused_webpack_module, exports, __w_pdfjs_require__) => {
              var _docId, _onUnsupportedFeature, _listeners, _deferred, _a, _workerPorts, _methodPromises, _pageCache, _pagePromises, _WorkerTransport_instances, cacheSimpleMethod_fn, _objs, _PDFObjects_instances, ensureObj_fn, _internalRenderTask, _canvasInUse;
              Object.defineProperty(exports, "__esModule", {
                value: true
              });
              exports.build = exports.RenderTask = exports.PDFWorkerUtil = exports.PDFWorker = exports.PDFPageProxy = exports.PDFDocumentProxy = exports.PDFDocumentLoadingTask = exports.PDFDataRangeTransport = exports.LoopbackPort = exports.DefaultStandardFontDataFactory = exports.DefaultCanvasFactory = exports.DefaultCMapReaderFactory = void 0;
              exports.getDocument = getDocument;
              exports.version = void 0;
              var _util = __w_pdfjs_require__(1);
              var _annotation_storage = __w_pdfjs_require__(3);
              var _display_utils = __w_pdfjs_require__(6);
              var _font_loader = __w_pdfjs_require__(9);
              var _canvas = __w_pdfjs_require__(11);
              var _worker_options = __w_pdfjs_require__(14);
              var _is_node = __w_pdfjs_require__(10);
              var _message_handler = __w_pdfjs_require__(15);
              var _metadata = __w_pdfjs_require__(16);
              var _optional_content_config = __w_pdfjs_require__(17);
              var _transport_stream = __w_pdfjs_require__(18);
              var _xfa_text = __w_pdfjs_require__(19);
              const DEFAULT_RANGE_CHUNK_SIZE = 65536;
              const RENDERING_CANCELLED_TIMEOUT = 100;
              let DefaultCanvasFactory = _display_utils.DOMCanvasFactory;
              exports.DefaultCanvasFactory = DefaultCanvasFactory;
              let DefaultCMapReaderFactory = _display_utils.DOMCMapReaderFactory;
              exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory;
              let DefaultStandardFontDataFactory = _display_utils.DOMStandardFontDataFactory;
              exports.DefaultStandardFontDataFactory = DefaultStandardFontDataFactory;
              if (_is_node.isNodeJS) {
                const {
                  NodeCanvasFactory,
                  NodeCMapReaderFactory,
                  NodeStandardFontDataFactory
                } = __w_pdfjs_require__(20);
                exports.DefaultCanvasFactory = DefaultCanvasFactory = NodeCanvasFactory;
                exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory = NodeCMapReaderFactory;
                exports.DefaultStandardFontDataFactory = DefaultStandardFontDataFactory = NodeStandardFontDataFactory;
              }
              let createPDFNetworkStream;
              {
                if (_is_node.isNodeJS) {
                  const {
                    PDFNodeStream
                  } = __w_pdfjs_require__(21);
                  createPDFNetworkStream = (params) => {
                    return new PDFNodeStream(params);
                  };
                } else {
                  const {
                    PDFNetworkStream
                  } = __w_pdfjs_require__(24);
                  const {
                    PDFFetchStream
                  } = __w_pdfjs_require__(25);
                  createPDFNetworkStream = (params) => {
                    return (0, _display_utils.isValidFetchUrl)(params.url) ? new PDFFetchStream(params) : new PDFNetworkStream(params);
                  };
                }
              }
              function getDocument(src) {
                if (typeof src === "string" || src instanceof URL) {
                  src = {
                    url: src
                  };
                } else if ((0, _util.isArrayBuffer)(src)) {
                  src = {
                    data: src
                  };
                } else if (src instanceof PDFDataRangeTransport) {
                  (0, _display_utils.deprecated)("`PDFDataRangeTransport`-instance, please use a parameter object with `range`-property instead.");
                  src = {
                    range: src
                  };
                } else {
                  if (typeof src !== "object") {
                    throw new Error("Invalid parameter in getDocument, need either string, URL, TypedArray, or parameter object.");
                  }
                }
                if (!src.url && !src.data && !src.range) {
                  throw new Error("Invalid parameter object: need either .data, .range or .url");
                }
                const task = new PDFDocumentLoadingTask();
                const url = src.url ? getUrlProp(src.url) : null;
                const data = src.data ? getDataProp(src.data) : null;
                const httpHeaders = src.httpHeaders || null;
                const withCredentials = src.withCredentials === true;
                const password = src.password ?? null;
                const rangeTransport = src.range instanceof PDFDataRangeTransport ? src.range : null;
                const rangeChunkSize = Number.isInteger(src.rangeChunkSize) && src.rangeChunkSize > 0 ? src.rangeChunkSize : DEFAULT_RANGE_CHUNK_SIZE;
                let worker2 = src.worker instanceof PDFWorker ? src.worker : null;
                const verbosity = src.verbosity;
                const docBaseUrl = typeof src.docBaseUrl === "string" && !(0, _display_utils.isDataScheme)(src.docBaseUrl) ? src.docBaseUrl : null;
                const cMapUrl = typeof src.cMapUrl === "string" ? src.cMapUrl : null;
                const cMapPacked = src.cMapPacked !== false;
                const CMapReaderFactory = src.CMapReaderFactory || DefaultCMapReaderFactory;
                const standardFontDataUrl = typeof src.standardFontDataUrl === "string" ? src.standardFontDataUrl : null;
                const StandardFontDataFactory = src.StandardFontDataFactory || DefaultStandardFontDataFactory;
                const ignoreErrors = src.stopAtErrors !== true;
                const maxImageSize = Number.isInteger(src.maxImageSize) && src.maxImageSize > -1 ? src.maxImageSize : -1;
                const isEvalSupported = src.isEvalSupported !== false;
                const isOffscreenCanvasSupported = typeof src.isOffscreenCanvasSupported === "boolean" ? src.isOffscreenCanvasSupported : !_is_node.isNodeJS;
                const disableFontFace = typeof src.disableFontFace === "boolean" ? src.disableFontFace : _is_node.isNodeJS;
                const fontExtraProperties = src.fontExtraProperties === true;
                const enableXfa = src.enableXfa === true;
                const ownerDocument = src.ownerDocument || globalThis.document;
                const disableRange = src.disableRange === true;
                const disableStream = src.disableStream === true;
                const disableAutoFetch = src.disableAutoFetch === true;
                const pdfBug = src.pdfBug === true;
                const length = rangeTransport ? rangeTransport.length : src.length ?? NaN;
                const useSystemFonts = typeof src.useSystemFonts === "boolean" ? src.useSystemFonts : !_is_node.isNodeJS && !disableFontFace;
                const useWorkerFetch = typeof src.useWorkerFetch === "boolean" ? src.useWorkerFetch : CMapReaderFactory === _display_utils.DOMCMapReaderFactory && StandardFontDataFactory === _display_utils.DOMStandardFontDataFactory && (0, _display_utils.isValidFetchUrl)(cMapUrl, document.baseURI) && (0, _display_utils.isValidFetchUrl)(standardFontDataUrl, document.baseURI);
                const styleElement = null;
                (0, _util.setVerbosityLevel)(verbosity);
                const transportFactory = useWorkerFetch ? null : {
                  cMapReaderFactory: new CMapReaderFactory({
                    baseUrl: cMapUrl,
                    isCompressed: cMapPacked
                  }),
                  standardFontDataFactory: new StandardFontDataFactory({
                    baseUrl: standardFontDataUrl
                  })
                };
                if (!worker2) {
                  const workerParams = {
                    verbosity,
                    port: _worker_options.GlobalWorkerOptions.workerPort
                  };
                  worker2 = workerParams.port ? PDFWorker.fromPort(workerParams) : new PDFWorker(workerParams);
                  task._worker = worker2;
                }
                const docId = task.docId;
                const fetchDocParams = {
                  docId,
                  apiVersion: "3.4.120",
                  data,
                  password,
                  disableAutoFetch,
                  rangeChunkSize,
                  length,
                  docBaseUrl,
                  enableXfa,
                  evaluatorOptions: {
                    maxImageSize,
                    disableFontFace,
                    ignoreErrors,
                    isEvalSupported,
                    isOffscreenCanvasSupported,
                    fontExtraProperties,
                    useSystemFonts,
                    cMapUrl: useWorkerFetch ? cMapUrl : null,
                    standardFontDataUrl: useWorkerFetch ? standardFontDataUrl : null
                  }
                };
                const transportParams = {
                  ignoreErrors,
                  isEvalSupported,
                  disableFontFace,
                  fontExtraProperties,
                  enableXfa,
                  ownerDocument,
                  disableAutoFetch,
                  pdfBug,
                  styleElement
                };
                worker2.promise.then(function() {
                  if (task.destroyed) {
                    throw new Error("Loading aborted");
                  }
                  const workerIdPromise = _fetchDocument(worker2, fetchDocParams);
                  const networkStreamPromise = new Promise(function(resolve) {
                    let networkStream;
                    if (rangeTransport) {
                      networkStream = new _transport_stream.PDFDataTransportStream({
                        length,
                        initialData: rangeTransport.initialData,
                        progressiveDone: rangeTransport.progressiveDone,
                        contentDispositionFilename: rangeTransport.contentDispositionFilename,
                        disableRange,
                        disableStream
                      }, rangeTransport);
                    } else if (!data) {
                      networkStream = createPDFNetworkStream({
                        url,
                        length,
                        httpHeaders,
                        withCredentials,
                        rangeChunkSize,
                        disableRange,
                        disableStream
                      });
                    }
                    resolve(networkStream);
                  });
                  return Promise.all([workerIdPromise, networkStreamPromise]).then(function([workerId, networkStream]) {
                    if (task.destroyed) {
                      throw new Error("Loading aborted");
                    }
                    const messageHandler = new _message_handler.MessageHandler(docId, workerId, worker2.port);
                    const transport = new WorkerTransport(messageHandler, task, networkStream, transportParams, transportFactory);
                    task._transport = transport;
                    messageHandler.send("Ready", null);
                  });
                }).catch(task._capability.reject);
                return task;
              }
              async function _fetchDocument(worker2, source) {
                if (worker2.destroyed) {
                  throw new Error("Worker was destroyed");
                }
                const workerId = await worker2.messageHandler.sendWithPromise("GetDocRequest", source, source.data ? [source.data.buffer] : null);
                if (worker2.destroyed) {
                  throw new Error("Worker was destroyed");
                }
                return workerId;
              }
              function getUrlProp(val) {
                if (val instanceof URL) {
                  return val.href;
                }
                try {
                  return new URL(val, window.location).href;
                } catch (ex) {
                  if (_is_node.isNodeJS && typeof val === "string") {
                    return val;
                  }
                }
                throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
              }
              function getDataProp(val) {
                if (_is_node.isNodeJS && typeof Buffer !== "undefined" && val instanceof Buffer) {
                  (0, _display_utils.deprecated)("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
                  return new Uint8Array(val);
                }
                if (val instanceof Uint8Array && val.byteLength === val.buffer.byteLength) {
                  return val;
                }
                if (typeof val === "string") {
                  return (0, _util.stringToBytes)(val);
                }
                if (typeof val === "object" && !isNaN(val == null ? void 0 : val.length) || (0, _util.isArrayBuffer)(val)) {
                  return new Uint8Array(val);
                }
                throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
              }
              const _PDFDocumentLoadingTask = class _PDFDocumentLoadingTask {
                constructor() {
                  __privateAdd(this, _onUnsupportedFeature, null);
                  this._capability = (0, _util.createPromiseCapability)();
                  this._transport = null;
                  this._worker = null;
                  this.docId = `d${__privateWrapper(_PDFDocumentLoadingTask, _docId)._++}`;
                  this.destroyed = false;
                  this.onPassword = null;
                  this.onProgress = null;
                }
                get onUnsupportedFeature() {
                  return __privateGet(this, _onUnsupportedFeature);
                }
                set onUnsupportedFeature(callback) {
                  (0, _display_utils.deprecated)("The PDFDocumentLoadingTask onUnsupportedFeature property will be removed in the future.");
                  __privateSet(this, _onUnsupportedFeature, callback);
                }
                get promise() {
                  return this._capability.promise;
                }
                async destroy() {
                  var _a2;
                  this.destroyed = true;
                  await ((_a2 = this._transport) == null ? void 0 : _a2.destroy());
                  this._transport = null;
                  if (this._worker) {
                    this._worker.destroy();
                    this._worker = null;
                  }
                }
              };
              _docId = new WeakMap();
              _onUnsupportedFeature = new WeakMap();
              __privateAdd(_PDFDocumentLoadingTask, _docId, 0);
              let PDFDocumentLoadingTask = _PDFDocumentLoadingTask;
              exports.PDFDocumentLoadingTask = PDFDocumentLoadingTask;
              class PDFDataRangeTransport {
                constructor(length, initialData, progressiveDone = false, contentDispositionFilename = null) {
                  this.length = length;
                  this.initialData = initialData;
                  this.progressiveDone = progressiveDone;
                  this.contentDispositionFilename = contentDispositionFilename;
                  this._rangeListeners = [];
                  this._progressListeners = [];
                  this._progressiveReadListeners = [];
                  this._progressiveDoneListeners = [];
                  this._readyCapability = (0, _util.createPromiseCapability)();
                }
                addRangeListener(listener) {
                  this._rangeListeners.push(listener);
                }
                addProgressListener(listener) {
                  this._progressListeners.push(listener);
                }
                addProgressiveReadListener(listener) {
                  this._progressiveReadListeners.push(listener);
                }
                addProgressiveDoneListener(listener) {
                  this._progressiveDoneListeners.push(listener);
                }
                onDataRange(begin, chunk) {
                  for (const listener of this._rangeListeners) {
                    listener(begin, chunk);
                  }
                }
                onDataProgress(loaded, total) {
                  this._readyCapability.promise.then(() => {
                    for (const listener of this._progressListeners) {
                      listener(loaded, total);
                    }
                  });
                }
                onDataProgressiveRead(chunk) {
                  this._readyCapability.promise.then(() => {
                    for (const listener of this._progressiveReadListeners) {
                      listener(chunk);
                    }
                  });
                }
                onDataProgressiveDone() {
                  this._readyCapability.promise.then(() => {
                    for (const listener of this._progressiveDoneListeners) {
                      listener();
                    }
                  });
                }
                transportReady() {
                  this._readyCapability.resolve();
                }
                requestDataRange(begin, end) {
                  (0, _util.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange");
                }
                abort() {
                }
              }
              exports.PDFDataRangeTransport = PDFDataRangeTransport;
              class PDFDocumentProxy {
                constructor(pdfInfo, transport) {
                  this._pdfInfo = pdfInfo;
                  this._transport = transport;
                }
                get annotationStorage() {
                  return this._transport.annotationStorage;
                }
                get numPages() {
                  return this._pdfInfo.numPages;
                }
                get fingerprints() {
                  return this._pdfInfo.fingerprints;
                }
                get isPureXfa() {
                  return (0, _util.shadow)(this, "isPureXfa", !!this._transport._htmlForXfa);
                }
                get allXfaHtml() {
                  return this._transport._htmlForXfa;
                }
                getPage(pageNumber) {
                  return this._transport.getPage(pageNumber);
                }
                getPageIndex(ref) {
                  return this._transport.getPageIndex(ref);
                }
                getDestinations() {
                  return this._transport.getDestinations();
                }
                getDestination(id) {
                  return this._transport.getDestination(id);
                }
                getPageLabels() {
                  return this._transport.getPageLabels();
                }
                getPageLayout() {
                  return this._transport.getPageLayout();
                }
                getPageMode() {
                  return this._transport.getPageMode();
                }
                getViewerPreferences() {
                  return this._transport.getViewerPreferences();
                }
                getOpenAction() {
                  return this._transport.getOpenAction();
                }
                getAttachments() {
                  return this._transport.getAttachments();
                }
                getJavaScript() {
                  return this._transport.getJavaScript();
                }
                getJSActions() {
                  return this._transport.getDocJSActions();
                }
                getOutline() {
                  return this._transport.getOutline();
                }
                getOptionalContentConfig() {
                  return this._transport.getOptionalContentConfig();
                }
                getPermissions() {
                  return this._transport.getPermissions();
                }
                getMetadata() {
                  return this._transport.getMetadata();
                }
                getMarkInfo() {
                  return this._transport.getMarkInfo();
                }
                getData() {
                  return this._transport.getData();
                }
                saveDocument() {
                  return this._transport.saveDocument();
                }
                getDownloadInfo() {
                  return this._transport.downloadInfoCapability.promise;
                }
                cleanup(keepLoadedFonts = false) {
                  return this._transport.startCleanup(keepLoadedFonts || this.isPureXfa);
                }
                destroy() {
                  return this.loadingTask.destroy();
                }
                get loadingParams() {
                  return this._transport.loadingParams;
                }
                get loadingTask() {
                  return this._transport.loadingTask;
                }
                getFieldObjects() {
                  return this._transport.getFieldObjects();
                }
                hasJSActions() {
                  return this._transport.hasJSActions();
                }
                getCalculationOrderIds() {
                  return this._transport.getCalculationOrderIds();
                }
              }
              exports.PDFDocumentProxy = PDFDocumentProxy;
              class PDFPageProxy {
                constructor(pageIndex, pageInfo, transport, ownerDocument, pdfBug = false) {
                  this._pageIndex = pageIndex;
                  this._pageInfo = pageInfo;
                  this._ownerDocument = ownerDocument;
                  this._transport = transport;
                  this._stats = pdfBug ? new _display_utils.StatTimer() : null;
                  this._pdfBug = pdfBug;
                  this.commonObjs = transport.commonObjs;
                  this.objs = new PDFObjects();
                  this.cleanupAfterRender = false;
                  this.pendingCleanup = false;
                  this._intentStates = /* @__PURE__ */ new Map();
                  this.destroyed = false;
                }
                get pageNumber() {
                  return this._pageIndex + 1;
                }
                get rotate() {
                  return this._pageInfo.rotate;
                }
                get ref() {
                  return this._pageInfo.ref;
                }
                get userUnit() {
                  return this._pageInfo.userUnit;
                }
                get view() {
                  return this._pageInfo.view;
                }
                getViewport({
                  scale,
                  rotation = this.rotate,
                  offsetX = 0,
                  offsetY = 0,
                  dontFlip = false
                } = {}) {
                  return new _display_utils.PageViewport({
                    viewBox: this.view,
                    scale,
                    rotation,
                    offsetX,
                    offsetY,
                    dontFlip
                  });
                }
                getAnnotations({
                  intent = "display"
                } = {}) {
                  const intentArgs = this._transport.getRenderingIntent(intent);
                  return this._transport.getAnnotations(this._pageIndex, intentArgs.renderingIntent);
                }
                getJSActions() {
                  return this._transport.getPageJSActions(this._pageIndex);
                }
                get isPureXfa() {
                  return (0, _util.shadow)(this, "isPureXfa", !!this._transport._htmlForXfa);
                }
                async getXfa() {
                  var _a2;
                  return ((_a2 = this._transport._htmlForXfa) == null ? void 0 : _a2.children[this._pageIndex]) || null;
                }
                render({
                  canvasContext,
                  viewport,
                  intent = "display",
                  annotationMode = _util.AnnotationMode.ENABLE,
                  transform = null,
                  canvasFactory = null,
                  background = null,
                  optionalContentConfigPromise = null,
                  annotationCanvasMap = null,
                  pageColors = null,
                  printAnnotationStorage = null
                }) {
                  var _a2, _b;
                  (_a2 = this._stats) == null ? void 0 : _a2.time("Overall");
                  const intentArgs = this._transport.getRenderingIntent(intent, annotationMode, printAnnotationStorage);
                  this.pendingCleanup = false;
                  if (!optionalContentConfigPromise) {
                    optionalContentConfigPromise = this._transport.getOptionalContentConfig();
                  }
                  let intentState = this._intentStates.get(intentArgs.cacheKey);
                  if (!intentState) {
                    intentState = /* @__PURE__ */ Object.create(null);
                    this._intentStates.set(intentArgs.cacheKey, intentState);
                  }
                  if (intentState.streamReaderCancelTimeout) {
                    clearTimeout(intentState.streamReaderCancelTimeout);
                    intentState.streamReaderCancelTimeout = null;
                  }
                  const canvasFactoryInstance = canvasFactory || new DefaultCanvasFactory({
                    ownerDocument: this._ownerDocument
                  });
                  const intentPrint = !!(intentArgs.renderingIntent & _util.RenderingIntentFlag.PRINT);
                  if (!intentState.displayReadyCapability) {
                    intentState.displayReadyCapability = (0, _util.createPromiseCapability)();
                    intentState.operatorList = {
                      fnArray: [],
                      argsArray: [],
                      lastChunk: false,
                      separateAnnots: null
                    };
                    (_b = this._stats) == null ? void 0 : _b.time("Page Request");
                    this._pumpOperatorList(intentArgs);
                  }
                  const complete = (error) => {
                    var _a3, _b2;
                    intentState.renderTasks.delete(internalRenderTask);
                    if (this.cleanupAfterRender || intentPrint) {
                      this.pendingCleanup = true;
                    }
                    this._tryCleanup();
                    if (error) {
                      internalRenderTask.capability.reject(error);
                      this._abortOperatorList({
                        intentState,
                        reason: error instanceof Error ? error : new Error(error)
                      });
                    } else {
                      internalRenderTask.capability.resolve();
                    }
                    (_a3 = this._stats) == null ? void 0 : _a3.timeEnd("Rendering");
                    (_b2 = this._stats) == null ? void 0 : _b2.timeEnd("Overall");
                  };
                  const internalRenderTask = new InternalRenderTask({
                    callback: complete,
                    params: {
                      canvasContext,
                      viewport,
                      transform,
                      background
                    },
                    objs: this.objs,
                    commonObjs: this.commonObjs,
                    annotationCanvasMap,
                    operatorList: intentState.operatorList,
                    pageIndex: this._pageIndex,
                    canvasFactory: canvasFactoryInstance,
                    useRequestAnimationFrame: !intentPrint,
                    pdfBug: this._pdfBug,
                    pageColors
                  });
                  (intentState.renderTasks || (intentState.renderTasks = /* @__PURE__ */ new Set())).add(internalRenderTask);
                  const renderTask = internalRenderTask.task;
                  Promise.all([intentState.displayReadyCapability.promise, optionalContentConfigPromise]).then(([transparency, optionalContentConfig]) => {
                    var _a3;
                    if (this.pendingCleanup) {
                      complete();
                      return;
                    }
                    (_a3 = this._stats) == null ? void 0 : _a3.time("Rendering");
                    internalRenderTask.initializeGraphics({
                      transparency,
                      optionalContentConfig
                    });
                    internalRenderTask.operatorListChanged();
                  }).catch(complete);
                  return renderTask;
                }
                getOperatorList({
                  intent = "display",
                  annotationMode = _util.AnnotationMode.ENABLE,
                  printAnnotationStorage = null
                } = {}) {
                  var _a2;
                  function operatorListChanged() {
                    if (intentState.operatorList.lastChunk) {
                      intentState.opListReadCapability.resolve(intentState.operatorList);
                      intentState.renderTasks.delete(opListTask);
                    }
                  }
                  const intentArgs = this._transport.getRenderingIntent(intent, annotationMode, printAnnotationStorage, true);
                  let intentState = this._intentStates.get(intentArgs.cacheKey);
                  if (!intentState) {
                    intentState = /* @__PURE__ */ Object.create(null);
                    this._intentStates.set(intentArgs.cacheKey, intentState);
                  }
                  let opListTask;
                  if (!intentState.opListReadCapability) {
                    opListTask = /* @__PURE__ */ Object.create(null);
                    opListTask.operatorListChanged = operatorListChanged;
                    intentState.opListReadCapability = (0, _util.createPromiseCapability)();
                    (intentState.renderTasks || (intentState.renderTasks = /* @__PURE__ */ new Set())).add(opListTask);
                    intentState.operatorList = {
                      fnArray: [],
                      argsArray: [],
                      lastChunk: false,
                      separateAnnots: null
                    };
                    (_a2 = this._stats) == null ? void 0 : _a2.time("Page Request");
                    this._pumpOperatorList(intentArgs);
                  }
                  return intentState.opListReadCapability.promise;
                }
                streamTextContent({
                  disableCombineTextItems = false,
                  includeMarkedContent = false
                } = {}) {
                  const TEXT_CONTENT_CHUNK_SIZE = 100;
                  return this._transport.messageHandler.sendWithStream("GetTextContent", {
                    pageIndex: this._pageIndex,
                    combineTextItems: disableCombineTextItems !== true,
                    includeMarkedContent: includeMarkedContent === true
                  }, {
                    highWaterMark: TEXT_CONTENT_CHUNK_SIZE,
                    size(textContent) {
                      return textContent.items.length;
                    }
                  });
                }
                getTextContent(params = {}) {
                  if (this._transport._htmlForXfa) {
                    return this.getXfa().then((xfa) => {
                      return _xfa_text.XfaText.textContent(xfa);
                    });
                  }
                  const readableStream = this.streamTextContent(params);
                  return new Promise(function(resolve, reject) {
                    function pump() {
                      reader.read().then(function({
                        value,
                        done
                      }) {
                        if (done) {
                          resolve(textContent);
                          return;
                        }
                        Object.assign(textContent.styles, value.styles);
                        textContent.items.push(...value.items);
                        pump();
                      }, reject);
                    }
                    const reader = readableStream.getReader();
                    const textContent = {
                      items: [],
                      styles: /* @__PURE__ */ Object.create(null)
                    };
                    pump();
                  });
                }
                getStructTree() {
                  return this._transport.getStructTree(this._pageIndex);
                }
                _destroy() {
                  this.destroyed = true;
                  const waitOn = [];
                  for (const intentState of this._intentStates.values()) {
                    this._abortOperatorList({
                      intentState,
                      reason: new Error("Page was destroyed."),
                      force: true
                    });
                    if (intentState.opListReadCapability) {
                      continue;
                    }
                    for (const internalRenderTask of intentState.renderTasks) {
                      waitOn.push(internalRenderTask.completed);
                      internalRenderTask.cancel();
                    }
                  }
                  this.objs.clear();
                  this.pendingCleanup = false;
                  return Promise.all(waitOn);
                }
                cleanup(resetStats = false) {
                  this.pendingCleanup = true;
                  return this._tryCleanup(resetStats);
                }
                _tryCleanup(resetStats = false) {
                  if (!this.pendingCleanup) {
                    return false;
                  }
                  for (const {
                    renderTasks,
                    operatorList
                  } of this._intentStates.values()) {
                    if (renderTasks.size > 0 || !operatorList.lastChunk) {
                      return false;
                    }
                  }
                  this._intentStates.clear();
                  this.objs.clear();
                  if (resetStats && this._stats) {
                    this._stats = new _display_utils.StatTimer();
                  }
                  this.pendingCleanup = false;
                  return true;
                }
                _startRenderPage(transparency, cacheKey) {
                  var _a2, _b;
                  const intentState = this._intentStates.get(cacheKey);
                  if (!intentState) {
                    return;
                  }
                  (_a2 = this._stats) == null ? void 0 : _a2.timeEnd("Page Request");
                  (_b = intentState.displayReadyCapability) == null ? void 0 : _b.resolve(transparency);
                }
                _renderPageChunk(operatorListChunk, intentState) {
                  for (let i = 0, ii = operatorListChunk.length; i < ii; i++) {
                    intentState.operatorList.fnArray.push(operatorListChunk.fnArray[i]);
                    intentState.operatorList.argsArray.push(operatorListChunk.argsArray[i]);
                  }
                  intentState.operatorList.lastChunk = operatorListChunk.lastChunk;
                  intentState.operatorList.separateAnnots = operatorListChunk.separateAnnots;
                  for (const internalRenderTask of intentState.renderTasks) {
                    internalRenderTask.operatorListChanged();
                  }
                  if (operatorListChunk.lastChunk) {
                    this._tryCleanup();
                  }
                }
                _pumpOperatorList({
                  renderingIntent,
                  cacheKey,
                  annotationStorageMap
                }) {
                  const readableStream = this._transport.messageHandler.sendWithStream("GetOperatorList", {
                    pageIndex: this._pageIndex,
                    intent: renderingIntent,
                    cacheKey,
                    annotationStorage: annotationStorageMap
                  });
                  const reader = readableStream.getReader();
                  const intentState = this._intentStates.get(cacheKey);
                  intentState.streamReader = reader;
                  const pump = () => {
                    reader.read().then(({
                      value,
                      done
                    }) => {
                      if (done) {
                        intentState.streamReader = null;
                        return;
                      }
                      if (this._transport.destroyed) {
                        return;
                      }
                      this._renderPageChunk(value, intentState);
                      pump();
                    }, (reason) => {
                      intentState.streamReader = null;
                      if (this._transport.destroyed) {
                        return;
                      }
                      if (intentState.operatorList) {
                        intentState.operatorList.lastChunk = true;
                        for (const internalRenderTask of intentState.renderTasks) {
                          internalRenderTask.operatorListChanged();
                        }
                        this._tryCleanup();
                      }
                      if (intentState.displayReadyCapability) {
                        intentState.displayReadyCapability.reject(reason);
                      } else if (intentState.opListReadCapability) {
                        intentState.opListReadCapability.reject(reason);
                      } else {
                        throw reason;
                      }
                    });
                  };
                  pump();
                }
                _abortOperatorList({
                  intentState,
                  reason,
                  force = false
                }) {
                  if (!intentState.streamReader) {
                    return;
                  }
                  if (intentState.streamReaderCancelTimeout) {
                    clearTimeout(intentState.streamReaderCancelTimeout);
                    intentState.streamReaderCancelTimeout = null;
                  }
                  if (!force) {
                    if (intentState.renderTasks.size > 0) {
                      return;
                    }
                    if (reason instanceof _display_utils.RenderingCancelledException) {
                      let delay = RENDERING_CANCELLED_TIMEOUT;
                      if (reason.extraDelay > 0 && reason.extraDelay < 1e3) {
                        delay += reason.extraDelay;
                      }
                      intentState.streamReaderCancelTimeout = setTimeout(() => {
                        intentState.streamReaderCancelTimeout = null;
                        this._abortOperatorList({
                          intentState,
                          reason,
                          force: true
                        });
                      }, delay);
                      return;
                    }
                  }
                  intentState.streamReader.cancel(new _util.AbortException(reason.message)).catch(() => {
                  });
                  intentState.streamReader = null;
                  if (this._transport.destroyed) {
                    return;
                  }
                  for (const [curCacheKey, curIntentState] of this._intentStates) {
                    if (curIntentState === intentState) {
                      this._intentStates.delete(curCacheKey);
                      break;
                    }
                  }
                  this.cleanup();
                }
                get stats() {
                  return this._stats;
                }
              }
              exports.PDFPageProxy = PDFPageProxy;
              class LoopbackPort {
                constructor() {
                  __privateAdd(this, _listeners, /* @__PURE__ */ new Set());
                  __privateAdd(this, _deferred, Promise.resolve());
                }
                postMessage(obj, transfers) {
                  const event = {
                    data: structuredClone(obj, transfers)
                  };
                  __privateGet(this, _deferred).then(() => {
                    for (const listener of __privateGet(this, _listeners)) {
                      listener.call(this, event);
                    }
                  });
                }
                addEventListener(name, listener) {
                  __privateGet(this, _listeners).add(listener);
                }
                removeEventListener(name, listener) {
                  __privateGet(this, _listeners).delete(listener);
                }
                terminate() {
                  __privateGet(this, _listeners).clear();
                }
              }
              _listeners = new WeakMap();
              _deferred = new WeakMap();
              exports.LoopbackPort = LoopbackPort;
              const PDFWorkerUtil = {
                isWorkerDisabled: false,
                fallbackWorkerSrc: null,
                fakeWorkerId: 0
              };
              exports.PDFWorkerUtil = PDFWorkerUtil;
              {
                if (_is_node.isNodeJS && typeof __require === "function") {
                  PDFWorkerUtil.isWorkerDisabled = true;
                  PDFWorkerUtil.fallbackWorkerSrc = "./pdf.worker.js";
                } else if (typeof document === "object") {
                  const pdfjsFilePath = (_a = document == null ? void 0 : document.currentScript) == null ? void 0 : _a.src;
                  if (pdfjsFilePath) {
                    PDFWorkerUtil.fallbackWorkerSrc = pdfjsFilePath.replace(/(\.(?:min\.)?js)(\?.*)?$/i, ".worker$1$2");
                  }
                }
                PDFWorkerUtil.isSameOrigin = function(baseUrl, otherUrl) {
                  let base;
                  try {
                    base = new URL(baseUrl);
                    if (!base.origin || base.origin === "null") {
                      return false;
                    }
                  } catch (e) {
                    return false;
                  }
                  const other = new URL(otherUrl, base);
                  return base.origin === other.origin;
                };
                PDFWorkerUtil.createCDNWrapper = function(url) {
                  const wrapper = `importScripts("${url}");`;
                  return URL.createObjectURL(new Blob([wrapper]));
                };
              }
              const _PDFWorker = class _PDFWorker {
                constructor({
                  name = null,
                  port = null,
                  verbosity = (0, _util.getVerbosityLevel)()
                } = {}) {
                  if (port && __privateGet(_PDFWorker, _workerPorts).has(port)) {
                    throw new Error("Cannot use more than one PDFWorker per port.");
                  }
                  this.name = name;
                  this.destroyed = false;
                  this.verbosity = verbosity;
                  this._readyCapability = (0, _util.createPromiseCapability)();
                  this._port = null;
                  this._webWorker = null;
                  this._messageHandler = null;
                  if (port) {
                    __privateGet(_PDFWorker, _workerPorts).set(port, this);
                    this._initializeFromPort(port);
                    return;
                  }
                  this._initialize();
                }
                get promise() {
                  return this._readyCapability.promise;
                }
                get port() {
                  return this._port;
                }
                get messageHandler() {
                  return this._messageHandler;
                }
                _initializeFromPort(port) {
                  this._port = port;
                  this._messageHandler = new _message_handler.MessageHandler("main", "worker", port);
                  this._messageHandler.on("ready", function() {
                  });
                  this._readyCapability.resolve();
                  this._messageHandler.send("configure", {
                    verbosity: this.verbosity
                  });
                }
                _initialize() {
                  if (!PDFWorkerUtil.isWorkerDisabled && !_PDFWorker._mainThreadWorkerMessageHandler) {
                    let {
                      workerSrc
                    } = _PDFWorker;
                    try {
                      if (!PDFWorkerUtil.isSameOrigin(window.location.href, workerSrc)) {
                        workerSrc = PDFWorkerUtil.createCDNWrapper(new URL(workerSrc, window.location).href);
                      }
                      const worker2 = new Worker(workerSrc);
                      const messageHandler = new _message_handler.MessageHandler("main", "worker", worker2);
                      const terminateEarly = () => {
                        worker2.removeEventListener("error", onWorkerError);
                        messageHandler.destroy();
                        worker2.terminate();
                        if (this.destroyed) {
                          this._readyCapability.reject(new Error("Worker was destroyed"));
                        } else {
                          this._setupFakeWorker();
                        }
                      };
                      const onWorkerError = () => {
                        if (!this._webWorker) {
                          terminateEarly();
                        }
                      };
                      worker2.addEventListener("error", onWorkerError);
                      messageHandler.on("test", (data) => {
                        worker2.removeEventListener("error", onWorkerError);
                        if (this.destroyed) {
                          terminateEarly();
                          return;
                        }
                        if (data) {
                          this._messageHandler = messageHandler;
                          this._port = worker2;
                          this._webWorker = worker2;
                          this._readyCapability.resolve();
                          messageHandler.send("configure", {
                            verbosity: this.verbosity
                          });
                        } else {
                          this._setupFakeWorker();
                          messageHandler.destroy();
                          worker2.terminate();
                        }
                      });
                      messageHandler.on("ready", (data) => {
                        worker2.removeEventListener("error", onWorkerError);
                        if (this.destroyed) {
                          terminateEarly();
                          return;
                        }
                        try {
                          sendTest();
                        } catch (e) {
                          this._setupFakeWorker();
                        }
                      });
                      const sendTest = () => {
                        const testObj = new Uint8Array();
                        messageHandler.send("test", testObj, [testObj.buffer]);
                      };
                      sendTest();
                      return;
                    } catch (e) {
                      (0, _util.info)("The worker has been disabled.");
                    }
                  }
                  this._setupFakeWorker();
                }
                _setupFakeWorker() {
                  if (!PDFWorkerUtil.isWorkerDisabled) {
                    (0, _util.warn)("Setting up fake worker.");
                    PDFWorkerUtil.isWorkerDisabled = true;
                  }
                  _PDFWorker._setupFakeWorkerGlobal.then((WorkerMessageHandler) => {
                    if (this.destroyed) {
                      this._readyCapability.reject(new Error("Worker was destroyed"));
                      return;
                    }
                    const port = new LoopbackPort();
                    this._port = port;
                    const id = `fake${PDFWorkerUtil.fakeWorkerId++}`;
                    const workerHandler = new _message_handler.MessageHandler(id + "_worker", id, port);
                    WorkerMessageHandler.setup(workerHandler, port);
                    const messageHandler = new _message_handler.MessageHandler(id, id + "_worker", port);
                    this._messageHandler = messageHandler;
                    this._readyCapability.resolve();
                    messageHandler.send("configure", {
                      verbosity: this.verbosity
                    });
                  }).catch((reason) => {
                    this._readyCapability.reject(new Error(`Setting up fake worker failed: "${reason.message}".`));
                  });
                }
                destroy() {
                  this.destroyed = true;
                  if (this._webWorker) {
                    this._webWorker.terminate();
                    this._webWorker = null;
                  }
                  __privateGet(_PDFWorker, _workerPorts).delete(this._port);
                  this._port = null;
                  if (this._messageHandler) {
                    this._messageHandler.destroy();
                    this._messageHandler = null;
                  }
                }
                static fromPort(params) {
                  if (!(params == null ? void 0 : params.port)) {
                    throw new Error("PDFWorker.fromPort - invalid method signature.");
                  }
                  if (__privateGet(this, _workerPorts).has(params.port)) {
                    return __privateGet(this, _workerPorts).get(params.port);
                  }
                  return new _PDFWorker(params);
                }
                static get workerSrc() {
                  if (_worker_options.GlobalWorkerOptions.workerSrc) {
                    return _worker_options.GlobalWorkerOptions.workerSrc;
                  }
                  if (PDFWorkerUtil.fallbackWorkerSrc !== null) {
                    if (!_is_node.isNodeJS) {
                      (0, _display_utils.deprecated)('No "GlobalWorkerOptions.workerSrc" specified.');
                    }
                    return PDFWorkerUtil.fallbackWorkerSrc;
                  }
                  throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
                }
                static get _mainThreadWorkerMessageHandler() {
                  var _a2;
                  try {
                    return ((_a2 = globalThis.pdfjsWorker) == null ? void 0 : _a2.WorkerMessageHandler) || null;
                  } catch (ex) {
                    return null;
                  }
                }
                static get _setupFakeWorkerGlobal() {
                  const loader = async () => {
                    const mainWorkerMessageHandler = this._mainThreadWorkerMessageHandler;
                    if (mainWorkerMessageHandler) {
                      return mainWorkerMessageHandler;
                    }
                    if (_is_node.isNodeJS && typeof __require === "function") {
                      const worker = eval("require")(this.workerSrc);
                      return worker.WorkerMessageHandler;
                    }
                    await (0, _display_utils.loadScript)(this.workerSrc);
                    return window.pdfjsWorker.WorkerMessageHandler;
                  };
                  return (0, _util.shadow)(this, "_setupFakeWorkerGlobal", loader());
                }
              };
              _workerPorts = new WeakMap();
              __privateAdd(_PDFWorker, _workerPorts, /* @__PURE__ */ new WeakMap());
              let PDFWorker = _PDFWorker;
              exports.PDFWorker = PDFWorker;
              class WorkerTransport {
                constructor(messageHandler, loadingTask, networkStream, params, factory) {
                  __privateAdd(this, _WorkerTransport_instances);
                  __privateAdd(this, _methodPromises, /* @__PURE__ */ new Map());
                  __privateAdd(this, _pageCache, /* @__PURE__ */ new Map());
                  __privateAdd(this, _pagePromises, /* @__PURE__ */ new Map());
                  this.messageHandler = messageHandler;
                  this.loadingTask = loadingTask;
                  this.commonObjs = new PDFObjects();
                  this.fontLoader = new _font_loader.FontLoader({
                    onUnsupportedFeature: this._onUnsupportedFeature.bind(this),
                    ownerDocument: params.ownerDocument,
                    styleElement: params.styleElement
                  });
                  this._params = params;
                  this.cMapReaderFactory = factory == null ? void 0 : factory.cMapReaderFactory;
                  this.standardFontDataFactory = factory == null ? void 0 : factory.standardFontDataFactory;
                  this.destroyed = false;
                  this.destroyCapability = null;
                  this._passwordCapability = null;
                  this._networkStream = networkStream;
                  this._fullReader = null;
                  this._lastProgress = null;
                  this.downloadInfoCapability = (0, _util.createPromiseCapability)();
                  this.setupMessageHandler();
                }
                get annotationStorage() {
                  return (0, _util.shadow)(this, "annotationStorage", new _annotation_storage.AnnotationStorage());
                }
                getRenderingIntent(intent, annotationMode = _util.AnnotationMode.ENABLE, printAnnotationStorage = null, isOpList = false) {
                  let renderingIntent = _util.RenderingIntentFlag.DISPLAY;
                  let annotationMap = null;
                  switch (intent) {
                    case "any":
                      renderingIntent = _util.RenderingIntentFlag.ANY;
                      break;
                    case "display":
                      break;
                    case "print":
                      renderingIntent = _util.RenderingIntentFlag.PRINT;
                      break;
                    default:
                      (0, _util.warn)(`getRenderingIntent - invalid intent: ${intent}`);
                  }
                  switch (annotationMode) {
                    case _util.AnnotationMode.DISABLE:
                      renderingIntent += _util.RenderingIntentFlag.ANNOTATIONS_DISABLE;
                      break;
                    case _util.AnnotationMode.ENABLE:
                      break;
                    case _util.AnnotationMode.ENABLE_FORMS:
                      renderingIntent += _util.RenderingIntentFlag.ANNOTATIONS_FORMS;
                      break;
                    case _util.AnnotationMode.ENABLE_STORAGE:
                      renderingIntent += _util.RenderingIntentFlag.ANNOTATIONS_STORAGE;
                      const annotationStorage = renderingIntent & _util.RenderingIntentFlag.PRINT && printAnnotationStorage instanceof _annotation_storage.PrintAnnotationStorage ? printAnnotationStorage : this.annotationStorage;
                      annotationMap = annotationStorage.serializable;
                      break;
                    default:
                      (0, _util.warn)(`getRenderingIntent - invalid annotationMode: ${annotationMode}`);
                  }
                  if (isOpList) {
                    renderingIntent += _util.RenderingIntentFlag.OPLIST;
                  }
                  return {
                    renderingIntent,
                    cacheKey: `${renderingIntent}_${_annotation_storage.AnnotationStorage.getHash(annotationMap)}`,
                    annotationStorageMap: annotationMap
                  };
                }
                destroy() {
                  if (this.destroyCapability) {
                    return this.destroyCapability.promise;
                  }
                  this.destroyed = true;
                  this.destroyCapability = (0, _util.createPromiseCapability)();
                  if (this._passwordCapability) {
                    this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"));
                  }
                  const waitOn = [];
                  for (const page of __privateGet(this, _pageCache).values()) {
                    waitOn.push(page._destroy());
                  }
                  __privateGet(this, _pageCache).clear();
                  __privateGet(this, _pagePromises).clear();
                  if (this.hasOwnProperty("annotationStorage")) {
                    this.annotationStorage.resetModified();
                  }
                  const terminated = this.messageHandler.sendWithPromise("Terminate", null);
                  waitOn.push(terminated);
                  Promise.all(waitOn).then(() => {
                    this.commonObjs.clear();
                    this.fontLoader.clear();
                    __privateGet(this, _methodPromises).clear();
                    if (this._networkStream) {
                      this._networkStream.cancelAllRequests(new _util.AbortException("Worker was terminated."));
                    }
                    if (this.messageHandler) {
                      this.messageHandler.destroy();
                      this.messageHandler = null;
                    }
                    this.destroyCapability.resolve();
                  }, this.destroyCapability.reject);
                  return this.destroyCapability.promise;
                }
                setupMessageHandler() {
                  const {
                    messageHandler,
                    loadingTask
                  } = this;
                  messageHandler.on("GetReader", (data, sink) => {
                    (0, _util.assert)(this._networkStream, "GetReader - no `IPDFStream` instance available.");
                    this._fullReader = this._networkStream.getFullReader();
                    this._fullReader.onProgress = (evt) => {
                      this._lastProgress = {
                        loaded: evt.loaded,
                        total: evt.total
                      };
                    };
                    sink.onPull = () => {
                      this._fullReader.read().then(function({
                        value,
                        done
                      }) {
                        if (done) {
                          sink.close();
                          return;
                        }
                        (0, _util.assert)(value instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer.");
                        sink.enqueue(new Uint8Array(value), 1, [value]);
                      }).catch((reason) => {
                        sink.error(reason);
                      });
                    };
                    sink.onCancel = (reason) => {
                      this._fullReader.cancel(reason);
                      sink.ready.catch((readyReason) => {
                        if (this.destroyed) {
                          return;
                        }
                        throw readyReason;
                      });
                    };
                  });
                  messageHandler.on("ReaderHeadersReady", (data) => {
                    const headersCapability = (0, _util.createPromiseCapability)();
                    const fullReader = this._fullReader;
                    fullReader.headersReady.then(() => {
                      var _a2;
                      if (!fullReader.isStreamingSupported || !fullReader.isRangeSupported) {
                        if (this._lastProgress) {
                          (_a2 = loadingTask.onProgress) == null ? void 0 : _a2.call(loadingTask, this._lastProgress);
                        }
                        fullReader.onProgress = (evt) => {
                          var _a3;
                          (_a3 = loadingTask.onProgress) == null ? void 0 : _a3.call(loadingTask, {
                            loaded: evt.loaded,
                            total: evt.total
                          });
                        };
                      }
                      headersCapability.resolve({
                        isStreamingSupported: fullReader.isStreamingSupported,
                        isRangeSupported: fullReader.isRangeSupported,
                        contentLength: fullReader.contentLength
                      });
                    }, headersCapability.reject);
                    return headersCapability.promise;
                  });
                  messageHandler.on("GetRangeReader", (data, sink) => {
                    (0, _util.assert)(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
                    const rangeReader = this._networkStream.getRangeReader(data.begin, data.end);
                    if (!rangeReader) {
                      sink.close();
                      return;
                    }
                    sink.onPull = () => {
                      rangeReader.read().then(function({
                        value,
                        done
                      }) {
                        if (done) {
                          sink.close();
                          return;
                        }
                        (0, _util.assert)(value instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer.");
                        sink.enqueue(new Uint8Array(value), 1, [value]);
                      }).catch((reason) => {
                        sink.error(reason);
                      });
                    };
                    sink.onCancel = (reason) => {
                      rangeReader.cancel(reason);
                      sink.ready.catch((readyReason) => {
                        if (this.destroyed) {
                          return;
                        }
                        throw readyReason;
                      });
                    };
                  });
                  messageHandler.on("GetDoc", ({
                    pdfInfo
                  }) => {
                    this._numPages = pdfInfo.numPages;
                    this._htmlForXfa = pdfInfo.htmlForXfa;
                    delete pdfInfo.htmlForXfa;
                    loadingTask._capability.resolve(new PDFDocumentProxy(pdfInfo, this));
                  });
                  messageHandler.on("DocException", function(ex) {
                    let reason;
                    switch (ex.name) {
                      case "PasswordException":
                        reason = new _util.PasswordException(ex.message, ex.code);
                        break;
                      case "InvalidPDFException":
                        reason = new _util.InvalidPDFException(ex.message);
                        break;
                      case "MissingPDFException":
                        reason = new _util.MissingPDFException(ex.message);
                        break;
                      case "UnexpectedResponseException":
                        reason = new _util.UnexpectedResponseException(ex.message, ex.status);
                        break;
                      case "UnknownErrorException":
                        reason = new _util.UnknownErrorException(ex.message, ex.details);
                        break;
                      default:
                        (0, _util.unreachable)("DocException - expected a valid Error.");
                    }
                    loadingTask._capability.reject(reason);
                  });
                  messageHandler.on("PasswordRequest", (exception) => {
                    this._passwordCapability = (0, _util.createPromiseCapability)();
                    if (loadingTask.onPassword) {
                      const updatePassword = (password) => {
                        if (password instanceof Error) {
                          this._passwordCapability.reject(password);
                        } else {
                          this._passwordCapability.resolve({
                            password
                          });
                        }
                      };
                      try {
                        loadingTask.onPassword(updatePassword, exception.code);
                      } catch (ex) {
                        this._passwordCapability.reject(ex);
                      }
                    } else {
                      this._passwordCapability.reject(new _util.PasswordException(exception.message, exception.code));
                    }
                    return this._passwordCapability.promise;
                  });
                  messageHandler.on("DataLoaded", (data) => {
                    var _a2;
                    (_a2 = loadingTask.onProgress) == null ? void 0 : _a2.call(loadingTask, {
                      loaded: data.length,
                      total: data.length
                    });
                    this.downloadInfoCapability.resolve(data);
                  });
                  messageHandler.on("StartRenderPage", (data) => {
                    if (this.destroyed) {
                      return;
                    }
                    const page = __privateGet(this, _pageCache).get(data.pageIndex);
                    page._startRenderPage(data.transparency, data.cacheKey);
                  });
                  messageHandler.on("commonobj", ([id, type, exportedData]) => {
                    var _a2;
                    if (this.destroyed) {
                      return;
                    }
                    if (this.commonObjs.has(id)) {
                      return;
                    }
                    switch (type) {
                      case "Font":
                        const params = this._params;
                        if ("error" in exportedData) {
                          const exportedError = exportedData.error;
                          (0, _util.warn)(`Error during font loading: ${exportedError}`);
                          this.commonObjs.resolve(id, exportedError);
                          break;
                        }
                        let fontRegistry = null;
                        if (params.pdfBug && ((_a2 = globalThis.FontInspector) == null ? void 0 : _a2.enabled)) {
                          fontRegistry = {
                            registerFont(font2, url) {
                              globalThis.FontInspector.fontAdded(font2, url);
                            }
                          };
                        }
                        const font = new _font_loader.FontFaceObject(exportedData, {
                          isEvalSupported: params.isEvalSupported,
                          disableFontFace: params.disableFontFace,
                          ignoreErrors: params.ignoreErrors,
                          onUnsupportedFeature: this._onUnsupportedFeature.bind(this),
                          fontRegistry
                        });
                        this.fontLoader.bind(font).catch((reason) => {
                          return messageHandler.sendWithPromise("FontFallback", {
                            id
                          });
                        }).finally(() => {
                          if (!params.fontExtraProperties && font.data) {
                            font.data = null;
                          }
                          this.commonObjs.resolve(id, font);
                        });
                        break;
                      case "FontPath":
                      case "Image":
                        this.commonObjs.resolve(id, exportedData);
                        break;
                      default:
                        throw new Error(`Got unknown common object type ${type}`);
                    }
                  });
                  messageHandler.on("obj", ([id, pageIndex, type, imageData]) => {
                    var _a2;
                    if (this.destroyed) {
                      return;
                    }
                    const pageProxy = __privateGet(this, _pageCache).get(pageIndex);
                    if (pageProxy.objs.has(id)) {
                      return;
                    }
                    switch (type) {
                      case "Image":
                        pageProxy.objs.resolve(id, imageData);
                        const MAX_IMAGE_SIZE_TO_STORE = 8e6;
                        if (imageData) {
                          let length;
                          if (imageData.bitmap) {
                            const {
                              width,
                              height
                            } = imageData;
                            length = width * height * 4;
                          } else {
                            length = ((_a2 = imageData.data) == null ? void 0 : _a2.length) || 0;
                          }
                          if (length > MAX_IMAGE_SIZE_TO_STORE) {
                            pageProxy.cleanupAfterRender = true;
                          }
                        }
                        break;
                      case "Pattern":
                        pageProxy.objs.resolve(id, imageData);
                        break;
                      default:
                        throw new Error(`Got unknown object type ${type}`);
                    }
                  });
                  messageHandler.on("DocProgress", (data) => {
                    var _a2;
                    if (this.destroyed) {
                      return;
                    }
                    (_a2 = loadingTask.onProgress) == null ? void 0 : _a2.call(loadingTask, {
                      loaded: data.loaded,
                      total: data.total
                    });
                  });
                  messageHandler.on("UnsupportedFeature", this._onUnsupportedFeature.bind(this));
                  messageHandler.on("FetchBuiltInCMap", (data) => {
                    if (this.destroyed) {
                      return Promise.reject(new Error("Worker was destroyed."));
                    }
                    if (!this.cMapReaderFactory) {
                      return Promise.reject(new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."));
                    }
                    return this.cMapReaderFactory.fetch(data);
                  });
                  messageHandler.on("FetchStandardFontData", (data) => {
                    if (this.destroyed) {
                      return Promise.reject(new Error("Worker was destroyed."));
                    }
                    if (!this.standardFontDataFactory) {
                      return Promise.reject(new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter."));
                    }
                    return this.standardFontDataFactory.fetch(data);
                  });
                }
                _onUnsupportedFeature({
                  featureId
                }) {
                  var _a2, _b;
                  if (this.destroyed) {
                    return;
                  }
                  (_b = (_a2 = this.loadingTask).onUnsupportedFeature) == null ? void 0 : _b.call(_a2, featureId);
                }
                getData() {
                  return this.messageHandler.sendWithPromise("GetData", null);
                }
                saveDocument() {
                  var _a2;
                  if (this.annotationStorage.size <= 0) {
                    (0, _util.warn)("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
                  }
                  return this.messageHandler.sendWithPromise("SaveDocument", {
                    isPureXfa: !!this._htmlForXfa,
                    numPages: this._numPages,
                    annotationStorage: this.annotationStorage.serializable,
                    filename: ((_a2 = this._fullReader) == null ? void 0 : _a2.filename) ?? null
                  }).finally(() => {
                    this.annotationStorage.resetModified();
                  });
                }
                getPage(pageNumber) {
                  if (!Number.isInteger(pageNumber) || pageNumber <= 0 || pageNumber > this._numPages) {
                    return Promise.reject(new Error("Invalid page request."));
                  }
                  const pageIndex = pageNumber - 1, cachedPromise = __privateGet(this, _pagePromises).get(pageIndex);
                  if (cachedPromise) {
                    return cachedPromise;
                  }
                  const promise = this.messageHandler.sendWithPromise("GetPage", {
                    pageIndex
                  }).then((pageInfo) => {
                    if (this.destroyed) {
                      throw new Error("Transport destroyed");
                    }
                    const page = new PDFPageProxy(pageIndex, pageInfo, this, this._params.ownerDocument, this._params.pdfBug);
                    __privateGet(this, _pageCache).set(pageIndex, page);
                    return page;
                  });
                  __privateGet(this, _pagePromises).set(pageIndex, promise);
                  return promise;
                }
                getPageIndex(ref) {
                  if (typeof ref !== "object" || ref === null || !Number.isInteger(ref.num) || ref.num < 0 || !Number.isInteger(ref.gen) || ref.gen < 0) {
                    return Promise.reject(new Error("Invalid pageIndex request."));
                  }
                  return this.messageHandler.sendWithPromise("GetPageIndex", {
                    num: ref.num,
                    gen: ref.gen
                  });
                }
                getAnnotations(pageIndex, intent) {
                  return this.messageHandler.sendWithPromise("GetAnnotations", {
                    pageIndex,
                    intent
                  });
                }
                getFieldObjects() {
                  return __privateMethod(this, _WorkerTransport_instances, cacheSimpleMethod_fn).call(this, "GetFieldObjects");
                }
                hasJSActions() {
                  return __privateMethod(this, _WorkerTransport_instances, cacheSimpleMethod_fn).call(this, "HasJSActions");
                }
                getCalculationOrderIds() {
                  return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
                }
                getDestinations() {
                  return this.messageHandler.sendWithPromise("GetDestinations", null);
                }
                getDestination(id) {
                  if (typeof id !== "string") {
                    return Promise.reject(new Error("Invalid destination request."));
                  }
                  return this.messageHandler.sendWithPromise("GetDestination", {
                    id
                  });
                }
                getPageLabels() {
                  return this.messageHandler.sendWithPromise("GetPageLabels", null);
                }
                getPageLayout() {
                  return this.messageHandler.sendWithPromise("GetPageLayout", null);
                }
                getPageMode() {
                  return this.messageHandler.sendWithPromise("GetPageMode", null);
                }
                getViewerPreferences() {
                  return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
                }
                getOpenAction() {
                  return this.messageHandler.sendWithPromise("GetOpenAction", null);
                }
                getAttachments() {
                  return this.messageHandler.sendWithPromise("GetAttachments", null);
                }
                getJavaScript() {
                  return this.messageHandler.sendWithPromise("GetJavaScript", null);
                }
                getDocJSActions() {
                  return this.messageHandler.sendWithPromise("GetDocJSActions", null);
                }
                getPageJSActions(pageIndex) {
                  return this.messageHandler.sendWithPromise("GetPageJSActions", {
                    pageIndex
                  });
                }
                getStructTree(pageIndex) {
                  return this.messageHandler.sendWithPromise("GetStructTree", {
                    pageIndex
                  });
                }
                getOutline() {
                  return this.messageHandler.sendWithPromise("GetOutline", null);
                }
                getOptionalContentConfig() {
                  return this.messageHandler.sendWithPromise("GetOptionalContentConfig", null).then((results) => {
                    return new _optional_content_config.OptionalContentConfig(results);
                  });
                }
                getPermissions() {
                  return this.messageHandler.sendWithPromise("GetPermissions", null);
                }
                getMetadata() {
                  const name = "GetMetadata", cachedPromise = __privateGet(this, _methodPromises).get(name);
                  if (cachedPromise) {
                    return cachedPromise;
                  }
                  const promise = this.messageHandler.sendWithPromise(name, null).then((results) => {
                    var _a2, _b;
                    return {
                      info: results[0],
                      metadata: results[1] ? new _metadata.Metadata(results[1]) : null,
                      contentDispositionFilename: ((_a2 = this._fullReader) == null ? void 0 : _a2.filename) ?? null,
                      contentLength: ((_b = this._fullReader) == null ? void 0 : _b.contentLength) ?? null
                    };
                  });
                  __privateGet(this, _methodPromises).set(name, promise);
                  return promise;
                }
                getMarkInfo() {
                  return this.messageHandler.sendWithPromise("GetMarkInfo", null);
                }
                async startCleanup(keepLoadedFonts = false) {
                  if (this.destroyed) {
                    return;
                  }
                  await this.messageHandler.sendWithPromise("Cleanup", null);
                  for (const page of __privateGet(this, _pageCache).values()) {
                    const cleanupSuccessful = page.cleanup();
                    if (!cleanupSuccessful) {
                      throw new Error(`startCleanup: Page ${page.pageNumber} is currently rendering.`);
                    }
                  }
                  this.commonObjs.clear();
                  if (!keepLoadedFonts) {
                    this.fontLoader.clear();
                  }
                  __privateGet(this, _methodPromises).clear();
                }
                get loadingParams() {
                  const {
                    disableAutoFetch,
                    enableXfa
                  } = this._params;
                  return (0, _util.shadow)(this, "loadingParams", {
                    disableAutoFetch,
                    enableXfa
                  });
                }
              }
              _methodPromises = new WeakMap();
              _pageCache = new WeakMap();
              _pagePromises = new WeakMap();
              _WorkerTransport_instances = new WeakSet();
              cacheSimpleMethod_fn = function(name, data = null) {
                const cachedPromise = __privateGet(this, _methodPromises).get(name);
                if (cachedPromise) {
                  return cachedPromise;
                }
                const promise = this.messageHandler.sendWithPromise(name, data);
                __privateGet(this, _methodPromises).set(name, promise);
                return promise;
              };
              class PDFObjects {
                constructor() {
                  __privateAdd(this, _PDFObjects_instances);
                  __privateAdd(this, _objs, /* @__PURE__ */ Object.create(null));
                }
                get(objId, callback = null) {
                  if (callback) {
                    const obj2 = __privateMethod(this, _PDFObjects_instances, ensureObj_fn).call(this, objId);
                    obj2.capability.promise.then(() => callback(obj2.data));
                    return null;
                  }
                  const obj = __privateGet(this, _objs)[objId];
                  if (!(obj == null ? void 0 : obj.capability.settled)) {
                    throw new Error(`Requesting object that isn't resolved yet ${objId}.`);
                  }
                  return obj.data;
                }
                has(objId) {
                  const obj = __privateGet(this, _objs)[objId];
                  return (obj == null ? void 0 : obj.capability.settled) || false;
                }
                resolve(objId, data = null) {
                  const obj = __privateMethod(this, _PDFObjects_instances, ensureObj_fn).call(this, objId);
                  obj.data = data;
                  obj.capability.resolve();
                }
                clear() {
                  var _a2;
                  for (const objId in __privateGet(this, _objs)) {
                    const {
                      data
                    } = __privateGet(this, _objs)[objId];
                    (_a2 = data == null ? void 0 : data.bitmap) == null ? void 0 : _a2.close();
                  }
                  __privateSet(this, _objs, /* @__PURE__ */ Object.create(null));
                }
              }
              _objs = new WeakMap();
              _PDFObjects_instances = new WeakSet();
              ensureObj_fn = function(objId) {
                const obj = __privateGet(this, _objs)[objId];
                if (obj) {
                  return obj;
                }
                return __privateGet(this, _objs)[objId] = {
                  capability: (0, _util.createPromiseCapability)(),
                  data: null
                };
              };
              class RenderTask {
                constructor(internalRenderTask) {
                  __privateAdd(this, _internalRenderTask, null);
                  __privateSet(this, _internalRenderTask, internalRenderTask);
                  this.onContinue = null;
                }
                get promise() {
                  return __privateGet(this, _internalRenderTask).capability.promise;
                }
                cancel(extraDelay = 0) {
                  __privateGet(this, _internalRenderTask).cancel(null, extraDelay);
                }
                get separateAnnots() {
                  const {
                    separateAnnots
                  } = __privateGet(this, _internalRenderTask).operatorList;
                  if (!separateAnnots) {
                    return false;
                  }
                  const {
                    annotationCanvasMap
                  } = __privateGet(this, _internalRenderTask);
                  return separateAnnots.form || separateAnnots.canvas && (annotationCanvasMap == null ? void 0 : annotationCanvasMap.size) > 0;
                }
              }
              _internalRenderTask = new WeakMap();
              exports.RenderTask = RenderTask;
              const _InternalRenderTask = class _InternalRenderTask {
                constructor({
                  callback,
                  params,
                  objs,
                  commonObjs,
                  annotationCanvasMap,
                  operatorList,
                  pageIndex,
                  canvasFactory,
                  useRequestAnimationFrame = false,
                  pdfBug = false,
                  pageColors = null
                }) {
                  this.callback = callback;
                  this.params = params;
                  this.objs = objs;
                  this.commonObjs = commonObjs;
                  this.annotationCanvasMap = annotationCanvasMap;
                  this.operatorListIdx = null;
                  this.operatorList = operatorList;
                  this._pageIndex = pageIndex;
                  this.canvasFactory = canvasFactory;
                  this._pdfBug = pdfBug;
                  this.pageColors = pageColors;
                  this.running = false;
                  this.graphicsReadyCallback = null;
                  this.graphicsReady = false;
                  this._useRequestAnimationFrame = useRequestAnimationFrame === true && typeof window !== "undefined";
                  this.cancelled = false;
                  this.capability = (0, _util.createPromiseCapability)();
                  this.task = new RenderTask(this);
                  this._cancelBound = this.cancel.bind(this);
                  this._continueBound = this._continue.bind(this);
                  this._scheduleNextBound = this._scheduleNext.bind(this);
                  this._nextBound = this._next.bind(this);
                  this._canvas = params.canvasContext.canvas;
                }
                get completed() {
                  return this.capability.promise.catch(function() {
                  });
                }
                initializeGraphics({
                  transparency = false,
                  optionalContentConfig
                }) {
                  var _a2, _b;
                  if (this.cancelled) {
                    return;
                  }
                  if (this._canvas) {
                    if (__privateGet(_InternalRenderTask, _canvasInUse).has(this._canvas)) {
                      throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
                    }
                    __privateGet(_InternalRenderTask, _canvasInUse).add(this._canvas);
                  }
                  if (this._pdfBug && ((_a2 = globalThis.StepperManager) == null ? void 0 : _a2.enabled)) {
                    this.stepper = globalThis.StepperManager.create(this._pageIndex);
                    this.stepper.init(this.operatorList);
                    this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
                  }
                  const {
                    canvasContext,
                    viewport,
                    transform,
                    background
                  } = this.params;
                  this.gfx = new _canvas.CanvasGraphics(canvasContext, this.commonObjs, this.objs, this.canvasFactory, {
                    optionalContentConfig
                  }, this.annotationCanvasMap, this.pageColors);
                  this.gfx.beginDrawing({
                    transform,
                    viewport,
                    transparency,
                    background
                  });
                  this.operatorListIdx = 0;
                  this.graphicsReady = true;
                  (_b = this.graphicsReadyCallback) == null ? void 0 : _b.call(this);
                }
                cancel(error = null, extraDelay = 0) {
                  var _a2;
                  this.running = false;
                  this.cancelled = true;
                  (_a2 = this.gfx) == null ? void 0 : _a2.endDrawing();
                  if (this._canvas) {
                    __privateGet(_InternalRenderTask, _canvasInUse).delete(this._canvas);
                  }
                  this.callback(error || new _display_utils.RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex + 1}`, "canvas", extraDelay));
                }
                operatorListChanged() {
                  var _a2;
                  if (!this.graphicsReady) {
                    if (!this.graphicsReadyCallback) {
                      this.graphicsReadyCallback = this._continueBound;
                    }
                    return;
                  }
                  (_a2 = this.stepper) == null ? void 0 : _a2.updateOperatorList(this.operatorList);
                  if (this.running) {
                    return;
                  }
                  this._continue();
                }
                _continue() {
                  this.running = true;
                  if (this.cancelled) {
                    return;
                  }
                  if (this.task.onContinue) {
                    this.task.onContinue(this._scheduleNextBound);
                  } else {
                    this._scheduleNext();
                  }
                }
                _scheduleNext() {
                  if (this._useRequestAnimationFrame) {
                    window.requestAnimationFrame(() => {
                      this._nextBound().catch(this._cancelBound);
                    });
                  } else {
                    Promise.resolve().then(this._nextBound).catch(this._cancelBound);
                  }
                }
                async _next() {
                  if (this.cancelled) {
                    return;
                  }
                  this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper);
                  if (this.operatorListIdx === this.operatorList.argsArray.length) {
                    this.running = false;
                    if (this.operatorList.lastChunk) {
                      this.gfx.endDrawing();
                      if (this._canvas) {
                        __privateGet(_InternalRenderTask, _canvasInUse).delete(this._canvas);
                      }
                      this.callback();
                    }
                  }
                }
              };
              _canvasInUse = new WeakMap();
              __privateAdd(_InternalRenderTask, _canvasInUse, /* @__PURE__ */ new WeakSet());
              let InternalRenderTask = _InternalRenderTask;
              const version = "3.4.120";
              exports.version = version;
              const build = "af6414988";
              exports.build = build;
            },
            /* 3 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              var _modified, _storage, _AnnotationStorage_instances, setModified_fn, _serializable;
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.PrintAnnotationStorage = exports2.AnnotationStorage = void 0;
              var _util2 = __w_pdfjs_require__2(1);
              var _editor = __w_pdfjs_require__2(4);
              var _murmurhash = __w_pdfjs_require__2(8);
              class AnnotationStorage {
                constructor() {
                  __privateAdd(this, _AnnotationStorage_instances);
                  __privateAdd(this, _modified, false);
                  __privateAdd(this, _storage, /* @__PURE__ */ new Map());
                  this.onSetModified = null;
                  this.onResetModified = null;
                  this.onAnnotationEditor = null;
                }
                getValue(key, defaultValue) {
                  const value = __privateGet(this, _storage).get(key);
                  if (value === void 0) {
                    return defaultValue;
                  }
                  return Object.assign(defaultValue, value);
                }
                getRawValue(key) {
                  return __privateGet(this, _storage).get(key);
                }
                remove(key) {
                  __privateGet(this, _storage).delete(key);
                  if (__privateGet(this, _storage).size === 0) {
                    this.resetModified();
                  }
                  if (typeof this.onAnnotationEditor === "function") {
                    for (const value of __privateGet(this, _storage).values()) {
                      if (value instanceof _editor.AnnotationEditor) {
                        return;
                      }
                    }
                    this.onAnnotationEditor(null);
                  }
                }
                setValue(key, value) {
                  const obj = __privateGet(this, _storage).get(key);
                  let modified = false;
                  if (obj !== void 0) {
                    for (const [entry, val] of Object.entries(value)) {
                      if (obj[entry] !== val) {
                        modified = true;
                        obj[entry] = val;
                      }
                    }
                  } else {
                    modified = true;
                    __privateGet(this, _storage).set(key, value);
                  }
                  if (modified) {
                    __privateMethod(this, _AnnotationStorage_instances, setModified_fn).call(this);
                  }
                  if (value instanceof _editor.AnnotationEditor && typeof this.onAnnotationEditor === "function") {
                    this.onAnnotationEditor(value.constructor._type);
                  }
                }
                has(key) {
                  return __privateGet(this, _storage).has(key);
                }
                getAll() {
                  return __privateGet(this, _storage).size > 0 ? (0, _util2.objectFromMap)(__privateGet(this, _storage)) : null;
                }
                setAll(obj) {
                  for (const [key, val] of Object.entries(obj)) {
                    this.setValue(key, val);
                  }
                }
                get size() {
                  return __privateGet(this, _storage).size;
                }
                resetModified() {
                  if (__privateGet(this, _modified)) {
                    __privateSet(this, _modified, false);
                    if (typeof this.onResetModified === "function") {
                      this.onResetModified();
                    }
                  }
                }
                get print() {
                  return new PrintAnnotationStorage(this);
                }
                get serializable() {
                  if (__privateGet(this, _storage).size === 0) {
                    return null;
                  }
                  const clone = /* @__PURE__ */ new Map();
                  for (const [key, val] of __privateGet(this, _storage)) {
                    const serialized = val instanceof _editor.AnnotationEditor ? val.serialize() : val;
                    if (serialized) {
                      clone.set(key, serialized);
                    }
                  }
                  return clone;
                }
                static getHash(map) {
                  if (!map) {
                    return "";
                  }
                  const hash = new _murmurhash.MurmurHash3_64();
                  for (const [key, val] of map) {
                    hash.update(`${key}:${JSON.stringify(val)}`);
                  }
                  return hash.hexdigest();
                }
              }
              _modified = new WeakMap();
              _storage = new WeakMap();
              _AnnotationStorage_instances = new WeakSet();
              setModified_fn = function() {
                if (!__privateGet(this, _modified)) {
                  __privateSet(this, _modified, true);
                  if (typeof this.onSetModified === "function") {
                    this.onSetModified();
                  }
                }
              };
              exports2.AnnotationStorage = AnnotationStorage;
              class PrintAnnotationStorage extends AnnotationStorage {
                constructor(parent) {
                  super();
                  __privateAdd(this, _serializable, null);
                  __privateSet(this, _serializable, structuredClone(parent.serializable));
                }
                get print() {
                  (0, _util2.unreachable)("Should not call PrintAnnotationStorage.print");
                }
                get serializable() {
                  return __privateGet(this, _serializable);
                }
              }
              _serializable = new WeakMap();
              exports2.PrintAnnotationStorage = PrintAnnotationStorage;
            },
            /* 4 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              var _boundFocusin, _boundFocusout, _hasBeenSelected, _isEditing, _isInEditMode, _zIndex;
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.AnnotationEditor = void 0;
              var _tools = __w_pdfjs_require__2(5);
              var _util2 = __w_pdfjs_require__2(1);
              const _AnnotationEditor = class _AnnotationEditor {
                constructor(parameters) {
                  __privateAdd(this, _boundFocusin, this.focusin.bind(this));
                  __privateAdd(this, _boundFocusout, this.focusout.bind(this));
                  __privateAdd(this, _hasBeenSelected, false);
                  __privateAdd(this, _isEditing, false);
                  __privateAdd(this, _isInEditMode, false);
                  __publicField(this, "_uiManager", null);
                  __privateAdd(this, _zIndex, _AnnotationEditor._zIndex++);
                  if (this.constructor === _AnnotationEditor) {
                    (0, _util2.unreachable)("Cannot initialize AnnotationEditor.");
                  }
                  this.parent = parameters.parent;
                  this.id = parameters.id;
                  this.width = this.height = null;
                  this.pageIndex = parameters.parent.pageIndex;
                  this.name = parameters.name;
                  this.div = null;
                  this._uiManager = parameters.uiManager;
                  const {
                    rotation,
                    rawDims: {
                      pageWidth,
                      pageHeight,
                      pageX,
                      pageY
                    }
                  } = this.parent.viewport;
                  this.rotation = rotation;
                  this.pageDimensions = [pageWidth, pageHeight];
                  this.pageTranslation = [pageX, pageY];
                  const [width, height] = this.parentDimensions;
                  this.x = parameters.x / width;
                  this.y = parameters.y / height;
                  this.isAttachedToDOM = false;
                }
                static get _defaultLineColor() {
                  return (0, _util2.shadow)(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
                }
                addCommands(params) {
                  this._uiManager.addCommands(params);
                }
                get currentLayer() {
                  return this._uiManager.currentLayer;
                }
                setInBackground() {
                  this.div.style.zIndex = 0;
                }
                setInForeground() {
                  this.div.style.zIndex = __privateGet(this, _zIndex);
                }
                setParent(parent) {
                  if (parent !== null) {
                    this.pageIndex = parent.pageIndex;
                    this.pageDimensions = parent.pageDimensions;
                  }
                  this.parent = parent;
                }
                focusin(event) {
                  if (!__privateGet(this, _hasBeenSelected)) {
                    this.parent.setSelected(this);
                  } else {
                    __privateSet(this, _hasBeenSelected, false);
                  }
                }
                focusout(event) {
                  var _a;
                  if (!this.isAttachedToDOM) {
                    return;
                  }
                  const target = event.relatedTarget;
                  if (target == null ? void 0 : target.closest(`#${this.id}`)) {
                    return;
                  }
                  event.preventDefault();
                  if (!((_a = this.parent) == null ? void 0 : _a.isMultipleSelection)) {
                    this.commitOrRemove();
                  }
                }
                commitOrRemove() {
                  if (this.isEmpty()) {
                    this.remove();
                  } else {
                    this.commit();
                  }
                }
                commit() {
                  this.addToAnnotationStorage();
                }
                addToAnnotationStorage() {
                  this._uiManager.addToAnnotationStorage(this);
                }
                dragstart(event) {
                  const rect = this.parent.div.getBoundingClientRect();
                  this.startX = event.clientX - rect.x;
                  this.startY = event.clientY - rect.y;
                  event.dataTransfer.setData("text/plain", this.id);
                  event.dataTransfer.effectAllowed = "move";
                }
                setAt(x, y, tx, ty) {
                  const [width, height] = this.parentDimensions;
                  [tx, ty] = this.screenToPageTranslation(tx, ty);
                  this.x = (x + tx) / width;
                  this.y = (y + ty) / height;
                  this.div.style.left = `${100 * this.x}%`;
                  this.div.style.top = `${100 * this.y}%`;
                }
                translate(x, y) {
                  const [width, height] = this.parentDimensions;
                  [x, y] = this.screenToPageTranslation(x, y);
                  this.x += x / width;
                  this.y += y / height;
                  this.div.style.left = `${100 * this.x}%`;
                  this.div.style.top = `${100 * this.y}%`;
                }
                screenToPageTranslation(x, y) {
                  switch (this.parentRotation) {
                    case 90:
                      return [y, -x];
                    case 180:
                      return [-x, -y];
                    case 270:
                      return [-y, x];
                    default:
                      return [x, y];
                  }
                }
                get parentScale() {
                  return this._uiManager.viewParameters.realScale;
                }
                get parentRotation() {
                  return this._uiManager.viewParameters.rotation;
                }
                get parentDimensions() {
                  const {
                    realScale
                  } = this._uiManager.viewParameters;
                  const [pageWidth, pageHeight] = this.pageDimensions;
                  return [pageWidth * realScale, pageHeight * realScale];
                }
                setDims(width, height) {
                  const [parentWidth, parentHeight] = this.parentDimensions;
                  this.div.style.width = `${100 * width / parentWidth}%`;
                  this.div.style.height = `${100 * height / parentHeight}%`;
                }
                fixDims() {
                  const {
                    style
                  } = this.div;
                  const {
                    height,
                    width
                  } = style;
                  const widthPercent = width.endsWith("%");
                  const heightPercent = height.endsWith("%");
                  if (widthPercent && heightPercent) {
                    return;
                  }
                  const [parentWidth, parentHeight] = this.parentDimensions;
                  if (!widthPercent) {
                    style.width = `${100 * parseFloat(width) / parentWidth}%`;
                  }
                  if (!heightPercent) {
                    style.height = `${100 * parseFloat(height) / parentHeight}%`;
                  }
                }
                getInitialTranslation() {
                  return [0, 0];
                }
                render() {
                  this.div = document.createElement("div");
                  this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360);
                  this.div.className = this.name;
                  this.div.setAttribute("id", this.id);
                  this.div.setAttribute("tabIndex", 0);
                  this.setInForeground();
                  this.div.addEventListener("focusin", __privateGet(this, _boundFocusin));
                  this.div.addEventListener("focusout", __privateGet(this, _boundFocusout));
                  const [tx, ty] = this.getInitialTranslation();
                  this.translate(tx, ty);
                  (0, _tools.bindEvents)(this, this.div, ["dragstart", "pointerdown"]);
                  return this.div;
                }
                pointerdown(event) {
                  const {
                    isMac
                  } = _util2.FeatureTest.platform;
                  if (event.button !== 0 || event.ctrlKey && isMac) {
                    event.preventDefault();
                    return;
                  }
                  if (event.ctrlKey && !isMac || event.shiftKey || event.metaKey && isMac) {
                    this.parent.toggleSelected(this);
                  } else {
                    this.parent.setSelected(this);
                  }
                  __privateSet(this, _hasBeenSelected, true);
                }
                getRect(tx, ty) {
                  const scale = this.parentScale;
                  const [pageWidth, pageHeight] = this.pageDimensions;
                  const [pageX, pageY] = this.pageTranslation;
                  const shiftX = tx / scale;
                  const shiftY = ty / scale;
                  const x = this.x * pageWidth;
                  const y = this.y * pageHeight;
                  const width = this.width * pageWidth;
                  const height = this.height * pageHeight;
                  switch (this.rotation) {
                    case 0:
                      return [x + shiftX + pageX, pageHeight - y - shiftY - height + pageY, x + shiftX + width + pageX, pageHeight - y - shiftY + pageY];
                    case 90:
                      return [x + shiftY + pageX, pageHeight - y + shiftX + pageY, x + shiftY + height + pageX, pageHeight - y + shiftX + width + pageY];
                    case 180:
                      return [x - shiftX - width + pageX, pageHeight - y + shiftY + pageY, x - shiftX + pageX, pageHeight - y + shiftY + height + pageY];
                    case 270:
                      return [x - shiftY - height + pageX, pageHeight - y - shiftX - width + pageY, x - shiftY + pageX, pageHeight - y - shiftX + pageY];
                    default:
                      throw new Error("Invalid rotation");
                  }
                }
                getRectInCurrentCoords(rect, pageHeight) {
                  const [x1, y1, x2, y2] = rect;
                  const width = x2 - x1;
                  const height = y2 - y1;
                  switch (this.rotation) {
                    case 0:
                      return [x1, pageHeight - y2, width, height];
                    case 90:
                      return [x1, pageHeight - y1, height, width];
                    case 180:
                      return [x2, pageHeight - y1, width, height];
                    case 270:
                      return [x2, pageHeight - y2, height, width];
                    default:
                      throw new Error("Invalid rotation");
                  }
                }
                onceAdded() {
                }
                isEmpty() {
                  return false;
                }
                enableEditMode() {
                  __privateSet(this, _isInEditMode, true);
                }
                disableEditMode() {
                  __privateSet(this, _isInEditMode, false);
                }
                isInEditMode() {
                  return __privateGet(this, _isInEditMode);
                }
                shouldGetKeyboardEvents() {
                  return false;
                }
                needsToBeRebuilt() {
                  return this.div && !this.isAttachedToDOM;
                }
                rebuild() {
                  var _a;
                  (_a = this.div) == null ? void 0 : _a.addEventListener("focusin", __privateGet(this, _boundFocusin));
                }
                serialize() {
                  (0, _util2.unreachable)("An editor must be serializable");
                }
                static deserialize(data, parent, uiManager) {
                  const editor = new this.prototype.constructor({
                    parent,
                    id: parent.getNextId(),
                    uiManager
                  });
                  editor.rotation = data.rotation;
                  const [pageWidth, pageHeight] = editor.pageDimensions;
                  const [x, y, width, height] = editor.getRectInCurrentCoords(data.rect, pageHeight);
                  editor.x = x / pageWidth;
                  editor.y = y / pageHeight;
                  editor.width = width / pageWidth;
                  editor.height = height / pageHeight;
                  return editor;
                }
                remove() {
                  this.div.removeEventListener("focusin", __privateGet(this, _boundFocusin));
                  this.div.removeEventListener("focusout", __privateGet(this, _boundFocusout));
                  if (!this.isEmpty()) {
                    this.commit();
                  }
                  this.parent.remove(this);
                }
                select() {
                  var _a;
                  (_a = this.div) == null ? void 0 : _a.classList.add("selectedEditor");
                }
                unselect() {
                  var _a;
                  (_a = this.div) == null ? void 0 : _a.classList.remove("selectedEditor");
                }
                updateParams(type, value) {
                }
                disableEditing() {
                }
                enableEditing() {
                }
                get propertiesToUpdate() {
                  return {};
                }
                get contentDiv() {
                  return this.div;
                }
                get isEditing() {
                  return __privateGet(this, _isEditing);
                }
                set isEditing(value) {
                  __privateSet(this, _isEditing, value);
                  if (value) {
                    this.parent.setSelected(this);
                    this.parent.setActiveEditor(this);
                  } else {
                    this.parent.setActiveEditor(null);
                  }
                }
              };
              _boundFocusin = new WeakMap();
              _boundFocusout = new WeakMap();
              _hasBeenSelected = new WeakMap();
              _isEditing = new WeakMap();
              _isInEditMode = new WeakMap();
              _zIndex = new WeakMap();
              __publicField(_AnnotationEditor, "_colorManager", new _tools.ColorManager());
              __publicField(_AnnotationEditor, "_zIndex", 1);
              let AnnotationEditor = _AnnotationEditor;
              exports2.AnnotationEditor = AnnotationEditor;
            },
            /* 5 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              var _id, _commands, _locked, _maxSize, _position, _KeyboardManager_instances, serialize_fn, _activeEditor, _allEditors, _allLayers, _annotationStorage, _commandManager, _currentPageIndex, _editorTypes, _editorsToRescale, _eventBus, _idManager, _isEnabled, _mode, _selectedEditors, _boundCopy, _boundCut, _boundPaste, _boundKeydown, _boundOnEditingAction, _boundOnPageChanging, _boundOnScaleChanging, _boundOnRotationChanging, _previousStates, _container, _AnnotationEditorUIManager_instances, addKeyboardManager_fn, removeKeyboardManager_fn, addCopyPasteListeners_fn, removeCopyPasteListeners_fn, dispatchUpdateStates_fn, dispatchUpdateUI_fn, enableAll_fn, disableAll_fn, addEditorToLayer_fn, isEmpty_fn, selectEditors_fn;
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.KeyboardManager = exports2.CommandManager = exports2.ColorManager = exports2.AnnotationEditorUIManager = void 0;
              exports2.bindEvents = bindEvents;
              exports2.opacityToHex = opacityToHex;
              var _util2 = __w_pdfjs_require__2(1);
              var _display_utils2 = __w_pdfjs_require__2(6);
              function bindEvents(obj, element, names) {
                for (const name of names) {
                  element.addEventListener(name, obj[name].bind(obj));
                }
              }
              function opacityToHex(opacity) {
                return Math.round(Math.min(255, Math.max(1, 255 * opacity))).toString(16).padStart(2, "0");
              }
              class IdManager {
                constructor() {
                  __privateAdd(this, _id, 0);
                }
                getId() {
                  return `${_util2.AnnotationEditorPrefix}${__privateWrapper(this, _id)._++}`;
                }
              }
              _id = new WeakMap();
              class CommandManager {
                constructor(maxSize = 128) {
                  __privateAdd(this, _commands, []);
                  __privateAdd(this, _locked, false);
                  __privateAdd(this, _maxSize);
                  __privateAdd(this, _position, -1);
                  __privateSet(this, _maxSize, maxSize);
                }
                add({
                  cmd,
                  undo,
                  mustExec,
                  type = NaN,
                  overwriteIfSameType = false,
                  keepUndo = false
                }) {
                  if (mustExec) {
                    cmd();
                  }
                  if (__privateGet(this, _locked)) {
                    return;
                  }
                  const save = {
                    cmd,
                    undo,
                    type
                  };
                  if (__privateGet(this, _position) === -1) {
                    if (__privateGet(this, _commands).length > 0) {
                      __privateGet(this, _commands).length = 0;
                    }
                    __privateSet(this, _position, 0);
                    __privateGet(this, _commands).push(save);
                    return;
                  }
                  if (overwriteIfSameType && __privateGet(this, _commands)[__privateGet(this, _position)].type === type) {
                    if (keepUndo) {
                      save.undo = __privateGet(this, _commands)[__privateGet(this, _position)].undo;
                    }
                    __privateGet(this, _commands)[__privateGet(this, _position)] = save;
                    return;
                  }
                  const next = __privateGet(this, _position) + 1;
                  if (next === __privateGet(this, _maxSize)) {
                    __privateGet(this, _commands).splice(0, 1);
                  } else {
                    __privateSet(this, _position, next);
                    if (next < __privateGet(this, _commands).length) {
                      __privateGet(this, _commands).splice(next);
                    }
                  }
                  __privateGet(this, _commands).push(save);
                }
                undo() {
                  if (__privateGet(this, _position) === -1) {
                    return;
                  }
                  __privateSet(this, _locked, true);
                  __privateGet(this, _commands)[__privateGet(this, _position)].undo();
                  __privateSet(this, _locked, false);
                  __privateSet(this, _position, __privateGet(this, _position) - 1);
                }
                redo() {
                  if (__privateGet(this, _position) < __privateGet(this, _commands).length - 1) {
                    __privateSet(this, _position, __privateGet(this, _position) + 1);
                    __privateSet(this, _locked, true);
                    __privateGet(this, _commands)[__privateGet(this, _position)].cmd();
                    __privateSet(this, _locked, false);
                  }
                }
                hasSomethingToUndo() {
                  return __privateGet(this, _position) !== -1;
                }
                hasSomethingToRedo() {
                  return __privateGet(this, _position) < __privateGet(this, _commands).length - 1;
                }
                destroy() {
                  __privateSet(this, _commands, null);
                }
              }
              _commands = new WeakMap();
              _locked = new WeakMap();
              _maxSize = new WeakMap();
              _position = new WeakMap();
              exports2.CommandManager = CommandManager;
              class KeyboardManager {
                constructor(callbacks) {
                  __privateAdd(this, _KeyboardManager_instances);
                  this.buffer = [];
                  this.callbacks = /* @__PURE__ */ new Map();
                  this.allKeys = /* @__PURE__ */ new Set();
                  const {
                    isMac
                  } = _util2.FeatureTest.platform;
                  for (const [keys, callback] of callbacks) {
                    for (const key of keys) {
                      const isMacKey = key.startsWith("mac+");
                      if (isMac && isMacKey) {
                        this.callbacks.set(key.slice(4), callback);
                        this.allKeys.add(key.split("+").at(-1));
                      } else if (!isMac && !isMacKey) {
                        this.callbacks.set(key, callback);
                        this.allKeys.add(key.split("+").at(-1));
                      }
                    }
                  }
                }
                exec(self, event) {
                  if (!this.allKeys.has(event.key)) {
                    return;
                  }
                  const callback = this.callbacks.get(__privateMethod(this, _KeyboardManager_instances, serialize_fn).call(this, event));
                  if (!callback) {
                    return;
                  }
                  callback.bind(self)();
                  event.stopPropagation();
                  event.preventDefault();
                }
              }
              _KeyboardManager_instances = new WeakSet();
              serialize_fn = function(event) {
                if (event.altKey) {
                  this.buffer.push("alt");
                }
                if (event.ctrlKey) {
                  this.buffer.push("ctrl");
                }
                if (event.metaKey) {
                  this.buffer.push("meta");
                }
                if (event.shiftKey) {
                  this.buffer.push("shift");
                }
                this.buffer.push(event.key);
                const str = this.buffer.join("+");
                this.buffer.length = 0;
                return str;
              };
              exports2.KeyboardManager = KeyboardManager;
              const _ColorManager = class _ColorManager {
                get _colors() {
                  const colors = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
                  (0, _display_utils2.getColorValues)(colors);
                  return (0, _util2.shadow)(this, "_colors", colors);
                }
                convert(color) {
                  const rgb = (0, _display_utils2.getRGB)(color);
                  if (!window.matchMedia("(forced-colors: active)").matches) {
                    return rgb;
                  }
                  for (const [name, RGB] of this._colors) {
                    if (RGB.every((x, i) => x === rgb[i])) {
                      return _ColorManager._colorsMapping.get(name);
                    }
                  }
                  return rgb;
                }
                getHexCode(name) {
                  const rgb = this._colors.get(name);
                  if (!rgb) {
                    return name;
                  }
                  return _util2.Util.makeHexColor(...rgb);
                }
              };
              __publicField(_ColorManager, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
              let ColorManager = _ColorManager;
              exports2.ColorManager = ColorManager;
              const _AnnotationEditorUIManager = class _AnnotationEditorUIManager {
                constructor(container, eventBus, annotationStorage) {
                  __privateAdd(this, _AnnotationEditorUIManager_instances);
                  __privateAdd(this, _activeEditor, null);
                  __privateAdd(this, _allEditors, /* @__PURE__ */ new Map());
                  __privateAdd(this, _allLayers, /* @__PURE__ */ new Map());
                  __privateAdd(this, _annotationStorage, null);
                  __privateAdd(this, _commandManager, new CommandManager());
                  __privateAdd(this, _currentPageIndex, 0);
                  __privateAdd(this, _editorTypes, null);
                  __privateAdd(this, _editorsToRescale, /* @__PURE__ */ new Set());
                  __privateAdd(this, _eventBus, null);
                  __privateAdd(this, _idManager, new IdManager());
                  __privateAdd(this, _isEnabled, false);
                  __privateAdd(this, _mode, _util2.AnnotationEditorType.NONE);
                  __privateAdd(this, _selectedEditors, /* @__PURE__ */ new Set());
                  __privateAdd(this, _boundCopy, this.copy.bind(this));
                  __privateAdd(this, _boundCut, this.cut.bind(this));
                  __privateAdd(this, _boundPaste, this.paste.bind(this));
                  __privateAdd(this, _boundKeydown, this.keydown.bind(this));
                  __privateAdd(this, _boundOnEditingAction, this.onEditingAction.bind(this));
                  __privateAdd(this, _boundOnPageChanging, this.onPageChanging.bind(this));
                  __privateAdd(this, _boundOnScaleChanging, this.onScaleChanging.bind(this));
                  __privateAdd(this, _boundOnRotationChanging, this.onRotationChanging.bind(this));
                  __privateAdd(this, _previousStates, {
                    isEditing: false,
                    isEmpty: true,
                    hasSomethingToUndo: false,
                    hasSomethingToRedo: false,
                    hasSelectedEditor: false
                  });
                  __privateAdd(this, _container, null);
                  __privateSet(this, _container, container);
                  __privateSet(this, _eventBus, eventBus);
                  __privateGet(this, _eventBus)._on("editingaction", __privateGet(this, _boundOnEditingAction));
                  __privateGet(this, _eventBus)._on("pagechanging", __privateGet(this, _boundOnPageChanging));
                  __privateGet(this, _eventBus)._on("scalechanging", __privateGet(this, _boundOnScaleChanging));
                  __privateGet(this, _eventBus)._on("rotationchanging", __privateGet(this, _boundOnRotationChanging));
                  __privateSet(this, _annotationStorage, annotationStorage);
                  this.viewParameters = {
                    realScale: _display_utils2.PixelsPerInch.PDF_TO_CSS_UNITS,
                    rotation: 0
                  };
                }
                destroy() {
                  __privateMethod(this, _AnnotationEditorUIManager_instances, removeKeyboardManager_fn).call(this);
                  __privateGet(this, _eventBus)._off("editingaction", __privateGet(this, _boundOnEditingAction));
                  __privateGet(this, _eventBus)._off("pagechanging", __privateGet(this, _boundOnPageChanging));
                  __privateGet(this, _eventBus)._off("scalechanging", __privateGet(this, _boundOnScaleChanging));
                  __privateGet(this, _eventBus)._off("rotationchanging", __privateGet(this, _boundOnRotationChanging));
                  for (const layer of __privateGet(this, _allLayers).values()) {
                    layer.destroy();
                  }
                  __privateGet(this, _allLayers).clear();
                  __privateGet(this, _allEditors).clear();
                  __privateGet(this, _editorsToRescale).clear();
                  __privateSet(this, _activeEditor, null);
                  __privateGet(this, _selectedEditors).clear();
                  __privateGet(this, _commandManager).destroy();
                }
                onPageChanging({
                  pageNumber
                }) {
                  __privateSet(this, _currentPageIndex, pageNumber - 1);
                }
                focusMainContainer() {
                  __privateGet(this, _container).focus();
                }
                addShouldRescale(editor) {
                  __privateGet(this, _editorsToRescale).add(editor);
                }
                removeShouldRescale(editor) {
                  __privateGet(this, _editorsToRescale).delete(editor);
                }
                onScaleChanging({
                  scale
                }) {
                  this.commitOrRemove();
                  this.viewParameters.realScale = scale * _display_utils2.PixelsPerInch.PDF_TO_CSS_UNITS;
                  for (const editor of __privateGet(this, _editorsToRescale)) {
                    editor.onScaleChanging();
                  }
                }
                onRotationChanging({
                  pagesRotation
                }) {
                  this.commitOrRemove();
                  this.viewParameters.rotation = pagesRotation;
                }
                addToAnnotationStorage(editor) {
                  if (!editor.isEmpty() && __privateGet(this, _annotationStorage) && !__privateGet(this, _annotationStorage).has(editor.id)) {
                    __privateGet(this, _annotationStorage).setValue(editor.id, editor);
                  }
                }
                copy(event) {
                  event.preventDefault();
                  if (__privateGet(this, _activeEditor)) {
                    __privateGet(this, _activeEditor).commitOrRemove();
                  }
                  if (!this.hasSelection) {
                    return;
                  }
                  const editors = [];
                  for (const editor of __privateGet(this, _selectedEditors)) {
                    if (!editor.isEmpty()) {
                      editors.push(editor.serialize());
                    }
                  }
                  if (editors.length === 0) {
                    return;
                  }
                  event.clipboardData.setData("application/pdfjs", JSON.stringify(editors));
                }
                cut(event) {
                  this.copy(event);
                  this.delete();
                }
                paste(event) {
                  event.preventDefault();
                  let data = event.clipboardData.getData("application/pdfjs");
                  if (!data) {
                    return;
                  }
                  try {
                    data = JSON.parse(data);
                  } catch (ex) {
                    (0, _util2.warn)(`paste: "${ex.message}".`);
                    return;
                  }
                  if (!Array.isArray(data)) {
                    return;
                  }
                  this.unselectAll();
                  const layer = __privateGet(this, _allLayers).get(__privateGet(this, _currentPageIndex));
                  try {
                    const newEditors = [];
                    for (const editor of data) {
                      const deserializedEditor = layer.deserialize(editor);
                      if (!deserializedEditor) {
                        return;
                      }
                      newEditors.push(deserializedEditor);
                    }
                    const cmd = () => {
                      for (const editor of newEditors) {
                        __privateMethod(this, _AnnotationEditorUIManager_instances, addEditorToLayer_fn).call(this, editor);
                      }
                      __privateMethod(this, _AnnotationEditorUIManager_instances, selectEditors_fn).call(this, newEditors);
                    };
                    const undo = () => {
                      for (const editor of newEditors) {
                        editor.remove();
                      }
                    };
                    this.addCommands({
                      cmd,
                      undo,
                      mustExec: true
                    });
                  } catch (ex) {
                    (0, _util2.warn)(`paste: "${ex.message}".`);
                  }
                }
                keydown(event) {
                  var _a;
                  if (!((_a = this.getActive()) == null ? void 0 : _a.shouldGetKeyboardEvents())) {
                    _AnnotationEditorUIManager._keyboardManager.exec(this, event);
                  }
                }
                onEditingAction(details) {
                  if (["undo", "redo", "delete", "selectAll"].includes(details.name)) {
                    this[details.name]();
                  }
                }
                setEditingState(isEditing) {
                  if (isEditing) {
                    __privateMethod(this, _AnnotationEditorUIManager_instances, addKeyboardManager_fn).call(this);
                    __privateMethod(this, _AnnotationEditorUIManager_instances, addCopyPasteListeners_fn).call(this);
                    __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateStates_fn).call(this, {
                      isEditing: __privateGet(this, _mode) !== _util2.AnnotationEditorType.NONE,
                      isEmpty: __privateMethod(this, _AnnotationEditorUIManager_instances, isEmpty_fn).call(this),
                      hasSomethingToUndo: __privateGet(this, _commandManager).hasSomethingToUndo(),
                      hasSomethingToRedo: __privateGet(this, _commandManager).hasSomethingToRedo(),
                      hasSelectedEditor: false
                    });
                  } else {
                    __privateMethod(this, _AnnotationEditorUIManager_instances, removeKeyboardManager_fn).call(this);
                    __privateMethod(this, _AnnotationEditorUIManager_instances, removeCopyPasteListeners_fn).call(this);
                    __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateStates_fn).call(this, {
                      isEditing: false
                    });
                  }
                }
                registerEditorTypes(types) {
                  if (__privateGet(this, _editorTypes)) {
                    return;
                  }
                  __privateSet(this, _editorTypes, types);
                  for (const editorType of __privateGet(this, _editorTypes)) {
                    __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateUI_fn).call(this, editorType.defaultPropertiesToUpdate);
                  }
                }
                getId() {
                  return __privateGet(this, _idManager).getId();
                }
                get currentLayer() {
                  return __privateGet(this, _allLayers).get(__privateGet(this, _currentPageIndex));
                }
                get currentPageIndex() {
                  return __privateGet(this, _currentPageIndex);
                }
                addLayer(layer) {
                  __privateGet(this, _allLayers).set(layer.pageIndex, layer);
                  if (__privateGet(this, _isEnabled)) {
                    layer.enable();
                  } else {
                    layer.disable();
                  }
                }
                removeLayer(layer) {
                  __privateGet(this, _allLayers).delete(layer.pageIndex);
                }
                updateMode(mode) {
                  __privateSet(this, _mode, mode);
                  if (mode === _util2.AnnotationEditorType.NONE) {
                    this.setEditingState(false);
                    __privateMethod(this, _AnnotationEditorUIManager_instances, disableAll_fn).call(this);
                  } else {
                    this.setEditingState(true);
                    __privateMethod(this, _AnnotationEditorUIManager_instances, enableAll_fn).call(this);
                    for (const layer of __privateGet(this, _allLayers).values()) {
                      layer.updateMode(mode);
                    }
                  }
                }
                updateToolbar(mode) {
                  if (mode === __privateGet(this, _mode)) {
                    return;
                  }
                  __privateGet(this, _eventBus).dispatch("switchannotationeditormode", {
                    source: this,
                    mode
                  });
                }
                updateParams(type, value) {
                  if (!__privateGet(this, _editorTypes)) {
                    return;
                  }
                  for (const editor of __privateGet(this, _selectedEditors)) {
                    editor.updateParams(type, value);
                  }
                  for (const editorType of __privateGet(this, _editorTypes)) {
                    editorType.updateDefaultParams(type, value);
                  }
                }
                getEditors(pageIndex) {
                  const editors = [];
                  for (const editor of __privateGet(this, _allEditors).values()) {
                    if (editor.pageIndex === pageIndex) {
                      editors.push(editor);
                    }
                  }
                  return editors;
                }
                getEditor(id) {
                  return __privateGet(this, _allEditors).get(id);
                }
                addEditor(editor) {
                  __privateGet(this, _allEditors).set(editor.id, editor);
                }
                removeEditor(editor) {
                  var _a;
                  __privateGet(this, _allEditors).delete(editor.id);
                  this.unselect(editor);
                  (_a = __privateGet(this, _annotationStorage)) == null ? void 0 : _a.remove(editor.id);
                }
                setActiveEditor(editor) {
                  if (__privateGet(this, _activeEditor) === editor) {
                    return;
                  }
                  __privateSet(this, _activeEditor, editor);
                  if (editor) {
                    __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateUI_fn).call(this, editor.propertiesToUpdate);
                  }
                }
                toggleSelected(editor) {
                  if (__privateGet(this, _selectedEditors).has(editor)) {
                    __privateGet(this, _selectedEditors).delete(editor);
                    editor.unselect();
                    __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateStates_fn).call(this, {
                      hasSelectedEditor: this.hasSelection
                    });
                    return;
                  }
                  __privateGet(this, _selectedEditors).add(editor);
                  editor.select();
                  __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateUI_fn).call(this, editor.propertiesToUpdate);
                  __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateStates_fn).call(this, {
                    hasSelectedEditor: true
                  });
                }
                setSelected(editor) {
                  for (const ed of __privateGet(this, _selectedEditors)) {
                    if (ed !== editor) {
                      ed.unselect();
                    }
                  }
                  __privateGet(this, _selectedEditors).clear();
                  __privateGet(this, _selectedEditors).add(editor);
                  editor.select();
                  __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateUI_fn).call(this, editor.propertiesToUpdate);
                  __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateStates_fn).call(this, {
                    hasSelectedEditor: true
                  });
                }
                isSelected(editor) {
                  return __privateGet(this, _selectedEditors).has(editor);
                }
                unselect(editor) {
                  editor.unselect();
                  __privateGet(this, _selectedEditors).delete(editor);
                  __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateStates_fn).call(this, {
                    hasSelectedEditor: this.hasSelection
                  });
                }
                get hasSelection() {
                  return __privateGet(this, _selectedEditors).size !== 0;
                }
                undo() {
                  __privateGet(this, _commandManager).undo();
                  __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateStates_fn).call(this, {
                    hasSomethingToUndo: __privateGet(this, _commandManager).hasSomethingToUndo(),
                    hasSomethingToRedo: true,
                    isEmpty: __privateMethod(this, _AnnotationEditorUIManager_instances, isEmpty_fn).call(this)
                  });
                }
                redo() {
                  __privateGet(this, _commandManager).redo();
                  __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateStates_fn).call(this, {
                    hasSomethingToUndo: true,
                    hasSomethingToRedo: __privateGet(this, _commandManager).hasSomethingToRedo(),
                    isEmpty: __privateMethod(this, _AnnotationEditorUIManager_instances, isEmpty_fn).call(this)
                  });
                }
                addCommands(params) {
                  __privateGet(this, _commandManager).add(params);
                  __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateStates_fn).call(this, {
                    hasSomethingToUndo: true,
                    hasSomethingToRedo: false,
                    isEmpty: __privateMethod(this, _AnnotationEditorUIManager_instances, isEmpty_fn).call(this)
                  });
                }
                delete() {
                  this.commitOrRemove();
                  if (!this.hasSelection) {
                    return;
                  }
                  const editors = [...__privateGet(this, _selectedEditors)];
                  const cmd = () => {
                    for (const editor of editors) {
                      editor.remove();
                    }
                  };
                  const undo = () => {
                    for (const editor of editors) {
                      __privateMethod(this, _AnnotationEditorUIManager_instances, addEditorToLayer_fn).call(this, editor);
                    }
                  };
                  this.addCommands({
                    cmd,
                    undo,
                    mustExec: true
                  });
                }
                commitOrRemove() {
                  var _a;
                  (_a = __privateGet(this, _activeEditor)) == null ? void 0 : _a.commitOrRemove();
                }
                selectAll() {
                  for (const editor of __privateGet(this, _selectedEditors)) {
                    editor.commit();
                  }
                  __privateMethod(this, _AnnotationEditorUIManager_instances, selectEditors_fn).call(this, __privateGet(this, _allEditors).values());
                }
                unselectAll() {
                  if (__privateGet(this, _activeEditor)) {
                    __privateGet(this, _activeEditor).commitOrRemove();
                    return;
                  }
                  if (__privateGet(this, _selectedEditors).size === 0) {
                    return;
                  }
                  for (const editor of __privateGet(this, _selectedEditors)) {
                    editor.unselect();
                  }
                  __privateGet(this, _selectedEditors).clear();
                  __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateStates_fn).call(this, {
                    hasSelectedEditor: false
                  });
                }
                isActive(editor) {
                  return __privateGet(this, _activeEditor) === editor;
                }
                getActive() {
                  return __privateGet(this, _activeEditor);
                }
                getMode() {
                  return __privateGet(this, _mode);
                }
              };
              _activeEditor = new WeakMap();
              _allEditors = new WeakMap();
              _allLayers = new WeakMap();
              _annotationStorage = new WeakMap();
              _commandManager = new WeakMap();
              _currentPageIndex = new WeakMap();
              _editorTypes = new WeakMap();
              _editorsToRescale = new WeakMap();
              _eventBus = new WeakMap();
              _idManager = new WeakMap();
              _isEnabled = new WeakMap();
              _mode = new WeakMap();
              _selectedEditors = new WeakMap();
              _boundCopy = new WeakMap();
              _boundCut = new WeakMap();
              _boundPaste = new WeakMap();
              _boundKeydown = new WeakMap();
              _boundOnEditingAction = new WeakMap();
              _boundOnPageChanging = new WeakMap();
              _boundOnScaleChanging = new WeakMap();
              _boundOnRotationChanging = new WeakMap();
              _previousStates = new WeakMap();
              _container = new WeakMap();
              _AnnotationEditorUIManager_instances = new WeakSet();
              addKeyboardManager_fn = function() {
                __privateGet(this, _container).addEventListener("keydown", __privateGet(this, _boundKeydown));
              };
              removeKeyboardManager_fn = function() {
                __privateGet(this, _container).removeEventListener("keydown", __privateGet(this, _boundKeydown));
              };
              addCopyPasteListeners_fn = function() {
                document.addEventListener("copy", __privateGet(this, _boundCopy));
                document.addEventListener("cut", __privateGet(this, _boundCut));
                document.addEventListener("paste", __privateGet(this, _boundPaste));
              };
              removeCopyPasteListeners_fn = function() {
                document.removeEventListener("copy", __privateGet(this, _boundCopy));
                document.removeEventListener("cut", __privateGet(this, _boundCut));
                document.removeEventListener("paste", __privateGet(this, _boundPaste));
              };
              dispatchUpdateStates_fn = function(details) {
                const hasChanged = Object.entries(details).some(([key, value]) => __privateGet(this, _previousStates)[key] !== value);
                if (hasChanged) {
                  __privateGet(this, _eventBus).dispatch("annotationeditorstateschanged", {
                    source: this,
                    details: Object.assign(__privateGet(this, _previousStates), details)
                  });
                }
              };
              dispatchUpdateUI_fn = function(details) {
                __privateGet(this, _eventBus).dispatch("annotationeditorparamschanged", {
                  source: this,
                  details
                });
              };
              enableAll_fn = function() {
                if (!__privateGet(this, _isEnabled)) {
                  __privateSet(this, _isEnabled, true);
                  for (const layer of __privateGet(this, _allLayers).values()) {
                    layer.enable();
                  }
                }
              };
              disableAll_fn = function() {
                this.unselectAll();
                if (__privateGet(this, _isEnabled)) {
                  __privateSet(this, _isEnabled, false);
                  for (const layer of __privateGet(this, _allLayers).values()) {
                    layer.disable();
                  }
                }
              };
              addEditorToLayer_fn = function(editor) {
                const layer = __privateGet(this, _allLayers).get(editor.pageIndex);
                if (layer) {
                  layer.addOrRebuild(editor);
                } else {
                  this.addEditor(editor);
                }
              };
              isEmpty_fn = function() {
                if (__privateGet(this, _allEditors).size === 0) {
                  return true;
                }
                if (__privateGet(this, _allEditors).size === 1) {
                  for (const editor of __privateGet(this, _allEditors).values()) {
                    return editor.isEmpty();
                  }
                }
                return false;
              };
              selectEditors_fn = function(editors) {
                __privateGet(this, _selectedEditors).clear();
                for (const editor of editors) {
                  if (editor.isEmpty()) {
                    continue;
                  }
                  __privateGet(this, _selectedEditors).add(editor);
                  editor.select();
                }
                __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateStates_fn).call(this, {
                  hasSelectedEditor: true
                });
              };
              __publicField(_AnnotationEditorUIManager, "_keyboardManager", new KeyboardManager([[["ctrl+a", "mac+meta+a"], _AnnotationEditorUIManager.prototype.selectAll], [["ctrl+z", "mac+meta+z"], _AnnotationEditorUIManager.prototype.undo], [["ctrl+y", "ctrl+shift+Z", "mac+meta+shift+Z"], _AnnotationEditorUIManager.prototype.redo], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete"], _AnnotationEditorUIManager.prototype.delete], [["Escape", "mac+Escape"], _AnnotationEditorUIManager.prototype.unselectAll]]));
              let AnnotationEditorUIManager = _AnnotationEditorUIManager;
              exports2.AnnotationEditorUIManager = AnnotationEditorUIManager;
            },
            /* 6 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.StatTimer = exports2.RenderingCancelledException = exports2.PixelsPerInch = exports2.PageViewport = exports2.PDFDateString = exports2.DOMStandardFontDataFactory = exports2.DOMSVGFactory = exports2.DOMCanvasFactory = exports2.DOMCMapReaderFactory = exports2.AnnotationPrefix = void 0;
              exports2.deprecated = deprecated;
              exports2.getColorValues = getColorValues;
              exports2.getCurrentTransform = getCurrentTransform;
              exports2.getCurrentTransformInverse = getCurrentTransformInverse;
              exports2.getFilenameFromUrl = getFilenameFromUrl;
              exports2.getPdfFilenameFromUrl = getPdfFilenameFromUrl;
              exports2.getRGB = getRGB;
              exports2.getXfaPageViewport = getXfaPageViewport;
              exports2.isDataScheme = isDataScheme;
              exports2.isPdfFile = isPdfFile;
              exports2.isValidFetchUrl = isValidFetchUrl;
              exports2.loadScript = loadScript;
              exports2.setLayerDimensions = setLayerDimensions;
              var _base_factory = __w_pdfjs_require__2(7);
              var _util2 = __w_pdfjs_require__2(1);
              const SVG_NS = "http://www.w3.org/2000/svg";
              const AnnotationPrefix = "pdfjs_internal_id_";
              exports2.AnnotationPrefix = AnnotationPrefix;
              const _PixelsPerInch = class _PixelsPerInch {
              };
              __publicField(_PixelsPerInch, "CSS", 96);
              __publicField(_PixelsPerInch, "PDF", 72);
              __publicField(_PixelsPerInch, "PDF_TO_CSS_UNITS", _PixelsPerInch.CSS / _PixelsPerInch.PDF);
              let PixelsPerInch = _PixelsPerInch;
              exports2.PixelsPerInch = PixelsPerInch;
              class DOMCanvasFactory extends _base_factory.BaseCanvasFactory {
                constructor({
                  ownerDocument = globalThis.document
                } = {}) {
                  super();
                  this._document = ownerDocument;
                }
                _createCanvas(width, height) {
                  const canvas = this._document.createElement("canvas");
                  canvas.width = width;
                  canvas.height = height;
                  return canvas;
                }
              }
              exports2.DOMCanvasFactory = DOMCanvasFactory;
              async function fetchData(url, asTypedArray = false) {
                if (isValidFetchUrl(url, document.baseURI)) {
                  const response = await fetch(url);
                  if (!response.ok) {
                    throw new Error(response.statusText);
                  }
                  return asTypedArray ? new Uint8Array(await response.arrayBuffer()) : (0, _util2.stringToBytes)(await response.text());
                }
                return new Promise((resolve, reject) => {
                  const request = new XMLHttpRequest();
                  request.open("GET", url, true);
                  if (asTypedArray) {
                    request.responseType = "arraybuffer";
                  }
                  request.onreadystatechange = () => {
                    if (request.readyState !== XMLHttpRequest.DONE) {
                      return;
                    }
                    if (request.status === 200 || request.status === 0) {
                      let data;
                      if (asTypedArray && request.response) {
                        data = new Uint8Array(request.response);
                      } else if (!asTypedArray && request.responseText) {
                        data = (0, _util2.stringToBytes)(request.responseText);
                      }
                      if (data) {
                        resolve(data);
                        return;
                      }
                    }
                    reject(new Error(request.statusText));
                  };
                  request.send(null);
                });
              }
              class DOMCMapReaderFactory extends _base_factory.BaseCMapReaderFactory {
                _fetchData(url, compressionType) {
                  return fetchData(url, this.isCompressed).then((data) => {
                    return {
                      cMapData: data,
                      compressionType
                    };
                  });
                }
              }
              exports2.DOMCMapReaderFactory = DOMCMapReaderFactory;
              class DOMStandardFontDataFactory extends _base_factory.BaseStandardFontDataFactory {
                _fetchData(url) {
                  return fetchData(url, true);
                }
              }
              exports2.DOMStandardFontDataFactory = DOMStandardFontDataFactory;
              class DOMSVGFactory extends _base_factory.BaseSVGFactory {
                _createSVG(type) {
                  return document.createElementNS(SVG_NS, type);
                }
              }
              exports2.DOMSVGFactory = DOMSVGFactory;
              class PageViewport {
                constructor({
                  viewBox,
                  scale,
                  rotation,
                  offsetX = 0,
                  offsetY = 0,
                  dontFlip = false
                }) {
                  this.viewBox = viewBox;
                  this.scale = scale;
                  this.rotation = rotation;
                  this.offsetX = offsetX;
                  this.offsetY = offsetY;
                  const centerX = (viewBox[2] + viewBox[0]) / 2;
                  const centerY = (viewBox[3] + viewBox[1]) / 2;
                  let rotateA, rotateB, rotateC, rotateD;
                  rotation %= 360;
                  if (rotation < 0) {
                    rotation += 360;
                  }
                  switch (rotation) {
                    case 180:
                      rotateA = -1;
                      rotateB = 0;
                      rotateC = 0;
                      rotateD = 1;
                      break;
                    case 90:
                      rotateA = 0;
                      rotateB = 1;
                      rotateC = 1;
                      rotateD = 0;
                      break;
                    case 270:
                      rotateA = 0;
                      rotateB = -1;
                      rotateC = -1;
                      rotateD = 0;
                      break;
                    case 0:
                      rotateA = 1;
                      rotateB = 0;
                      rotateC = 0;
                      rotateD = -1;
                      break;
                    default:
                      throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
                  }
                  if (dontFlip) {
                    rotateC = -rotateC;
                    rotateD = -rotateD;
                  }
                  let offsetCanvasX, offsetCanvasY;
                  let width, height;
                  if (rotateA === 0) {
                    offsetCanvasX = Math.abs(centerY - viewBox[1]) * scale + offsetX;
                    offsetCanvasY = Math.abs(centerX - viewBox[0]) * scale + offsetY;
                    width = (viewBox[3] - viewBox[1]) * scale;
                    height = (viewBox[2] - viewBox[0]) * scale;
                  } else {
                    offsetCanvasX = Math.abs(centerX - viewBox[0]) * scale + offsetX;
                    offsetCanvasY = Math.abs(centerY - viewBox[1]) * scale + offsetY;
                    width = (viewBox[2] - viewBox[0]) * scale;
                    height = (viewBox[3] - viewBox[1]) * scale;
                  }
                  this.transform = [rotateA * scale, rotateB * scale, rotateC * scale, rotateD * scale, offsetCanvasX - rotateA * scale * centerX - rotateC * scale * centerY, offsetCanvasY - rotateB * scale * centerX - rotateD * scale * centerY];
                  this.width = width;
                  this.height = height;
                }
                get rawDims() {
                  const {
                    viewBox
                  } = this;
                  return (0, _util2.shadow)(this, "rawDims", {
                    pageWidth: viewBox[2] - viewBox[0],
                    pageHeight: viewBox[3] - viewBox[1],
                    pageX: viewBox[0],
                    pageY: viewBox[1]
                  });
                }
                clone({
                  scale = this.scale,
                  rotation = this.rotation,
                  offsetX = this.offsetX,
                  offsetY = this.offsetY,
                  dontFlip = false
                } = {}) {
                  return new PageViewport({
                    viewBox: this.viewBox.slice(),
                    scale,
                    rotation,
                    offsetX,
                    offsetY,
                    dontFlip
                  });
                }
                convertToViewportPoint(x, y) {
                  return _util2.Util.applyTransform([x, y], this.transform);
                }
                convertToViewportRectangle(rect) {
                  const topLeft = _util2.Util.applyTransform([rect[0], rect[1]], this.transform);
                  const bottomRight = _util2.Util.applyTransform([rect[2], rect[3]], this.transform);
                  return [topLeft[0], topLeft[1], bottomRight[0], bottomRight[1]];
                }
                convertToPdfPoint(x, y) {
                  return _util2.Util.applyInverseTransform([x, y], this.transform);
                }
              }
              exports2.PageViewport = PageViewport;
              class RenderingCancelledException extends _util2.BaseException {
                constructor(msg, type, extraDelay = 0) {
                  super(msg, "RenderingCancelledException");
                  this.type = type;
                  this.extraDelay = extraDelay;
                }
              }
              exports2.RenderingCancelledException = RenderingCancelledException;
              function isDataScheme(url) {
                const ii = url.length;
                let i = 0;
                while (i < ii && url[i].trim() === "") {
                  i++;
                }
                return url.substring(i, i + 5).toLowerCase() === "data:";
              }
              function isPdfFile(filename) {
                return typeof filename === "string" && /\.pdf$/i.test(filename);
              }
              function getFilenameFromUrl(url, onlyStripPath = false) {
                if (!onlyStripPath) {
                  [url] = url.split(/[#?]/, 1);
                }
                return url.substring(url.lastIndexOf("/") + 1);
              }
              function getPdfFilenameFromUrl(url, defaultFilename = "document.pdf") {
                if (typeof url !== "string") {
                  return defaultFilename;
                }
                if (isDataScheme(url)) {
                  (0, _util2.warn)('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.');
                  return defaultFilename;
                }
                const reURI = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/;
                const reFilename = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i;
                const splitURI = reURI.exec(url);
                let suggestedFilename = reFilename.exec(splitURI[1]) || reFilename.exec(splitURI[2]) || reFilename.exec(splitURI[3]);
                if (suggestedFilename) {
                  suggestedFilename = suggestedFilename[0];
                  if (suggestedFilename.includes("%")) {
                    try {
                      suggestedFilename = reFilename.exec(decodeURIComponent(suggestedFilename))[0];
                    } catch (ex) {
                    }
                  }
                }
                return suggestedFilename || defaultFilename;
              }
              class StatTimer {
                constructor() {
                  __publicField(this, "started", /* @__PURE__ */ Object.create(null));
                  __publicField(this, "times", []);
                }
                time(name) {
                  if (name in this.started) {
                    (0, _util2.warn)(`Timer is already running for ${name}`);
                  }
                  this.started[name] = Date.now();
                }
                timeEnd(name) {
                  if (!(name in this.started)) {
                    (0, _util2.warn)(`Timer has not been started for ${name}`);
                  }
                  this.times.push({
                    name,
                    start: this.started[name],
                    end: Date.now()
                  });
                  delete this.started[name];
                }
                toString() {
                  const outBuf = [];
                  let longest = 0;
                  for (const {
                    name
                  } of this.times) {
                    longest = Math.max(name.length, longest);
                  }
                  for (const {
                    name,
                    start,
                    end
                  } of this.times) {
                    outBuf.push(`${name.padEnd(longest)} ${end - start}ms
`);
                  }
                  return outBuf.join("");
                }
              }
              exports2.StatTimer = StatTimer;
              function isValidFetchUrl(url, baseUrl) {
                try {
                  const {
                    protocol
                  } = baseUrl ? new URL(url, baseUrl) : new URL(url);
                  return protocol === "http:" || protocol === "https:";
                } catch (ex) {
                  return false;
                }
              }
              function loadScript(src, removeScriptElement = false) {
                return new Promise((resolve, reject) => {
                  const script = document.createElement("script");
                  script.src = src;
                  script.onload = function(evt) {
                    if (removeScriptElement) {
                      script.remove();
                    }
                    resolve(evt);
                  };
                  script.onerror = function() {
                    reject(new Error(`Cannot load script at: ${script.src}`));
                  };
                  (document.head || document.documentElement).append(script);
                });
              }
              function deprecated(details) {
                console.log("Deprecated API usage: " + details);
              }
              let pdfDateStringRegex;
              class PDFDateString {
                static toDateObject(input) {
                  if (!input || typeof input !== "string") {
                    return null;
                  }
                  if (!pdfDateStringRegex) {
                    pdfDateStringRegex = new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?");
                  }
                  const matches = pdfDateStringRegex.exec(input);
                  if (!matches) {
                    return null;
                  }
                  const year = parseInt(matches[1], 10);
                  let month = parseInt(matches[2], 10);
                  month = month >= 1 && month <= 12 ? month - 1 : 0;
                  let day = parseInt(matches[3], 10);
                  day = day >= 1 && day <= 31 ? day : 1;
                  let hour = parseInt(matches[4], 10);
                  hour = hour >= 0 && hour <= 23 ? hour : 0;
                  let minute = parseInt(matches[5], 10);
                  minute = minute >= 0 && minute <= 59 ? minute : 0;
                  let second = parseInt(matches[6], 10);
                  second = second >= 0 && second <= 59 ? second : 0;
                  const universalTimeRelation = matches[7] || "Z";
                  let offsetHour = parseInt(matches[8], 10);
                  offsetHour = offsetHour >= 0 && offsetHour <= 23 ? offsetHour : 0;
                  let offsetMinute = parseInt(matches[9], 10) || 0;
                  offsetMinute = offsetMinute >= 0 && offsetMinute <= 59 ? offsetMinute : 0;
                  if (universalTimeRelation === "-") {
                    hour += offsetHour;
                    minute += offsetMinute;
                  } else if (universalTimeRelation === "+") {
                    hour -= offsetHour;
                    minute -= offsetMinute;
                  }
                  return new Date(Date.UTC(year, month, day, hour, minute, second));
                }
              }
              exports2.PDFDateString = PDFDateString;
              function getXfaPageViewport(xfaPage, {
                scale = 1,
                rotation = 0
              }) {
                const {
                  width,
                  height
                } = xfaPage.attributes.style;
                const viewBox = [0, 0, parseInt(width), parseInt(height)];
                return new PageViewport({
                  viewBox,
                  scale,
                  rotation
                });
              }
              function getRGB(color) {
                if (color.startsWith("#")) {
                  const colorRGB = parseInt(color.slice(1), 16);
                  return [(colorRGB & 16711680) >> 16, (colorRGB & 65280) >> 8, colorRGB & 255];
                }
                if (color.startsWith("rgb(")) {
                  return color.slice(4, -1).split(",").map((x) => parseInt(x));
                }
                if (color.startsWith("rgba(")) {
                  return color.slice(5, -1).split(",").map((x) => parseInt(x)).slice(0, 3);
                }
                (0, _util2.warn)(`Not a valid color format: "${color}"`);
                return [0, 0, 0];
              }
              function getColorValues(colors) {
                const span = document.createElement("span");
                span.style.visibility = "hidden";
                document.body.append(span);
                for (const name of colors.keys()) {
                  span.style.color = name;
                  const computedColor = window.getComputedStyle(span).color;
                  colors.set(name, getRGB(computedColor));
                }
                span.remove();
              }
              function getCurrentTransform(ctx) {
                const {
                  a,
                  b,
                  c,
                  d,
                  e,
                  f
                } = ctx.getTransform();
                return [a, b, c, d, e, f];
              }
              function getCurrentTransformInverse(ctx) {
                const {
                  a,
                  b,
                  c,
                  d,
                  e,
                  f
                } = ctx.getTransform().invertSelf();
                return [a, b, c, d, e, f];
              }
              function setLayerDimensions(div, viewport, mustFlip = false, mustRotate = true) {
                if (viewport instanceof PageViewport) {
                  const {
                    pageWidth,
                    pageHeight
                  } = viewport.rawDims;
                  const {
                    style
                  } = div;
                  const widthStr = `calc(var(--scale-factor) * ${pageWidth}px)`;
                  const heightStr = `calc(var(--scale-factor) * ${pageHeight}px)`;
                  if (!mustFlip || viewport.rotation % 180 === 0) {
                    style.width = widthStr;
                    style.height = heightStr;
                  } else {
                    style.width = heightStr;
                    style.height = widthStr;
                  }
                }
                if (mustRotate) {
                  div.setAttribute("data-main-rotation", viewport.rotation);
                }
              }
            },
            /* 7 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.BaseStandardFontDataFactory = exports2.BaseSVGFactory = exports2.BaseCanvasFactory = exports2.BaseCMapReaderFactory = void 0;
              var _util2 = __w_pdfjs_require__2(1);
              class BaseCanvasFactory {
                constructor() {
                  if (this.constructor === BaseCanvasFactory) {
                    (0, _util2.unreachable)("Cannot initialize BaseCanvasFactory.");
                  }
                }
                create(width, height) {
                  if (width <= 0 || height <= 0) {
                    throw new Error("Invalid canvas size");
                  }
                  const canvas = this._createCanvas(width, height);
                  return {
                    canvas,
                    context: canvas.getContext("2d")
                  };
                }
                reset(canvasAndContext, width, height) {
                  if (!canvasAndContext.canvas) {
                    throw new Error("Canvas is not specified");
                  }
                  if (width <= 0 || height <= 0) {
                    throw new Error("Invalid canvas size");
                  }
                  canvasAndContext.canvas.width = width;
                  canvasAndContext.canvas.height = height;
                }
                destroy(canvasAndContext) {
                  if (!canvasAndContext.canvas) {
                    throw new Error("Canvas is not specified");
                  }
                  canvasAndContext.canvas.width = 0;
                  canvasAndContext.canvas.height = 0;
                  canvasAndContext.canvas = null;
                  canvasAndContext.context = null;
                }
                _createCanvas(width, height) {
                  (0, _util2.unreachable)("Abstract method `_createCanvas` called.");
                }
              }
              exports2.BaseCanvasFactory = BaseCanvasFactory;
              class BaseCMapReaderFactory {
                constructor({
                  baseUrl = null,
                  isCompressed = true
                }) {
                  if (this.constructor === BaseCMapReaderFactory) {
                    (0, _util2.unreachable)("Cannot initialize BaseCMapReaderFactory.");
                  }
                  this.baseUrl = baseUrl;
                  this.isCompressed = isCompressed;
                }
                async fetch({
                  name
                }) {
                  if (!this.baseUrl) {
                    throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');
                  }
                  if (!name) {
                    throw new Error("CMap name must be specified.");
                  }
                  const url = this.baseUrl + name + (this.isCompressed ? ".bcmap" : "");
                  const compressionType = this.isCompressed ? _util2.CMapCompressionType.BINARY : _util2.CMapCompressionType.NONE;
                  return this._fetchData(url, compressionType).catch((reason) => {
                    throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${url}`);
                  });
                }
                _fetchData(url, compressionType) {
                  (0, _util2.unreachable)("Abstract method `_fetchData` called.");
                }
              }
              exports2.BaseCMapReaderFactory = BaseCMapReaderFactory;
              class BaseStandardFontDataFactory {
                constructor({
                  baseUrl = null
                }) {
                  if (this.constructor === BaseStandardFontDataFactory) {
                    (0, _util2.unreachable)("Cannot initialize BaseStandardFontDataFactory.");
                  }
                  this.baseUrl = baseUrl;
                }
                async fetch({
                  filename
                }) {
                  if (!this.baseUrl) {
                    throw new Error('The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.');
                  }
                  if (!filename) {
                    throw new Error("Font filename must be specified.");
                  }
                  const url = `${this.baseUrl}${filename}`;
                  return this._fetchData(url).catch((reason) => {
                    throw new Error(`Unable to load font data at: ${url}`);
                  });
                }
                _fetchData(url) {
                  (0, _util2.unreachable)("Abstract method `_fetchData` called.");
                }
              }
              exports2.BaseStandardFontDataFactory = BaseStandardFontDataFactory;
              class BaseSVGFactory {
                constructor() {
                  if (this.constructor === BaseSVGFactory) {
                    (0, _util2.unreachable)("Cannot initialize BaseSVGFactory.");
                  }
                }
                create(width, height, skipDimensions = false) {
                  if (width <= 0 || height <= 0) {
                    throw new Error("Invalid SVG dimensions");
                  }
                  const svg = this._createSVG("svg:svg");
                  svg.setAttribute("version", "1.1");
                  if (!skipDimensions) {
                    svg.setAttribute("width", `${width}px`);
                    svg.setAttribute("height", `${height}px`);
                  }
                  svg.setAttribute("preserveAspectRatio", "none");
                  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
                  return svg;
                }
                createElement(type) {
                  if (typeof type !== "string") {
                    throw new Error("Invalid SVG element type");
                  }
                  return this._createSVG(type);
                }
                _createSVG(type) {
                  (0, _util2.unreachable)("Abstract method `_createSVG` called.");
                }
              }
              exports2.BaseSVGFactory = BaseSVGFactory;
            },
            /* 8 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.MurmurHash3_64 = void 0;
              var _util2 = __w_pdfjs_require__2(1);
              const SEED = 3285377520;
              const MASK_HIGH = 4294901760;
              const MASK_LOW = 65535;
              class MurmurHash3_64 {
                constructor(seed) {
                  this.h1 = seed ? seed & 4294967295 : SEED;
                  this.h2 = seed ? seed & 4294967295 : SEED;
                }
                update(input) {
                  let data, length;
                  if (typeof input === "string") {
                    data = new Uint8Array(input.length * 2);
                    length = 0;
                    for (let i = 0, ii = input.length; i < ii; i++) {
                      const code = input.charCodeAt(i);
                      if (code <= 255) {
                        data[length++] = code;
                      } else {
                        data[length++] = code >>> 8;
                        data[length++] = code & 255;
                      }
                    }
                  } else if ((0, _util2.isArrayBuffer)(input)) {
                    data = input.slice();
                    length = data.byteLength;
                  } else {
                    throw new Error("Wrong data format in MurmurHash3_64_update. Input must be a string or array.");
                  }
                  const blockCounts = length >> 2;
                  const tailLength = length - blockCounts * 4;
                  const dataUint32 = new Uint32Array(data.buffer, 0, blockCounts);
                  let k1 = 0, k2 = 0;
                  let h1 = this.h1, h2 = this.h2;
                  const C1 = 3432918353, C2 = 461845907;
                  const C1_LOW = C1 & MASK_LOW, C2_LOW = C2 & MASK_LOW;
                  for (let i = 0; i < blockCounts; i++) {
                    if (i & 1) {
                      k1 = dataUint32[i];
                      k1 = k1 * C1 & MASK_HIGH | k1 * C1_LOW & MASK_LOW;
                      k1 = k1 << 15 | k1 >>> 17;
                      k1 = k1 * C2 & MASK_HIGH | k1 * C2_LOW & MASK_LOW;
                      h1 ^= k1;
                      h1 = h1 << 13 | h1 >>> 19;
                      h1 = h1 * 5 + 3864292196;
                    } else {
                      k2 = dataUint32[i];
                      k2 = k2 * C1 & MASK_HIGH | k2 * C1_LOW & MASK_LOW;
                      k2 = k2 << 15 | k2 >>> 17;
                      k2 = k2 * C2 & MASK_HIGH | k2 * C2_LOW & MASK_LOW;
                      h2 ^= k2;
                      h2 = h2 << 13 | h2 >>> 19;
                      h2 = h2 * 5 + 3864292196;
                    }
                  }
                  k1 = 0;
                  switch (tailLength) {
                    case 3:
                      k1 ^= data[blockCounts * 4 + 2] << 16;
                    case 2:
                      k1 ^= data[blockCounts * 4 + 1] << 8;
                    case 1:
                      k1 ^= data[blockCounts * 4];
                      k1 = k1 * C1 & MASK_HIGH | k1 * C1_LOW & MASK_LOW;
                      k1 = k1 << 15 | k1 >>> 17;
                      k1 = k1 * C2 & MASK_HIGH | k1 * C2_LOW & MASK_LOW;
                      if (blockCounts & 1) {
                        h1 ^= k1;
                      } else {
                        h2 ^= k1;
                      }
                  }
                  this.h1 = h1;
                  this.h2 = h2;
                }
                hexdigest() {
                  let h1 = this.h1, h2 = this.h2;
                  h1 ^= h2 >>> 1;
                  h1 = h1 * 3981806797 & MASK_HIGH | h1 * 36045 & MASK_LOW;
                  h2 = h2 * 4283543511 & MASK_HIGH | ((h2 << 16 | h1 >>> 16) * 2950163797 & MASK_HIGH) >>> 16;
                  h1 ^= h2 >>> 1;
                  h1 = h1 * 444984403 & MASK_HIGH | h1 * 60499 & MASK_LOW;
                  h2 = h2 * 3301882366 & MASK_HIGH | ((h2 << 16 | h1 >>> 16) * 3120437893 & MASK_HIGH) >>> 16;
                  h1 ^= h2 >>> 1;
                  return (h1 >>> 0).toString(16).padStart(8, "0") + (h2 >>> 0).toString(16).padStart(8, "0");
                }
              }
              exports2.MurmurHash3_64 = MurmurHash3_64;
            },
            /* 9 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.FontLoader = exports2.FontFaceObject = void 0;
              var _util2 = __w_pdfjs_require__2(1);
              var _is_node2 = __w_pdfjs_require__2(10);
              class FontLoader {
                constructor({
                  onUnsupportedFeature,
                  ownerDocument = globalThis.document,
                  styleElement = null
                }) {
                  this._onUnsupportedFeature = onUnsupportedFeature;
                  this._document = ownerDocument;
                  this.nativeFontFaces = [];
                  this.styleElement = null;
                  this.loadingRequests = [];
                  this.loadTestFontId = 0;
                }
                addNativeFontFace(nativeFontFace) {
                  this.nativeFontFaces.push(nativeFontFace);
                  this._document.fonts.add(nativeFontFace);
                }
                insertRule(rule) {
                  if (!this.styleElement) {
                    this.styleElement = this._document.createElement("style");
                    this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement);
                  }
                  const styleSheet = this.styleElement.sheet;
                  styleSheet.insertRule(rule, styleSheet.cssRules.length);
                }
                clear() {
                  for (const nativeFontFace of this.nativeFontFaces) {
                    this._document.fonts.delete(nativeFontFace);
                  }
                  this.nativeFontFaces.length = 0;
                  if (this.styleElement) {
                    this.styleElement.remove();
                    this.styleElement = null;
                  }
                }
                async bind(font) {
                  if (font.attached || font.missingFile) {
                    return;
                  }
                  font.attached = true;
                  if (this.isFontLoadingAPISupported) {
                    const nativeFontFace = font.createNativeFontFace();
                    if (nativeFontFace) {
                      this.addNativeFontFace(nativeFontFace);
                      try {
                        await nativeFontFace.loaded;
                      } catch (ex) {
                        this._onUnsupportedFeature({
                          featureId: _util2.UNSUPPORTED_FEATURES.errorFontLoadNative
                        });
                        (0, _util2.warn)(`Failed to load font '${nativeFontFace.family}': '${ex}'.`);
                        font.disableFontFace = true;
                        throw ex;
                      }
                    }
                    return;
                  }
                  const rule = font.createFontFaceRule();
                  if (rule) {
                    this.insertRule(rule);
                    if (this.isSyncFontLoadingSupported) {
                      return;
                    }
                    await new Promise((resolve) => {
                      const request = this._queueLoadingCallback(resolve);
                      this._prepareFontLoadEvent(font, request);
                    });
                  }
                }
                get isFontLoadingAPISupported() {
                  var _a;
                  const hasFonts = !!((_a = this._document) == null ? void 0 : _a.fonts);
                  return (0, _util2.shadow)(this, "isFontLoadingAPISupported", hasFonts);
                }
                get isSyncFontLoadingSupported() {
                  let supported = false;
                  if (_is_node2.isNodeJS) {
                    supported = true;
                  } else if (typeof navigator !== "undefined" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) {
                    supported = true;
                  }
                  return (0, _util2.shadow)(this, "isSyncFontLoadingSupported", supported);
                }
                _queueLoadingCallback(callback) {
                  function completeRequest() {
                    (0, _util2.assert)(!request.done, "completeRequest() cannot be called twice.");
                    request.done = true;
                    while (loadingRequests.length > 0 && loadingRequests[0].done) {
                      const otherRequest = loadingRequests.shift();
                      setTimeout(otherRequest.callback, 0);
                    }
                  }
                  const {
                    loadingRequests
                  } = this;
                  const request = {
                    done: false,
                    complete: completeRequest,
                    callback
                  };
                  loadingRequests.push(request);
                  return request;
                }
                get _loadTestFont() {
                  const testFont = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
                  return (0, _util2.shadow)(this, "_loadTestFont", testFont);
                }
                _prepareFontLoadEvent(font, request) {
                  function int32(data2, offset) {
                    return data2.charCodeAt(offset) << 24 | data2.charCodeAt(offset + 1) << 16 | data2.charCodeAt(offset + 2) << 8 | data2.charCodeAt(offset + 3) & 255;
                  }
                  function spliceString(s, offset, remove, insert) {
                    const chunk1 = s.substring(0, offset);
                    const chunk2 = s.substring(offset + remove);
                    return chunk1 + insert + chunk2;
                  }
                  let i, ii;
                  const canvas = this._document.createElement("canvas");
                  canvas.width = 1;
                  canvas.height = 1;
                  const ctx = canvas.getContext("2d");
                  let called = 0;
                  function isFontReady(name, callback) {
                    if (++called > 30) {
                      (0, _util2.warn)("Load test font never loaded.");
                      callback();
                      return;
                    }
                    ctx.font = "30px " + name;
                    ctx.fillText(".", 0, 20);
                    const imageData = ctx.getImageData(0, 0, 1, 1);
                    if (imageData.data[3] > 0) {
                      callback();
                      return;
                    }
                    setTimeout(isFontReady.bind(null, name, callback));
                  }
                  const loadTestFontId = `lt${Date.now()}${this.loadTestFontId++}`;
                  let data = this._loadTestFont;
                  const COMMENT_OFFSET = 976;
                  data = spliceString(data, COMMENT_OFFSET, loadTestFontId.length, loadTestFontId);
                  const CFF_CHECKSUM_OFFSET = 16;
                  const XXXX_VALUE = 1482184792;
                  let checksum = int32(data, CFF_CHECKSUM_OFFSET);
                  for (i = 0, ii = loadTestFontId.length - 3; i < ii; i += 4) {
                    checksum = checksum - XXXX_VALUE + int32(loadTestFontId, i) | 0;
                  }
                  if (i < loadTestFontId.length) {
                    checksum = checksum - XXXX_VALUE + int32(loadTestFontId + "XXX", i) | 0;
                  }
                  data = spliceString(data, CFF_CHECKSUM_OFFSET, 4, (0, _util2.string32)(checksum));
                  const url = `url(data:font/opentype;base64,${btoa(data)});`;
                  const rule = `@font-face {font-family:"${loadTestFontId}";src:${url}}`;
                  this.insertRule(rule);
                  const div = this._document.createElement("div");
                  div.style.visibility = "hidden";
                  div.style.width = div.style.height = "10px";
                  div.style.position = "absolute";
                  div.style.top = div.style.left = "0px";
                  for (const name of [font.loadedName, loadTestFontId]) {
                    const span = this._document.createElement("span");
                    span.textContent = "Hi";
                    span.style.fontFamily = name;
                    div.append(span);
                  }
                  this._document.body.append(div);
                  isFontReady(loadTestFontId, () => {
                    div.remove();
                    request.complete();
                  });
                }
              }
              exports2.FontLoader = FontLoader;
              class FontFaceObject {
                constructor(translatedData, {
                  isEvalSupported = true,
                  disableFontFace = false,
                  ignoreErrors = false,
                  onUnsupportedFeature,
                  fontRegistry = null
                }) {
                  this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
                  for (const i in translatedData) {
                    this[i] = translatedData[i];
                  }
                  this.isEvalSupported = isEvalSupported !== false;
                  this.disableFontFace = disableFontFace === true;
                  this.ignoreErrors = ignoreErrors === true;
                  this._onUnsupportedFeature = onUnsupportedFeature;
                  this.fontRegistry = fontRegistry;
                }
                createNativeFontFace() {
                  var _a;
                  if (!this.data || this.disableFontFace) {
                    return null;
                  }
                  let nativeFontFace;
                  if (!this.cssFontInfo) {
                    nativeFontFace = new FontFace(this.loadedName, this.data, {});
                  } else {
                    const css = {
                      weight: this.cssFontInfo.fontWeight
                    };
                    if (this.cssFontInfo.italicAngle) {
                      css.style = `oblique ${this.cssFontInfo.italicAngle}deg`;
                    }
                    nativeFontFace = new FontFace(this.cssFontInfo.fontFamily, this.data, css);
                  }
                  (_a = this.fontRegistry) == null ? void 0 : _a.registerFont(this);
                  return nativeFontFace;
                }
                createFontFaceRule() {
                  var _a;
                  if (!this.data || this.disableFontFace) {
                    return null;
                  }
                  const data = (0, _util2.bytesToString)(this.data);
                  const url = `url(data:${this.mimetype};base64,${btoa(data)});`;
                  let rule;
                  if (!this.cssFontInfo) {
                    rule = `@font-face {font-family:"${this.loadedName}";src:${url}}`;
                  } else {
                    let css = `font-weight: ${this.cssFontInfo.fontWeight};`;
                    if (this.cssFontInfo.italicAngle) {
                      css += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`;
                    }
                    rule = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${css}src:${url}}`;
                  }
                  (_a = this.fontRegistry) == null ? void 0 : _a.registerFont(this, url);
                  return rule;
                }
                getPathGenerator(objs, character) {
                  if (this.compiledGlyphs[character] !== void 0) {
                    return this.compiledGlyphs[character];
                  }
                  let cmds;
                  try {
                    cmds = objs.get(this.loadedName + "_path_" + character);
                  } catch (ex) {
                    if (!this.ignoreErrors) {
                      throw ex;
                    }
                    this._onUnsupportedFeature({
                      featureId: _util2.UNSUPPORTED_FEATURES.errorFontGetPath
                    });
                    (0, _util2.warn)(`getPathGenerator - ignoring character: "${ex}".`);
                    return this.compiledGlyphs[character] = function(c, size) {
                    };
                  }
                  if (this.isEvalSupported && _util2.FeatureTest.isEvalSupported) {
                    const jsBuf = [];
                    for (const current of cmds) {
                      const args = current.args !== void 0 ? current.args.join(",") : "";
                      jsBuf.push("c.", current.cmd, "(", args, ");\n");
                    }
                    return this.compiledGlyphs[character] = new Function("c", "size", jsBuf.join(""));
                  }
                  return this.compiledGlyphs[character] = function(c, size) {
                    for (const current of cmds) {
                      if (current.cmd === "scale") {
                        current.args = [size, -size];
                      }
                      c[current.cmd].apply(c, current.args);
                    }
                  };
                }
              }
              exports2.FontFaceObject = FontFaceObject;
            },
            /* 10 */
            /***/
            (__unused_webpack_module2, exports2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.isNodeJS = void 0;
              const isNodeJS = typeof process === "object" && process + "" === "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser");
              exports2.isNodeJS = isNodeJS;
            },
            /* 11 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              var _CanvasGraphics_instances, restoreInitialState_fn;
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.CanvasGraphics = void 0;
              var _util2 = __w_pdfjs_require__2(1);
              var _display_utils2 = __w_pdfjs_require__2(6);
              var _pattern_helper = __w_pdfjs_require__2(12);
              var _image_utils = __w_pdfjs_require__2(13);
              const MIN_FONT_SIZE = 16;
              const MAX_FONT_SIZE = 100;
              const MAX_GROUP_SIZE = 4096;
              const EXECUTION_TIME = 15;
              const EXECUTION_STEPS = 10;
              const MAX_SIZE_TO_COMPILE = 1e3;
              const FULL_CHUNK_HEIGHT = 16;
              function mirrorContextOperations(ctx, destCtx) {
                if (ctx._removeMirroring) {
                  throw new Error("Context is already forwarding operations.");
                }
                ctx.__originalSave = ctx.save;
                ctx.__originalRestore = ctx.restore;
                ctx.__originalRotate = ctx.rotate;
                ctx.__originalScale = ctx.scale;
                ctx.__originalTranslate = ctx.translate;
                ctx.__originalTransform = ctx.transform;
                ctx.__originalSetTransform = ctx.setTransform;
                ctx.__originalResetTransform = ctx.resetTransform;
                ctx.__originalClip = ctx.clip;
                ctx.__originalMoveTo = ctx.moveTo;
                ctx.__originalLineTo = ctx.lineTo;
                ctx.__originalBezierCurveTo = ctx.bezierCurveTo;
                ctx.__originalRect = ctx.rect;
                ctx.__originalClosePath = ctx.closePath;
                ctx.__originalBeginPath = ctx.beginPath;
                ctx._removeMirroring = () => {
                  ctx.save = ctx.__originalSave;
                  ctx.restore = ctx.__originalRestore;
                  ctx.rotate = ctx.__originalRotate;
                  ctx.scale = ctx.__originalScale;
                  ctx.translate = ctx.__originalTranslate;
                  ctx.transform = ctx.__originalTransform;
                  ctx.setTransform = ctx.__originalSetTransform;
                  ctx.resetTransform = ctx.__originalResetTransform;
                  ctx.clip = ctx.__originalClip;
                  ctx.moveTo = ctx.__originalMoveTo;
                  ctx.lineTo = ctx.__originalLineTo;
                  ctx.bezierCurveTo = ctx.__originalBezierCurveTo;
                  ctx.rect = ctx.__originalRect;
                  ctx.closePath = ctx.__originalClosePath;
                  ctx.beginPath = ctx.__originalBeginPath;
                  delete ctx._removeMirroring;
                };
                ctx.save = function ctxSave() {
                  destCtx.save();
                  this.__originalSave();
                };
                ctx.restore = function ctxRestore() {
                  destCtx.restore();
                  this.__originalRestore();
                };
                ctx.translate = function ctxTranslate(x, y) {
                  destCtx.translate(x, y);
                  this.__originalTranslate(x, y);
                };
                ctx.scale = function ctxScale(x, y) {
                  destCtx.scale(x, y);
                  this.__originalScale(x, y);
                };
                ctx.transform = function ctxTransform(a, b, c, d, e, f) {
                  destCtx.transform(a, b, c, d, e, f);
                  this.__originalTransform(a, b, c, d, e, f);
                };
                ctx.setTransform = function ctxSetTransform(a, b, c, d, e, f) {
                  destCtx.setTransform(a, b, c, d, e, f);
                  this.__originalSetTransform(a, b, c, d, e, f);
                };
                ctx.resetTransform = function ctxResetTransform() {
                  destCtx.resetTransform();
                  this.__originalResetTransform();
                };
                ctx.rotate = function ctxRotate(angle) {
                  destCtx.rotate(angle);
                  this.__originalRotate(angle);
                };
                ctx.clip = function ctxRotate(rule) {
                  destCtx.clip(rule);
                  this.__originalClip(rule);
                };
                ctx.moveTo = function(x, y) {
                  destCtx.moveTo(x, y);
                  this.__originalMoveTo(x, y);
                };
                ctx.lineTo = function(x, y) {
                  destCtx.lineTo(x, y);
                  this.__originalLineTo(x, y);
                };
                ctx.bezierCurveTo = function(cp1x, cp1y, cp2x, cp2y, x, y) {
                  destCtx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
                  this.__originalBezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
                };
                ctx.rect = function(x, y, width, height) {
                  destCtx.rect(x, y, width, height);
                  this.__originalRect(x, y, width, height);
                };
                ctx.closePath = function() {
                  destCtx.closePath();
                  this.__originalClosePath();
                };
                ctx.beginPath = function() {
                  destCtx.beginPath();
                  this.__originalBeginPath();
                };
              }
              class CachedCanvases {
                constructor(canvasFactory) {
                  this.canvasFactory = canvasFactory;
                  this.cache = /* @__PURE__ */ Object.create(null);
                }
                getCanvas(id, width, height) {
                  let canvasEntry;
                  if (this.cache[id] !== void 0) {
                    canvasEntry = this.cache[id];
                    this.canvasFactory.reset(canvasEntry, width, height);
                  } else {
                    canvasEntry = this.canvasFactory.create(width, height);
                    this.cache[id] = canvasEntry;
                  }
                  return canvasEntry;
                }
                delete(id) {
                  delete this.cache[id];
                }
                clear() {
                  for (const id in this.cache) {
                    const canvasEntry = this.cache[id];
                    this.canvasFactory.destroy(canvasEntry);
                    delete this.cache[id];
                  }
                }
              }
              function drawImageAtIntegerCoords(ctx, srcImg, srcX, srcY, srcW, srcH, destX, destY, destW, destH) {
                const [a, b, c, d, tx, ty] = (0, _display_utils2.getCurrentTransform)(ctx);
                if (b === 0 && c === 0) {
                  const tlX = destX * a + tx;
                  const rTlX = Math.round(tlX);
                  const tlY = destY * d + ty;
                  const rTlY = Math.round(tlY);
                  const brX = (destX + destW) * a + tx;
                  const rWidth = Math.abs(Math.round(brX) - rTlX) || 1;
                  const brY = (destY + destH) * d + ty;
                  const rHeight = Math.abs(Math.round(brY) - rTlY) || 1;
                  ctx.setTransform(Math.sign(a), 0, 0, Math.sign(d), rTlX, rTlY);
                  ctx.drawImage(srcImg, srcX, srcY, srcW, srcH, 0, 0, rWidth, rHeight);
                  ctx.setTransform(a, b, c, d, tx, ty);
                  return [rWidth, rHeight];
                }
                if (a === 0 && d === 0) {
                  const tlX = destY * c + tx;
                  const rTlX = Math.round(tlX);
                  const tlY = destX * b + ty;
                  const rTlY = Math.round(tlY);
                  const brX = (destY + destH) * c + tx;
                  const rWidth = Math.abs(Math.round(brX) - rTlX) || 1;
                  const brY = (destX + destW) * b + ty;
                  const rHeight = Math.abs(Math.round(brY) - rTlY) || 1;
                  ctx.setTransform(0, Math.sign(b), Math.sign(c), 0, rTlX, rTlY);
                  ctx.drawImage(srcImg, srcX, srcY, srcW, srcH, 0, 0, rHeight, rWidth);
                  ctx.setTransform(a, b, c, d, tx, ty);
                  return [rHeight, rWidth];
                }
                ctx.drawImage(srcImg, srcX, srcY, srcW, srcH, destX, destY, destW, destH);
                const scaleX = Math.hypot(a, b);
                const scaleY = Math.hypot(c, d);
                return [scaleX * destW, scaleY * destH];
              }
              function compileType3Glyph(imgData) {
                const {
                  width,
                  height
                } = imgData;
                if (width > MAX_SIZE_TO_COMPILE || height > MAX_SIZE_TO_COMPILE) {
                  return null;
                }
                const POINT_TO_PROCESS_LIMIT = 1e3;
                const POINT_TYPES = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]);
                const width1 = width + 1;
                let points = new Uint8Array(width1 * (height + 1));
                let i, j, j0;
                const lineSize = width + 7 & ~7;
                let data = new Uint8Array(lineSize * height), pos = 0;
                for (const elem of imgData.data) {
                  let mask = 128;
                  while (mask > 0) {
                    data[pos++] = elem & mask ? 0 : 255;
                    mask >>= 1;
                  }
                }
                let count = 0;
                pos = 0;
                if (data[pos] !== 0) {
                  points[0] = 1;
                  ++count;
                }
                for (j = 1; j < width; j++) {
                  if (data[pos] !== data[pos + 1]) {
                    points[j] = data[pos] ? 2 : 1;
                    ++count;
                  }
                  pos++;
                }
                if (data[pos] !== 0) {
                  points[j] = 2;
                  ++count;
                }
                for (i = 1; i < height; i++) {
                  pos = i * lineSize;
                  j0 = i * width1;
                  if (data[pos - lineSize] !== data[pos]) {
                    points[j0] = data[pos] ? 1 : 8;
                    ++count;
                  }
                  let sum = (data[pos] ? 4 : 0) + (data[pos - lineSize] ? 8 : 0);
                  for (j = 1; j < width; j++) {
                    sum = (sum >> 2) + (data[pos + 1] ? 4 : 0) + (data[pos - lineSize + 1] ? 8 : 0);
                    if (POINT_TYPES[sum]) {
                      points[j0 + j] = POINT_TYPES[sum];
                      ++count;
                    }
                    pos++;
                  }
                  if (data[pos - lineSize] !== data[pos]) {
                    points[j0 + j] = data[pos] ? 2 : 4;
                    ++count;
                  }
                  if (count > POINT_TO_PROCESS_LIMIT) {
                    return null;
                  }
                }
                pos = lineSize * (height - 1);
                j0 = i * width1;
                if (data[pos] !== 0) {
                  points[j0] = 8;
                  ++count;
                }
                for (j = 1; j < width; j++) {
                  if (data[pos] !== data[pos + 1]) {
                    points[j0 + j] = data[pos] ? 4 : 8;
                    ++count;
                  }
                  pos++;
                }
                if (data[pos] !== 0) {
                  points[j0 + j] = 4;
                  ++count;
                }
                if (count > POINT_TO_PROCESS_LIMIT) {
                  return null;
                }
                const steps = new Int32Array([0, width1, -1, 0, -width1, 0, 0, 0, 1]);
                const path = new Path2D();
                for (i = 0; count && i <= height; i++) {
                  let p = i * width1;
                  const end = p + width;
                  while (p < end && !points[p]) {
                    p++;
                  }
                  if (p === end) {
                    continue;
                  }
                  path.moveTo(p % width1, i);
                  const p0 = p;
                  let type = points[p];
                  do {
                    const step = steps[type];
                    do {
                      p += step;
                    } while (!points[p]);
                    const pp = points[p];
                    if (pp !== 5 && pp !== 10) {
                      type = pp;
                      points[p] = 0;
                    } else {
                      type = pp & 51 * type >> 4;
                      points[p] &= type >> 2 | type << 2;
                    }
                    path.lineTo(p % width1, p / width1 | 0);
                    if (!points[p]) {
                      --count;
                    }
                  } while (p0 !== p);
                  --i;
                }
                data = null;
                points = null;
                const drawOutline = function(c) {
                  c.save();
                  c.scale(1 / width, -1 / height);
                  c.translate(0, -height);
                  c.fill(path);
                  c.beginPath();
                  c.restore();
                };
                return drawOutline;
              }
              class CanvasExtraState {
                constructor(width, height) {
                  this.alphaIsShape = false;
                  this.fontSize = 0;
                  this.fontSizeScale = 1;
                  this.textMatrix = _util2.IDENTITY_MATRIX;
                  this.textMatrixScale = 1;
                  this.fontMatrix = _util2.FONT_IDENTITY_MATRIX;
                  this.leading = 0;
                  this.x = 0;
                  this.y = 0;
                  this.lineX = 0;
                  this.lineY = 0;
                  this.charSpacing = 0;
                  this.wordSpacing = 0;
                  this.textHScale = 1;
                  this.textRenderingMode = _util2.TextRenderingMode.FILL;
                  this.textRise = 0;
                  this.fillColor = "#000000";
                  this.strokeColor = "#000000";
                  this.patternFill = false;
                  this.fillAlpha = 1;
                  this.strokeAlpha = 1;
                  this.lineWidth = 1;
                  this.activeSMask = null;
                  this.transferMaps = null;
                  this.startNewPathAndClipBox([0, 0, width, height]);
                }
                clone() {
                  const clone = Object.create(this);
                  clone.clipBox = this.clipBox.slice();
                  return clone;
                }
                setCurrentPoint(x, y) {
                  this.x = x;
                  this.y = y;
                }
                updatePathMinMax(transform, x, y) {
                  [x, y] = _util2.Util.applyTransform([x, y], transform);
                  this.minX = Math.min(this.minX, x);
                  this.minY = Math.min(this.minY, y);
                  this.maxX = Math.max(this.maxX, x);
                  this.maxY = Math.max(this.maxY, y);
                }
                updateRectMinMax(transform, rect) {
                  const p1 = _util2.Util.applyTransform(rect, transform);
                  const p2 = _util2.Util.applyTransform(rect.slice(2), transform);
                  this.minX = Math.min(this.minX, p1[0], p2[0]);
                  this.minY = Math.min(this.minY, p1[1], p2[1]);
                  this.maxX = Math.max(this.maxX, p1[0], p2[0]);
                  this.maxY = Math.max(this.maxY, p1[1], p2[1]);
                }
                updateScalingPathMinMax(transform, minMax) {
                  _util2.Util.scaleMinMax(transform, minMax);
                  this.minX = Math.min(this.minX, minMax[0]);
                  this.maxX = Math.max(this.maxX, minMax[1]);
                  this.minY = Math.min(this.minY, minMax[2]);
                  this.maxY = Math.max(this.maxY, minMax[3]);
                }
                updateCurvePathMinMax(transform, x0, y0, x1, y1, x2, y2, x3, y3, minMax) {
                  const box = _util2.Util.bezierBoundingBox(x0, y0, x1, y1, x2, y2, x3, y3);
                  if (minMax) {
                    minMax[0] = Math.min(minMax[0], box[0], box[2]);
                    minMax[1] = Math.max(minMax[1], box[0], box[2]);
                    minMax[2] = Math.min(minMax[2], box[1], box[3]);
                    minMax[3] = Math.max(minMax[3], box[1], box[3]);
                    return;
                  }
                  this.updateRectMinMax(transform, box);
                }
                getPathBoundingBox(pathType = _pattern_helper.PathType.FILL, transform = null) {
                  const box = [this.minX, this.minY, this.maxX, this.maxY];
                  if (pathType === _pattern_helper.PathType.STROKE) {
                    if (!transform) {
                      (0, _util2.unreachable)("Stroke bounding box must include transform.");
                    }
                    const scale = _util2.Util.singularValueDecompose2dScale(transform);
                    const xStrokePad = scale[0] * this.lineWidth / 2;
                    const yStrokePad = scale[1] * this.lineWidth / 2;
                    box[0] -= xStrokePad;
                    box[1] -= yStrokePad;
                    box[2] += xStrokePad;
                    box[3] += yStrokePad;
                  }
                  return box;
                }
                updateClipFromPath() {
                  const intersect = _util2.Util.intersect(this.clipBox, this.getPathBoundingBox());
                  this.startNewPathAndClipBox(intersect || [0, 0, 0, 0]);
                }
                isEmptyClip() {
                  return this.minX === Infinity;
                }
                startNewPathAndClipBox(box) {
                  this.clipBox = box;
                  this.minX = Infinity;
                  this.minY = Infinity;
                  this.maxX = 0;
                  this.maxY = 0;
                }
                getClippedPathBoundingBox(pathType = _pattern_helper.PathType.FILL, transform = null) {
                  return _util2.Util.intersect(this.clipBox, this.getPathBoundingBox(pathType, transform));
                }
              }
              function putBinaryImageData(ctx, imgData, transferMaps = null) {
                if (typeof ImageData !== "undefined" && imgData instanceof ImageData) {
                  ctx.putImageData(imgData, 0, 0);
                  return;
                }
                const height = imgData.height, width = imgData.width;
                const partialChunkHeight = height % FULL_CHUNK_HEIGHT;
                const fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
                const totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
                const chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
                let srcPos = 0, destPos;
                const src = imgData.data;
                const dest = chunkImgData.data;
                let i, j, thisChunkHeight, elemsInThisChunk;
                let transferMapRed, transferMapGreen, transferMapBlue, transferMapGray;
                if (transferMaps) {
                  switch (transferMaps.length) {
                    case 1:
                      transferMapRed = transferMaps[0];
                      transferMapGreen = transferMaps[0];
                      transferMapBlue = transferMaps[0];
                      transferMapGray = transferMaps[0];
                      break;
                    case 4:
                      transferMapRed = transferMaps[0];
                      transferMapGreen = transferMaps[1];
                      transferMapBlue = transferMaps[2];
                      transferMapGray = transferMaps[3];
                      break;
                  }
                }
                if (imgData.kind === _util2.ImageKind.GRAYSCALE_1BPP) {
                  const srcLength = src.byteLength;
                  const dest32 = new Uint32Array(dest.buffer, 0, dest.byteLength >> 2);
                  const dest32DataLength = dest32.length;
                  const fullSrcDiff = width + 7 >> 3;
                  let white = 4294967295;
                  let black = _util2.FeatureTest.isLittleEndian ? 4278190080 : 255;
                  if (transferMapGray) {
                    if (transferMapGray[0] === 255 && transferMapGray[255] === 0) {
                      [white, black] = [black, white];
                    }
                  }
                  for (i = 0; i < totalChunks; i++) {
                    thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
                    destPos = 0;
                    for (j = 0; j < thisChunkHeight; j++) {
                      const srcDiff = srcLength - srcPos;
                      let k = 0;
                      const kEnd = srcDiff > fullSrcDiff ? width : srcDiff * 8 - 7;
                      const kEndUnrolled = kEnd & ~7;
                      let mask = 0;
                      let srcByte = 0;
                      for (; k < kEndUnrolled; k += 8) {
                        srcByte = src[srcPos++];
                        dest32[destPos++] = srcByte & 128 ? white : black;
                        dest32[destPos++] = srcByte & 64 ? white : black;
                        dest32[destPos++] = srcByte & 32 ? white : black;
                        dest32[destPos++] = srcByte & 16 ? white : black;
                        dest32[destPos++] = srcByte & 8 ? white : black;
                        dest32[destPos++] = srcByte & 4 ? white : black;
                        dest32[destPos++] = srcByte & 2 ? white : black;
                        dest32[destPos++] = srcByte & 1 ? white : black;
                      }
                      for (; k < kEnd; k++) {
                        if (mask === 0) {
                          srcByte = src[srcPos++];
                          mask = 128;
                        }
                        dest32[destPos++] = srcByte & mask ? white : black;
                        mask >>= 1;
                      }
                    }
                    while (destPos < dest32DataLength) {
                      dest32[destPos++] = 0;
                    }
                    ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
                  }
                } else if (imgData.kind === _util2.ImageKind.RGBA_32BPP) {
                  const hasTransferMaps = !!(transferMapRed || transferMapGreen || transferMapBlue);
                  j = 0;
                  elemsInThisChunk = width * FULL_CHUNK_HEIGHT * 4;
                  for (i = 0; i < fullChunks; i++) {
                    dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
                    srcPos += elemsInThisChunk;
                    if (hasTransferMaps) {
                      for (let k = 0; k < elemsInThisChunk; k += 4) {
                        if (transferMapRed) {
                          dest[k + 0] = transferMapRed[dest[k + 0]];
                        }
                        if (transferMapGreen) {
                          dest[k + 1] = transferMapGreen[dest[k + 1]];
                        }
                        if (transferMapBlue) {
                          dest[k + 2] = transferMapBlue[dest[k + 2]];
                        }
                      }
                    }
                    ctx.putImageData(chunkImgData, 0, j);
                    j += FULL_CHUNK_HEIGHT;
                  }
                  if (i < totalChunks) {
                    elemsInThisChunk = width * partialChunkHeight * 4;
                    dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
                    if (hasTransferMaps) {
                      for (let k = 0; k < elemsInThisChunk; k += 4) {
                        if (transferMapRed) {
                          dest[k + 0] = transferMapRed[dest[k + 0]];
                        }
                        if (transferMapGreen) {
                          dest[k + 1] = transferMapGreen[dest[k + 1]];
                        }
                        if (transferMapBlue) {
                          dest[k + 2] = transferMapBlue[dest[k + 2]];
                        }
                      }
                    }
                    ctx.putImageData(chunkImgData, 0, j);
                  }
                } else if (imgData.kind === _util2.ImageKind.RGB_24BPP) {
                  const hasTransferMaps = !!(transferMapRed || transferMapGreen || transferMapBlue);
                  thisChunkHeight = FULL_CHUNK_HEIGHT;
                  elemsInThisChunk = width * thisChunkHeight;
                  for (i = 0; i < totalChunks; i++) {
                    if (i >= fullChunks) {
                      thisChunkHeight = partialChunkHeight;
                      elemsInThisChunk = width * thisChunkHeight;
                    }
                    destPos = 0;
                    for (j = elemsInThisChunk; j--; ) {
                      dest[destPos++] = src[srcPos++];
                      dest[destPos++] = src[srcPos++];
                      dest[destPos++] = src[srcPos++];
                      dest[destPos++] = 255;
                    }
                    if (hasTransferMaps) {
                      for (let k = 0; k < destPos; k += 4) {
                        if (transferMapRed) {
                          dest[k + 0] = transferMapRed[dest[k + 0]];
                        }
                        if (transferMapGreen) {
                          dest[k + 1] = transferMapGreen[dest[k + 1]];
                        }
                        if (transferMapBlue) {
                          dest[k + 2] = transferMapBlue[dest[k + 2]];
                        }
                      }
                    }
                    ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
                  }
                } else {
                  throw new Error(`bad image kind: ${imgData.kind}`);
                }
              }
              function putBinaryImageMask(ctx, imgData) {
                if (imgData.bitmap) {
                  ctx.drawImage(imgData.bitmap, 0, 0);
                  return;
                }
                const height = imgData.height, width = imgData.width;
                const partialChunkHeight = height % FULL_CHUNK_HEIGHT;
                const fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
                const totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
                const chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
                let srcPos = 0;
                const src = imgData.data;
                const dest = chunkImgData.data;
                for (let i = 0; i < totalChunks; i++) {
                  const thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
                  ({
                    srcPos
                  } = (0, _image_utils.applyMaskImageData)({
                    src,
                    srcPos,
                    dest,
                    width,
                    height: thisChunkHeight
                  }));
                  ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
                }
              }
              function copyCtxState(sourceCtx, destCtx) {
                const properties = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font"];
                for (const property of properties) {
                  if (sourceCtx[property] !== void 0) {
                    destCtx[property] = sourceCtx[property];
                  }
                }
                if (sourceCtx.setLineDash !== void 0) {
                  destCtx.setLineDash(sourceCtx.getLineDash());
                  destCtx.lineDashOffset = sourceCtx.lineDashOffset;
                }
              }
              function resetCtxToDefault(ctx, foregroundColor) {
                ctx.strokeStyle = ctx.fillStyle = foregroundColor || "#000000";
                ctx.fillRule = "nonzero";
                ctx.globalAlpha = 1;
                ctx.lineWidth = 1;
                ctx.lineCap = "butt";
                ctx.lineJoin = "miter";
                ctx.miterLimit = 10;
                ctx.globalCompositeOperation = "source-over";
                ctx.font = "10px sans-serif";
                if (ctx.setLineDash !== void 0) {
                  ctx.setLineDash([]);
                  ctx.lineDashOffset = 0;
                }
              }
              function composeSMaskBackdrop(bytes, r0, g0, b0) {
                const length = bytes.length;
                for (let i = 3; i < length; i += 4) {
                  const alpha = bytes[i];
                  if (alpha === 0) {
                    bytes[i - 3] = r0;
                    bytes[i - 2] = g0;
                    bytes[i - 1] = b0;
                  } else if (alpha < 255) {
                    const alpha_ = 255 - alpha;
                    bytes[i - 3] = bytes[i - 3] * alpha + r0 * alpha_ >> 8;
                    bytes[i - 2] = bytes[i - 2] * alpha + g0 * alpha_ >> 8;
                    bytes[i - 1] = bytes[i - 1] * alpha + b0 * alpha_ >> 8;
                  }
                }
              }
              function composeSMaskAlpha(maskData, layerData, transferMap) {
                const length = maskData.length;
                const scale = 1 / 255;
                for (let i = 3; i < length; i += 4) {
                  const alpha = transferMap ? transferMap[maskData[i]] : maskData[i];
                  layerData[i] = layerData[i] * alpha * scale | 0;
                }
              }
              function composeSMaskLuminosity(maskData, layerData, transferMap) {
                const length = maskData.length;
                for (let i = 3; i < length; i += 4) {
                  const y = maskData[i - 3] * 77 + maskData[i - 2] * 152 + maskData[i - 1] * 28;
                  layerData[i] = transferMap ? layerData[i] * transferMap[y >> 8] >> 8 : layerData[i] * y >> 16;
                }
              }
              function genericComposeSMask(maskCtx, layerCtx, width, height, subtype, backdrop, transferMap, layerOffsetX, layerOffsetY, maskOffsetX, maskOffsetY) {
                const hasBackdrop = !!backdrop;
                const r0 = hasBackdrop ? backdrop[0] : 0;
                const g0 = hasBackdrop ? backdrop[1] : 0;
                const b0 = hasBackdrop ? backdrop[2] : 0;
                let composeFn;
                if (subtype === "Luminosity") {
                  composeFn = composeSMaskLuminosity;
                } else {
                  composeFn = composeSMaskAlpha;
                }
                const PIXELS_TO_PROCESS = 1048576;
                const chunkSize = Math.min(height, Math.ceil(PIXELS_TO_PROCESS / width));
                for (let row = 0; row < height; row += chunkSize) {
                  const chunkHeight = Math.min(chunkSize, height - row);
                  const maskData = maskCtx.getImageData(layerOffsetX - maskOffsetX, row + (layerOffsetY - maskOffsetY), width, chunkHeight);
                  const layerData = layerCtx.getImageData(layerOffsetX, row + layerOffsetY, width, chunkHeight);
                  if (hasBackdrop) {
                    composeSMaskBackdrop(maskData.data, r0, g0, b0);
                  }
                  composeFn(maskData.data, layerData.data, transferMap);
                  layerCtx.putImageData(layerData, layerOffsetX, row + layerOffsetY);
                }
              }
              function composeSMask(ctx, smask, layerCtx, layerBox) {
                const layerOffsetX = layerBox[0];
                const layerOffsetY = layerBox[1];
                const layerWidth = layerBox[2] - layerOffsetX;
                const layerHeight = layerBox[3] - layerOffsetY;
                if (layerWidth === 0 || layerHeight === 0) {
                  return;
                }
                genericComposeSMask(smask.context, layerCtx, layerWidth, layerHeight, smask.subtype, smask.backdrop, smask.transferMap, layerOffsetX, layerOffsetY, smask.offsetX, smask.offsetY);
                ctx.save();
                ctx.globalAlpha = 1;
                ctx.globalCompositeOperation = "source-over";
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.drawImage(layerCtx.canvas, 0, 0);
                ctx.restore();
              }
              function getImageSmoothingEnabled(transform, interpolate) {
                const scale = _util2.Util.singularValueDecompose2dScale(transform);
                scale[0] = Math.fround(scale[0]);
                scale[1] = Math.fround(scale[1]);
                const actualScale = Math.fround((globalThis.devicePixelRatio || 1) * _display_utils2.PixelsPerInch.PDF_TO_CSS_UNITS);
                if (interpolate !== void 0) {
                  return interpolate;
                } else if (scale[0] <= actualScale || scale[1] <= actualScale) {
                  return true;
                }
                return false;
              }
              const LINE_CAP_STYLES = ["butt", "round", "square"];
              const LINE_JOIN_STYLES = ["miter", "round", "bevel"];
              const NORMAL_CLIP = {};
              const EO_CLIP = {};
              const _CanvasGraphics = class _CanvasGraphics {
                constructor(canvasCtx, commonObjs, objs, canvasFactory, {
                  optionalContentConfig,
                  markedContentStack = null
                }, annotationCanvasMap, pageColors) {
                  __privateAdd(this, _CanvasGraphics_instances);
                  this.ctx = canvasCtx;
                  this.current = new CanvasExtraState(this.ctx.canvas.width, this.ctx.canvas.height);
                  this.stateStack = [];
                  this.pendingClip = null;
                  this.pendingEOFill = false;
                  this.res = null;
                  this.xobjs = null;
                  this.commonObjs = commonObjs;
                  this.objs = objs;
                  this.canvasFactory = canvasFactory;
                  this.groupStack = [];
                  this.processingType3 = null;
                  this.baseTransform = null;
                  this.baseTransformStack = [];
                  this.groupLevel = 0;
                  this.smaskStack = [];
                  this.smaskCounter = 0;
                  this.tempSMask = null;
                  this.suspendedCtx = null;
                  this.contentVisible = true;
                  this.markedContentStack = markedContentStack || [];
                  this.optionalContentConfig = optionalContentConfig;
                  this.cachedCanvases = new CachedCanvases(this.canvasFactory);
                  this.cachedPatterns = /* @__PURE__ */ new Map();
                  this.annotationCanvasMap = annotationCanvasMap;
                  this.viewportScale = 1;
                  this.outputScaleX = 1;
                  this.outputScaleY = 1;
                  this.backgroundColor = (pageColors == null ? void 0 : pageColors.background) || null;
                  this.foregroundColor = (pageColors == null ? void 0 : pageColors.foreground) || null;
                  this._cachedScaleForStroking = null;
                  this._cachedGetSinglePixelWidth = null;
                  this._cachedBitmapsMap = /* @__PURE__ */ new Map();
                }
                getObject(data, fallback = null) {
                  if (typeof data === "string") {
                    return data.startsWith("g_") ? this.commonObjs.get(data) : this.objs.get(data);
                  }
                  return fallback;
                }
                beginDrawing({
                  transform,
                  viewport,
                  transparency = false,
                  background = null
                }) {
                  const width = this.ctx.canvas.width;
                  const height = this.ctx.canvas.height;
                  const defaultBackgroundColor = background || "#ffffff";
                  this.ctx.save();
                  if (this.foregroundColor && this.backgroundColor) {
                    this.ctx.fillStyle = this.foregroundColor;
                    const fg = this.foregroundColor = this.ctx.fillStyle;
                    this.ctx.fillStyle = this.backgroundColor;
                    const bg = this.backgroundColor = this.ctx.fillStyle;
                    let isValidDefaultBg = true;
                    let defaultBg = defaultBackgroundColor;
                    this.ctx.fillStyle = defaultBackgroundColor;
                    defaultBg = this.ctx.fillStyle;
                    isValidDefaultBg = typeof defaultBg === "string" && /^#[0-9A-Fa-f]{6}$/.test(defaultBg);
                    if (fg === "#000000" && bg === "#ffffff" || fg === bg || !isValidDefaultBg) {
                      this.foregroundColor = this.backgroundColor = null;
                    } else {
                      const [rB, gB, bB] = (0, _display_utils2.getRGB)(defaultBg);
                      const newComp = (x) => {
                        x /= 255;
                        return x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
                      };
                      const lumB = Math.round(0.2126 * newComp(rB) + 0.7152 * newComp(gB) + 0.0722 * newComp(bB));
                      this.selectColor = (r, g, b) => {
                        const lumC = 0.2126 * newComp(r) + 0.7152 * newComp(g) + 0.0722 * newComp(b);
                        return Math.round(lumC) === lumB ? bg : fg;
                      };
                    }
                  }
                  this.ctx.fillStyle = this.backgroundColor || defaultBackgroundColor;
                  this.ctx.fillRect(0, 0, width, height);
                  this.ctx.restore();
                  if (transparency) {
                    const transparentCanvas = this.cachedCanvases.getCanvas("transparent", width, height);
                    this.compositeCtx = this.ctx;
                    this.transparentCanvas = transparentCanvas.canvas;
                    this.ctx = transparentCanvas.context;
                    this.ctx.save();
                    this.ctx.transform(...(0, _display_utils2.getCurrentTransform)(this.compositeCtx));
                  }
                  this.ctx.save();
                  resetCtxToDefault(this.ctx, this.foregroundColor);
                  if (transform) {
                    this.ctx.transform(...transform);
                    this.outputScaleX = transform[0];
                    this.outputScaleY = transform[0];
                  }
                  this.ctx.transform(...viewport.transform);
                  this.viewportScale = viewport.scale;
                  this.baseTransform = (0, _display_utils2.getCurrentTransform)(this.ctx);
                }
                executeOperatorList(operatorList, executionStartIdx, continueCallback, stepper) {
                  const argsArray = operatorList.argsArray;
                  const fnArray = operatorList.fnArray;
                  let i = executionStartIdx || 0;
                  const argsArrayLen = argsArray.length;
                  if (argsArrayLen === i) {
                    return i;
                  }
                  const chunkOperations = argsArrayLen - i > EXECUTION_STEPS && typeof continueCallback === "function";
                  const endTime = chunkOperations ? Date.now() + EXECUTION_TIME : 0;
                  let steps = 0;
                  const commonObjs = this.commonObjs;
                  const objs = this.objs;
                  let fnId;
                  while (true) {
                    if (stepper !== void 0 && i === stepper.nextBreakPoint) {
                      stepper.breakIt(i, continueCallback);
                      return i;
                    }
                    fnId = fnArray[i];
                    if (fnId !== _util2.OPS.dependency) {
                      this[fnId].apply(this, argsArray[i]);
                    } else {
                      for (const depObjId of argsArray[i]) {
                        const objsPool = depObjId.startsWith("g_") ? commonObjs : objs;
                        if (!objsPool.has(depObjId)) {
                          objsPool.get(depObjId, continueCallback);
                          return i;
                        }
                      }
                    }
                    i++;
                    if (i === argsArrayLen) {
                      return i;
                    }
                    if (chunkOperations && ++steps > EXECUTION_STEPS) {
                      if (Date.now() > endTime) {
                        continueCallback();
                        return i;
                      }
                      steps = 0;
                    }
                  }
                }
                endDrawing() {
                  __privateMethod(this, _CanvasGraphics_instances, restoreInitialState_fn).call(this);
                  this.cachedCanvases.clear();
                  this.cachedPatterns.clear();
                  for (const cache of this._cachedBitmapsMap.values()) {
                    for (const canvas of cache.values()) {
                      if (typeof HTMLCanvasElement !== "undefined" && canvas instanceof HTMLCanvasElement) {
                        canvas.width = canvas.height = 0;
                      }
                    }
                    cache.clear();
                  }
                  this._cachedBitmapsMap.clear();
                }
                _scaleImage(img, inverseTransform) {
                  const width = img.width;
                  const height = img.height;
                  let widthScale = Math.max(Math.hypot(inverseTransform[0], inverseTransform[1]), 1);
                  let heightScale = Math.max(Math.hypot(inverseTransform[2], inverseTransform[3]), 1);
                  let paintWidth = width, paintHeight = height;
                  let tmpCanvasId = "prescale1";
                  let tmpCanvas, tmpCtx;
                  while (widthScale > 2 && paintWidth > 1 || heightScale > 2 && paintHeight > 1) {
                    let newWidth = paintWidth, newHeight = paintHeight;
                    if (widthScale > 2 && paintWidth > 1) {
                      newWidth = Math.ceil(paintWidth / 2);
                      widthScale /= paintWidth / newWidth;
                    }
                    if (heightScale > 2 && paintHeight > 1) {
                      newHeight = Math.ceil(paintHeight / 2);
                      heightScale /= paintHeight / newHeight;
                    }
                    tmpCanvas = this.cachedCanvases.getCanvas(tmpCanvasId, newWidth, newHeight);
                    tmpCtx = tmpCanvas.context;
                    tmpCtx.clearRect(0, 0, newWidth, newHeight);
                    tmpCtx.drawImage(img, 0, 0, paintWidth, paintHeight, 0, 0, newWidth, newHeight);
                    img = tmpCanvas.canvas;
                    paintWidth = newWidth;
                    paintHeight = newHeight;
                    tmpCanvasId = tmpCanvasId === "prescale1" ? "prescale2" : "prescale1";
                  }
                  return {
                    img,
                    paintWidth,
                    paintHeight
                  };
                }
                _createMaskCanvas(img) {
                  const ctx = this.ctx;
                  const {
                    width,
                    height
                  } = img;
                  const fillColor = this.current.fillColor;
                  const isPatternFill = this.current.patternFill;
                  const currentTransform = (0, _display_utils2.getCurrentTransform)(ctx);
                  let cache, cacheKey, scaled, maskCanvas;
                  if ((img.bitmap || img.data) && img.count > 1) {
                    const mainKey = img.bitmap || img.data.buffer;
                    cacheKey = JSON.stringify(isPatternFill ? currentTransform : [currentTransform.slice(0, 4), fillColor]);
                    cache = this._cachedBitmapsMap.get(mainKey);
                    if (!cache) {
                      cache = /* @__PURE__ */ new Map();
                      this._cachedBitmapsMap.set(mainKey, cache);
                    }
                    const cachedImage = cache.get(cacheKey);
                    if (cachedImage && !isPatternFill) {
                      const offsetX2 = Math.round(Math.min(currentTransform[0], currentTransform[2]) + currentTransform[4]);
                      const offsetY2 = Math.round(Math.min(currentTransform[1], currentTransform[3]) + currentTransform[5]);
                      return {
                        canvas: cachedImage,
                        offsetX: offsetX2,
                        offsetY: offsetY2
                      };
                    }
                    scaled = cachedImage;
                  }
                  if (!scaled) {
                    maskCanvas = this.cachedCanvases.getCanvas("maskCanvas", width, height);
                    putBinaryImageMask(maskCanvas.context, img);
                  }
                  let maskToCanvas = _util2.Util.transform(currentTransform, [1 / width, 0, 0, -1 / height, 0, 0]);
                  maskToCanvas = _util2.Util.transform(maskToCanvas, [1, 0, 0, 1, 0, -height]);
                  const cord1 = _util2.Util.applyTransform([0, 0], maskToCanvas);
                  const cord2 = _util2.Util.applyTransform([width, height], maskToCanvas);
                  const rect = _util2.Util.normalizeRect([cord1[0], cord1[1], cord2[0], cord2[1]]);
                  const drawnWidth = Math.round(rect[2] - rect[0]) || 1;
                  const drawnHeight = Math.round(rect[3] - rect[1]) || 1;
                  const fillCanvas = this.cachedCanvases.getCanvas("fillCanvas", drawnWidth, drawnHeight);
                  const fillCtx = fillCanvas.context;
                  const offsetX = Math.min(cord1[0], cord2[0]);
                  const offsetY = Math.min(cord1[1], cord2[1]);
                  fillCtx.translate(-offsetX, -offsetY);
                  fillCtx.transform(...maskToCanvas);
                  if (!scaled) {
                    scaled = this._scaleImage(maskCanvas.canvas, (0, _display_utils2.getCurrentTransformInverse)(fillCtx));
                    scaled = scaled.img;
                    if (cache && isPatternFill) {
                      cache.set(cacheKey, scaled);
                    }
                  }
                  fillCtx.imageSmoothingEnabled = getImageSmoothingEnabled((0, _display_utils2.getCurrentTransform)(fillCtx), img.interpolate);
                  drawImageAtIntegerCoords(fillCtx, scaled, 0, 0, scaled.width, scaled.height, 0, 0, width, height);
                  fillCtx.globalCompositeOperation = "source-in";
                  const inverse = _util2.Util.transform((0, _display_utils2.getCurrentTransformInverse)(fillCtx), [1, 0, 0, 1, -offsetX, -offsetY]);
                  fillCtx.fillStyle = isPatternFill ? fillColor.getPattern(ctx, this, inverse, _pattern_helper.PathType.FILL) : fillColor;
                  fillCtx.fillRect(0, 0, width, height);
                  if (cache && !isPatternFill) {
                    this.cachedCanvases.delete("fillCanvas");
                    cache.set(cacheKey, fillCanvas.canvas);
                  }
                  return {
                    canvas: fillCanvas.canvas,
                    offsetX: Math.round(offsetX),
                    offsetY: Math.round(offsetY)
                  };
                }
                setLineWidth(width) {
                  if (width !== this.current.lineWidth) {
                    this._cachedScaleForStroking = null;
                  }
                  this.current.lineWidth = width;
                  this.ctx.lineWidth = width;
                }
                setLineCap(style) {
                  this.ctx.lineCap = LINE_CAP_STYLES[style];
                }
                setLineJoin(style) {
                  this.ctx.lineJoin = LINE_JOIN_STYLES[style];
                }
                setMiterLimit(limit) {
                  this.ctx.miterLimit = limit;
                }
                setDash(dashArray, dashPhase) {
                  const ctx = this.ctx;
                  if (ctx.setLineDash !== void 0) {
                    ctx.setLineDash(dashArray);
                    ctx.lineDashOffset = dashPhase;
                  }
                }
                setRenderingIntent(intent) {
                }
                setFlatness(flatness) {
                }
                setGState(states) {
                  for (const [key, value] of states) {
                    switch (key) {
                      case "LW":
                        this.setLineWidth(value);
                        break;
                      case "LC":
                        this.setLineCap(value);
                        break;
                      case "LJ":
                        this.setLineJoin(value);
                        break;
                      case "ML":
                        this.setMiterLimit(value);
                        break;
                      case "D":
                        this.setDash(value[0], value[1]);
                        break;
                      case "RI":
                        this.setRenderingIntent(value);
                        break;
                      case "FL":
                        this.setFlatness(value);
                        break;
                      case "Font":
                        this.setFont(value[0], value[1]);
                        break;
                      case "CA":
                        this.current.strokeAlpha = value;
                        break;
                      case "ca":
                        this.current.fillAlpha = value;
                        this.ctx.globalAlpha = value;
                        break;
                      case "BM":
                        this.ctx.globalCompositeOperation = value;
                        break;
                      case "SMask":
                        this.current.activeSMask = value ? this.tempSMask : null;
                        this.tempSMask = null;
                        this.checkSMaskState();
                        break;
                      case "TR":
                        this.current.transferMaps = value;
                    }
                  }
                }
                get inSMaskMode() {
                  return !!this.suspendedCtx;
                }
                checkSMaskState() {
                  const inSMaskMode = this.inSMaskMode;
                  if (this.current.activeSMask && !inSMaskMode) {
                    this.beginSMaskMode();
                  } else if (!this.current.activeSMask && inSMaskMode) {
                    this.endSMaskMode();
                  }
                }
                beginSMaskMode() {
                  if (this.inSMaskMode) {
                    throw new Error("beginSMaskMode called while already in smask mode");
                  }
                  const drawnWidth = this.ctx.canvas.width;
                  const drawnHeight = this.ctx.canvas.height;
                  const cacheId = "smaskGroupAt" + this.groupLevel;
                  const scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight);
                  this.suspendedCtx = this.ctx;
                  this.ctx = scratchCanvas.context;
                  const ctx = this.ctx;
                  ctx.setTransform(...(0, _display_utils2.getCurrentTransform)(this.suspendedCtx));
                  copyCtxState(this.suspendedCtx, ctx);
                  mirrorContextOperations(ctx, this.suspendedCtx);
                  this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
                }
                endSMaskMode() {
                  if (!this.inSMaskMode) {
                    throw new Error("endSMaskMode called while not in smask mode");
                  }
                  this.ctx._removeMirroring();
                  copyCtxState(this.ctx, this.suspendedCtx);
                  this.ctx = this.suspendedCtx;
                  this.suspendedCtx = null;
                }
                compose(dirtyBox) {
                  if (!this.current.activeSMask) {
                    return;
                  }
                  if (!dirtyBox) {
                    dirtyBox = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
                  } else {
                    dirtyBox[0] = Math.floor(dirtyBox[0]);
                    dirtyBox[1] = Math.floor(dirtyBox[1]);
                    dirtyBox[2] = Math.ceil(dirtyBox[2]);
                    dirtyBox[3] = Math.ceil(dirtyBox[3]);
                  }
                  const smask = this.current.activeSMask;
                  const suspendedCtx = this.suspendedCtx;
                  composeSMask(suspendedCtx, smask, this.ctx, dirtyBox);
                  this.ctx.save();
                  this.ctx.setTransform(1, 0, 0, 1, 0, 0);
                  this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
                  this.ctx.restore();
                }
                save() {
                  if (this.inSMaskMode) {
                    copyCtxState(this.ctx, this.suspendedCtx);
                    this.suspendedCtx.save();
                  } else {
                    this.ctx.save();
                  }
                  const old = this.current;
                  this.stateStack.push(old);
                  this.current = old.clone();
                }
                restore() {
                  if (this.stateStack.length === 0 && this.inSMaskMode) {
                    this.endSMaskMode();
                  }
                  if (this.stateStack.length !== 0) {
                    this.current = this.stateStack.pop();
                    if (this.inSMaskMode) {
                      this.suspendedCtx.restore();
                      copyCtxState(this.suspendedCtx, this.ctx);
                    } else {
                      this.ctx.restore();
                    }
                    this.checkSMaskState();
                    this.pendingClip = null;
                    this._cachedScaleForStroking = null;
                    this._cachedGetSinglePixelWidth = null;
                  }
                }
                transform(a, b, c, d, e, f) {
                  this.ctx.transform(a, b, c, d, e, f);
                  this._cachedScaleForStroking = null;
                  this._cachedGetSinglePixelWidth = null;
                }
                constructPath(ops, args, minMax) {
                  const ctx = this.ctx;
                  const current = this.current;
                  let x = current.x, y = current.y;
                  let startX, startY;
                  const currentTransform = (0, _display_utils2.getCurrentTransform)(ctx);
                  const isScalingMatrix = currentTransform[0] === 0 && currentTransform[3] === 0 || currentTransform[1] === 0 && currentTransform[2] === 0;
                  const minMaxForBezier = isScalingMatrix ? minMax.slice(0) : null;
                  for (let i = 0, j = 0, ii = ops.length; i < ii; i++) {
                    switch (ops[i] | 0) {
                      case _util2.OPS.rectangle:
                        x = args[j++];
                        y = args[j++];
                        const width = args[j++];
                        const height = args[j++];
                        const xw = x + width;
                        const yh = y + height;
                        ctx.moveTo(x, y);
                        if (width === 0 || height === 0) {
                          ctx.lineTo(xw, yh);
                        } else {
                          ctx.lineTo(xw, y);
                          ctx.lineTo(xw, yh);
                          ctx.lineTo(x, yh);
                        }
                        if (!isScalingMatrix) {
                          current.updateRectMinMax(currentTransform, [x, y, xw, yh]);
                        }
                        ctx.closePath();
                        break;
                      case _util2.OPS.moveTo:
                        x = args[j++];
                        y = args[j++];
                        ctx.moveTo(x, y);
                        if (!isScalingMatrix) {
                          current.updatePathMinMax(currentTransform, x, y);
                        }
                        break;
                      case _util2.OPS.lineTo:
                        x = args[j++];
                        y = args[j++];
                        ctx.lineTo(x, y);
                        if (!isScalingMatrix) {
                          current.updatePathMinMax(currentTransform, x, y);
                        }
                        break;
                      case _util2.OPS.curveTo:
                        startX = x;
                        startY = y;
                        x = args[j + 4];
                        y = args[j + 5];
                        ctx.bezierCurveTo(args[j], args[j + 1], args[j + 2], args[j + 3], x, y);
                        current.updateCurvePathMinMax(currentTransform, startX, startY, args[j], args[j + 1], args[j + 2], args[j + 3], x, y, minMaxForBezier);
                        j += 6;
                        break;
                      case _util2.OPS.curveTo2:
                        startX = x;
                        startY = y;
                        ctx.bezierCurveTo(x, y, args[j], args[j + 1], args[j + 2], args[j + 3]);
                        current.updateCurvePathMinMax(currentTransform, startX, startY, x, y, args[j], args[j + 1], args[j + 2], args[j + 3], minMaxForBezier);
                        x = args[j + 2];
                        y = args[j + 3];
                        j += 4;
                        break;
                      case _util2.OPS.curveTo3:
                        startX = x;
                        startY = y;
                        x = args[j + 2];
                        y = args[j + 3];
                        ctx.bezierCurveTo(args[j], args[j + 1], x, y, x, y);
                        current.updateCurvePathMinMax(currentTransform, startX, startY, args[j], args[j + 1], x, y, x, y, minMaxForBezier);
                        j += 4;
                        break;
                      case _util2.OPS.closePath:
                        ctx.closePath();
                        break;
                    }
                  }
                  if (isScalingMatrix) {
                    current.updateScalingPathMinMax(currentTransform, minMaxForBezier);
                  }
                  current.setCurrentPoint(x, y);
                }
                closePath() {
                  this.ctx.closePath();
                }
                stroke(consumePath = true) {
                  const ctx = this.ctx;
                  const strokeColor = this.current.strokeColor;
                  ctx.globalAlpha = this.current.strokeAlpha;
                  if (this.contentVisible) {
                    if (typeof strokeColor === "object" && (strokeColor == null ? void 0 : strokeColor.getPattern)) {
                      ctx.save();
                      ctx.strokeStyle = strokeColor.getPattern(ctx, this, (0, _display_utils2.getCurrentTransformInverse)(ctx), _pattern_helper.PathType.STROKE);
                      this.rescaleAndStroke(false);
                      ctx.restore();
                    } else {
                      this.rescaleAndStroke(true);
                    }
                  }
                  if (consumePath) {
                    this.consumePath(this.current.getClippedPathBoundingBox());
                  }
                  ctx.globalAlpha = this.current.fillAlpha;
                }
                closeStroke() {
                  this.closePath();
                  this.stroke();
                }
                fill(consumePath = true) {
                  const ctx = this.ctx;
                  const fillColor = this.current.fillColor;
                  const isPatternFill = this.current.patternFill;
                  let needRestore = false;
                  if (isPatternFill) {
                    ctx.save();
                    ctx.fillStyle = fillColor.getPattern(ctx, this, (0, _display_utils2.getCurrentTransformInverse)(ctx), _pattern_helper.PathType.FILL);
                    needRestore = true;
                  }
                  const intersect = this.current.getClippedPathBoundingBox();
                  if (this.contentVisible && intersect !== null) {
                    if (this.pendingEOFill) {
                      ctx.fill("evenodd");
                      this.pendingEOFill = false;
                    } else {
                      ctx.fill();
                    }
                  }
                  if (needRestore) {
                    ctx.restore();
                  }
                  if (consumePath) {
                    this.consumePath(intersect);
                  }
                }
                eoFill() {
                  this.pendingEOFill = true;
                  this.fill();
                }
                fillStroke() {
                  this.fill(false);
                  this.stroke(false);
                  this.consumePath();
                }
                eoFillStroke() {
                  this.pendingEOFill = true;
                  this.fillStroke();
                }
                closeFillStroke() {
                  this.closePath();
                  this.fillStroke();
                }
                closeEOFillStroke() {
                  this.pendingEOFill = true;
                  this.closePath();
                  this.fillStroke();
                }
                endPath() {
                  this.consumePath();
                }
                clip() {
                  this.pendingClip = NORMAL_CLIP;
                }
                eoClip() {
                  this.pendingClip = EO_CLIP;
                }
                beginText() {
                  this.current.textMatrix = _util2.IDENTITY_MATRIX;
                  this.current.textMatrixScale = 1;
                  this.current.x = this.current.lineX = 0;
                  this.current.y = this.current.lineY = 0;
                }
                endText() {
                  const paths = this.pendingTextPaths;
                  const ctx = this.ctx;
                  if (paths === void 0) {
                    ctx.beginPath();
                    return;
                  }
                  ctx.save();
                  ctx.beginPath();
                  for (const path of paths) {
                    ctx.setTransform(...path.transform);
                    ctx.translate(path.x, path.y);
                    path.addToPath(ctx, path.fontSize);
                  }
                  ctx.restore();
                  ctx.clip();
                  ctx.beginPath();
                  delete this.pendingTextPaths;
                }
                setCharSpacing(spacing) {
                  this.current.charSpacing = spacing;
                }
                setWordSpacing(spacing) {
                  this.current.wordSpacing = spacing;
                }
                setHScale(scale) {
                  this.current.textHScale = scale / 100;
                }
                setLeading(leading) {
                  this.current.leading = -leading;
                }
                setFont(fontRefName, size) {
                  const fontObj = this.commonObjs.get(fontRefName);
                  const current = this.current;
                  if (!fontObj) {
                    throw new Error(`Can't find font for ${fontRefName}`);
                  }
                  current.fontMatrix = fontObj.fontMatrix || _util2.FONT_IDENTITY_MATRIX;
                  if (current.fontMatrix[0] === 0 || current.fontMatrix[3] === 0) {
                    (0, _util2.warn)("Invalid font matrix for font " + fontRefName);
                  }
                  if (size < 0) {
                    size = -size;
                    current.fontDirection = -1;
                  } else {
                    current.fontDirection = 1;
                  }
                  this.current.font = fontObj;
                  this.current.fontSize = size;
                  if (fontObj.isType3Font) {
                    return;
                  }
                  const name = fontObj.loadedName || "sans-serif";
                  let bold = "normal";
                  if (fontObj.black) {
                    bold = "900";
                  } else if (fontObj.bold) {
                    bold = "bold";
                  }
                  const italic = fontObj.italic ? "italic" : "normal";
                  const typeface = `"${name}", ${fontObj.fallbackName}`;
                  let browserFontSize = size;
                  if (size < MIN_FONT_SIZE) {
                    browserFontSize = MIN_FONT_SIZE;
                  } else if (size > MAX_FONT_SIZE) {
                    browserFontSize = MAX_FONT_SIZE;
                  }
                  this.current.fontSizeScale = size / browserFontSize;
                  this.ctx.font = `${italic} ${bold} ${browserFontSize}px ${typeface}`;
                }
                setTextRenderingMode(mode) {
                  this.current.textRenderingMode = mode;
                }
                setTextRise(rise) {
                  this.current.textRise = rise;
                }
                moveText(x, y) {
                  this.current.x = this.current.lineX += x;
                  this.current.y = this.current.lineY += y;
                }
                setLeadingMoveText(x, y) {
                  this.setLeading(-y);
                  this.moveText(x, y);
                }
                setTextMatrix(a, b, c, d, e, f) {
                  this.current.textMatrix = [a, b, c, d, e, f];
                  this.current.textMatrixScale = Math.hypot(a, b);
                  this.current.x = this.current.lineX = 0;
                  this.current.y = this.current.lineY = 0;
                }
                nextLine() {
                  this.moveText(0, this.current.leading);
                }
                paintChar(character, x, y, patternTransform) {
                  const ctx = this.ctx;
                  const current = this.current;
                  const font = current.font;
                  const textRenderingMode = current.textRenderingMode;
                  const fontSize = current.fontSize / current.fontSizeScale;
                  const fillStrokeMode = textRenderingMode & _util2.TextRenderingMode.FILL_STROKE_MASK;
                  const isAddToPathSet = !!(textRenderingMode & _util2.TextRenderingMode.ADD_TO_PATH_FLAG);
                  const patternFill = current.patternFill && !font.missingFile;
                  let addToPath;
                  if (font.disableFontFace || isAddToPathSet || patternFill) {
                    addToPath = font.getPathGenerator(this.commonObjs, character);
                  }
                  if (font.disableFontFace || patternFill) {
                    ctx.save();
                    ctx.translate(x, y);
                    ctx.beginPath();
                    addToPath(ctx, fontSize);
                    if (patternTransform) {
                      ctx.setTransform(...patternTransform);
                    }
                    if (fillStrokeMode === _util2.TextRenderingMode.FILL || fillStrokeMode === _util2.TextRenderingMode.FILL_STROKE) {
                      ctx.fill();
                    }
                    if (fillStrokeMode === _util2.TextRenderingMode.STROKE || fillStrokeMode === _util2.TextRenderingMode.FILL_STROKE) {
                      ctx.stroke();
                    }
                    ctx.restore();
                  } else {
                    if (fillStrokeMode === _util2.TextRenderingMode.FILL || fillStrokeMode === _util2.TextRenderingMode.FILL_STROKE) {
                      ctx.fillText(character, x, y);
                    }
                    if (fillStrokeMode === _util2.TextRenderingMode.STROKE || fillStrokeMode === _util2.TextRenderingMode.FILL_STROKE) {
                      ctx.strokeText(character, x, y);
                    }
                  }
                  if (isAddToPathSet) {
                    const paths = this.pendingTextPaths || (this.pendingTextPaths = []);
                    paths.push({
                      transform: (0, _display_utils2.getCurrentTransform)(ctx),
                      x,
                      y,
                      fontSize,
                      addToPath
                    });
                  }
                }
                get isFontSubpixelAAEnabled() {
                  const {
                    context: ctx
                  } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
                  ctx.scale(1.5, 1);
                  ctx.fillText("I", 0, 10);
                  const data = ctx.getImageData(0, 0, 10, 10).data;
                  let enabled = false;
                  for (let i = 3; i < data.length; i += 4) {
                    if (data[i] > 0 && data[i] < 255) {
                      enabled = true;
                      break;
                    }
                  }
                  return (0, _util2.shadow)(this, "isFontSubpixelAAEnabled", enabled);
                }
                showText(glyphs) {
                  const current = this.current;
                  const font = current.font;
                  if (font.isType3Font) {
                    return this.showType3Text(glyphs);
                  }
                  const fontSize = current.fontSize;
                  if (fontSize === 0) {
                    return void 0;
                  }
                  const ctx = this.ctx;
                  const fontSizeScale = current.fontSizeScale;
                  const charSpacing = current.charSpacing;
                  const wordSpacing = current.wordSpacing;
                  const fontDirection = current.fontDirection;
                  const textHScale = current.textHScale * fontDirection;
                  const glyphsLength = glyphs.length;
                  const vertical = font.vertical;
                  const spacingDir = vertical ? 1 : -1;
                  const defaultVMetrics = font.defaultVMetrics;
                  const widthAdvanceScale = fontSize * current.fontMatrix[0];
                  const simpleFillText = current.textRenderingMode === _util2.TextRenderingMode.FILL && !font.disableFontFace && !current.patternFill;
                  ctx.save();
                  ctx.transform(...current.textMatrix);
                  ctx.translate(current.x, current.y + current.textRise);
                  if (fontDirection > 0) {
                    ctx.scale(textHScale, -1);
                  } else {
                    ctx.scale(textHScale, 1);
                  }
                  let patternTransform;
                  if (current.patternFill) {
                    ctx.save();
                    const pattern = current.fillColor.getPattern(ctx, this, (0, _display_utils2.getCurrentTransformInverse)(ctx), _pattern_helper.PathType.FILL);
                    patternTransform = (0, _display_utils2.getCurrentTransform)(ctx);
                    ctx.restore();
                    ctx.fillStyle = pattern;
                  }
                  let lineWidth = current.lineWidth;
                  const scale = current.textMatrixScale;
                  if (scale === 0 || lineWidth === 0) {
                    const fillStrokeMode = current.textRenderingMode & _util2.TextRenderingMode.FILL_STROKE_MASK;
                    if (fillStrokeMode === _util2.TextRenderingMode.STROKE || fillStrokeMode === _util2.TextRenderingMode.FILL_STROKE) {
                      lineWidth = this.getSinglePixelWidth();
                    }
                  } else {
                    lineWidth /= scale;
                  }
                  if (fontSizeScale !== 1) {
                    ctx.scale(fontSizeScale, fontSizeScale);
                    lineWidth /= fontSizeScale;
                  }
                  ctx.lineWidth = lineWidth;
                  if (font.isInvalidPDFjsFont) {
                    const chars = [];
                    let width = 0;
                    for (const glyph of glyphs) {
                      chars.push(glyph.unicode);
                      width += glyph.width;
                    }
                    ctx.fillText(chars.join(""), 0, 0);
                    current.x += width * widthAdvanceScale * textHScale;
                    ctx.restore();
                    this.compose();
                    return void 0;
                  }
                  let x = 0, i;
                  for (i = 0; i < glyphsLength; ++i) {
                    const glyph = glyphs[i];
                    if (typeof glyph === "number") {
                      x += spacingDir * glyph * fontSize / 1e3;
                      continue;
                    }
                    let restoreNeeded = false;
                    const spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
                    const character = glyph.fontChar;
                    const accent = glyph.accent;
                    let scaledX, scaledY;
                    let width = glyph.width;
                    if (vertical) {
                      const vmetric = glyph.vmetric || defaultVMetrics;
                      const vx = -(glyph.vmetric ? vmetric[1] : width * 0.5) * widthAdvanceScale;
                      const vy = vmetric[2] * widthAdvanceScale;
                      width = vmetric ? -vmetric[0] : width;
                      scaledX = vx / fontSizeScale;
                      scaledY = (x + vy) / fontSizeScale;
                    } else {
                      scaledX = x / fontSizeScale;
                      scaledY = 0;
                    }
                    if (font.remeasure && width > 0) {
                      const measuredWidth = ctx.measureText(character).width * 1e3 / fontSize * fontSizeScale;
                      if (width < measuredWidth && this.isFontSubpixelAAEnabled) {
                        const characterScaleX = width / measuredWidth;
                        restoreNeeded = true;
                        ctx.save();
                        ctx.scale(characterScaleX, 1);
                        scaledX /= characterScaleX;
                      } else if (width !== measuredWidth) {
                        scaledX += (width - measuredWidth) / 2e3 * fontSize / fontSizeScale;
                      }
                    }
                    if (this.contentVisible && (glyph.isInFont || font.missingFile)) {
                      if (simpleFillText && !accent) {
                        ctx.fillText(character, scaledX, scaledY);
                      } else {
                        this.paintChar(character, scaledX, scaledY, patternTransform);
                        if (accent) {
                          const scaledAccentX = scaledX + fontSize * accent.offset.x / fontSizeScale;
                          const scaledAccentY = scaledY - fontSize * accent.offset.y / fontSizeScale;
                          this.paintChar(accent.fontChar, scaledAccentX, scaledAccentY, patternTransform);
                        }
                      }
                    }
                    let charWidth;
                    if (vertical) {
                      charWidth = width * widthAdvanceScale - spacing * fontDirection;
                    } else {
                      charWidth = width * widthAdvanceScale + spacing * fontDirection;
                    }
                    x += charWidth;
                    if (restoreNeeded) {
                      ctx.restore();
                    }
                  }
                  if (vertical) {
                    current.y -= x;
                  } else {
                    current.x += x * textHScale;
                  }
                  ctx.restore();
                  this.compose();
                  return void 0;
                }
                showType3Text(glyphs) {
                  const ctx = this.ctx;
                  const current = this.current;
                  const font = current.font;
                  const fontSize = current.fontSize;
                  const fontDirection = current.fontDirection;
                  const spacingDir = font.vertical ? 1 : -1;
                  const charSpacing = current.charSpacing;
                  const wordSpacing = current.wordSpacing;
                  const textHScale = current.textHScale * fontDirection;
                  const fontMatrix = current.fontMatrix || _util2.FONT_IDENTITY_MATRIX;
                  const glyphsLength = glyphs.length;
                  const isTextInvisible = current.textRenderingMode === _util2.TextRenderingMode.INVISIBLE;
                  let i, glyph, width, spacingLength;
                  if (isTextInvisible || fontSize === 0) {
                    return;
                  }
                  this._cachedScaleForStroking = null;
                  this._cachedGetSinglePixelWidth = null;
                  ctx.save();
                  ctx.transform(...current.textMatrix);
                  ctx.translate(current.x, current.y);
                  ctx.scale(textHScale, fontDirection);
                  for (i = 0; i < glyphsLength; ++i) {
                    glyph = glyphs[i];
                    if (typeof glyph === "number") {
                      spacingLength = spacingDir * glyph * fontSize / 1e3;
                      this.ctx.translate(spacingLength, 0);
                      current.x += spacingLength * textHScale;
                      continue;
                    }
                    const spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
                    const operatorList = font.charProcOperatorList[glyph.operatorListId];
                    if (!operatorList) {
                      (0, _util2.warn)(`Type3 character "${glyph.operatorListId}" is not available.`);
                      continue;
                    }
                    if (this.contentVisible) {
                      this.processingType3 = glyph;
                      this.save();
                      ctx.scale(fontSize, fontSize);
                      ctx.transform(...fontMatrix);
                      this.executeOperatorList(operatorList);
                      this.restore();
                    }
                    const transformed = _util2.Util.applyTransform([glyph.width, 0], fontMatrix);
                    width = transformed[0] * fontSize + spacing;
                    ctx.translate(width, 0);
                    current.x += width * textHScale;
                  }
                  ctx.restore();
                  this.processingType3 = null;
                }
                setCharWidth(xWidth, yWidth) {
                }
                setCharWidthAndBounds(xWidth, yWidth, llx, lly, urx, ury) {
                  this.ctx.rect(llx, lly, urx - llx, ury - lly);
                  this.ctx.clip();
                  this.endPath();
                }
                getColorN_Pattern(IR) {
                  let pattern;
                  if (IR[0] === "TilingPattern") {
                    const color = IR[1];
                    const baseTransform = this.baseTransform || (0, _display_utils2.getCurrentTransform)(this.ctx);
                    const canvasGraphicsFactory = {
                      createCanvasGraphics: (ctx) => {
                        return new _CanvasGraphics(ctx, this.commonObjs, this.objs, this.canvasFactory, {
                          optionalContentConfig: this.optionalContentConfig,
                          markedContentStack: this.markedContentStack
                        });
                      }
                    };
                    pattern = new _pattern_helper.TilingPattern(IR, color, this.ctx, canvasGraphicsFactory, baseTransform);
                  } else {
                    pattern = this._getPattern(IR[1], IR[2]);
                  }
                  return pattern;
                }
                setStrokeColorN() {
                  this.current.strokeColor = this.getColorN_Pattern(arguments);
                }
                setFillColorN() {
                  this.current.fillColor = this.getColorN_Pattern(arguments);
                  this.current.patternFill = true;
                }
                setStrokeRGBColor(r, g, b) {
                  var _a;
                  const color = ((_a = this.selectColor) == null ? void 0 : _a.call(this, r, g, b)) || _util2.Util.makeHexColor(r, g, b);
                  this.ctx.strokeStyle = color;
                  this.current.strokeColor = color;
                }
                setFillRGBColor(r, g, b) {
                  var _a;
                  const color = ((_a = this.selectColor) == null ? void 0 : _a.call(this, r, g, b)) || _util2.Util.makeHexColor(r, g, b);
                  this.ctx.fillStyle = color;
                  this.current.fillColor = color;
                  this.current.patternFill = false;
                }
                _getPattern(objId, matrix = null) {
                  let pattern;
                  if (this.cachedPatterns.has(objId)) {
                    pattern = this.cachedPatterns.get(objId);
                  } else {
                    pattern = (0, _pattern_helper.getShadingPattern)(this.objs.get(objId));
                    this.cachedPatterns.set(objId, pattern);
                  }
                  if (matrix) {
                    pattern.matrix = matrix;
                  }
                  return pattern;
                }
                shadingFill(objId) {
                  if (!this.contentVisible) {
                    return;
                  }
                  const ctx = this.ctx;
                  this.save();
                  const pattern = this._getPattern(objId);
                  ctx.fillStyle = pattern.getPattern(ctx, this, (0, _display_utils2.getCurrentTransformInverse)(ctx), _pattern_helper.PathType.SHADING);
                  const inv = (0, _display_utils2.getCurrentTransformInverse)(ctx);
                  if (inv) {
                    const canvas = ctx.canvas;
                    const width = canvas.width;
                    const height = canvas.height;
                    const bl = _util2.Util.applyTransform([0, 0], inv);
                    const br = _util2.Util.applyTransform([0, height], inv);
                    const ul = _util2.Util.applyTransform([width, 0], inv);
                    const ur = _util2.Util.applyTransform([width, height], inv);
                    const x0 = Math.min(bl[0], br[0], ul[0], ur[0]);
                    const y0 = Math.min(bl[1], br[1], ul[1], ur[1]);
                    const x1 = Math.max(bl[0], br[0], ul[0], ur[0]);
                    const y1 = Math.max(bl[1], br[1], ul[1], ur[1]);
                    this.ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
                  } else {
                    this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
                  }
                  this.compose(this.current.getClippedPathBoundingBox());
                  this.restore();
                }
                beginInlineImage() {
                  (0, _util2.unreachable)("Should not call beginInlineImage");
                }
                beginImageData() {
                  (0, _util2.unreachable)("Should not call beginImageData");
                }
                paintFormXObjectBegin(matrix, bbox) {
                  if (!this.contentVisible) {
                    return;
                  }
                  this.save();
                  this.baseTransformStack.push(this.baseTransform);
                  if (Array.isArray(matrix) && matrix.length === 6) {
                    this.transform(...matrix);
                  }
                  this.baseTransform = (0, _display_utils2.getCurrentTransform)(this.ctx);
                  if (bbox) {
                    const width = bbox[2] - bbox[0];
                    const height = bbox[3] - bbox[1];
                    this.ctx.rect(bbox[0], bbox[1], width, height);
                    this.current.updateRectMinMax((0, _display_utils2.getCurrentTransform)(this.ctx), bbox);
                    this.clip();
                    this.endPath();
                  }
                }
                paintFormXObjectEnd() {
                  if (!this.contentVisible) {
                    return;
                  }
                  this.restore();
                  this.baseTransform = this.baseTransformStack.pop();
                }
                beginGroup(group) {
                  if (!this.contentVisible) {
                    return;
                  }
                  this.save();
                  if (this.inSMaskMode) {
                    this.endSMaskMode();
                    this.current.activeSMask = null;
                  }
                  const currentCtx = this.ctx;
                  if (!group.isolated) {
                    (0, _util2.info)("TODO: Support non-isolated groups.");
                  }
                  if (group.knockout) {
                    (0, _util2.warn)("Knockout groups not supported.");
                  }
                  const currentTransform = (0, _display_utils2.getCurrentTransform)(currentCtx);
                  if (group.matrix) {
                    currentCtx.transform(...group.matrix);
                  }
                  if (!group.bbox) {
                    throw new Error("Bounding box is required.");
                  }
                  let bounds = _util2.Util.getAxialAlignedBoundingBox(group.bbox, (0, _display_utils2.getCurrentTransform)(currentCtx));
                  const canvasBounds = [0, 0, currentCtx.canvas.width, currentCtx.canvas.height];
                  bounds = _util2.Util.intersect(bounds, canvasBounds) || [0, 0, 0, 0];
                  const offsetX = Math.floor(bounds[0]);
                  const offsetY = Math.floor(bounds[1]);
                  let drawnWidth = Math.max(Math.ceil(bounds[2]) - offsetX, 1);
                  let drawnHeight = Math.max(Math.ceil(bounds[3]) - offsetY, 1);
                  let scaleX = 1, scaleY = 1;
                  if (drawnWidth > MAX_GROUP_SIZE) {
                    scaleX = drawnWidth / MAX_GROUP_SIZE;
                    drawnWidth = MAX_GROUP_SIZE;
                  }
                  if (drawnHeight > MAX_GROUP_SIZE) {
                    scaleY = drawnHeight / MAX_GROUP_SIZE;
                    drawnHeight = MAX_GROUP_SIZE;
                  }
                  this.current.startNewPathAndClipBox([0, 0, drawnWidth, drawnHeight]);
                  let cacheId = "groupAt" + this.groupLevel;
                  if (group.smask) {
                    cacheId += "_smask_" + this.smaskCounter++ % 2;
                  }
                  const scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight);
                  const groupCtx = scratchCanvas.context;
                  groupCtx.scale(1 / scaleX, 1 / scaleY);
                  groupCtx.translate(-offsetX, -offsetY);
                  groupCtx.transform(...currentTransform);
                  if (group.smask) {
                    this.smaskStack.push({
                      canvas: scratchCanvas.canvas,
                      context: groupCtx,
                      offsetX,
                      offsetY,
                      scaleX,
                      scaleY,
                      subtype: group.smask.subtype,
                      backdrop: group.smask.backdrop,
                      transferMap: group.smask.transferMap || null,
                      startTransformInverse: null
                    });
                  } else {
                    currentCtx.setTransform(1, 0, 0, 1, 0, 0);
                    currentCtx.translate(offsetX, offsetY);
                    currentCtx.scale(scaleX, scaleY);
                    currentCtx.save();
                  }
                  copyCtxState(currentCtx, groupCtx);
                  this.ctx = groupCtx;
                  this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
                  this.groupStack.push(currentCtx);
                  this.groupLevel++;
                }
                endGroup(group) {
                  if (!this.contentVisible) {
                    return;
                  }
                  this.groupLevel--;
                  const groupCtx = this.ctx;
                  const ctx = this.groupStack.pop();
                  this.ctx = ctx;
                  this.ctx.imageSmoothingEnabled = false;
                  if (group.smask) {
                    this.tempSMask = this.smaskStack.pop();
                    this.restore();
                  } else {
                    this.ctx.restore();
                    const currentMtx = (0, _display_utils2.getCurrentTransform)(this.ctx);
                    this.restore();
                    this.ctx.save();
                    this.ctx.setTransform(...currentMtx);
                    const dirtyBox = _util2.Util.getAxialAlignedBoundingBox([0, 0, groupCtx.canvas.width, groupCtx.canvas.height], currentMtx);
                    this.ctx.drawImage(groupCtx.canvas, 0, 0);
                    this.ctx.restore();
                    this.compose(dirtyBox);
                  }
                }
                beginAnnotation(id, rect, transform, matrix, hasOwnCanvas) {
                  __privateMethod(this, _CanvasGraphics_instances, restoreInitialState_fn).call(this);
                  resetCtxToDefault(this.ctx, this.foregroundColor);
                  this.ctx.save();
                  this.save();
                  if (this.baseTransform) {
                    this.ctx.setTransform(...this.baseTransform);
                  }
                  if (Array.isArray(rect) && rect.length === 4) {
                    const width = rect[2] - rect[0];
                    const height = rect[3] - rect[1];
                    if (hasOwnCanvas && this.annotationCanvasMap) {
                      transform = transform.slice();
                      transform[4] -= rect[0];
                      transform[5] -= rect[1];
                      rect = rect.slice();
                      rect[0] = rect[1] = 0;
                      rect[2] = width;
                      rect[3] = height;
                      const [scaleX, scaleY] = _util2.Util.singularValueDecompose2dScale((0, _display_utils2.getCurrentTransform)(this.ctx));
                      const {
                        viewportScale
                      } = this;
                      const canvasWidth = Math.ceil(width * this.outputScaleX * viewportScale);
                      const canvasHeight = Math.ceil(height * this.outputScaleY * viewportScale);
                      this.annotationCanvas = this.canvasFactory.create(canvasWidth, canvasHeight);
                      const {
                        canvas,
                        context
                      } = this.annotationCanvas;
                      this.annotationCanvasMap.set(id, canvas);
                      this.annotationCanvas.savedCtx = this.ctx;
                      this.ctx = context;
                      this.ctx.setTransform(scaleX, 0, 0, -scaleY, 0, height * scaleY);
                      resetCtxToDefault(this.ctx, this.foregroundColor);
                    } else {
                      resetCtxToDefault(this.ctx, this.foregroundColor);
                      this.ctx.rect(rect[0], rect[1], width, height);
                      this.ctx.clip();
                      this.endPath();
                    }
                  }
                  this.current = new CanvasExtraState(this.ctx.canvas.width, this.ctx.canvas.height);
                  this.transform(...transform);
                  this.transform(...matrix);
                }
                endAnnotation() {
                  if (this.annotationCanvas) {
                    this.ctx = this.annotationCanvas.savedCtx;
                    delete this.annotationCanvas.savedCtx;
                    delete this.annotationCanvas;
                  }
                }
                paintImageMaskXObject(img) {
                  if (!this.contentVisible) {
                    return;
                  }
                  const count = img.count;
                  img = this.getObject(img.data, img);
                  img.count = count;
                  const ctx = this.ctx;
                  const glyph = this.processingType3;
                  if (glyph) {
                    if (glyph.compiled === void 0) {
                      glyph.compiled = compileType3Glyph(img);
                    }
                    if (glyph.compiled) {
                      glyph.compiled(ctx);
                      return;
                    }
                  }
                  const mask = this._createMaskCanvas(img);
                  const maskCanvas = mask.canvas;
                  ctx.save();
                  ctx.setTransform(1, 0, 0, 1, 0, 0);
                  ctx.drawImage(maskCanvas, mask.offsetX, mask.offsetY);
                  ctx.restore();
                  this.compose();
                }
                paintImageMaskXObjectRepeat(img, scaleX, skewX = 0, skewY = 0, scaleY, positions) {
                  if (!this.contentVisible) {
                    return;
                  }
                  img = this.getObject(img.data, img);
                  const ctx = this.ctx;
                  ctx.save();
                  const currentTransform = (0, _display_utils2.getCurrentTransform)(ctx);
                  ctx.transform(scaleX, skewX, skewY, scaleY, 0, 0);
                  const mask = this._createMaskCanvas(img);
                  ctx.setTransform(1, 0, 0, 1, mask.offsetX - currentTransform[4], mask.offsetY - currentTransform[5]);
                  for (let i = 0, ii = positions.length; i < ii; i += 2) {
                    const trans = _util2.Util.transform(currentTransform, [scaleX, skewX, skewY, scaleY, positions[i], positions[i + 1]]);
                    const [x, y] = _util2.Util.applyTransform([0, 0], trans);
                    ctx.drawImage(mask.canvas, x, y);
                  }
                  ctx.restore();
                  this.compose();
                }
                paintImageMaskXObjectGroup(images) {
                  if (!this.contentVisible) {
                    return;
                  }
                  const ctx = this.ctx;
                  const fillColor = this.current.fillColor;
                  const isPatternFill = this.current.patternFill;
                  for (const image of images) {
                    const {
                      data,
                      width,
                      height,
                      transform
                    } = image;
                    const maskCanvas = this.cachedCanvases.getCanvas("maskCanvas", width, height);
                    const maskCtx = maskCanvas.context;
                    maskCtx.save();
                    const img = this.getObject(data, image);
                    putBinaryImageMask(maskCtx, img);
                    maskCtx.globalCompositeOperation = "source-in";
                    maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this, (0, _display_utils2.getCurrentTransformInverse)(ctx), _pattern_helper.PathType.FILL) : fillColor;
                    maskCtx.fillRect(0, 0, width, height);
                    maskCtx.restore();
                    ctx.save();
                    ctx.transform(...transform);
                    ctx.scale(1, -1);
                    drawImageAtIntegerCoords(ctx, maskCanvas.canvas, 0, 0, width, height, 0, -1, 1, 1);
                    ctx.restore();
                  }
                  this.compose();
                }
                paintImageXObject(objId) {
                  if (!this.contentVisible) {
                    return;
                  }
                  const imgData = this.getObject(objId);
                  if (!imgData) {
                    (0, _util2.warn)("Dependent image isn't ready yet");
                    return;
                  }
                  this.paintInlineImageXObject(imgData);
                }
                paintImageXObjectRepeat(objId, scaleX, scaleY, positions) {
                  if (!this.contentVisible) {
                    return;
                  }
                  const imgData = this.getObject(objId);
                  if (!imgData) {
                    (0, _util2.warn)("Dependent image isn't ready yet");
                    return;
                  }
                  const width = imgData.width;
                  const height = imgData.height;
                  const map = [];
                  for (let i = 0, ii = positions.length; i < ii; i += 2) {
                    map.push({
                      transform: [scaleX, 0, 0, scaleY, positions[i], positions[i + 1]],
                      x: 0,
                      y: 0,
                      w: width,
                      h: height
                    });
                  }
                  this.paintInlineImageXObjectGroup(imgData, map);
                }
                paintInlineImageXObject(imgData) {
                  if (!this.contentVisible) {
                    return;
                  }
                  const width = imgData.width;
                  const height = imgData.height;
                  const ctx = this.ctx;
                  this.save();
                  ctx.scale(1 / width, -1 / height);
                  let imgToPaint;
                  if (typeof HTMLElement === "function" && imgData instanceof HTMLElement || !imgData.data) {
                    imgToPaint = imgData;
                  } else {
                    const tmpCanvas = this.cachedCanvases.getCanvas("inlineImage", width, height);
                    const tmpCtx = tmpCanvas.context;
                    putBinaryImageData(tmpCtx, imgData, this.current.transferMaps);
                    imgToPaint = tmpCanvas.canvas;
                  }
                  const scaled = this._scaleImage(imgToPaint, (0, _display_utils2.getCurrentTransformInverse)(ctx));
                  ctx.imageSmoothingEnabled = getImageSmoothingEnabled((0, _display_utils2.getCurrentTransform)(ctx), imgData.interpolate);
                  drawImageAtIntegerCoords(ctx, scaled.img, 0, 0, scaled.paintWidth, scaled.paintHeight, 0, -height, width, height);
                  this.compose();
                  this.restore();
                }
                paintInlineImageXObjectGroup(imgData, map) {
                  if (!this.contentVisible) {
                    return;
                  }
                  const ctx = this.ctx;
                  const w = imgData.width;
                  const h = imgData.height;
                  const tmpCanvas = this.cachedCanvases.getCanvas("inlineImage", w, h);
                  const tmpCtx = tmpCanvas.context;
                  putBinaryImageData(tmpCtx, imgData, this.current.transferMaps);
                  for (const entry of map) {
                    ctx.save();
                    ctx.transform(...entry.transform);
                    ctx.scale(1, -1);
                    drawImageAtIntegerCoords(ctx, tmpCanvas.canvas, entry.x, entry.y, entry.w, entry.h, 0, -1, 1, 1);
                    ctx.restore();
                  }
                  this.compose();
                }
                paintSolidColorImageMask() {
                  if (!this.contentVisible) {
                    return;
                  }
                  this.ctx.fillRect(0, 0, 1, 1);
                  this.compose();
                }
                markPoint(tag) {
                }
                markPointProps(tag, properties) {
                }
                beginMarkedContent(tag) {
                  this.markedContentStack.push({
                    visible: true
                  });
                }
                beginMarkedContentProps(tag, properties) {
                  if (tag === "OC") {
                    this.markedContentStack.push({
                      visible: this.optionalContentConfig.isVisible(properties)
                    });
                  } else {
                    this.markedContentStack.push({
                      visible: true
                    });
                  }
                  this.contentVisible = this.isContentVisible();
                }
                endMarkedContent() {
                  this.markedContentStack.pop();
                  this.contentVisible = this.isContentVisible();
                }
                beginCompat() {
                }
                endCompat() {
                }
                consumePath(clipBox) {
                  const isEmpty = this.current.isEmptyClip();
                  if (this.pendingClip) {
                    this.current.updateClipFromPath();
                  }
                  if (!this.pendingClip) {
                    this.compose(clipBox);
                  }
                  const ctx = this.ctx;
                  if (this.pendingClip) {
                    if (!isEmpty) {
                      if (this.pendingClip === EO_CLIP) {
                        ctx.clip("evenodd");
                      } else {
                        ctx.clip();
                      }
                    }
                    this.pendingClip = null;
                  }
                  this.current.startNewPathAndClipBox(this.current.clipBox);
                  ctx.beginPath();
                }
                getSinglePixelWidth() {
                  if (!this._cachedGetSinglePixelWidth) {
                    const m = (0, _display_utils2.getCurrentTransform)(this.ctx);
                    if (m[1] === 0 && m[2] === 0) {
                      this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(m[0]), Math.abs(m[3]));
                    } else {
                      const absDet = Math.abs(m[0] * m[3] - m[2] * m[1]);
                      const normX = Math.hypot(m[0], m[2]);
                      const normY = Math.hypot(m[1], m[3]);
                      this._cachedGetSinglePixelWidth = Math.max(normX, normY) / absDet;
                    }
                  }
                  return this._cachedGetSinglePixelWidth;
                }
                getScaleForStroking() {
                  if (!this._cachedScaleForStroking) {
                    const {
                      lineWidth
                    } = this.current;
                    const m = (0, _display_utils2.getCurrentTransform)(this.ctx);
                    let scaleX, scaleY;
                    if (m[1] === 0 && m[2] === 0) {
                      const normX = Math.abs(m[0]);
                      const normY = Math.abs(m[3]);
                      if (lineWidth === 0) {
                        scaleX = 1 / normX;
                        scaleY = 1 / normY;
                      } else {
                        const scaledXLineWidth = normX * lineWidth;
                        const scaledYLineWidth = normY * lineWidth;
                        scaleX = scaledXLineWidth < 1 ? 1 / scaledXLineWidth : 1;
                        scaleY = scaledYLineWidth < 1 ? 1 / scaledYLineWidth : 1;
                      }
                    } else {
                      const absDet = Math.abs(m[0] * m[3] - m[2] * m[1]);
                      const normX = Math.hypot(m[0], m[1]);
                      const normY = Math.hypot(m[2], m[3]);
                      if (lineWidth === 0) {
                        scaleX = normY / absDet;
                        scaleY = normX / absDet;
                      } else {
                        const baseArea = lineWidth * absDet;
                        scaleX = normY > baseArea ? normY / baseArea : 1;
                        scaleY = normX > baseArea ? normX / baseArea : 1;
                      }
                    }
                    this._cachedScaleForStroking = [scaleX, scaleY];
                  }
                  return this._cachedScaleForStroking;
                }
                rescaleAndStroke(saveRestore) {
                  const {
                    ctx
                  } = this;
                  const {
                    lineWidth
                  } = this.current;
                  const [scaleX, scaleY] = this.getScaleForStroking();
                  ctx.lineWidth = lineWidth || 1;
                  if (scaleX === 1 && scaleY === 1) {
                    ctx.stroke();
                    return;
                  }
                  let savedMatrix, savedDashes, savedDashOffset;
                  if (saveRestore) {
                    savedMatrix = (0, _display_utils2.getCurrentTransform)(ctx);
                    savedDashes = ctx.getLineDash().slice();
                    savedDashOffset = ctx.lineDashOffset;
                  }
                  ctx.scale(scaleX, scaleY);
                  const scale = Math.max(scaleX, scaleY);
                  ctx.setLineDash(ctx.getLineDash().map((x) => x / scale));
                  ctx.lineDashOffset /= scale;
                  ctx.stroke();
                  if (saveRestore) {
                    ctx.setTransform(...savedMatrix);
                    ctx.setLineDash(savedDashes);
                    ctx.lineDashOffset = savedDashOffset;
                  }
                }
                isContentVisible() {
                  for (let i = this.markedContentStack.length - 1; i >= 0; i--) {
                    if (!this.markedContentStack[i].visible) {
                      return false;
                    }
                  }
                  return true;
                }
              };
              _CanvasGraphics_instances = new WeakSet();
              restoreInitialState_fn = function() {
                while (this.stateStack.length || this.inSMaskMode) {
                  this.restore();
                }
                this.ctx.restore();
                if (this.transparentCanvas) {
                  this.ctx = this.compositeCtx;
                  this.ctx.save();
                  this.ctx.setTransform(1, 0, 0, 1, 0, 0);
                  this.ctx.drawImage(this.transparentCanvas, 0, 0);
                  this.ctx.restore();
                  this.transparentCanvas = null;
                }
              };
              let CanvasGraphics = _CanvasGraphics;
              exports2.CanvasGraphics = CanvasGraphics;
              for (const op in _util2.OPS) {
                if (CanvasGraphics.prototype[op] !== void 0) {
                  CanvasGraphics.prototype[_util2.OPS[op]] = CanvasGraphics.prototype[op];
                }
              }
            },
            /* 12 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.TilingPattern = exports2.PathType = void 0;
              exports2.getShadingPattern = getShadingPattern;
              var _util2 = __w_pdfjs_require__2(1);
              var _display_utils2 = __w_pdfjs_require__2(6);
              const PathType = {
                FILL: "Fill",
                STROKE: "Stroke",
                SHADING: "Shading"
              };
              exports2.PathType = PathType;
              function applyBoundingBox(ctx, bbox) {
                if (!bbox) {
                  return;
                }
                const width = bbox[2] - bbox[0];
                const height = bbox[3] - bbox[1];
                const region = new Path2D();
                region.rect(bbox[0], bbox[1], width, height);
                ctx.clip(region);
              }
              class BaseShadingPattern {
                constructor() {
                  if (this.constructor === BaseShadingPattern) {
                    (0, _util2.unreachable)("Cannot initialize BaseShadingPattern.");
                  }
                }
                getPattern() {
                  (0, _util2.unreachable)("Abstract method `getPattern` called.");
                }
              }
              class RadialAxialShadingPattern extends BaseShadingPattern {
                constructor(IR) {
                  super();
                  this._type = IR[1];
                  this._bbox = IR[2];
                  this._colorStops = IR[3];
                  this._p0 = IR[4];
                  this._p1 = IR[5];
                  this._r0 = IR[6];
                  this._r1 = IR[7];
                  this.matrix = null;
                }
                _createGradient(ctx) {
                  let grad;
                  if (this._type === "axial") {
                    grad = ctx.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]);
                  } else if (this._type === "radial") {
                    grad = ctx.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1);
                  }
                  for (const colorStop of this._colorStops) {
                    grad.addColorStop(colorStop[0], colorStop[1]);
                  }
                  return grad;
                }
                getPattern(ctx, owner, inverse, pathType) {
                  let pattern;
                  if (pathType === PathType.STROKE || pathType === PathType.FILL) {
                    const ownerBBox = owner.current.getClippedPathBoundingBox(pathType, (0, _display_utils2.getCurrentTransform)(ctx)) || [0, 0, 0, 0];
                    const width = Math.ceil(ownerBBox[2] - ownerBBox[0]) || 1;
                    const height = Math.ceil(ownerBBox[3] - ownerBBox[1]) || 1;
                    const tmpCanvas = owner.cachedCanvases.getCanvas("pattern", width, height, true);
                    const tmpCtx = tmpCanvas.context;
                    tmpCtx.clearRect(0, 0, tmpCtx.canvas.width, tmpCtx.canvas.height);
                    tmpCtx.beginPath();
                    tmpCtx.rect(0, 0, tmpCtx.canvas.width, tmpCtx.canvas.height);
                    tmpCtx.translate(-ownerBBox[0], -ownerBBox[1]);
                    inverse = _util2.Util.transform(inverse, [1, 0, 0, 1, ownerBBox[0], ownerBBox[1]]);
                    tmpCtx.transform(...owner.baseTransform);
                    if (this.matrix) {
                      tmpCtx.transform(...this.matrix);
                    }
                    applyBoundingBox(tmpCtx, this._bbox);
                    tmpCtx.fillStyle = this._createGradient(tmpCtx);
                    tmpCtx.fill();
                    pattern = ctx.createPattern(tmpCanvas.canvas, "no-repeat");
                    const domMatrix = new DOMMatrix(inverse);
                    pattern.setTransform(domMatrix);
                  } else {
                    applyBoundingBox(ctx, this._bbox);
                    pattern = this._createGradient(ctx);
                  }
                  return pattern;
                }
              }
              function drawTriangle(data, context, p1, p2, p3, c1, c2, c3) {
                const coords = context.coords, colors = context.colors;
                const bytes = data.data, rowSize = data.width * 4;
                let tmp;
                if (coords[p1 + 1] > coords[p2 + 1]) {
                  tmp = p1;
                  p1 = p2;
                  p2 = tmp;
                  tmp = c1;
                  c1 = c2;
                  c2 = tmp;
                }
                if (coords[p2 + 1] > coords[p3 + 1]) {
                  tmp = p2;
                  p2 = p3;
                  p3 = tmp;
                  tmp = c2;
                  c2 = c3;
                  c3 = tmp;
                }
                if (coords[p1 + 1] > coords[p2 + 1]) {
                  tmp = p1;
                  p1 = p2;
                  p2 = tmp;
                  tmp = c1;
                  c1 = c2;
                  c2 = tmp;
                }
                const x1 = (coords[p1] + context.offsetX) * context.scaleX;
                const y1 = (coords[p1 + 1] + context.offsetY) * context.scaleY;
                const x2 = (coords[p2] + context.offsetX) * context.scaleX;
                const y2 = (coords[p2 + 1] + context.offsetY) * context.scaleY;
                const x3 = (coords[p3] + context.offsetX) * context.scaleX;
                const y3 = (coords[p3 + 1] + context.offsetY) * context.scaleY;
                if (y1 >= y3) {
                  return;
                }
                const c1r = colors[c1], c1g = colors[c1 + 1], c1b = colors[c1 + 2];
                const c2r = colors[c2], c2g = colors[c2 + 1], c2b = colors[c2 + 2];
                const c3r = colors[c3], c3g = colors[c3 + 1], c3b = colors[c3 + 2];
                const minY = Math.round(y1), maxY = Math.round(y3);
                let xa, car, cag, cab;
                let xb, cbr, cbg, cbb;
                for (let y = minY; y <= maxY; y++) {
                  if (y < y2) {
                    let k2;
                    if (y < y1) {
                      k2 = 0;
                    } else {
                      k2 = (y1 - y) / (y1 - y2);
                    }
                    xa = x1 - (x1 - x2) * k2;
                    car = c1r - (c1r - c2r) * k2;
                    cag = c1g - (c1g - c2g) * k2;
                    cab = c1b - (c1b - c2b) * k2;
                  } else {
                    let k2;
                    if (y > y3) {
                      k2 = 1;
                    } else if (y2 === y3) {
                      k2 = 0;
                    } else {
                      k2 = (y2 - y) / (y2 - y3);
                    }
                    xa = x2 - (x2 - x3) * k2;
                    car = c2r - (c2r - c3r) * k2;
                    cag = c2g - (c2g - c3g) * k2;
                    cab = c2b - (c2b - c3b) * k2;
                  }
                  let k;
                  if (y < y1) {
                    k = 0;
                  } else if (y > y3) {
                    k = 1;
                  } else {
                    k = (y1 - y) / (y1 - y3);
                  }
                  xb = x1 - (x1 - x3) * k;
                  cbr = c1r - (c1r - c3r) * k;
                  cbg = c1g - (c1g - c3g) * k;
                  cbb = c1b - (c1b - c3b) * k;
                  const x1_ = Math.round(Math.min(xa, xb));
                  const x2_ = Math.round(Math.max(xa, xb));
                  let j = rowSize * y + x1_ * 4;
                  for (let x = x1_; x <= x2_; x++) {
                    k = (xa - x) / (xa - xb);
                    if (k < 0) {
                      k = 0;
                    } else if (k > 1) {
                      k = 1;
                    }
                    bytes[j++] = car - (car - cbr) * k | 0;
                    bytes[j++] = cag - (cag - cbg) * k | 0;
                    bytes[j++] = cab - (cab - cbb) * k | 0;
                    bytes[j++] = 255;
                  }
                }
              }
              function drawFigure(data, figure, context) {
                const ps = figure.coords;
                const cs = figure.colors;
                let i, ii;
                switch (figure.type) {
                  case "lattice":
                    const verticesPerRow = figure.verticesPerRow;
                    const rows = Math.floor(ps.length / verticesPerRow) - 1;
                    const cols = verticesPerRow - 1;
                    for (i = 0; i < rows; i++) {
                      let q = i * verticesPerRow;
                      for (let j = 0; j < cols; j++, q++) {
                        drawTriangle(data, context, ps[q], ps[q + 1], ps[q + verticesPerRow], cs[q], cs[q + 1], cs[q + verticesPerRow]);
                        drawTriangle(data, context, ps[q + verticesPerRow + 1], ps[q + 1], ps[q + verticesPerRow], cs[q + verticesPerRow + 1], cs[q + 1], cs[q + verticesPerRow]);
                      }
                    }
                    break;
                  case "triangles":
                    for (i = 0, ii = ps.length; i < ii; i += 3) {
                      drawTriangle(data, context, ps[i], ps[i + 1], ps[i + 2], cs[i], cs[i + 1], cs[i + 2]);
                    }
                    break;
                  default:
                    throw new Error("illegal figure");
                }
              }
              class MeshShadingPattern extends BaseShadingPattern {
                constructor(IR) {
                  super();
                  this._coords = IR[2];
                  this._colors = IR[3];
                  this._figures = IR[4];
                  this._bounds = IR[5];
                  this._bbox = IR[7];
                  this._background = IR[8];
                  this.matrix = null;
                }
                _createMeshCanvas(combinedScale, backgroundColor, cachedCanvases) {
                  const EXPECTED_SCALE = 1.1;
                  const MAX_PATTERN_SIZE = 3e3;
                  const BORDER_SIZE = 2;
                  const offsetX = Math.floor(this._bounds[0]);
                  const offsetY = Math.floor(this._bounds[1]);
                  const boundsWidth = Math.ceil(this._bounds[2]) - offsetX;
                  const boundsHeight = Math.ceil(this._bounds[3]) - offsetY;
                  const width = Math.min(Math.ceil(Math.abs(boundsWidth * combinedScale[0] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
                  const height = Math.min(Math.ceil(Math.abs(boundsHeight * combinedScale[1] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
                  const scaleX = boundsWidth / width;
                  const scaleY = boundsHeight / height;
                  const context = {
                    coords: this._coords,
                    colors: this._colors,
                    offsetX: -offsetX,
                    offsetY: -offsetY,
                    scaleX: 1 / scaleX,
                    scaleY: 1 / scaleY
                  };
                  const paddedWidth = width + BORDER_SIZE * 2;
                  const paddedHeight = height + BORDER_SIZE * 2;
                  const tmpCanvas = cachedCanvases.getCanvas("mesh", paddedWidth, paddedHeight, false);
                  const tmpCtx = tmpCanvas.context;
                  const data = tmpCtx.createImageData(width, height);
                  if (backgroundColor) {
                    const bytes = data.data;
                    for (let i = 0, ii = bytes.length; i < ii; i += 4) {
                      bytes[i] = backgroundColor[0];
                      bytes[i + 1] = backgroundColor[1];
                      bytes[i + 2] = backgroundColor[2];
                      bytes[i + 3] = 255;
                    }
                  }
                  for (const figure of this._figures) {
                    drawFigure(data, figure, context);
                  }
                  tmpCtx.putImageData(data, BORDER_SIZE, BORDER_SIZE);
                  const canvas = tmpCanvas.canvas;
                  return {
                    canvas,
                    offsetX: offsetX - BORDER_SIZE * scaleX,
                    offsetY: offsetY - BORDER_SIZE * scaleY,
                    scaleX,
                    scaleY
                  };
                }
                getPattern(ctx, owner, inverse, pathType) {
                  applyBoundingBox(ctx, this._bbox);
                  let scale;
                  if (pathType === PathType.SHADING) {
                    scale = _util2.Util.singularValueDecompose2dScale((0, _display_utils2.getCurrentTransform)(ctx));
                  } else {
                    scale = _util2.Util.singularValueDecompose2dScale(owner.baseTransform);
                    if (this.matrix) {
                      const matrixScale = _util2.Util.singularValueDecompose2dScale(this.matrix);
                      scale = [scale[0] * matrixScale[0], scale[1] * matrixScale[1]];
                    }
                  }
                  const temporaryPatternCanvas = this._createMeshCanvas(scale, pathType === PathType.SHADING ? null : this._background, owner.cachedCanvases);
                  if (pathType !== PathType.SHADING) {
                    ctx.setTransform(...owner.baseTransform);
                    if (this.matrix) {
                      ctx.transform(...this.matrix);
                    }
                  }
                  ctx.translate(temporaryPatternCanvas.offsetX, temporaryPatternCanvas.offsetY);
                  ctx.scale(temporaryPatternCanvas.scaleX, temporaryPatternCanvas.scaleY);
                  return ctx.createPattern(temporaryPatternCanvas.canvas, "no-repeat");
                }
              }
              class DummyShadingPattern extends BaseShadingPattern {
                getPattern() {
                  return "hotpink";
                }
              }
              function getShadingPattern(IR) {
                switch (IR[0]) {
                  case "RadialAxial":
                    return new RadialAxialShadingPattern(IR);
                  case "Mesh":
                    return new MeshShadingPattern(IR);
                  case "Dummy":
                    return new DummyShadingPattern();
                }
                throw new Error(`Unknown IR type: ${IR[0]}`);
              }
              const PaintType = {
                COLORED: 1,
                UNCOLORED: 2
              };
              class TilingPattern {
                static get MAX_PATTERN_SIZE() {
                  return (0, _util2.shadow)(this, "MAX_PATTERN_SIZE", 3e3);
                }
                constructor(IR, color, ctx, canvasGraphicsFactory, baseTransform) {
                  this.operatorList = IR[2];
                  this.matrix = IR[3] || [1, 0, 0, 1, 0, 0];
                  this.bbox = IR[4];
                  this.xstep = IR[5];
                  this.ystep = IR[6];
                  this.paintType = IR[7];
                  this.tilingType = IR[8];
                  this.color = color;
                  this.ctx = ctx;
                  this.canvasGraphicsFactory = canvasGraphicsFactory;
                  this.baseTransform = baseTransform;
                }
                createPatternCanvas(owner) {
                  const operatorList = this.operatorList;
                  const bbox = this.bbox;
                  const xstep = this.xstep;
                  const ystep = this.ystep;
                  const paintType = this.paintType;
                  const tilingType = this.tilingType;
                  const color = this.color;
                  const canvasGraphicsFactory = this.canvasGraphicsFactory;
                  (0, _util2.info)("TilingType: " + tilingType);
                  const x0 = bbox[0], y0 = bbox[1], x1 = bbox[2], y1 = bbox[3];
                  const matrixScale = _util2.Util.singularValueDecompose2dScale(this.matrix);
                  const curMatrixScale = _util2.Util.singularValueDecompose2dScale(this.baseTransform);
                  const combinedScale = [matrixScale[0] * curMatrixScale[0], matrixScale[1] * curMatrixScale[1]];
                  const dimx = this.getSizeAndScale(xstep, this.ctx.canvas.width, combinedScale[0]);
                  const dimy = this.getSizeAndScale(ystep, this.ctx.canvas.height, combinedScale[1]);
                  const tmpCanvas = owner.cachedCanvases.getCanvas("pattern", dimx.size, dimy.size, true);
                  const tmpCtx = tmpCanvas.context;
                  const graphics = canvasGraphicsFactory.createCanvasGraphics(tmpCtx);
                  graphics.groupLevel = owner.groupLevel;
                  this.setFillAndStrokeStyleToContext(graphics, paintType, color);
                  let adjustedX0 = x0;
                  let adjustedY0 = y0;
                  let adjustedX1 = x1;
                  let adjustedY1 = y1;
                  if (x0 < 0) {
                    adjustedX0 = 0;
                    adjustedX1 += Math.abs(x0);
                  }
                  if (y0 < 0) {
                    adjustedY0 = 0;
                    adjustedY1 += Math.abs(y0);
                  }
                  tmpCtx.translate(-(dimx.scale * adjustedX0), -(dimy.scale * adjustedY0));
                  graphics.transform(dimx.scale, 0, 0, dimy.scale, 0, 0);
                  tmpCtx.save();
                  this.clipBbox(graphics, adjustedX0, adjustedY0, adjustedX1, adjustedY1);
                  graphics.baseTransform = (0, _display_utils2.getCurrentTransform)(graphics.ctx);
                  graphics.executeOperatorList(operatorList);
                  graphics.endDrawing();
                  return {
                    canvas: tmpCanvas.canvas,
                    scaleX: dimx.scale,
                    scaleY: dimy.scale,
                    offsetX: adjustedX0,
                    offsetY: adjustedY0
                  };
                }
                getSizeAndScale(step, realOutputSize, scale) {
                  step = Math.abs(step);
                  const maxSize = Math.max(TilingPattern.MAX_PATTERN_SIZE, realOutputSize);
                  let size = Math.ceil(step * scale);
                  if (size >= maxSize) {
                    size = maxSize;
                  } else {
                    scale = size / step;
                  }
                  return {
                    scale,
                    size
                  };
                }
                clipBbox(graphics, x0, y0, x1, y1) {
                  const bboxWidth = x1 - x0;
                  const bboxHeight = y1 - y0;
                  graphics.ctx.rect(x0, y0, bboxWidth, bboxHeight);
                  graphics.current.updateRectMinMax((0, _display_utils2.getCurrentTransform)(graphics.ctx), [x0, y0, x1, y1]);
                  graphics.clip();
                  graphics.endPath();
                }
                setFillAndStrokeStyleToContext(graphics, paintType, color) {
                  const context = graphics.ctx, current = graphics.current;
                  switch (paintType) {
                    case PaintType.COLORED:
                      const ctx = this.ctx;
                      context.fillStyle = ctx.fillStyle;
                      context.strokeStyle = ctx.strokeStyle;
                      current.fillColor = ctx.fillStyle;
                      current.strokeColor = ctx.strokeStyle;
                      break;
                    case PaintType.UNCOLORED:
                      const cssColor = _util2.Util.makeHexColor(color[0], color[1], color[2]);
                      context.fillStyle = cssColor;
                      context.strokeStyle = cssColor;
                      current.fillColor = cssColor;
                      current.strokeColor = cssColor;
                      break;
                    default:
                      throw new _util2.FormatError(`Unsupported paint type: ${paintType}`);
                  }
                }
                getPattern(ctx, owner, inverse, pathType) {
                  let matrix = inverse;
                  if (pathType !== PathType.SHADING) {
                    matrix = _util2.Util.transform(matrix, owner.baseTransform);
                    if (this.matrix) {
                      matrix = _util2.Util.transform(matrix, this.matrix);
                    }
                  }
                  const temporaryPatternCanvas = this.createPatternCanvas(owner);
                  let domMatrix = new DOMMatrix(matrix);
                  domMatrix = domMatrix.translate(temporaryPatternCanvas.offsetX, temporaryPatternCanvas.offsetY);
                  domMatrix = domMatrix.scale(1 / temporaryPatternCanvas.scaleX, 1 / temporaryPatternCanvas.scaleY);
                  const pattern = ctx.createPattern(temporaryPatternCanvas.canvas, "repeat");
                  pattern.setTransform(domMatrix);
                  return pattern;
                }
              }
              exports2.TilingPattern = TilingPattern;
            },
            /* 13 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.applyMaskImageData = applyMaskImageData;
              var _util2 = __w_pdfjs_require__2(1);
              function applyMaskImageData({
                src,
                srcPos = 0,
                dest,
                destPos = 0,
                width,
                height,
                inverseDecode = false
              }) {
                const opaque = _util2.FeatureTest.isLittleEndian ? 4278190080 : 255;
                const [zeroMapping, oneMapping] = !inverseDecode ? [opaque, 0] : [0, opaque];
                const widthInSource = width >> 3;
                const widthRemainder = width & 7;
                const srcLength = src.length;
                dest = new Uint32Array(dest.buffer);
                for (let i = 0; i < height; i++) {
                  for (const max = srcPos + widthInSource; srcPos < max; srcPos++) {
                    const elem2 = srcPos < srcLength ? src[srcPos] : 255;
                    dest[destPos++] = elem2 & 128 ? oneMapping : zeroMapping;
                    dest[destPos++] = elem2 & 64 ? oneMapping : zeroMapping;
                    dest[destPos++] = elem2 & 32 ? oneMapping : zeroMapping;
                    dest[destPos++] = elem2 & 16 ? oneMapping : zeroMapping;
                    dest[destPos++] = elem2 & 8 ? oneMapping : zeroMapping;
                    dest[destPos++] = elem2 & 4 ? oneMapping : zeroMapping;
                    dest[destPos++] = elem2 & 2 ? oneMapping : zeroMapping;
                    dest[destPos++] = elem2 & 1 ? oneMapping : zeroMapping;
                  }
                  if (widthRemainder === 0) {
                    continue;
                  }
                  const elem = srcPos < srcLength ? src[srcPos++] : 255;
                  for (let j = 0; j < widthRemainder; j++) {
                    dest[destPos++] = elem & 1 << 7 - j ? oneMapping : zeroMapping;
                  }
                }
                return {
                  srcPos,
                  destPos
                };
              }
            },
            /* 14 */
            /***/
            (__unused_webpack_module2, exports2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.GlobalWorkerOptions = void 0;
              const GlobalWorkerOptions = /* @__PURE__ */ Object.create(null);
              exports2.GlobalWorkerOptions = GlobalWorkerOptions;
              GlobalWorkerOptions.workerPort = null;
              GlobalWorkerOptions.workerSrc = "";
            },
            /* 15 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.MessageHandler = void 0;
              var _util2 = __w_pdfjs_require__2(1);
              const CallbackKind = {
                UNKNOWN: 0,
                DATA: 1,
                ERROR: 2
              };
              const StreamKind = {
                UNKNOWN: 0,
                CANCEL: 1,
                CANCEL_COMPLETE: 2,
                CLOSE: 3,
                ENQUEUE: 4,
                ERROR: 5,
                PULL: 6,
                PULL_COMPLETE: 7,
                START_COMPLETE: 8
              };
              function wrapReason(reason) {
                if (!(reason instanceof Error || typeof reason === "object" && reason !== null)) {
                  (0, _util2.unreachable)('wrapReason: Expected "reason" to be a (possibly cloned) Error.');
                }
                switch (reason.name) {
                  case "AbortException":
                    return new _util2.AbortException(reason.message);
                  case "MissingPDFException":
                    return new _util2.MissingPDFException(reason.message);
                  case "PasswordException":
                    return new _util2.PasswordException(reason.message, reason.code);
                  case "UnexpectedResponseException":
                    return new _util2.UnexpectedResponseException(reason.message, reason.status);
                  case "UnknownErrorException":
                    return new _util2.UnknownErrorException(reason.message, reason.details);
                  default:
                    return new _util2.UnknownErrorException(reason.message, reason.toString());
                }
              }
              class MessageHandler {
                constructor(sourceName, targetName, comObj) {
                  this.sourceName = sourceName;
                  this.targetName = targetName;
                  this.comObj = comObj;
                  this.callbackId = 1;
                  this.streamId = 1;
                  this.streamSinks = /* @__PURE__ */ Object.create(null);
                  this.streamControllers = /* @__PURE__ */ Object.create(null);
                  this.callbackCapabilities = /* @__PURE__ */ Object.create(null);
                  this.actionHandler = /* @__PURE__ */ Object.create(null);
                  this._onComObjOnMessage = (event) => {
                    const data = event.data;
                    if (data.targetName !== this.sourceName) {
                      return;
                    }
                    if (data.stream) {
                      this._processStreamMessage(data);
                      return;
                    }
                    if (data.callback) {
                      const callbackId = data.callbackId;
                      const capability = this.callbackCapabilities[callbackId];
                      if (!capability) {
                        throw new Error(`Cannot resolve callback ${callbackId}`);
                      }
                      delete this.callbackCapabilities[callbackId];
                      if (data.callback === CallbackKind.DATA) {
                        capability.resolve(data.data);
                      } else if (data.callback === CallbackKind.ERROR) {
                        capability.reject(wrapReason(data.reason));
                      } else {
                        throw new Error("Unexpected callback case");
                      }
                      return;
                    }
                    const action = this.actionHandler[data.action];
                    if (!action) {
                      throw new Error(`Unknown action from worker: ${data.action}`);
                    }
                    if (data.callbackId) {
                      const cbSourceName = this.sourceName;
                      const cbTargetName = data.sourceName;
                      new Promise(function(resolve) {
                        resolve(action(data.data));
                      }).then(function(result) {
                        comObj.postMessage({
                          sourceName: cbSourceName,
                          targetName: cbTargetName,
                          callback: CallbackKind.DATA,
                          callbackId: data.callbackId,
                          data: result
                        });
                      }, function(reason) {
                        comObj.postMessage({
                          sourceName: cbSourceName,
                          targetName: cbTargetName,
                          callback: CallbackKind.ERROR,
                          callbackId: data.callbackId,
                          reason: wrapReason(reason)
                        });
                      });
                      return;
                    }
                    if (data.streamId) {
                      this._createStreamSink(data);
                      return;
                    }
                    action(data.data);
                  };
                  comObj.addEventListener("message", this._onComObjOnMessage);
                }
                on(actionName, handler) {
                  const ah = this.actionHandler;
                  if (ah[actionName]) {
                    throw new Error(`There is already an actionName called "${actionName}"`);
                  }
                  ah[actionName] = handler;
                }
                send(actionName, data, transfers) {
                  this.comObj.postMessage({
                    sourceName: this.sourceName,
                    targetName: this.targetName,
                    action: actionName,
                    data
                  }, transfers);
                }
                sendWithPromise(actionName, data, transfers) {
                  const callbackId = this.callbackId++;
                  const capability = (0, _util2.createPromiseCapability)();
                  this.callbackCapabilities[callbackId] = capability;
                  try {
                    this.comObj.postMessage({
                      sourceName: this.sourceName,
                      targetName: this.targetName,
                      action: actionName,
                      callbackId,
                      data
                    }, transfers);
                  } catch (ex) {
                    capability.reject(ex);
                  }
                  return capability.promise;
                }
                sendWithStream(actionName, data, queueingStrategy, transfers) {
                  const streamId = this.streamId++, sourceName = this.sourceName, targetName = this.targetName, comObj = this.comObj;
                  return new ReadableStream({
                    start: (controller) => {
                      const startCapability = (0, _util2.createPromiseCapability)();
                      this.streamControllers[streamId] = {
                        controller,
                        startCall: startCapability,
                        pullCall: null,
                        cancelCall: null,
                        isClosed: false
                      };
                      comObj.postMessage({
                        sourceName,
                        targetName,
                        action: actionName,
                        streamId,
                        data,
                        desiredSize: controller.desiredSize
                      }, transfers);
                      return startCapability.promise;
                    },
                    pull: (controller) => {
                      const pullCapability = (0, _util2.createPromiseCapability)();
                      this.streamControllers[streamId].pullCall = pullCapability;
                      comObj.postMessage({
                        sourceName,
                        targetName,
                        stream: StreamKind.PULL,
                        streamId,
                        desiredSize: controller.desiredSize
                      });
                      return pullCapability.promise;
                    },
                    cancel: (reason) => {
                      (0, _util2.assert)(reason instanceof Error, "cancel must have a valid reason");
                      const cancelCapability = (0, _util2.createPromiseCapability)();
                      this.streamControllers[streamId].cancelCall = cancelCapability;
                      this.streamControllers[streamId].isClosed = true;
                      comObj.postMessage({
                        sourceName,
                        targetName,
                        stream: StreamKind.CANCEL,
                        streamId,
                        reason: wrapReason(reason)
                      });
                      return cancelCapability.promise;
                    }
                  }, queueingStrategy);
                }
                _createStreamSink(data) {
                  const streamId = data.streamId, sourceName = this.sourceName, targetName = data.sourceName, comObj = this.comObj;
                  const self = this, action = this.actionHandler[data.action];
                  const streamSink = {
                    enqueue(chunk, size = 1, transfers) {
                      if (this.isCancelled) {
                        return;
                      }
                      const lastDesiredSize = this.desiredSize;
                      this.desiredSize -= size;
                      if (lastDesiredSize > 0 && this.desiredSize <= 0) {
                        this.sinkCapability = (0, _util2.createPromiseCapability)();
                        this.ready = this.sinkCapability.promise;
                      }
                      comObj.postMessage({
                        sourceName,
                        targetName,
                        stream: StreamKind.ENQUEUE,
                        streamId,
                        chunk
                      }, transfers);
                    },
                    close() {
                      if (this.isCancelled) {
                        return;
                      }
                      this.isCancelled = true;
                      comObj.postMessage({
                        sourceName,
                        targetName,
                        stream: StreamKind.CLOSE,
                        streamId
                      });
                      delete self.streamSinks[streamId];
                    },
                    error(reason) {
                      (0, _util2.assert)(reason instanceof Error, "error must have a valid reason");
                      if (this.isCancelled) {
                        return;
                      }
                      this.isCancelled = true;
                      comObj.postMessage({
                        sourceName,
                        targetName,
                        stream: StreamKind.ERROR,
                        streamId,
                        reason: wrapReason(reason)
                      });
                    },
                    sinkCapability: (0, _util2.createPromiseCapability)(),
                    onPull: null,
                    onCancel: null,
                    isCancelled: false,
                    desiredSize: data.desiredSize,
                    ready: null
                  };
                  streamSink.sinkCapability.resolve();
                  streamSink.ready = streamSink.sinkCapability.promise;
                  this.streamSinks[streamId] = streamSink;
                  new Promise(function(resolve) {
                    resolve(action(data.data, streamSink));
                  }).then(function() {
                    comObj.postMessage({
                      sourceName,
                      targetName,
                      stream: StreamKind.START_COMPLETE,
                      streamId,
                      success: true
                    });
                  }, function(reason) {
                    comObj.postMessage({
                      sourceName,
                      targetName,
                      stream: StreamKind.START_COMPLETE,
                      streamId,
                      reason: wrapReason(reason)
                    });
                  });
                }
                _processStreamMessage(data) {
                  const streamId = data.streamId, sourceName = this.sourceName, targetName = data.sourceName, comObj = this.comObj;
                  const streamController = this.streamControllers[streamId], streamSink = this.streamSinks[streamId];
                  switch (data.stream) {
                    case StreamKind.START_COMPLETE:
                      if (data.success) {
                        streamController.startCall.resolve();
                      } else {
                        streamController.startCall.reject(wrapReason(data.reason));
                      }
                      break;
                    case StreamKind.PULL_COMPLETE:
                      if (data.success) {
                        streamController.pullCall.resolve();
                      } else {
                        streamController.pullCall.reject(wrapReason(data.reason));
                      }
                      break;
                    case StreamKind.PULL:
                      if (!streamSink) {
                        comObj.postMessage({
                          sourceName,
                          targetName,
                          stream: StreamKind.PULL_COMPLETE,
                          streamId,
                          success: true
                        });
                        break;
                      }
                      if (streamSink.desiredSize <= 0 && data.desiredSize > 0) {
                        streamSink.sinkCapability.resolve();
                      }
                      streamSink.desiredSize = data.desiredSize;
                      new Promise(function(resolve) {
                        resolve(streamSink.onPull && streamSink.onPull());
                      }).then(function() {
                        comObj.postMessage({
                          sourceName,
                          targetName,
                          stream: StreamKind.PULL_COMPLETE,
                          streamId,
                          success: true
                        });
                      }, function(reason) {
                        comObj.postMessage({
                          sourceName,
                          targetName,
                          stream: StreamKind.PULL_COMPLETE,
                          streamId,
                          reason: wrapReason(reason)
                        });
                      });
                      break;
                    case StreamKind.ENQUEUE:
                      (0, _util2.assert)(streamController, "enqueue should have stream controller");
                      if (streamController.isClosed) {
                        break;
                      }
                      streamController.controller.enqueue(data.chunk);
                      break;
                    case StreamKind.CLOSE:
                      (0, _util2.assert)(streamController, "close should have stream controller");
                      if (streamController.isClosed) {
                        break;
                      }
                      streamController.isClosed = true;
                      streamController.controller.close();
                      this._deleteStreamController(streamController, streamId);
                      break;
                    case StreamKind.ERROR:
                      (0, _util2.assert)(streamController, "error should have stream controller");
                      streamController.controller.error(wrapReason(data.reason));
                      this._deleteStreamController(streamController, streamId);
                      break;
                    case StreamKind.CANCEL_COMPLETE:
                      if (data.success) {
                        streamController.cancelCall.resolve();
                      } else {
                        streamController.cancelCall.reject(wrapReason(data.reason));
                      }
                      this._deleteStreamController(streamController, streamId);
                      break;
                    case StreamKind.CANCEL:
                      if (!streamSink) {
                        break;
                      }
                      new Promise(function(resolve) {
                        resolve(streamSink.onCancel && streamSink.onCancel(wrapReason(data.reason)));
                      }).then(function() {
                        comObj.postMessage({
                          sourceName,
                          targetName,
                          stream: StreamKind.CANCEL_COMPLETE,
                          streamId,
                          success: true
                        });
                      }, function(reason) {
                        comObj.postMessage({
                          sourceName,
                          targetName,
                          stream: StreamKind.CANCEL_COMPLETE,
                          streamId,
                          reason: wrapReason(reason)
                        });
                      });
                      streamSink.sinkCapability.reject(wrapReason(data.reason));
                      streamSink.isCancelled = true;
                      delete this.streamSinks[streamId];
                      break;
                    default:
                      throw new Error("Unexpected stream case");
                  }
                }
                async _deleteStreamController(streamController, streamId) {
                  await Promise.allSettled([streamController.startCall && streamController.startCall.promise, streamController.pullCall && streamController.pullCall.promise, streamController.cancelCall && streamController.cancelCall.promise]);
                  delete this.streamControllers[streamId];
                }
                destroy() {
                  this.comObj.removeEventListener("message", this._onComObjOnMessage);
                }
              }
              exports2.MessageHandler = MessageHandler;
            },
            /* 16 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              var _metadataMap, _data;
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.Metadata = void 0;
              var _util2 = __w_pdfjs_require__2(1);
              class Metadata {
                constructor({
                  parsedData,
                  rawData
                }) {
                  __privateAdd(this, _metadataMap);
                  __privateAdd(this, _data);
                  __privateSet(this, _metadataMap, parsedData);
                  __privateSet(this, _data, rawData);
                }
                getRaw() {
                  return __privateGet(this, _data);
                }
                get(name) {
                  return __privateGet(this, _metadataMap).get(name) ?? null;
                }
                getAll() {
                  return (0, _util2.objectFromMap)(__privateGet(this, _metadataMap));
                }
                has(name) {
                  return __privateGet(this, _metadataMap).has(name);
                }
              }
              _metadataMap = new WeakMap();
              _data = new WeakMap();
              exports2.Metadata = Metadata;
            },
            /* 17 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              var _visible, _cachedGetHash, _groups, _initialHash, _order, _OptionalContentConfig_instances, evaluateVisibilityExpression_fn;
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.OptionalContentConfig = void 0;
              var _util2 = __w_pdfjs_require__2(1);
              var _murmurhash = __w_pdfjs_require__2(8);
              const INTERNAL = Symbol("INTERNAL");
              class OptionalContentGroup {
                constructor(name, intent) {
                  __privateAdd(this, _visible, true);
                  this.name = name;
                  this.intent = intent;
                }
                get visible() {
                  return __privateGet(this, _visible);
                }
                _setVisible(internal, visible) {
                  if (internal !== INTERNAL) {
                    (0, _util2.unreachable)("Internal method `_setVisible` called.");
                  }
                  __privateSet(this, _visible, visible);
                }
              }
              _visible = new WeakMap();
              class OptionalContentConfig {
                constructor(data) {
                  __privateAdd(this, _OptionalContentConfig_instances);
                  __privateAdd(this, _cachedGetHash, null);
                  __privateAdd(this, _groups, /* @__PURE__ */ new Map());
                  __privateAdd(this, _initialHash, null);
                  __privateAdd(this, _order, null);
                  this.name = null;
                  this.creator = null;
                  if (data === null) {
                    return;
                  }
                  this.name = data.name;
                  this.creator = data.creator;
                  __privateSet(this, _order, data.order);
                  for (const group of data.groups) {
                    __privateGet(this, _groups).set(group.id, new OptionalContentGroup(group.name, group.intent));
                  }
                  if (data.baseState === "OFF") {
                    for (const group of __privateGet(this, _groups).values()) {
                      group._setVisible(INTERNAL, false);
                    }
                  }
                  for (const on of data.on) {
                    __privateGet(this, _groups).get(on)._setVisible(INTERNAL, true);
                  }
                  for (const off of data.off) {
                    __privateGet(this, _groups).get(off)._setVisible(INTERNAL, false);
                  }
                  __privateSet(this, _initialHash, this.getHash());
                }
                isVisible(group) {
                  if (__privateGet(this, _groups).size === 0) {
                    return true;
                  }
                  if (!group) {
                    (0, _util2.warn)("Optional content group not defined.");
                    return true;
                  }
                  if (group.type === "OCG") {
                    if (!__privateGet(this, _groups).has(group.id)) {
                      (0, _util2.warn)(`Optional content group not found: ${group.id}`);
                      return true;
                    }
                    return __privateGet(this, _groups).get(group.id).visible;
                  } else if (group.type === "OCMD") {
                    if (group.expression) {
                      return __privateMethod(this, _OptionalContentConfig_instances, evaluateVisibilityExpression_fn).call(this, group.expression);
                    }
                    if (!group.policy || group.policy === "AnyOn") {
                      for (const id of group.ids) {
                        if (!__privateGet(this, _groups).has(id)) {
                          (0, _util2.warn)(`Optional content group not found: ${id}`);
                          return true;
                        }
                        if (__privateGet(this, _groups).get(id).visible) {
                          return true;
                        }
                      }
                      return false;
                    } else if (group.policy === "AllOn") {
                      for (const id of group.ids) {
                        if (!__privateGet(this, _groups).has(id)) {
                          (0, _util2.warn)(`Optional content group not found: ${id}`);
                          return true;
                        }
                        if (!__privateGet(this, _groups).get(id).visible) {
                          return false;
                        }
                      }
                      return true;
                    } else if (group.policy === "AnyOff") {
                      for (const id of group.ids) {
                        if (!__privateGet(this, _groups).has(id)) {
                          (0, _util2.warn)(`Optional content group not found: ${id}`);
                          return true;
                        }
                        if (!__privateGet(this, _groups).get(id).visible) {
                          return true;
                        }
                      }
                      return false;
                    } else if (group.policy === "AllOff") {
                      for (const id of group.ids) {
                        if (!__privateGet(this, _groups).has(id)) {
                          (0, _util2.warn)(`Optional content group not found: ${id}`);
                          return true;
                        }
                        if (__privateGet(this, _groups).get(id).visible) {
                          return false;
                        }
                      }
                      return true;
                    }
                    (0, _util2.warn)(`Unknown optional content policy ${group.policy}.`);
                    return true;
                  }
                  (0, _util2.warn)(`Unknown group type ${group.type}.`);
                  return true;
                }
                setVisibility(id, visible = true) {
                  if (!__privateGet(this, _groups).has(id)) {
                    (0, _util2.warn)(`Optional content group not found: ${id}`);
                    return;
                  }
                  __privateGet(this, _groups).get(id)._setVisible(INTERNAL, !!visible);
                  __privateSet(this, _cachedGetHash, null);
                }
                get hasInitialVisibility() {
                  return this.getHash() === __privateGet(this, _initialHash);
                }
                getOrder() {
                  if (!__privateGet(this, _groups).size) {
                    return null;
                  }
                  if (__privateGet(this, _order)) {
                    return __privateGet(this, _order).slice();
                  }
                  return [...__privateGet(this, _groups).keys()];
                }
                getGroups() {
                  return __privateGet(this, _groups).size > 0 ? (0, _util2.objectFromMap)(__privateGet(this, _groups)) : null;
                }
                getGroup(id) {
                  return __privateGet(this, _groups).get(id) || null;
                }
                getHash() {
                  if (__privateGet(this, _cachedGetHash) !== null) {
                    return __privateGet(this, _cachedGetHash);
                  }
                  const hash = new _murmurhash.MurmurHash3_64();
                  for (const [id, group] of __privateGet(this, _groups)) {
                    hash.update(`${id}:${group.visible}`);
                  }
                  return __privateSet(this, _cachedGetHash, hash.hexdigest());
                }
              }
              _cachedGetHash = new WeakMap();
              _groups = new WeakMap();
              _initialHash = new WeakMap();
              _order = new WeakMap();
              _OptionalContentConfig_instances = new WeakSet();
              evaluateVisibilityExpression_fn = function(array) {
                const length = array.length;
                if (length < 2) {
                  return true;
                }
                const operator = array[0];
                for (let i = 1; i < length; i++) {
                  const element = array[i];
                  let state;
                  if (Array.isArray(element)) {
                    state = __privateMethod(this, _OptionalContentConfig_instances, evaluateVisibilityExpression_fn).call(this, element);
                  } else if (__privateGet(this, _groups).has(element)) {
                    state = __privateGet(this, _groups).get(element).visible;
                  } else {
                    (0, _util2.warn)(`Optional content group not found: ${element}`);
                    return true;
                  }
                  switch (operator) {
                    case "And":
                      if (!state) {
                        return false;
                      }
                      break;
                    case "Or":
                      if (state) {
                        return true;
                      }
                      break;
                    case "Not":
                      return !state;
                    default:
                      return true;
                  }
                }
                return operator === "And";
              };
              exports2.OptionalContentConfig = OptionalContentConfig;
            },
            /* 18 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.PDFDataTransportStream = void 0;
              var _util2 = __w_pdfjs_require__2(1);
              var _display_utils2 = __w_pdfjs_require__2(6);
              class PDFDataTransportStream {
                constructor({
                  length,
                  initialData,
                  progressiveDone = false,
                  contentDispositionFilename = null,
                  disableRange = false,
                  disableStream = false
                }, pdfDataRangeTransport) {
                  (0, _util2.assert)(pdfDataRangeTransport, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
                  this._queuedChunks = [];
                  this._progressiveDone = progressiveDone;
                  this._contentDispositionFilename = contentDispositionFilename;
                  if ((initialData == null ? void 0 : initialData.length) > 0) {
                    const buffer = initialData instanceof Uint8Array && initialData.byteLength === initialData.buffer.byteLength ? initialData.buffer : new Uint8Array(initialData).buffer;
                    this._queuedChunks.push(buffer);
                  }
                  this._pdfDataRangeTransport = pdfDataRangeTransport;
                  this._isStreamingSupported = !disableStream;
                  this._isRangeSupported = !disableRange;
                  this._contentLength = length;
                  this._fullRequestReader = null;
                  this._rangeReaders = [];
                  this._pdfDataRangeTransport.addRangeListener((begin, chunk) => {
                    this._onReceiveData({
                      begin,
                      chunk
                    });
                  });
                  this._pdfDataRangeTransport.addProgressListener((loaded, total) => {
                    this._onProgress({
                      loaded,
                      total
                    });
                  });
                  this._pdfDataRangeTransport.addProgressiveReadListener((chunk) => {
                    this._onReceiveData({
                      chunk
                    });
                  });
                  this._pdfDataRangeTransport.addProgressiveDoneListener(() => {
                    this._onProgressiveDone();
                  });
                  this._pdfDataRangeTransport.transportReady();
                }
                _onReceiveData({
                  begin,
                  chunk
                }) {
                  const buffer = chunk instanceof Uint8Array && chunk.byteLength === chunk.buffer.byteLength ? chunk.buffer : new Uint8Array(chunk).buffer;
                  if (begin === void 0) {
                    if (this._fullRequestReader) {
                      this._fullRequestReader._enqueue(buffer);
                    } else {
                      this._queuedChunks.push(buffer);
                    }
                  } else {
                    const found = this._rangeReaders.some(function(rangeReader) {
                      if (rangeReader._begin !== begin) {
                        return false;
                      }
                      rangeReader._enqueue(buffer);
                      return true;
                    });
                    (0, _util2.assert)(found, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
                  }
                }
                get _progressiveDataLength() {
                  var _a;
                  return ((_a = this._fullRequestReader) == null ? void 0 : _a._loaded) ?? 0;
                }
                _onProgress(evt) {
                  var _a, _b, _c, _d;
                  if (evt.total === void 0) {
                    (_b = (_a = this._rangeReaders[0]) == null ? void 0 : _a.onProgress) == null ? void 0 : _b.call(_a, {
                      loaded: evt.loaded
                    });
                  } else {
                    (_d = (_c = this._fullRequestReader) == null ? void 0 : _c.onProgress) == null ? void 0 : _d.call(_c, {
                      loaded: evt.loaded,
                      total: evt.total
                    });
                  }
                }
                _onProgressiveDone() {
                  var _a;
                  (_a = this._fullRequestReader) == null ? void 0 : _a.progressiveDone();
                  this._progressiveDone = true;
                }
                _removeRangeReader(reader) {
                  const i = this._rangeReaders.indexOf(reader);
                  if (i >= 0) {
                    this._rangeReaders.splice(i, 1);
                  }
                }
                getFullReader() {
                  (0, _util2.assert)(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
                  const queuedChunks = this._queuedChunks;
                  this._queuedChunks = null;
                  return new PDFDataTransportStreamReader(this, queuedChunks, this._progressiveDone, this._contentDispositionFilename);
                }
                getRangeReader(begin, end) {
                  if (end <= this._progressiveDataLength) {
                    return null;
                  }
                  const reader = new PDFDataTransportStreamRangeReader(this, begin, end);
                  this._pdfDataRangeTransport.requestDataRange(begin, end);
                  this._rangeReaders.push(reader);
                  return reader;
                }
                cancelAllRequests(reason) {
                  var _a;
                  (_a = this._fullRequestReader) == null ? void 0 : _a.cancel(reason);
                  for (const reader of this._rangeReaders.slice(0)) {
                    reader.cancel(reason);
                  }
                  this._pdfDataRangeTransport.abort();
                }
              }
              exports2.PDFDataTransportStream = PDFDataTransportStream;
              class PDFDataTransportStreamReader {
                constructor(stream, queuedChunks, progressiveDone = false, contentDispositionFilename = null) {
                  this._stream = stream;
                  this._done = progressiveDone || false;
                  this._filename = (0, _display_utils2.isPdfFile)(contentDispositionFilename) ? contentDispositionFilename : null;
                  this._queuedChunks = queuedChunks || [];
                  this._loaded = 0;
                  for (const chunk of this._queuedChunks) {
                    this._loaded += chunk.byteLength;
                  }
                  this._requests = [];
                  this._headersReady = Promise.resolve();
                  stream._fullRequestReader = this;
                  this.onProgress = null;
                }
                _enqueue(chunk) {
                  if (this._done) {
                    return;
                  }
                  if (this._requests.length > 0) {
                    const requestCapability = this._requests.shift();
                    requestCapability.resolve({
                      value: chunk,
                      done: false
                    });
                  } else {
                    this._queuedChunks.push(chunk);
                  }
                  this._loaded += chunk.byteLength;
                }
                get headersReady() {
                  return this._headersReady;
                }
                get filename() {
                  return this._filename;
                }
                get isRangeSupported() {
                  return this._stream._isRangeSupported;
                }
                get isStreamingSupported() {
                  return this._stream._isStreamingSupported;
                }
                get contentLength() {
                  return this._stream._contentLength;
                }
                async read() {
                  if (this._queuedChunks.length > 0) {
                    const chunk = this._queuedChunks.shift();
                    return {
                      value: chunk,
                      done: false
                    };
                  }
                  if (this._done) {
                    return {
                      value: void 0,
                      done: true
                    };
                  }
                  const requestCapability = (0, _util2.createPromiseCapability)();
                  this._requests.push(requestCapability);
                  return requestCapability.promise;
                }
                cancel(reason) {
                  this._done = true;
                  for (const requestCapability of this._requests) {
                    requestCapability.resolve({
                      value: void 0,
                      done: true
                    });
                  }
                  this._requests.length = 0;
                }
                progressiveDone() {
                  if (this._done) {
                    return;
                  }
                  this._done = true;
                }
              }
              class PDFDataTransportStreamRangeReader {
                constructor(stream, begin, end) {
                  this._stream = stream;
                  this._begin = begin;
                  this._end = end;
                  this._queuedChunk = null;
                  this._requests = [];
                  this._done = false;
                  this.onProgress = null;
                }
                _enqueue(chunk) {
                  if (this._done) {
                    return;
                  }
                  if (this._requests.length === 0) {
                    this._queuedChunk = chunk;
                  } else {
                    const requestsCapability = this._requests.shift();
                    requestsCapability.resolve({
                      value: chunk,
                      done: false
                    });
                    for (const requestCapability of this._requests) {
                      requestCapability.resolve({
                        value: void 0,
                        done: true
                      });
                    }
                    this._requests.length = 0;
                  }
                  this._done = true;
                  this._stream._removeRangeReader(this);
                }
                get isStreamingSupported() {
                  return false;
                }
                async read() {
                  if (this._queuedChunk) {
                    const chunk = this._queuedChunk;
                    this._queuedChunk = null;
                    return {
                      value: chunk,
                      done: false
                    };
                  }
                  if (this._done) {
                    return {
                      value: void 0,
                      done: true
                    };
                  }
                  const requestCapability = (0, _util2.createPromiseCapability)();
                  this._requests.push(requestCapability);
                  return requestCapability.promise;
                }
                cancel(reason) {
                  this._done = true;
                  for (const requestCapability of this._requests) {
                    requestCapability.resolve({
                      value: void 0,
                      done: true
                    });
                  }
                  this._requests.length = 0;
                  this._stream._removeRangeReader(this);
                }
              }
            },
            /* 19 */
            /***/
            (__unused_webpack_module2, exports2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.XfaText = void 0;
              class XfaText {
                static textContent(xfa) {
                  const items = [];
                  const output = {
                    items,
                    styles: /* @__PURE__ */ Object.create(null)
                  };
                  function walk(node) {
                    var _a;
                    if (!node) {
                      return;
                    }
                    let str = null;
                    const name = node.name;
                    if (name === "#text") {
                      str = node.value;
                    } else if (!XfaText.shouldBuildText(name)) {
                      return;
                    } else if ((_a = node == null ? void 0 : node.attributes) == null ? void 0 : _a.textContent) {
                      str = node.attributes.textContent;
                    } else if (node.value) {
                      str = node.value;
                    }
                    if (str !== null) {
                      items.push({
                        str
                      });
                    }
                    if (!node.children) {
                      return;
                    }
                    for (const child of node.children) {
                      walk(child);
                    }
                  }
                  walk(xfa);
                  return output;
                }
                static shouldBuildText(name) {
                  return !(name === "textarea" || name === "input" || name === "option" || name === "select");
                }
              }
              exports2.XfaText = XfaText;
            },
            /* 20 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.NodeStandardFontDataFactory = exports2.NodeCanvasFactory = exports2.NodeCMapReaderFactory = void 0;
              var _base_factory = __w_pdfjs_require__2(7);
              ;
              const fetchData = function(url) {
                return new Promise((resolve, reject) => {
                  const fs = require_fs();
                  fs.readFile(url, (error, data) => {
                    if (error || !data) {
                      reject(new Error(error));
                      return;
                    }
                    resolve(new Uint8Array(data));
                  });
                });
              };
              class NodeCanvasFactory extends _base_factory.BaseCanvasFactory {
                _createCanvas(width, height) {
                  const Canvas = require_canvas();
                  return Canvas.createCanvas(width, height);
                }
              }
              exports2.NodeCanvasFactory = NodeCanvasFactory;
              class NodeCMapReaderFactory extends _base_factory.BaseCMapReaderFactory {
                _fetchData(url, compressionType) {
                  return fetchData(url).then((data) => {
                    return {
                      cMapData: data,
                      compressionType
                    };
                  });
                }
              }
              exports2.NodeCMapReaderFactory = NodeCMapReaderFactory;
              class NodeStandardFontDataFactory extends _base_factory.BaseStandardFontDataFactory {
                _fetchData(url) {
                  return fetchData(url);
                }
              }
              exports2.NodeStandardFontDataFactory = NodeStandardFontDataFactory;
            },
            /* 21 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.PDFNodeStream = void 0;
              var _util2 = __w_pdfjs_require__2(1);
              var _network_utils = __w_pdfjs_require__2(22);
              ;
              const fs = require_fs();
              const http = require_http();
              const https = require_https();
              const url = require_url();
              const fileUriRegex = /^file:\/\/\/[a-zA-Z]:\//;
              function parseUrl(sourceUrl) {
                const parsedUrl = url.parse(sourceUrl);
                if (parsedUrl.protocol === "file:" || parsedUrl.host) {
                  return parsedUrl;
                }
                if (/^[a-z]:[/\\]/i.test(sourceUrl)) {
                  return url.parse(`file:///${sourceUrl}`);
                }
                if (!parsedUrl.host) {
                  parsedUrl.protocol = "file:";
                }
                return parsedUrl;
              }
              class PDFNodeStream {
                constructor(source) {
                  this.source = source;
                  this.url = parseUrl(source.url);
                  this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:";
                  this.isFsUrl = this.url.protocol === "file:";
                  this.httpHeaders = this.isHttp && source.httpHeaders || {};
                  this._fullRequestReader = null;
                  this._rangeRequestReaders = [];
                }
                get _progressiveDataLength() {
                  var _a;
                  return ((_a = this._fullRequestReader) == null ? void 0 : _a._loaded) ?? 0;
                }
                getFullReader() {
                  (0, _util2.assert)(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once.");
                  this._fullRequestReader = this.isFsUrl ? new PDFNodeStreamFsFullReader(this) : new PDFNodeStreamFullReader(this);
                  return this._fullRequestReader;
                }
                getRangeReader(start, end) {
                  if (end <= this._progressiveDataLength) {
                    return null;
                  }
                  const rangeReader = this.isFsUrl ? new PDFNodeStreamFsRangeReader(this, start, end) : new PDFNodeStreamRangeReader(this, start, end);
                  this._rangeRequestReaders.push(rangeReader);
                  return rangeReader;
                }
                cancelAllRequests(reason) {
                  var _a;
                  (_a = this._fullRequestReader) == null ? void 0 : _a.cancel(reason);
                  for (const reader of this._rangeRequestReaders.slice(0)) {
                    reader.cancel(reason);
                  }
                }
              }
              exports2.PDFNodeStream = PDFNodeStream;
              class BaseFullReader {
                constructor(stream) {
                  this._url = stream.url;
                  this._done = false;
                  this._storedError = null;
                  this.onProgress = null;
                  const source = stream.source;
                  this._contentLength = source.length;
                  this._loaded = 0;
                  this._filename = null;
                  this._disableRange = source.disableRange || false;
                  this._rangeChunkSize = source.rangeChunkSize;
                  if (!this._rangeChunkSize && !this._disableRange) {
                    this._disableRange = true;
                  }
                  this._isStreamingSupported = !source.disableStream;
                  this._isRangeSupported = !source.disableRange;
                  this._readableStream = null;
                  this._readCapability = (0, _util2.createPromiseCapability)();
                  this._headersCapability = (0, _util2.createPromiseCapability)();
                }
                get headersReady() {
                  return this._headersCapability.promise;
                }
                get filename() {
                  return this._filename;
                }
                get contentLength() {
                  return this._contentLength;
                }
                get isRangeSupported() {
                  return this._isRangeSupported;
                }
                get isStreamingSupported() {
                  return this._isStreamingSupported;
                }
                async read() {
                  var _a;
                  await this._readCapability.promise;
                  if (this._done) {
                    return {
                      value: void 0,
                      done: true
                    };
                  }
                  if (this._storedError) {
                    throw this._storedError;
                  }
                  const chunk = this._readableStream.read();
                  if (chunk === null) {
                    this._readCapability = (0, _util2.createPromiseCapability)();
                    return this.read();
                  }
                  this._loaded += chunk.length;
                  (_a = this.onProgress) == null ? void 0 : _a.call(this, {
                    loaded: this._loaded,
                    total: this._contentLength
                  });
                  const buffer = new Uint8Array(chunk).buffer;
                  return {
                    value: buffer,
                    done: false
                  };
                }
                cancel(reason) {
                  if (!this._readableStream) {
                    this._error(reason);
                    return;
                  }
                  this._readableStream.destroy(reason);
                }
                _error(reason) {
                  this._storedError = reason;
                  this._readCapability.resolve();
                }
                _setReadableStream(readableStream) {
                  this._readableStream = readableStream;
                  readableStream.on("readable", () => {
                    this._readCapability.resolve();
                  });
                  readableStream.on("end", () => {
                    readableStream.destroy();
                    this._done = true;
                    this._readCapability.resolve();
                  });
                  readableStream.on("error", (reason) => {
                    this._error(reason);
                  });
                  if (!this._isStreamingSupported && this._isRangeSupported) {
                    this._error(new _util2.AbortException("streaming is disabled"));
                  }
                  if (this._storedError) {
                    this._readableStream.destroy(this._storedError);
                  }
                }
              }
              class BaseRangeReader {
                constructor(stream) {
                  this._url = stream.url;
                  this._done = false;
                  this._storedError = null;
                  this.onProgress = null;
                  this._loaded = 0;
                  this._readableStream = null;
                  this._readCapability = (0, _util2.createPromiseCapability)();
                  const source = stream.source;
                  this._isStreamingSupported = !source.disableStream;
                }
                get isStreamingSupported() {
                  return this._isStreamingSupported;
                }
                async read() {
                  var _a;
                  await this._readCapability.promise;
                  if (this._done) {
                    return {
                      value: void 0,
                      done: true
                    };
                  }
                  if (this._storedError) {
                    throw this._storedError;
                  }
                  const chunk = this._readableStream.read();
                  if (chunk === null) {
                    this._readCapability = (0, _util2.createPromiseCapability)();
                    return this.read();
                  }
                  this._loaded += chunk.length;
                  (_a = this.onProgress) == null ? void 0 : _a.call(this, {
                    loaded: this._loaded
                  });
                  const buffer = new Uint8Array(chunk).buffer;
                  return {
                    value: buffer,
                    done: false
                  };
                }
                cancel(reason) {
                  if (!this._readableStream) {
                    this._error(reason);
                    return;
                  }
                  this._readableStream.destroy(reason);
                }
                _error(reason) {
                  this._storedError = reason;
                  this._readCapability.resolve();
                }
                _setReadableStream(readableStream) {
                  this._readableStream = readableStream;
                  readableStream.on("readable", () => {
                    this._readCapability.resolve();
                  });
                  readableStream.on("end", () => {
                    readableStream.destroy();
                    this._done = true;
                    this._readCapability.resolve();
                  });
                  readableStream.on("error", (reason) => {
                    this._error(reason);
                  });
                  if (this._storedError) {
                    this._readableStream.destroy(this._storedError);
                  }
                }
              }
              function createRequestOptions(parsedUrl, headers) {
                return {
                  protocol: parsedUrl.protocol,
                  auth: parsedUrl.auth,
                  host: parsedUrl.hostname,
                  port: parsedUrl.port,
                  path: parsedUrl.path,
                  method: "GET",
                  headers
                };
              }
              class PDFNodeStreamFullReader extends BaseFullReader {
                constructor(stream) {
                  super(stream);
                  const handleResponse = (response) => {
                    if (response.statusCode === 404) {
                      const error = new _util2.MissingPDFException(`Missing PDF "${this._url}".`);
                      this._storedError = error;
                      this._headersCapability.reject(error);
                      return;
                    }
                    this._headersCapability.resolve();
                    this._setReadableStream(response);
                    const getResponseHeader = (name) => {
                      return this._readableStream.headers[name.toLowerCase()];
                    };
                    const {
                      allowRangeRequests,
                      suggestedLength
                    } = (0, _network_utils.validateRangeRequestCapabilities)({
                      getResponseHeader,
                      isHttp: stream.isHttp,
                      rangeChunkSize: this._rangeChunkSize,
                      disableRange: this._disableRange
                    });
                    this._isRangeSupported = allowRangeRequests;
                    this._contentLength = suggestedLength || this._contentLength;
                    this._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);
                  };
                  this._request = null;
                  if (this._url.protocol === "http:") {
                    this._request = http.request(createRequestOptions(this._url, stream.httpHeaders), handleResponse);
                  } else {
                    this._request = https.request(createRequestOptions(this._url, stream.httpHeaders), handleResponse);
                  }
                  this._request.on("error", (reason) => {
                    this._storedError = reason;
                    this._headersCapability.reject(reason);
                  });
                  this._request.end();
                }
              }
              class PDFNodeStreamRangeReader extends BaseRangeReader {
                constructor(stream, start, end) {
                  super(stream);
                  this._httpHeaders = {};
                  for (const property in stream.httpHeaders) {
                    const value = stream.httpHeaders[property];
                    if (value === void 0) {
                      continue;
                    }
                    this._httpHeaders[property] = value;
                  }
                  this._httpHeaders.Range = `bytes=${start}-${end - 1}`;
                  const handleResponse = (response) => {
                    if (response.statusCode === 404) {
                      const error = new _util2.MissingPDFException(`Missing PDF "${this._url}".`);
                      this._storedError = error;
                      return;
                    }
                    this._setReadableStream(response);
                  };
                  this._request = null;
                  if (this._url.protocol === "http:") {
                    this._request = http.request(createRequestOptions(this._url, this._httpHeaders), handleResponse);
                  } else {
                    this._request = https.request(createRequestOptions(this._url, this._httpHeaders), handleResponse);
                  }
                  this._request.on("error", (reason) => {
                    this._storedError = reason;
                  });
                  this._request.end();
                }
              }
              class PDFNodeStreamFsFullReader extends BaseFullReader {
                constructor(stream) {
                  super(stream);
                  let path = decodeURIComponent(this._url.path);
                  if (fileUriRegex.test(this._url.href)) {
                    path = path.replace(/^\//, "");
                  }
                  fs.lstat(path, (error, stat) => {
                    if (error) {
                      if (error.code === "ENOENT") {
                        error = new _util2.MissingPDFException(`Missing PDF "${path}".`);
                      }
                      this._storedError = error;
                      this._headersCapability.reject(error);
                      return;
                    }
                    this._contentLength = stat.size;
                    this._setReadableStream(fs.createReadStream(path));
                    this._headersCapability.resolve();
                  });
                }
              }
              class PDFNodeStreamFsRangeReader extends BaseRangeReader {
                constructor(stream, start, end) {
                  super(stream);
                  let path = decodeURIComponent(this._url.path);
                  if (fileUriRegex.test(this._url.href)) {
                    path = path.replace(/^\//, "");
                  }
                  this._setReadableStream(fs.createReadStream(path, {
                    start,
                    end: end - 1
                  }));
                }
              }
            },
            /* 22 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.createResponseStatusError = createResponseStatusError;
              exports2.extractFilenameFromHeader = extractFilenameFromHeader;
              exports2.validateRangeRequestCapabilities = validateRangeRequestCapabilities;
              exports2.validateResponseStatus = validateResponseStatus;
              var _util2 = __w_pdfjs_require__2(1);
              var _content_disposition = __w_pdfjs_require__2(23);
              var _display_utils2 = __w_pdfjs_require__2(6);
              function validateRangeRequestCapabilities({
                getResponseHeader,
                isHttp,
                rangeChunkSize,
                disableRange
              }) {
                const returnValues = {
                  allowRangeRequests: false,
                  suggestedLength: void 0
                };
                const length = parseInt(getResponseHeader("Content-Length"), 10);
                if (!Number.isInteger(length)) {
                  return returnValues;
                }
                returnValues.suggestedLength = length;
                if (length <= 2 * rangeChunkSize) {
                  return returnValues;
                }
                if (disableRange || !isHttp) {
                  return returnValues;
                }
                if (getResponseHeader("Accept-Ranges") !== "bytes") {
                  return returnValues;
                }
                const contentEncoding = getResponseHeader("Content-Encoding") || "identity";
                if (contentEncoding !== "identity") {
                  return returnValues;
                }
                returnValues.allowRangeRequests = true;
                return returnValues;
              }
              function extractFilenameFromHeader(getResponseHeader) {
                const contentDisposition = getResponseHeader("Content-Disposition");
                if (contentDisposition) {
                  let filename = (0, _content_disposition.getFilenameFromContentDispositionHeader)(contentDisposition);
                  if (filename.includes("%")) {
                    try {
                      filename = decodeURIComponent(filename);
                    } catch (ex) {
                    }
                  }
                  if ((0, _display_utils2.isPdfFile)(filename)) {
                    return filename;
                  }
                }
                return null;
              }
              function createResponseStatusError(status, url) {
                if (status === 404 || status === 0 && url.startsWith("file:")) {
                  return new _util2.MissingPDFException('Missing PDF "' + url + '".');
                }
                return new _util2.UnexpectedResponseException(`Unexpected server response (${status}) while retrieving PDF "${url}".`, status);
              }
              function validateResponseStatus(status) {
                return status === 200 || status === 206;
              }
            },
            /* 23 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.getFilenameFromContentDispositionHeader = getFilenameFromContentDispositionHeader;
              var _util2 = __w_pdfjs_require__2(1);
              function getFilenameFromContentDispositionHeader(contentDisposition) {
                let needsEncodingFixup = true;
                let tmp = toParamRegExp("filename\\*", "i").exec(contentDisposition);
                if (tmp) {
                  tmp = tmp[1];
                  let filename = rfc2616unquote(tmp);
                  filename = unescape(filename);
                  filename = rfc5987decode(filename);
                  filename = rfc2047decode(filename);
                  return fixupEncoding(filename);
                }
                tmp = rfc2231getparam(contentDisposition);
                if (tmp) {
                  const filename = rfc2047decode(tmp);
                  return fixupEncoding(filename);
                }
                tmp = toParamRegExp("filename", "i").exec(contentDisposition);
                if (tmp) {
                  tmp = tmp[1];
                  let filename = rfc2616unquote(tmp);
                  filename = rfc2047decode(filename);
                  return fixupEncoding(filename);
                }
                function toParamRegExp(attributePattern, flags) {
                  return new RegExp("(?:^|;)\\s*" + attributePattern + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', flags);
                }
                function textdecode(encoding, value) {
                  if (encoding) {
                    if (!/^[\x00-\xFF]+$/.test(value)) {
                      return value;
                    }
                    try {
                      const decoder = new TextDecoder(encoding, {
                        fatal: true
                      });
                      const buffer = (0, _util2.stringToBytes)(value);
                      value = decoder.decode(buffer);
                      needsEncodingFixup = false;
                    } catch (e) {
                    }
                  }
                  return value;
                }
                function fixupEncoding(value) {
                  if (needsEncodingFixup && /[\x80-\xff]/.test(value)) {
                    value = textdecode("utf-8", value);
                    if (needsEncodingFixup) {
                      value = textdecode("iso-8859-1", value);
                    }
                  }
                  return value;
                }
                function rfc2231getparam(contentDispositionStr) {
                  const matches = [];
                  let match;
                  const iter = toParamRegExp("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
                  while ((match = iter.exec(contentDispositionStr)) !== null) {
                    let [, n, quot, part] = match;
                    n = parseInt(n, 10);
                    if (n in matches) {
                      if (n === 0) {
                        break;
                      }
                      continue;
                    }
                    matches[n] = [quot, part];
                  }
                  const parts = [];
                  for (let n = 0; n < matches.length; ++n) {
                    if (!(n in matches)) {
                      break;
                    }
                    let [quot, part] = matches[n];
                    part = rfc2616unquote(part);
                    if (quot) {
                      part = unescape(part);
                      if (n === 0) {
                        part = rfc5987decode(part);
                      }
                    }
                    parts.push(part);
                  }
                  return parts.join("");
                }
                function rfc2616unquote(value) {
                  if (value.startsWith('"')) {
                    const parts = value.slice(1).split('\\"');
                    for (let i = 0; i < parts.length; ++i) {
                      const quotindex = parts[i].indexOf('"');
                      if (quotindex !== -1) {
                        parts[i] = parts[i].slice(0, quotindex);
                        parts.length = i + 1;
                      }
                      parts[i] = parts[i].replace(/\\(.)/g, "$1");
                    }
                    value = parts.join('"');
                  }
                  return value;
                }
                function rfc5987decode(extvalue) {
                  const encodingend = extvalue.indexOf("'");
                  if (encodingend === -1) {
                    return extvalue;
                  }
                  const encoding = extvalue.slice(0, encodingend);
                  const langvalue = extvalue.slice(encodingend + 1);
                  const value = langvalue.replace(/^[^']*'/, "");
                  return textdecode(encoding, value);
                }
                function rfc2047decode(value) {
                  if (!value.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(value)) {
                    return value;
                  }
                  return value.replace(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(matches, charset, encoding, text) {
                    if (encoding === "q" || encoding === "Q") {
                      text = text.replace(/_/g, " ");
                      text = text.replace(/=([0-9a-fA-F]{2})/g, function(match, hex) {
                        return String.fromCharCode(parseInt(hex, 16));
                      });
                      return textdecode(charset, text);
                    }
                    try {
                      text = atob(text);
                    } catch (e) {
                    }
                    return textdecode(charset, text);
                  });
                }
                return "";
              }
            },
            /* 24 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.PDFNetworkStream = void 0;
              var _util2 = __w_pdfjs_require__2(1);
              var _network_utils = __w_pdfjs_require__2(22);
              ;
              const OK_RESPONSE = 200;
              const PARTIAL_CONTENT_RESPONSE = 206;
              function getArrayBuffer(xhr) {
                const data = xhr.response;
                if (typeof data !== "string") {
                  return data;
                }
                return (0, _util2.stringToBytes)(data).buffer;
              }
              class NetworkManager {
                constructor(url, args = {}) {
                  this.url = url;
                  this.isHttp = /^https?:/i.test(url);
                  this.httpHeaders = this.isHttp && args.httpHeaders || /* @__PURE__ */ Object.create(null);
                  this.withCredentials = args.withCredentials || false;
                  this.getXhr = args.getXhr || function NetworkManager_getXhr() {
                    return new XMLHttpRequest();
                  };
                  this.currXhrId = 0;
                  this.pendingRequests = /* @__PURE__ */ Object.create(null);
                }
                requestRange(begin, end, listeners) {
                  const args = {
                    begin,
                    end
                  };
                  for (const prop in listeners) {
                    args[prop] = listeners[prop];
                  }
                  return this.request(args);
                }
                requestFull(listeners) {
                  return this.request(listeners);
                }
                request(args) {
                  const xhr = this.getXhr();
                  const xhrId = this.currXhrId++;
                  const pendingRequest = this.pendingRequests[xhrId] = {
                    xhr
                  };
                  xhr.open("GET", this.url);
                  xhr.withCredentials = this.withCredentials;
                  for (const property in this.httpHeaders) {
                    const value = this.httpHeaders[property];
                    if (value === void 0) {
                      continue;
                    }
                    xhr.setRequestHeader(property, value);
                  }
                  if (this.isHttp && "begin" in args && "end" in args) {
                    xhr.setRequestHeader("Range", `bytes=${args.begin}-${args.end - 1}`);
                    pendingRequest.expectedStatus = PARTIAL_CONTENT_RESPONSE;
                  } else {
                    pendingRequest.expectedStatus = OK_RESPONSE;
                  }
                  xhr.responseType = "arraybuffer";
                  if (args.onError) {
                    xhr.onerror = function(evt) {
                      args.onError(xhr.status);
                    };
                  }
                  xhr.onreadystatechange = this.onStateChange.bind(this, xhrId);
                  xhr.onprogress = this.onProgress.bind(this, xhrId);
                  pendingRequest.onHeadersReceived = args.onHeadersReceived;
                  pendingRequest.onDone = args.onDone;
                  pendingRequest.onError = args.onError;
                  pendingRequest.onProgress = args.onProgress;
                  xhr.send(null);
                  return xhrId;
                }
                onProgress(xhrId, evt) {
                  var _a;
                  const pendingRequest = this.pendingRequests[xhrId];
                  if (!pendingRequest) {
                    return;
                  }
                  (_a = pendingRequest.onProgress) == null ? void 0 : _a.call(pendingRequest, evt);
                }
                onStateChange(xhrId, evt) {
                  var _a, _b, _c;
                  const pendingRequest = this.pendingRequests[xhrId];
                  if (!pendingRequest) {
                    return;
                  }
                  const xhr = pendingRequest.xhr;
                  if (xhr.readyState >= 2 && pendingRequest.onHeadersReceived) {
                    pendingRequest.onHeadersReceived();
                    delete pendingRequest.onHeadersReceived;
                  }
                  if (xhr.readyState !== 4) {
                    return;
                  }
                  if (!(xhrId in this.pendingRequests)) {
                    return;
                  }
                  delete this.pendingRequests[xhrId];
                  if (xhr.status === 0 && this.isHttp) {
                    (_a = pendingRequest.onError) == null ? void 0 : _a.call(pendingRequest, xhr.status);
                    return;
                  }
                  const xhrStatus = xhr.status || OK_RESPONSE;
                  const ok_response_on_range_request = xhrStatus === OK_RESPONSE && pendingRequest.expectedStatus === PARTIAL_CONTENT_RESPONSE;
                  if (!ok_response_on_range_request && xhrStatus !== pendingRequest.expectedStatus) {
                    (_b = pendingRequest.onError) == null ? void 0 : _b.call(pendingRequest, xhr.status);
                    return;
                  }
                  const chunk = getArrayBuffer(xhr);
                  if (xhrStatus === PARTIAL_CONTENT_RESPONSE) {
                    const rangeHeader = xhr.getResponseHeader("Content-Range");
                    const matches = /bytes (\d+)-(\d+)\/(\d+)/.exec(rangeHeader);
                    pendingRequest.onDone({
                      begin: parseInt(matches[1], 10),
                      chunk
                    });
                  } else if (chunk) {
                    pendingRequest.onDone({
                      begin: 0,
                      chunk
                    });
                  } else {
                    (_c = pendingRequest.onError) == null ? void 0 : _c.call(pendingRequest, xhr.status);
                  }
                }
                getRequestXhr(xhrId) {
                  return this.pendingRequests[xhrId].xhr;
                }
                isPendingRequest(xhrId) {
                  return xhrId in this.pendingRequests;
                }
                abortRequest(xhrId) {
                  const xhr = this.pendingRequests[xhrId].xhr;
                  delete this.pendingRequests[xhrId];
                  xhr.abort();
                }
              }
              class PDFNetworkStream {
                constructor(source) {
                  this._source = source;
                  this._manager = new NetworkManager(source.url, {
                    httpHeaders: source.httpHeaders,
                    withCredentials: source.withCredentials
                  });
                  this._rangeChunkSize = source.rangeChunkSize;
                  this._fullRequestReader = null;
                  this._rangeRequestReaders = [];
                }
                _onRangeRequestReaderClosed(reader) {
                  const i = this._rangeRequestReaders.indexOf(reader);
                  if (i >= 0) {
                    this._rangeRequestReaders.splice(i, 1);
                  }
                }
                getFullReader() {
                  (0, _util2.assert)(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once.");
                  this._fullRequestReader = new PDFNetworkStreamFullRequestReader(this._manager, this._source);
                  return this._fullRequestReader;
                }
                getRangeReader(begin, end) {
                  const reader = new PDFNetworkStreamRangeRequestReader(this._manager, begin, end);
                  reader.onClosed = this._onRangeRequestReaderClosed.bind(this);
                  this._rangeRequestReaders.push(reader);
                  return reader;
                }
                cancelAllRequests(reason) {
                  var _a;
                  (_a = this._fullRequestReader) == null ? void 0 : _a.cancel(reason);
                  for (const reader of this._rangeRequestReaders.slice(0)) {
                    reader.cancel(reason);
                  }
                }
              }
              exports2.PDFNetworkStream = PDFNetworkStream;
              class PDFNetworkStreamFullRequestReader {
                constructor(manager, source) {
                  this._manager = manager;
                  const args = {
                    onHeadersReceived: this._onHeadersReceived.bind(this),
                    onDone: this._onDone.bind(this),
                    onError: this._onError.bind(this),
                    onProgress: this._onProgress.bind(this)
                  };
                  this._url = source.url;
                  this._fullRequestId = manager.requestFull(args);
                  this._headersReceivedCapability = (0, _util2.createPromiseCapability)();
                  this._disableRange = source.disableRange || false;
                  this._contentLength = source.length;
                  this._rangeChunkSize = source.rangeChunkSize;
                  if (!this._rangeChunkSize && !this._disableRange) {
                    this._disableRange = true;
                  }
                  this._isStreamingSupported = false;
                  this._isRangeSupported = false;
                  this._cachedChunks = [];
                  this._requests = [];
                  this._done = false;
                  this._storedError = void 0;
                  this._filename = null;
                  this.onProgress = null;
                }
                _onHeadersReceived() {
                  const fullRequestXhrId = this._fullRequestId;
                  const fullRequestXhr = this._manager.getRequestXhr(fullRequestXhrId);
                  const getResponseHeader = (name) => {
                    return fullRequestXhr.getResponseHeader(name);
                  };
                  const {
                    allowRangeRequests,
                    suggestedLength
                  } = (0, _network_utils.validateRangeRequestCapabilities)({
                    getResponseHeader,
                    isHttp: this._manager.isHttp,
                    rangeChunkSize: this._rangeChunkSize,
                    disableRange: this._disableRange
                  });
                  if (allowRangeRequests) {
                    this._isRangeSupported = true;
                  }
                  this._contentLength = suggestedLength || this._contentLength;
                  this._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);
                  if (this._isRangeSupported) {
                    this._manager.abortRequest(fullRequestXhrId);
                  }
                  this._headersReceivedCapability.resolve();
                }
                _onDone(data) {
                  if (data) {
                    if (this._requests.length > 0) {
                      const requestCapability = this._requests.shift();
                      requestCapability.resolve({
                        value: data.chunk,
                        done: false
                      });
                    } else {
                      this._cachedChunks.push(data.chunk);
                    }
                  }
                  this._done = true;
                  if (this._cachedChunks.length > 0) {
                    return;
                  }
                  for (const requestCapability of this._requests) {
                    requestCapability.resolve({
                      value: void 0,
                      done: true
                    });
                  }
                  this._requests.length = 0;
                }
                _onError(status) {
                  this._storedError = (0, _network_utils.createResponseStatusError)(status, this._url);
                  this._headersReceivedCapability.reject(this._storedError);
                  for (const requestCapability of this._requests) {
                    requestCapability.reject(this._storedError);
                  }
                  this._requests.length = 0;
                  this._cachedChunks.length = 0;
                }
                _onProgress(evt) {
                  var _a;
                  (_a = this.onProgress) == null ? void 0 : _a.call(this, {
                    loaded: evt.loaded,
                    total: evt.lengthComputable ? evt.total : this._contentLength
                  });
                }
                get filename() {
                  return this._filename;
                }
                get isRangeSupported() {
                  return this._isRangeSupported;
                }
                get isStreamingSupported() {
                  return this._isStreamingSupported;
                }
                get contentLength() {
                  return this._contentLength;
                }
                get headersReady() {
                  return this._headersReceivedCapability.promise;
                }
                async read() {
                  if (this._storedError) {
                    throw this._storedError;
                  }
                  if (this._cachedChunks.length > 0) {
                    const chunk = this._cachedChunks.shift();
                    return {
                      value: chunk,
                      done: false
                    };
                  }
                  if (this._done) {
                    return {
                      value: void 0,
                      done: true
                    };
                  }
                  const requestCapability = (0, _util2.createPromiseCapability)();
                  this._requests.push(requestCapability);
                  return requestCapability.promise;
                }
                cancel(reason) {
                  this._done = true;
                  this._headersReceivedCapability.reject(reason);
                  for (const requestCapability of this._requests) {
                    requestCapability.resolve({
                      value: void 0,
                      done: true
                    });
                  }
                  this._requests.length = 0;
                  if (this._manager.isPendingRequest(this._fullRequestId)) {
                    this._manager.abortRequest(this._fullRequestId);
                  }
                  this._fullRequestReader = null;
                }
              }
              class PDFNetworkStreamRangeRequestReader {
                constructor(manager, begin, end) {
                  this._manager = manager;
                  const args = {
                    onDone: this._onDone.bind(this),
                    onError: this._onError.bind(this),
                    onProgress: this._onProgress.bind(this)
                  };
                  this._url = manager.url;
                  this._requestId = manager.requestRange(begin, end, args);
                  this._requests = [];
                  this._queuedChunk = null;
                  this._done = false;
                  this._storedError = void 0;
                  this.onProgress = null;
                  this.onClosed = null;
                }
                _close() {
                  var _a;
                  (_a = this.onClosed) == null ? void 0 : _a.call(this, this);
                }
                _onDone(data) {
                  const chunk = data.chunk;
                  if (this._requests.length > 0) {
                    const requestCapability = this._requests.shift();
                    requestCapability.resolve({
                      value: chunk,
                      done: false
                    });
                  } else {
                    this._queuedChunk = chunk;
                  }
                  this._done = true;
                  for (const requestCapability of this._requests) {
                    requestCapability.resolve({
                      value: void 0,
                      done: true
                    });
                  }
                  this._requests.length = 0;
                  this._close();
                }
                _onError(status) {
                  this._storedError = (0, _network_utils.createResponseStatusError)(status, this._url);
                  for (const requestCapability of this._requests) {
                    requestCapability.reject(this._storedError);
                  }
                  this._requests.length = 0;
                  this._queuedChunk = null;
                }
                _onProgress(evt) {
                  var _a;
                  if (!this.isStreamingSupported) {
                    (_a = this.onProgress) == null ? void 0 : _a.call(this, {
                      loaded: evt.loaded
                    });
                  }
                }
                get isStreamingSupported() {
                  return false;
                }
                async read() {
                  if (this._storedError) {
                    throw this._storedError;
                  }
                  if (this._queuedChunk !== null) {
                    const chunk = this._queuedChunk;
                    this._queuedChunk = null;
                    return {
                      value: chunk,
                      done: false
                    };
                  }
                  if (this._done) {
                    return {
                      value: void 0,
                      done: true
                    };
                  }
                  const requestCapability = (0, _util2.createPromiseCapability)();
                  this._requests.push(requestCapability);
                  return requestCapability.promise;
                }
                cancel(reason) {
                  this._done = true;
                  for (const requestCapability of this._requests) {
                    requestCapability.resolve({
                      value: void 0,
                      done: true
                    });
                  }
                  this._requests.length = 0;
                  if (this._manager.isPendingRequest(this._requestId)) {
                    this._manager.abortRequest(this._requestId);
                  }
                  this._close();
                }
              }
            },
            /* 25 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.PDFFetchStream = void 0;
              var _util2 = __w_pdfjs_require__2(1);
              var _network_utils = __w_pdfjs_require__2(22);
              ;
              function createFetchOptions(headers, withCredentials, abortController) {
                return {
                  method: "GET",
                  headers,
                  signal: abortController.signal,
                  mode: "cors",
                  credentials: withCredentials ? "include" : "same-origin",
                  redirect: "follow"
                };
              }
              function createHeaders(httpHeaders) {
                const headers = new Headers();
                for (const property in httpHeaders) {
                  const value = httpHeaders[property];
                  if (value === void 0) {
                    continue;
                  }
                  headers.append(property, value);
                }
                return headers;
              }
              function getArrayBuffer(val) {
                if (val instanceof Uint8Array) {
                  return val.buffer;
                }
                if (val instanceof ArrayBuffer) {
                  return val;
                }
                (0, _util2.warn)(`getArrayBuffer - unexpected data format: ${val}`);
                return new Uint8Array(val).buffer;
              }
              class PDFFetchStream {
                constructor(source) {
                  this.source = source;
                  this.isHttp = /^https?:/i.test(source.url);
                  this.httpHeaders = this.isHttp && source.httpHeaders || {};
                  this._fullRequestReader = null;
                  this._rangeRequestReaders = [];
                }
                get _progressiveDataLength() {
                  var _a;
                  return ((_a = this._fullRequestReader) == null ? void 0 : _a._loaded) ?? 0;
                }
                getFullReader() {
                  (0, _util2.assert)(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once.");
                  this._fullRequestReader = new PDFFetchStreamReader(this);
                  return this._fullRequestReader;
                }
                getRangeReader(begin, end) {
                  if (end <= this._progressiveDataLength) {
                    return null;
                  }
                  const reader = new PDFFetchStreamRangeReader(this, begin, end);
                  this._rangeRequestReaders.push(reader);
                  return reader;
                }
                cancelAllRequests(reason) {
                  var _a;
                  (_a = this._fullRequestReader) == null ? void 0 : _a.cancel(reason);
                  for (const reader of this._rangeRequestReaders.slice(0)) {
                    reader.cancel(reason);
                  }
                }
              }
              exports2.PDFFetchStream = PDFFetchStream;
              class PDFFetchStreamReader {
                constructor(stream) {
                  this._stream = stream;
                  this._reader = null;
                  this._loaded = 0;
                  this._filename = null;
                  const source = stream.source;
                  this._withCredentials = source.withCredentials || false;
                  this._contentLength = source.length;
                  this._headersCapability = (0, _util2.createPromiseCapability)();
                  this._disableRange = source.disableRange || false;
                  this._rangeChunkSize = source.rangeChunkSize;
                  if (!this._rangeChunkSize && !this._disableRange) {
                    this._disableRange = true;
                  }
                  this._abortController = new AbortController();
                  this._isStreamingSupported = !source.disableStream;
                  this._isRangeSupported = !source.disableRange;
                  this._headers = createHeaders(this._stream.httpHeaders);
                  const url = source.url;
                  fetch(url, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then((response) => {
                    if (!(0, _network_utils.validateResponseStatus)(response.status)) {
                      throw (0, _network_utils.createResponseStatusError)(response.status, url);
                    }
                    this._reader = response.body.getReader();
                    this._headersCapability.resolve();
                    const getResponseHeader = (name) => {
                      return response.headers.get(name);
                    };
                    const {
                      allowRangeRequests,
                      suggestedLength
                    } = (0, _network_utils.validateRangeRequestCapabilities)({
                      getResponseHeader,
                      isHttp: this._stream.isHttp,
                      rangeChunkSize: this._rangeChunkSize,
                      disableRange: this._disableRange
                    });
                    this._isRangeSupported = allowRangeRequests;
                    this._contentLength = suggestedLength || this._contentLength;
                    this._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);
                    if (!this._isStreamingSupported && this._isRangeSupported) {
                      this.cancel(new _util2.AbortException("Streaming is disabled."));
                    }
                  }).catch(this._headersCapability.reject);
                  this.onProgress = null;
                }
                get headersReady() {
                  return this._headersCapability.promise;
                }
                get filename() {
                  return this._filename;
                }
                get contentLength() {
                  return this._contentLength;
                }
                get isRangeSupported() {
                  return this._isRangeSupported;
                }
                get isStreamingSupported() {
                  return this._isStreamingSupported;
                }
                async read() {
                  var _a;
                  await this._headersCapability.promise;
                  const {
                    value,
                    done
                  } = await this._reader.read();
                  if (done) {
                    return {
                      value,
                      done
                    };
                  }
                  this._loaded += value.byteLength;
                  (_a = this.onProgress) == null ? void 0 : _a.call(this, {
                    loaded: this._loaded,
                    total: this._contentLength
                  });
                  return {
                    value: getArrayBuffer(value),
                    done: false
                  };
                }
                cancel(reason) {
                  var _a;
                  (_a = this._reader) == null ? void 0 : _a.cancel(reason);
                  this._abortController.abort();
                }
              }
              class PDFFetchStreamRangeReader {
                constructor(stream, begin, end) {
                  this._stream = stream;
                  this._reader = null;
                  this._loaded = 0;
                  const source = stream.source;
                  this._withCredentials = source.withCredentials || false;
                  this._readCapability = (0, _util2.createPromiseCapability)();
                  this._isStreamingSupported = !source.disableStream;
                  this._abortController = new AbortController();
                  this._headers = createHeaders(this._stream.httpHeaders);
                  this._headers.append("Range", `bytes=${begin}-${end - 1}`);
                  const url = source.url;
                  fetch(url, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then((response) => {
                    if (!(0, _network_utils.validateResponseStatus)(response.status)) {
                      throw (0, _network_utils.createResponseStatusError)(response.status, url);
                    }
                    this._readCapability.resolve();
                    this._reader = response.body.getReader();
                  }).catch(this._readCapability.reject);
                  this.onProgress = null;
                }
                get isStreamingSupported() {
                  return this._isStreamingSupported;
                }
                async read() {
                  var _a;
                  await this._readCapability.promise;
                  const {
                    value,
                    done
                  } = await this._reader.read();
                  if (done) {
                    return {
                      value,
                      done
                    };
                  }
                  this._loaded += value.byteLength;
                  (_a = this.onProgress) == null ? void 0 : _a.call(this, {
                    loaded: this._loaded
                  });
                  return {
                    value: getArrayBuffer(value),
                    done: false
                  };
                }
                cancel(reason) {
                  var _a;
                  (_a = this._reader) == null ? void 0 : _a.cancel(reason);
                  this._abortController.abort();
                }
              }
            },
            /* 26 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.TextLayerRenderTask = void 0;
              exports2.renderTextLayer = renderTextLayer;
              exports2.updateTextLayer = updateTextLayer;
              var _util2 = __w_pdfjs_require__2(1);
              var _display_utils2 = __w_pdfjs_require__2(6);
              const MAX_TEXT_DIVS_TO_RENDER = 1e5;
              const DEFAULT_FONT_SIZE = 30;
              const DEFAULT_FONT_ASCENT = 0.8;
              const ascentCache = /* @__PURE__ */ new Map();
              function getCtx(size, isOffscreenCanvasSupported) {
                let ctx;
                if (isOffscreenCanvasSupported && _util2.FeatureTest.isOffscreenCanvasSupported) {
                  ctx = new OffscreenCanvas(size, size).getContext("2d", {
                    alpha: false
                  });
                } else {
                  const canvas = document.createElement("canvas");
                  canvas.width = canvas.height = size;
                  ctx = canvas.getContext("2d", {
                    alpha: false
                  });
                }
                return ctx;
              }
              function getAscent(fontFamily, isOffscreenCanvasSupported) {
                const cachedAscent = ascentCache.get(fontFamily);
                if (cachedAscent) {
                  return cachedAscent;
                }
                const ctx = getCtx(DEFAULT_FONT_SIZE, isOffscreenCanvasSupported);
                ctx.font = `${DEFAULT_FONT_SIZE}px ${fontFamily}`;
                const metrics = ctx.measureText("");
                let ascent = metrics.fontBoundingBoxAscent;
                let descent = Math.abs(metrics.fontBoundingBoxDescent);
                if (ascent) {
                  const ratio = ascent / (ascent + descent);
                  ascentCache.set(fontFamily, ratio);
                  ctx.canvas.width = ctx.canvas.height = 0;
                  return ratio;
                }
                ctx.strokeStyle = "red";
                ctx.clearRect(0, 0, DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE);
                ctx.strokeText("g", 0, 0);
                let pixels = ctx.getImageData(0, 0, DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE).data;
                descent = 0;
                for (let i = pixels.length - 1 - 3; i >= 0; i -= 4) {
                  if (pixels[i] > 0) {
                    descent = Math.ceil(i / 4 / DEFAULT_FONT_SIZE);
                    break;
                  }
                }
                ctx.clearRect(0, 0, DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE);
                ctx.strokeText("A", 0, DEFAULT_FONT_SIZE);
                pixels = ctx.getImageData(0, 0, DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE).data;
                ascent = 0;
                for (let i = 0, ii = pixels.length; i < ii; i += 4) {
                  if (pixels[i] > 0) {
                    ascent = DEFAULT_FONT_SIZE - Math.floor(i / 4 / DEFAULT_FONT_SIZE);
                    break;
                  }
                }
                ctx.canvas.width = ctx.canvas.height = 0;
                if (ascent) {
                  const ratio = ascent / (ascent + descent);
                  ascentCache.set(fontFamily, ratio);
                  return ratio;
                }
                ascentCache.set(fontFamily, DEFAULT_FONT_ASCENT);
                return DEFAULT_FONT_ASCENT;
              }
              function appendText(task, geom, styles) {
                const textDiv = document.createElement("span");
                const textDivProperties = {
                  angle: 0,
                  canvasWidth: 0,
                  hasText: geom.str !== "",
                  hasEOL: geom.hasEOL,
                  fontSize: 0
                };
                task._textDivs.push(textDiv);
                const tx = _util2.Util.transform(task._transform, geom.transform);
                let angle = Math.atan2(tx[1], tx[0]);
                const style = styles[geom.fontName];
                if (style.vertical) {
                  angle += Math.PI / 2;
                }
                const fontHeight = Math.hypot(tx[2], tx[3]);
                const fontAscent = fontHeight * getAscent(style.fontFamily, task._isOffscreenCanvasSupported);
                let left, top;
                if (angle === 0) {
                  left = tx[4];
                  top = tx[5] - fontAscent;
                } else {
                  left = tx[4] + fontAscent * Math.sin(angle);
                  top = tx[5] - fontAscent * Math.cos(angle);
                }
                const scaleFactorStr = "calc(var(--scale-factor)*";
                const divStyle = textDiv.style;
                if (task._container === task._rootContainer) {
                  divStyle.left = `${(100 * left / task._pageWidth).toFixed(2)}%`;
                  divStyle.top = `${(100 * top / task._pageHeight).toFixed(2)}%`;
                } else {
                  divStyle.left = `${scaleFactorStr}${left.toFixed(2)}px)`;
                  divStyle.top = `${scaleFactorStr}${top.toFixed(2)}px)`;
                }
                divStyle.fontSize = `${scaleFactorStr}${fontHeight.toFixed(2)}px)`;
                divStyle.fontFamily = style.fontFamily;
                textDivProperties.fontSize = fontHeight;
                textDiv.setAttribute("role", "presentation");
                textDiv.textContent = geom.str;
                textDiv.dir = geom.dir;
                if (task._fontInspectorEnabled) {
                  textDiv.dataset.fontName = geom.fontName;
                }
                if (angle !== 0) {
                  textDivProperties.angle = angle * (180 / Math.PI);
                }
                let shouldScaleText = false;
                if (geom.str.length > 1) {
                  shouldScaleText = true;
                } else if (geom.str !== " " && geom.transform[0] !== geom.transform[3]) {
                  const absScaleX = Math.abs(geom.transform[0]), absScaleY = Math.abs(geom.transform[3]);
                  if (absScaleX !== absScaleY && Math.max(absScaleX, absScaleY) / Math.min(absScaleX, absScaleY) > 1.5) {
                    shouldScaleText = true;
                  }
                }
                if (shouldScaleText) {
                  textDivProperties.canvasWidth = style.vertical ? geom.height : geom.width;
                }
                task._textDivProperties.set(textDiv, textDivProperties);
                if (task._isReadableStream) {
                  task._layoutText(textDiv);
                }
              }
              function layout(params) {
                const {
                  div,
                  scale,
                  properties,
                  ctx,
                  prevFontSize,
                  prevFontFamily
                } = params;
                const {
                  style
                } = div;
                let transform = "";
                if (properties.canvasWidth !== 0 && properties.hasText) {
                  const {
                    fontFamily
                  } = style;
                  const {
                    canvasWidth,
                    fontSize
                  } = properties;
                  if (prevFontSize !== fontSize || prevFontFamily !== fontFamily) {
                    ctx.font = `${fontSize * scale}px ${fontFamily}`;
                    params.prevFontSize = fontSize;
                    params.prevFontFamily = fontFamily;
                  }
                  const {
                    width
                  } = ctx.measureText(div.textContent);
                  if (width > 0) {
                    transform = `scaleX(${canvasWidth * scale / width})`;
                  }
                }
                if (properties.angle !== 0) {
                  transform = `rotate(${properties.angle}deg) ${transform}`;
                }
                if (transform.length > 0) {
                  style.transform = transform;
                }
              }
              function render(task) {
                if (task._canceled) {
                  return;
                }
                const textDivs = task._textDivs;
                const capability = task._capability;
                const textDivsLength = textDivs.length;
                if (textDivsLength > MAX_TEXT_DIVS_TO_RENDER) {
                  capability.resolve();
                  return;
                }
                if (!task._isReadableStream) {
                  for (const textDiv of textDivs) {
                    task._layoutText(textDiv);
                  }
                }
                capability.resolve();
              }
              class TextLayerRenderTask {
                constructor({
                  textContentSource,
                  container,
                  viewport,
                  textDivs,
                  textDivProperties,
                  textContentItemsStr,
                  isOffscreenCanvasSupported
                }) {
                  var _a;
                  this._textContentSource = textContentSource;
                  this._isReadableStream = textContentSource instanceof ReadableStream;
                  this._container = this._rootContainer = container;
                  this._textDivs = textDivs || [];
                  this._textContentItemsStr = textContentItemsStr || [];
                  this._isOffscreenCanvasSupported = isOffscreenCanvasSupported;
                  this._fontInspectorEnabled = !!((_a = globalThis.FontInspector) == null ? void 0 : _a.enabled);
                  this._reader = null;
                  this._textDivProperties = textDivProperties || /* @__PURE__ */ new WeakMap();
                  this._canceled = false;
                  this._capability = (0, _util2.createPromiseCapability)();
                  this._layoutTextParams = {
                    prevFontSize: null,
                    prevFontFamily: null,
                    div: null,
                    scale: viewport.scale * (globalThis.devicePixelRatio || 1),
                    properties: null,
                    ctx: getCtx(0, isOffscreenCanvasSupported)
                  };
                  const {
                    pageWidth,
                    pageHeight,
                    pageX,
                    pageY
                  } = viewport.rawDims;
                  this._transform = [1, 0, 0, -1, -pageX, pageY + pageHeight];
                  this._pageWidth = pageWidth;
                  this._pageHeight = pageHeight;
                  (0, _display_utils2.setLayerDimensions)(container, viewport);
                  this._capability.promise.finally(() => {
                    this._layoutTextParams = null;
                  }).catch(() => {
                  });
                }
                get promise() {
                  return this._capability.promise;
                }
                cancel() {
                  this._canceled = true;
                  if (this._reader) {
                    this._reader.cancel(new _util2.AbortException("TextLayer task cancelled.")).catch(() => {
                    });
                    this._reader = null;
                  }
                  this._capability.reject(new _util2.AbortException("TextLayer task cancelled."));
                }
                _processItems(items, styleCache) {
                  for (const item of items) {
                    if (item.str === void 0) {
                      if (item.type === "beginMarkedContentProps" || item.type === "beginMarkedContent") {
                        const parent = this._container;
                        this._container = document.createElement("span");
                        this._container.classList.add("markedContent");
                        if (item.id !== null) {
                          this._container.setAttribute("id", `${item.id}`);
                        }
                        parent.append(this._container);
                      } else if (item.type === "endMarkedContent") {
                        this._container = this._container.parentNode;
                      }
                      continue;
                    }
                    this._textContentItemsStr.push(item.str);
                    appendText(this, item, styleCache);
                  }
                }
                _layoutText(textDiv) {
                  const textDivProperties = this._layoutTextParams.properties = this._textDivProperties.get(textDiv);
                  this._layoutTextParams.div = textDiv;
                  layout(this._layoutTextParams);
                  if (textDivProperties.hasText) {
                    this._container.append(textDiv);
                  }
                  if (textDivProperties.hasEOL) {
                    const br = document.createElement("br");
                    br.setAttribute("role", "presentation");
                    this._container.append(br);
                  }
                }
                _render() {
                  const capability = (0, _util2.createPromiseCapability)();
                  let styleCache = /* @__PURE__ */ Object.create(null);
                  if (this._isReadableStream) {
                    const pump = () => {
                      this._reader.read().then(({
                        value,
                        done
                      }) => {
                        if (done) {
                          capability.resolve();
                          return;
                        }
                        Object.assign(styleCache, value.styles);
                        this._processItems(value.items, styleCache);
                        pump();
                      }, capability.reject);
                    };
                    this._reader = this._textContentSource.getReader();
                    pump();
                  } else if (this._textContentSource) {
                    const {
                      items,
                      styles
                    } = this._textContentSource;
                    this._processItems(items, styles);
                    capability.resolve();
                  } else {
                    throw new Error('No "textContentSource" parameter specified.');
                  }
                  capability.promise.then(() => {
                    styleCache = null;
                    render(this);
                  }, this._capability.reject);
                }
              }
              exports2.TextLayerRenderTask = TextLayerRenderTask;
              function renderTextLayer(params) {
                if (!params.textContentSource && (params.textContent || params.textContentStream)) {
                  (0, _display_utils2.deprecated)("The TextLayerRender `textContent`/`textContentStream` parameters will be removed in the future, please use `textContentSource` instead.");
                  params.textContentSource = params.textContent || params.textContentStream;
                }
                const task = new TextLayerRenderTask(params);
                task._render();
                return task;
              }
              function updateTextLayer({
                container,
                viewport,
                textDivs,
                textDivProperties,
                isOffscreenCanvasSupported,
                mustRotate = true,
                mustRescale = true
              }) {
                if (mustRotate) {
                  (0, _display_utils2.setLayerDimensions)(container, {
                    rotation: viewport.rotation
                  });
                }
                if (mustRescale) {
                  const ctx = getCtx(0, isOffscreenCanvasSupported);
                  const scale = viewport.scale * (globalThis.devicePixelRatio || 1);
                  const params = {
                    prevFontSize: null,
                    prevFontFamily: null,
                    div: null,
                    scale,
                    properties: null,
                    ctx
                  };
                  for (const div of textDivs) {
                    params.properties = textDivProperties.get(div);
                    params.div = div;
                    layout(params);
                  }
                }
              }
            },
            /* 27 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              var _accessibilityManager, _allowClick, _boundPointerup, _boundPointerdown, _editors, _hadPointerDown, _isCleaningUp, _uiManager, _AnnotationEditorLayer_instances, changeParent_fn, createNewEditor_fn, createAndAddNewEditor_fn, cleanup_fn;
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.AnnotationEditorLayer = void 0;
              var _util2 = __w_pdfjs_require__2(1);
              var _tools = __w_pdfjs_require__2(5);
              var _freetext = __w_pdfjs_require__2(28);
              var _ink = __w_pdfjs_require__2(29);
              var _display_utils2 = __w_pdfjs_require__2(6);
              const _AnnotationEditorLayer = class _AnnotationEditorLayer {
                constructor(options) {
                  __privateAdd(this, _AnnotationEditorLayer_instances);
                  __privateAdd(this, _accessibilityManager);
                  __privateAdd(this, _allowClick, false);
                  __privateAdd(this, _boundPointerup, this.pointerup.bind(this));
                  __privateAdd(this, _boundPointerdown, this.pointerdown.bind(this));
                  __privateAdd(this, _editors, /* @__PURE__ */ new Map());
                  __privateAdd(this, _hadPointerDown, false);
                  __privateAdd(this, _isCleaningUp, false);
                  __privateAdd(this, _uiManager);
                  if (!_AnnotationEditorLayer._initialized) {
                    _AnnotationEditorLayer._initialized = true;
                    _freetext.FreeTextEditor.initialize(options.l10n);
                    _ink.InkEditor.initialize(options.l10n);
                  }
                  options.uiManager.registerEditorTypes([_freetext.FreeTextEditor, _ink.InkEditor]);
                  __privateSet(this, _uiManager, options.uiManager);
                  this.pageIndex = options.pageIndex;
                  this.div = options.div;
                  __privateSet(this, _accessibilityManager, options.accessibilityManager);
                  __privateGet(this, _uiManager).addLayer(this);
                }
                get isEmpty() {
                  return __privateGet(this, _editors).size === 0;
                }
                updateToolbar(mode) {
                  __privateGet(this, _uiManager).updateToolbar(mode);
                }
                updateMode(mode = __privateGet(this, _uiManager).getMode()) {
                  __privateMethod(this, _AnnotationEditorLayer_instances, cleanup_fn).call(this);
                  if (mode === _util2.AnnotationEditorType.INK) {
                    this.addInkEditorIfNeeded(false);
                    this.disableClick();
                  } else {
                    this.enableClick();
                  }
                  __privateGet(this, _uiManager).unselectAll();
                  if (mode !== _util2.AnnotationEditorType.NONE) {
                    this.div.classList.toggle("freeTextEditing", mode === _util2.AnnotationEditorType.FREETEXT);
                    this.div.classList.toggle("inkEditing", mode === _util2.AnnotationEditorType.INK);
                    this.div.hidden = false;
                  }
                }
                addInkEditorIfNeeded(isCommitting) {
                  if (!isCommitting && __privateGet(this, _uiManager).getMode() !== _util2.AnnotationEditorType.INK) {
                    return;
                  }
                  if (!isCommitting) {
                    for (const editor2 of __privateGet(this, _editors).values()) {
                      if (editor2.isEmpty()) {
                        editor2.setInBackground();
                        return;
                      }
                    }
                  }
                  const editor = __privateMethod(this, _AnnotationEditorLayer_instances, createAndAddNewEditor_fn).call(this, {
                    offsetX: 0,
                    offsetY: 0
                  });
                  editor.setInBackground();
                }
                setEditingState(isEditing) {
                  __privateGet(this, _uiManager).setEditingState(isEditing);
                }
                addCommands(params) {
                  __privateGet(this, _uiManager).addCommands(params);
                }
                enable() {
                  this.div.style.pointerEvents = "auto";
                  for (const editor of __privateGet(this, _editors).values()) {
                    editor.enableEditing();
                  }
                }
                disable() {
                  this.div.style.pointerEvents = "none";
                  for (const editor of __privateGet(this, _editors).values()) {
                    editor.disableEditing();
                  }
                  __privateMethod(this, _AnnotationEditorLayer_instances, cleanup_fn).call(this);
                  if (this.isEmpty) {
                    this.div.hidden = true;
                  }
                }
                setActiveEditor(editor) {
                  const currentActive = __privateGet(this, _uiManager).getActive();
                  if (currentActive === editor) {
                    return;
                  }
                  __privateGet(this, _uiManager).setActiveEditor(editor);
                }
                enableClick() {
                  this.div.addEventListener("pointerdown", __privateGet(this, _boundPointerdown));
                  this.div.addEventListener("pointerup", __privateGet(this, _boundPointerup));
                }
                disableClick() {
                  this.div.removeEventListener("pointerdown", __privateGet(this, _boundPointerdown));
                  this.div.removeEventListener("pointerup", __privateGet(this, _boundPointerup));
                }
                attach(editor) {
                  __privateGet(this, _editors).set(editor.id, editor);
                }
                detach(editor) {
                  var _a;
                  __privateGet(this, _editors).delete(editor.id);
                  (_a = __privateGet(this, _accessibilityManager)) == null ? void 0 : _a.removePointerInTextLayer(editor.contentDiv);
                }
                remove(editor) {
                  __privateGet(this, _uiManager).removeEditor(editor);
                  this.detach(editor);
                  editor.div.style.display = "none";
                  setTimeout(() => {
                    editor.div.style.display = "";
                    editor.div.remove();
                    editor.isAttachedToDOM = false;
                    if (document.activeElement === document.body) {
                      __privateGet(this, _uiManager).focusMainContainer();
                    }
                  }, 0);
                  if (!__privateGet(this, _isCleaningUp)) {
                    this.addInkEditorIfNeeded(false);
                  }
                }
                add(editor) {
                  __privateMethod(this, _AnnotationEditorLayer_instances, changeParent_fn).call(this, editor);
                  __privateGet(this, _uiManager).addEditor(editor);
                  this.attach(editor);
                  if (!editor.isAttachedToDOM) {
                    const div = editor.render();
                    this.div.append(div);
                    editor.isAttachedToDOM = true;
                  }
                  this.moveEditorInDOM(editor);
                  editor.onceAdded();
                  __privateGet(this, _uiManager).addToAnnotationStorage(editor);
                }
                moveEditorInDOM(editor) {
                  var _a;
                  (_a = __privateGet(this, _accessibilityManager)) == null ? void 0 : _a.moveElementInDOM(this.div, editor.div, editor.contentDiv, true);
                }
                addOrRebuild(editor) {
                  if (editor.needsToBeRebuilt()) {
                    editor.rebuild();
                  } else {
                    this.add(editor);
                  }
                }
                addANewEditor(editor) {
                  const cmd = () => {
                    this.addOrRebuild(editor);
                  };
                  const undo = () => {
                    editor.remove();
                  };
                  this.addCommands({
                    cmd,
                    undo,
                    mustExec: true
                  });
                }
                addUndoableEditor(editor) {
                  const cmd = () => {
                    this.addOrRebuild(editor);
                  };
                  const undo = () => {
                    editor.remove();
                  };
                  this.addCommands({
                    cmd,
                    undo,
                    mustExec: false
                  });
                }
                getNextId() {
                  return __privateGet(this, _uiManager).getId();
                }
                deserialize(data) {
                  switch (data.annotationType) {
                    case _util2.AnnotationEditorType.FREETEXT:
                      return _freetext.FreeTextEditor.deserialize(data, this, __privateGet(this, _uiManager));
                    case _util2.AnnotationEditorType.INK:
                      return _ink.InkEditor.deserialize(data, this, __privateGet(this, _uiManager));
                  }
                  return null;
                }
                setSelected(editor) {
                  __privateGet(this, _uiManager).setSelected(editor);
                }
                toggleSelected(editor) {
                  __privateGet(this, _uiManager).toggleSelected(editor);
                }
                isSelected(editor) {
                  return __privateGet(this, _uiManager).isSelected(editor);
                }
                unselect(editor) {
                  __privateGet(this, _uiManager).unselect(editor);
                }
                pointerup(event) {
                  const {
                    isMac
                  } = _util2.FeatureTest.platform;
                  if (event.button !== 0 || event.ctrlKey && isMac) {
                    return;
                  }
                  if (event.target !== this.div) {
                    return;
                  }
                  if (!__privateGet(this, _hadPointerDown)) {
                    return;
                  }
                  __privateSet(this, _hadPointerDown, false);
                  if (!__privateGet(this, _allowClick)) {
                    __privateSet(this, _allowClick, true);
                    return;
                  }
                  __privateMethod(this, _AnnotationEditorLayer_instances, createAndAddNewEditor_fn).call(this, event);
                }
                pointerdown(event) {
                  const {
                    isMac
                  } = _util2.FeatureTest.platform;
                  if (event.button !== 0 || event.ctrlKey && isMac) {
                    return;
                  }
                  if (event.target !== this.div) {
                    return;
                  }
                  __privateSet(this, _hadPointerDown, true);
                  const editor = __privateGet(this, _uiManager).getActive();
                  __privateSet(this, _allowClick, !editor || editor.isEmpty());
                }
                drop(event) {
                  const id = event.dataTransfer.getData("text/plain");
                  const editor = __privateGet(this, _uiManager).getEditor(id);
                  if (!editor) {
                    return;
                  }
                  event.preventDefault();
                  event.dataTransfer.dropEffect = "move";
                  __privateMethod(this, _AnnotationEditorLayer_instances, changeParent_fn).call(this, editor);
                  const rect = this.div.getBoundingClientRect();
                  const endX = event.clientX - rect.x;
                  const endY = event.clientY - rect.y;
                  editor.translate(endX - editor.startX, endY - editor.startY);
                  this.moveEditorInDOM(editor);
                  editor.div.focus();
                }
                dragover(event) {
                  event.preventDefault();
                }
                destroy() {
                  var _a, _b;
                  if (((_a = __privateGet(this, _uiManager).getActive()) == null ? void 0 : _a.parent) === this) {
                    __privateGet(this, _uiManager).setActiveEditor(null);
                  }
                  for (const editor of __privateGet(this, _editors).values()) {
                    (_b = __privateGet(this, _accessibilityManager)) == null ? void 0 : _b.removePointerInTextLayer(editor.contentDiv);
                    editor.setParent(null);
                    editor.isAttachedToDOM = false;
                    editor.div.remove();
                  }
                  this.div = null;
                  __privateGet(this, _editors).clear();
                  __privateGet(this, _uiManager).removeLayer(this);
                }
                render({
                  viewport
                }) {
                  this.viewport = viewport;
                  (0, _display_utils2.setLayerDimensions)(this.div, viewport);
                  (0, _tools.bindEvents)(this, this.div, ["dragover", "drop"]);
                  for (const editor of __privateGet(this, _uiManager).getEditors(this.pageIndex)) {
                    this.add(editor);
                  }
                  this.updateMode();
                }
                update({
                  viewport
                }) {
                  __privateGet(this, _uiManager).commitOrRemove();
                  this.viewport = viewport;
                  (0, _display_utils2.setLayerDimensions)(this.div, {
                    rotation: viewport.rotation
                  });
                  this.updateMode();
                }
                get pageDimensions() {
                  const {
                    pageWidth,
                    pageHeight
                  } = this.viewport.rawDims;
                  return [pageWidth, pageHeight];
                }
              };
              _accessibilityManager = new WeakMap();
              _allowClick = new WeakMap();
              _boundPointerup = new WeakMap();
              _boundPointerdown = new WeakMap();
              _editors = new WeakMap();
              _hadPointerDown = new WeakMap();
              _isCleaningUp = new WeakMap();
              _uiManager = new WeakMap();
              _AnnotationEditorLayer_instances = new WeakSet();
              changeParent_fn = function(editor) {
                var _a;
                if (editor.parent === this) {
                  return;
                }
                this.attach(editor);
                (_a = editor.parent) == null ? void 0 : _a.detach(editor);
                editor.setParent(this);
                if (editor.div && editor.isAttachedToDOM) {
                  editor.div.remove();
                  this.div.append(editor.div);
                }
              };
              createNewEditor_fn = function(params) {
                switch (__privateGet(this, _uiManager).getMode()) {
                  case _util2.AnnotationEditorType.FREETEXT:
                    return new _freetext.FreeTextEditor(params);
                  case _util2.AnnotationEditorType.INK:
                    return new _ink.InkEditor(params);
                }
                return null;
              };
              createAndAddNewEditor_fn = function(event) {
                const id = this.getNextId();
                const editor = __privateMethod(this, _AnnotationEditorLayer_instances, createNewEditor_fn).call(this, {
                  parent: this,
                  id,
                  x: event.offsetX,
                  y: event.offsetY,
                  uiManager: __privateGet(this, _uiManager)
                });
                if (editor) {
                  this.add(editor);
                }
                return editor;
              };
              cleanup_fn = function() {
                __privateSet(this, _isCleaningUp, true);
                for (const editor of __privateGet(this, _editors).values()) {
                  if (editor.isEmpty()) {
                    editor.remove();
                  }
                }
                __privateSet(this, _isCleaningUp, false);
              };
              __publicField(_AnnotationEditorLayer, "_initialized", false);
              let AnnotationEditorLayer = _AnnotationEditorLayer;
              exports2.AnnotationEditorLayer = AnnotationEditorLayer;
            },
            /* 28 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              var _boundEditorDivBlur, _boundEditorDivFocus, _boundEditorDivInput, _boundEditorDivKeydown, _color, _content, _editorDivId, _hasAlreadyBeenCommitted, _fontSize, _FreeTextEditor_instances, updateFontSize_fn, updateColor_fn, extractText_fn, setEditorDimensions_fn;
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.FreeTextEditor = void 0;
              var _util2 = __w_pdfjs_require__2(1);
              var _tools = __w_pdfjs_require__2(5);
              var _editor = __w_pdfjs_require__2(4);
              const _FreeTextEditor = class _FreeTextEditor extends _editor.AnnotationEditor {
                constructor(params) {
                  super({
                    ...params,
                    name: "freeTextEditor"
                  });
                  __privateAdd(this, _FreeTextEditor_instances);
                  __privateAdd(this, _boundEditorDivBlur, this.editorDivBlur.bind(this));
                  __privateAdd(this, _boundEditorDivFocus, this.editorDivFocus.bind(this));
                  __privateAdd(this, _boundEditorDivInput, this.editorDivInput.bind(this));
                  __privateAdd(this, _boundEditorDivKeydown, this.editorDivKeydown.bind(this));
                  __privateAdd(this, _color);
                  __privateAdd(this, _content, "");
                  __privateAdd(this, _editorDivId, `${this.id}-editor`);
                  __privateAdd(this, _hasAlreadyBeenCommitted, false);
                  __privateAdd(this, _fontSize);
                  __privateSet(this, _color, params.color || _FreeTextEditor._defaultColor || _editor.AnnotationEditor._defaultLineColor);
                  __privateSet(this, _fontSize, params.fontSize || _FreeTextEditor._defaultFontSize);
                }
                static initialize(l10n) {
                  this._l10nPromise = new Map(["free_text2_default_content", "editor_free_text2_aria_label"].map((str) => [str, l10n.get(str)]));
                  const style = getComputedStyle(document.documentElement);
                  this._internalPadding = parseFloat(style.getPropertyValue("--freetext-padding"));
                }
                static updateDefaultParams(type, value) {
                  switch (type) {
                    case _util2.AnnotationEditorParamsType.FREETEXT_SIZE:
                      _FreeTextEditor._defaultFontSize = value;
                      break;
                    case _util2.AnnotationEditorParamsType.FREETEXT_COLOR:
                      _FreeTextEditor._defaultColor = value;
                      break;
                  }
                }
                updateParams(type, value) {
                  switch (type) {
                    case _util2.AnnotationEditorParamsType.FREETEXT_SIZE:
                      __privateMethod(this, _FreeTextEditor_instances, updateFontSize_fn).call(this, value);
                      break;
                    case _util2.AnnotationEditorParamsType.FREETEXT_COLOR:
                      __privateMethod(this, _FreeTextEditor_instances, updateColor_fn).call(this, value);
                      break;
                  }
                }
                static get defaultPropertiesToUpdate() {
                  return [[_util2.AnnotationEditorParamsType.FREETEXT_SIZE, _FreeTextEditor._defaultFontSize], [_util2.AnnotationEditorParamsType.FREETEXT_COLOR, _FreeTextEditor._defaultColor || _editor.AnnotationEditor._defaultLineColor]];
                }
                get propertiesToUpdate() {
                  return [[_util2.AnnotationEditorParamsType.FREETEXT_SIZE, __privateGet(this, _fontSize)], [_util2.AnnotationEditorParamsType.FREETEXT_COLOR, __privateGet(this, _color)]];
                }
                getInitialTranslation() {
                  const scale = this.parentScale;
                  return [-_FreeTextEditor._internalPadding * scale, -(_FreeTextEditor._internalPadding + __privateGet(this, _fontSize)) * scale];
                }
                rebuild() {
                  super.rebuild();
                  if (this.div === null) {
                    return;
                  }
                  if (!this.isAttachedToDOM) {
                    this.parent.add(this);
                  }
                }
                enableEditMode() {
                  if (this.isInEditMode()) {
                    return;
                  }
                  this.parent.setEditingState(false);
                  this.parent.updateToolbar(_util2.AnnotationEditorType.FREETEXT);
                  super.enableEditMode();
                  this.overlayDiv.classList.remove("enabled");
                  this.editorDiv.contentEditable = true;
                  this.div.draggable = false;
                  this.div.removeAttribute("aria-activedescendant");
                  this.editorDiv.addEventListener("keydown", __privateGet(this, _boundEditorDivKeydown));
                  this.editorDiv.addEventListener("focus", __privateGet(this, _boundEditorDivFocus));
                  this.editorDiv.addEventListener("blur", __privateGet(this, _boundEditorDivBlur));
                  this.editorDiv.addEventListener("input", __privateGet(this, _boundEditorDivInput));
                }
                disableEditMode() {
                  if (!this.isInEditMode()) {
                    return;
                  }
                  this.parent.setEditingState(true);
                  super.disableEditMode();
                  this.overlayDiv.classList.add("enabled");
                  this.editorDiv.contentEditable = false;
                  this.div.setAttribute("aria-activedescendant", __privateGet(this, _editorDivId));
                  this.div.draggable = true;
                  this.editorDiv.removeEventListener("keydown", __privateGet(this, _boundEditorDivKeydown));
                  this.editorDiv.removeEventListener("focus", __privateGet(this, _boundEditorDivFocus));
                  this.editorDiv.removeEventListener("blur", __privateGet(this, _boundEditorDivBlur));
                  this.editorDiv.removeEventListener("input", __privateGet(this, _boundEditorDivInput));
                  this.div.focus({
                    preventScroll: true
                  });
                  this.isEditing = false;
                  this.parent.div.classList.add("freeTextEditing");
                }
                focusin(event) {
                  super.focusin(event);
                  if (event.target !== this.editorDiv) {
                    this.editorDiv.focus();
                  }
                }
                onceAdded() {
                  if (this.width) {
                    return;
                  }
                  this.enableEditMode();
                  this.editorDiv.focus();
                }
                isEmpty() {
                  return !this.editorDiv || this.editorDiv.innerText.trim() === "";
                }
                remove() {
                  this.isEditing = false;
                  this.parent.setEditingState(true);
                  this.parent.div.classList.add("freeTextEditing");
                  super.remove();
                }
                commit() {
                  if (!this.isInEditMode()) {
                    return;
                  }
                  super.commit();
                  if (!__privateGet(this, _hasAlreadyBeenCommitted)) {
                    __privateSet(this, _hasAlreadyBeenCommitted, true);
                    this.parent.addUndoableEditor(this);
                  }
                  this.disableEditMode();
                  __privateSet(this, _content, __privateMethod(this, _FreeTextEditor_instances, extractText_fn).call(this).trimEnd());
                  __privateMethod(this, _FreeTextEditor_instances, setEditorDimensions_fn).call(this);
                }
                shouldGetKeyboardEvents() {
                  return this.isInEditMode();
                }
                dblclick(event) {
                  this.enableEditMode();
                  this.editorDiv.focus();
                }
                keydown(event) {
                  if (event.target === this.div && event.key === "Enter") {
                    this.enableEditMode();
                    this.editorDiv.focus();
                  }
                }
                editorDivKeydown(event) {
                  _FreeTextEditor._keyboardManager.exec(this, event);
                }
                editorDivFocus(event) {
                  this.isEditing = true;
                }
                editorDivBlur(event) {
                  this.isEditing = false;
                }
                editorDivInput(event) {
                  this.parent.div.classList.toggle("freeTextEditing", this.isEmpty());
                }
                disableEditing() {
                  this.editorDiv.setAttribute("role", "comment");
                  this.editorDiv.removeAttribute("aria-multiline");
                }
                enableEditing() {
                  this.editorDiv.setAttribute("role", "textbox");
                  this.editorDiv.setAttribute("aria-multiline", true);
                }
                render() {
                  if (this.div) {
                    return this.div;
                  }
                  let baseX, baseY;
                  if (this.width) {
                    baseX = this.x;
                    baseY = this.y;
                  }
                  super.render();
                  this.editorDiv = document.createElement("div");
                  this.editorDiv.className = "internal";
                  this.editorDiv.setAttribute("id", __privateGet(this, _editorDivId));
                  this.enableEditing();
                  _FreeTextEditor._l10nPromise.get("editor_free_text2_aria_label").then((msg) => {
                    var _a;
                    return (_a = this.editorDiv) == null ? void 0 : _a.setAttribute("aria-label", msg);
                  });
                  _FreeTextEditor._l10nPromise.get("free_text2_default_content").then((msg) => {
                    var _a;
                    return (_a = this.editorDiv) == null ? void 0 : _a.setAttribute("default-content", msg);
                  });
                  this.editorDiv.contentEditable = true;
                  const {
                    style
                  } = this.editorDiv;
                  style.fontSize = `calc(${__privateGet(this, _fontSize)}px * var(--scale-factor))`;
                  style.color = __privateGet(this, _color);
                  this.div.append(this.editorDiv);
                  this.overlayDiv = document.createElement("div");
                  this.overlayDiv.classList.add("overlay", "enabled");
                  this.div.append(this.overlayDiv);
                  (0, _tools.bindEvents)(this, this.div, ["dblclick", "keydown"]);
                  if (this.width) {
                    const [parentWidth, parentHeight] = this.parentDimensions;
                    this.setAt(baseX * parentWidth, baseY * parentHeight, this.width * parentWidth, this.height * parentHeight);
                    for (const line of __privateGet(this, _content).split("\n")) {
                      const div = document.createElement("div");
                      div.append(line ? document.createTextNode(line) : document.createElement("br"));
                      this.editorDiv.append(div);
                    }
                    this.div.draggable = true;
                    this.editorDiv.contentEditable = false;
                  } else {
                    this.div.draggable = false;
                    this.editorDiv.contentEditable = true;
                  }
                  return this.div;
                }
                get contentDiv() {
                  return this.editorDiv;
                }
                static deserialize(data, parent, uiManager) {
                  const editor = super.deserialize(data, parent, uiManager);
                  __privateSet(editor, _fontSize, data.fontSize);
                  __privateSet(editor, _color, _util2.Util.makeHexColor(...data.color));
                  __privateSet(editor, _content, data.value);
                  return editor;
                }
                serialize() {
                  if (this.isEmpty()) {
                    return null;
                  }
                  const padding = _FreeTextEditor._internalPadding * this.parentScale;
                  const rect = this.getRect(padding, padding);
                  const color = _editor.AnnotationEditor._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : __privateGet(this, _color));
                  return {
                    annotationType: _util2.AnnotationEditorType.FREETEXT,
                    color,
                    fontSize: __privateGet(this, _fontSize),
                    value: __privateGet(this, _content),
                    pageIndex: this.pageIndex,
                    rect,
                    rotation: this.rotation
                  };
                }
              };
              _boundEditorDivBlur = new WeakMap();
              _boundEditorDivFocus = new WeakMap();
              _boundEditorDivInput = new WeakMap();
              _boundEditorDivKeydown = new WeakMap();
              _color = new WeakMap();
              _content = new WeakMap();
              _editorDivId = new WeakMap();
              _hasAlreadyBeenCommitted = new WeakMap();
              _fontSize = new WeakMap();
              _FreeTextEditor_instances = new WeakSet();
              updateFontSize_fn = function(fontSize) {
                const setFontsize = (size) => {
                  this.editorDiv.style.fontSize = `calc(${size}px * var(--scale-factor))`;
                  this.translate(0, -(size - __privateGet(this, _fontSize)) * this.parentScale);
                  __privateSet(this, _fontSize, size);
                  __privateMethod(this, _FreeTextEditor_instances, setEditorDimensions_fn).call(this);
                };
                const savedFontsize = __privateGet(this, _fontSize);
                this.addCommands({
                  cmd: () => {
                    setFontsize(fontSize);
                  },
                  undo: () => {
                    setFontsize(savedFontsize);
                  },
                  mustExec: true,
                  type: _util2.AnnotationEditorParamsType.FREETEXT_SIZE,
                  overwriteIfSameType: true,
                  keepUndo: true
                });
              };
              updateColor_fn = function(color) {
                const savedColor = __privateGet(this, _color);
                this.addCommands({
                  cmd: () => {
                    __privateSet(this, _color, this.editorDiv.style.color = color);
                  },
                  undo: () => {
                    __privateSet(this, _color, this.editorDiv.style.color = savedColor);
                  },
                  mustExec: true,
                  type: _util2.AnnotationEditorParamsType.FREETEXT_COLOR,
                  overwriteIfSameType: true,
                  keepUndo: true
                });
              };
              extractText_fn = function() {
                const divs = this.editorDiv.getElementsByTagName("div");
                if (divs.length === 0) {
                  return this.editorDiv.innerText;
                }
                const buffer = [];
                for (const div of divs) {
                  buffer.push(div.innerText.replace(/\r\n?|\n/, ""));
                }
                return buffer.join("\n");
              };
              setEditorDimensions_fn = function() {
                const [parentWidth, parentHeight] = this.parentDimensions;
                let rect;
                if (this.isAttachedToDOM) {
                  rect = this.div.getBoundingClientRect();
                } else {
                  const {
                    currentLayer,
                    div
                  } = this;
                  const savedDisplay = div.style.display;
                  div.style.display = "hidden";
                  currentLayer.div.append(this.div);
                  rect = div.getBoundingClientRect();
                  div.remove();
                  div.style.display = savedDisplay;
                }
                this.width = rect.width / parentWidth;
                this.height = rect.height / parentHeight;
              };
              __publicField(_FreeTextEditor, "_freeTextDefaultContent", "");
              __publicField(_FreeTextEditor, "_l10nPromise");
              __publicField(_FreeTextEditor, "_internalPadding", 0);
              __publicField(_FreeTextEditor, "_defaultColor", null);
              __publicField(_FreeTextEditor, "_defaultFontSize", 10);
              __publicField(_FreeTextEditor, "_keyboardManager", new _tools.KeyboardManager([[["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], _FreeTextEditor.prototype.commitOrRemove]]));
              __publicField(_FreeTextEditor, "_type", "freetext");
              let FreeTextEditor = _FreeTextEditor;
              exports2.FreeTextEditor = FreeTextEditor;
            },
            /* 29 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              var _aspectRatio, _baseHeight, _baseWidth, _boundCanvasPointermove, _boundCanvasPointerleave, _boundCanvasPointerup, _boundCanvasPointerdown, _disableEditing, _isCanvasInitialized, _lastPoint, _observer, _realWidth, _realHeight, _requestFrameCallback, _InkEditor_instances, updateThickness_fn, updateColor_fn, updateOpacity_fn, getInitialBBox_fn, setStroke_fn, startDrawing_fn, draw_fn, stopDrawing_fn, redraw_fn, endDrawing_fn, createCanvas_fn, createObserver_fn, setCanvasDims_fn, setScaleFactor_fn, updateTransform_fn, _InkEditor_static, buildPath2D_fn, serializePaths_fn, extractPointsOnBezier_fn, isAlmostFlat_fn, getBbox_fn, getPadding_fn, fitToContent_fn, setMinDims_fn;
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.InkEditor = void 0;
              Object.defineProperty(exports2, "fitCurve", {
                enumerable: true,
                get: function() {
                  return _pdfjsFitCurve.fitCurve;
                }
              });
              var _util2 = __w_pdfjs_require__2(1);
              var _editor = __w_pdfjs_require__2(4);
              var _pdfjsFitCurve = __w_pdfjs_require__2(30);
              var _tools = __w_pdfjs_require__2(5);
              const RESIZER_SIZE = 16;
              const TIME_TO_WAIT_BEFORE_FIXING_DIMS = 100;
              const _InkEditor = class _InkEditor extends _editor.AnnotationEditor {
                constructor(params) {
                  super({
                    ...params,
                    name: "inkEditor"
                  });
                  __privateAdd(this, _InkEditor_instances);
                  __privateAdd(this, _aspectRatio, 0);
                  __privateAdd(this, _baseHeight, 0);
                  __privateAdd(this, _baseWidth, 0);
                  __privateAdd(this, _boundCanvasPointermove, this.canvasPointermove.bind(this));
                  __privateAdd(this, _boundCanvasPointerleave, this.canvasPointerleave.bind(this));
                  __privateAdd(this, _boundCanvasPointerup, this.canvasPointerup.bind(this));
                  __privateAdd(this, _boundCanvasPointerdown, this.canvasPointerdown.bind(this));
                  __privateAdd(this, _disableEditing, false);
                  __privateAdd(this, _isCanvasInitialized, false);
                  __privateAdd(this, _lastPoint, null);
                  __privateAdd(this, _observer, null);
                  __privateAdd(this, _realWidth, 0);
                  __privateAdd(this, _realHeight, 0);
                  __privateAdd(this, _requestFrameCallback, null);
                  this.color = params.color || null;
                  this.thickness = params.thickness || null;
                  this.opacity = params.opacity || null;
                  this.paths = [];
                  this.bezierPath2D = [];
                  this.currentPath = [];
                  this.scaleFactor = 1;
                  this.translationX = this.translationY = 0;
                  this.x = 0;
                  this.y = 0;
                }
                static initialize(l10n) {
                  this._l10nPromise = new Map(["editor_ink_canvas_aria_label", "editor_ink2_aria_label"].map((str) => [str, l10n.get(str)]));
                }
                static updateDefaultParams(type, value) {
                  switch (type) {
                    case _util2.AnnotationEditorParamsType.INK_THICKNESS:
                      _InkEditor._defaultThickness = value;
                      break;
                    case _util2.AnnotationEditorParamsType.INK_COLOR:
                      _InkEditor._defaultColor = value;
                      break;
                    case _util2.AnnotationEditorParamsType.INK_OPACITY:
                      _InkEditor._defaultOpacity = value / 100;
                      break;
                  }
                }
                updateParams(type, value) {
                  switch (type) {
                    case _util2.AnnotationEditorParamsType.INK_THICKNESS:
                      __privateMethod(this, _InkEditor_instances, updateThickness_fn).call(this, value);
                      break;
                    case _util2.AnnotationEditorParamsType.INK_COLOR:
                      __privateMethod(this, _InkEditor_instances, updateColor_fn).call(this, value);
                      break;
                    case _util2.AnnotationEditorParamsType.INK_OPACITY:
                      __privateMethod(this, _InkEditor_instances, updateOpacity_fn).call(this, value);
                      break;
                  }
                }
                static get defaultPropertiesToUpdate() {
                  return [[_util2.AnnotationEditorParamsType.INK_THICKNESS, _InkEditor._defaultThickness], [_util2.AnnotationEditorParamsType.INK_COLOR, _InkEditor._defaultColor || _editor.AnnotationEditor._defaultLineColor], [_util2.AnnotationEditorParamsType.INK_OPACITY, Math.round(_InkEditor._defaultOpacity * 100)]];
                }
                get propertiesToUpdate() {
                  return [[_util2.AnnotationEditorParamsType.INK_THICKNESS, this.thickness || _InkEditor._defaultThickness], [_util2.AnnotationEditorParamsType.INK_COLOR, this.color || _InkEditor._defaultColor || _editor.AnnotationEditor._defaultLineColor], [_util2.AnnotationEditorParamsType.INK_OPACITY, Math.round(100 * (this.opacity ?? _InkEditor._defaultOpacity))]];
                }
                rebuild() {
                  super.rebuild();
                  if (this.div === null) {
                    return;
                  }
                  if (!this.canvas) {
                    __privateMethod(this, _InkEditor_instances, createCanvas_fn).call(this);
                    __privateMethod(this, _InkEditor_instances, createObserver_fn).call(this);
                  }
                  if (!this.isAttachedToDOM) {
                    this.parent.add(this);
                    __privateMethod(this, _InkEditor_instances, setCanvasDims_fn).call(this);
                  }
                  __privateMethod(this, _InkEditor_instances, fitToContent_fn).call(this);
                }
                remove() {
                  if (this.canvas === null) {
                    return;
                  }
                  if (!this.isEmpty()) {
                    this.commit();
                  }
                  this.canvas.width = this.canvas.height = 0;
                  this.canvas.remove();
                  this.canvas = null;
                  __privateGet(this, _observer).disconnect();
                  __privateSet(this, _observer, null);
                  super.remove();
                }
                setParent(parent) {
                  if (!this.parent && parent) {
                    this._uiManager.removeShouldRescale(this);
                  } else if (this.parent && parent === null) {
                    this._uiManager.addShouldRescale(this);
                  }
                  super.setParent(parent);
                }
                onScaleChanging() {
                  const [parentWidth, parentHeight] = this.parentDimensions;
                  const width = this.width * parentWidth;
                  const height = this.height * parentHeight;
                  this.setDimensions(width, height);
                }
                enableEditMode() {
                  if (__privateGet(this, _disableEditing) || this.canvas === null) {
                    return;
                  }
                  super.enableEditMode();
                  this.div.draggable = false;
                  this.canvas.addEventListener("pointerdown", __privateGet(this, _boundCanvasPointerdown));
                  this.canvas.addEventListener("pointerup", __privateGet(this, _boundCanvasPointerup));
                }
                disableEditMode() {
                  if (!this.isInEditMode() || this.canvas === null) {
                    return;
                  }
                  super.disableEditMode();
                  this.div.draggable = !this.isEmpty();
                  this.div.classList.remove("editing");
                  this.canvas.removeEventListener("pointerdown", __privateGet(this, _boundCanvasPointerdown));
                  this.canvas.removeEventListener("pointerup", __privateGet(this, _boundCanvasPointerup));
                }
                onceAdded() {
                  this.div.draggable = !this.isEmpty();
                }
                isEmpty() {
                  return this.paths.length === 0 || this.paths.length === 1 && this.paths[0].length === 0;
                }
                commit() {
                  if (__privateGet(this, _disableEditing)) {
                    return;
                  }
                  super.commit();
                  this.isEditing = false;
                  this.disableEditMode();
                  this.setInForeground();
                  __privateSet(this, _disableEditing, true);
                  this.div.classList.add("disabled");
                  __privateMethod(this, _InkEditor_instances, fitToContent_fn).call(this, true);
                  this.parent.addInkEditorIfNeeded(true);
                  this.parent.moveEditorInDOM(this);
                  this.div.focus({
                    preventScroll: true
                  });
                }
                focusin(event) {
                  super.focusin(event);
                  this.enableEditMode();
                }
                canvasPointerdown(event) {
                  if (event.button !== 0 || !this.isInEditMode() || __privateGet(this, _disableEditing)) {
                    return;
                  }
                  this.setInForeground();
                  if (event.type !== "mouse") {
                    this.div.focus();
                  }
                  event.stopPropagation();
                  this.canvas.addEventListener("pointerleave", __privateGet(this, _boundCanvasPointerleave));
                  this.canvas.addEventListener("pointermove", __privateGet(this, _boundCanvasPointermove));
                  __privateMethod(this, _InkEditor_instances, startDrawing_fn).call(this, event.offsetX, event.offsetY);
                }
                canvasPointermove(event) {
                  event.stopPropagation();
                  __privateMethod(this, _InkEditor_instances, draw_fn).call(this, event.offsetX, event.offsetY);
                }
                canvasPointerup(event) {
                  if (event.button !== 0) {
                    return;
                  }
                  if (this.isInEditMode() && this.currentPath.length !== 0) {
                    event.stopPropagation();
                    __privateMethod(this, _InkEditor_instances, endDrawing_fn).call(this, event);
                    this.setInBackground();
                  }
                }
                canvasPointerleave(event) {
                  __privateMethod(this, _InkEditor_instances, endDrawing_fn).call(this, event);
                  this.setInBackground();
                }
                render() {
                  if (this.div) {
                    return this.div;
                  }
                  let baseX, baseY;
                  if (this.width) {
                    baseX = this.x;
                    baseY = this.y;
                  }
                  super.render();
                  _InkEditor._l10nPromise.get("editor_ink2_aria_label").then((msg) => {
                    var _a;
                    return (_a = this.div) == null ? void 0 : _a.setAttribute("aria-label", msg);
                  });
                  const [x, y, w, h] = __privateMethod(this, _InkEditor_instances, getInitialBBox_fn).call(this);
                  this.setAt(x, y, 0, 0);
                  this.setDims(w, h);
                  __privateMethod(this, _InkEditor_instances, createCanvas_fn).call(this);
                  if (this.width) {
                    const [parentWidth, parentHeight] = this.parentDimensions;
                    this.setAt(baseX * parentWidth, baseY * parentHeight, this.width * parentWidth, this.height * parentHeight);
                    __privateSet(this, _isCanvasInitialized, true);
                    __privateMethod(this, _InkEditor_instances, setCanvasDims_fn).call(this);
                    this.setDims(this.width * parentWidth, this.height * parentHeight);
                    __privateMethod(this, _InkEditor_instances, redraw_fn).call(this);
                    __privateMethod(this, _InkEditor_instances, setMinDims_fn).call(this);
                    this.div.classList.add("disabled");
                  } else {
                    this.div.classList.add("editing");
                    this.enableEditMode();
                  }
                  __privateMethod(this, _InkEditor_instances, createObserver_fn).call(this);
                  return this.div;
                }
                setDimensions(width, height) {
                  const roundedWidth = Math.round(width);
                  const roundedHeight = Math.round(height);
                  if (__privateGet(this, _realWidth) === roundedWidth && __privateGet(this, _realHeight) === roundedHeight) {
                    return;
                  }
                  __privateSet(this, _realWidth, roundedWidth);
                  __privateSet(this, _realHeight, roundedHeight);
                  this.canvas.style.visibility = "hidden";
                  if (__privateGet(this, _aspectRatio) && Math.abs(__privateGet(this, _aspectRatio) - width / height) > 0.01) {
                    height = Math.ceil(width / __privateGet(this, _aspectRatio));
                    this.setDims(width, height);
                  }
                  const [parentWidth, parentHeight] = this.parentDimensions;
                  this.width = width / parentWidth;
                  this.height = height / parentHeight;
                  if (__privateGet(this, _disableEditing)) {
                    __privateMethod(this, _InkEditor_instances, setScaleFactor_fn).call(this, width, height);
                  }
                  __privateMethod(this, _InkEditor_instances, setCanvasDims_fn).call(this);
                  __privateMethod(this, _InkEditor_instances, redraw_fn).call(this);
                  this.canvas.style.visibility = "visible";
                }
                static deserialize(data, parent, uiManager) {
                  var _a, _b;
                  const editor = super.deserialize(data, parent, uiManager);
                  editor.thickness = data.thickness;
                  editor.color = _util2.Util.makeHexColor(...data.color);
                  editor.opacity = data.opacity;
                  const [pageWidth, pageHeight] = editor.pageDimensions;
                  const width = editor.width * pageWidth;
                  const height = editor.height * pageHeight;
                  const scaleFactor = editor.parentScale;
                  const padding = data.thickness / 2;
                  __privateSet(editor, _aspectRatio, width / height);
                  __privateSet(editor, _disableEditing, true);
                  __privateSet(editor, _realWidth, Math.round(width));
                  __privateSet(editor, _realHeight, Math.round(height));
                  for (const {
                    bezier
                  } of data.paths) {
                    const path = [];
                    editor.paths.push(path);
                    let p0 = scaleFactor * (bezier[0] - padding);
                    let p1 = scaleFactor * (height - bezier[1] - padding);
                    for (let i = 2, ii = bezier.length; i < ii; i += 6) {
                      const p10 = scaleFactor * (bezier[i] - padding);
                      const p11 = scaleFactor * (height - bezier[i + 1] - padding);
                      const p20 = scaleFactor * (bezier[i + 2] - padding);
                      const p21 = scaleFactor * (height - bezier[i + 3] - padding);
                      const p30 = scaleFactor * (bezier[i + 4] - padding);
                      const p31 = scaleFactor * (height - bezier[i + 5] - padding);
                      path.push([[p0, p1], [p10, p11], [p20, p21], [p30, p31]]);
                      p0 = p30;
                      p1 = p31;
                    }
                    const path2D = __privateMethod(this, _InkEditor_static, buildPath2D_fn).call(this, path);
                    editor.bezierPath2D.push(path2D);
                  }
                  const bbox = __privateMethod(_a = editor, _InkEditor_instances, getBbox_fn).call(_a);
                  __privateSet(editor, _baseWidth, Math.max(RESIZER_SIZE, bbox[2] - bbox[0]));
                  __privateSet(editor, _baseHeight, Math.max(RESIZER_SIZE, bbox[3] - bbox[1]));
                  __privateMethod(_b = editor, _InkEditor_instances, setScaleFactor_fn).call(_b, width, height);
                  return editor;
                }
                serialize() {
                  if (this.isEmpty()) {
                    return null;
                  }
                  const rect = this.getRect(0, 0);
                  const height = this.rotation % 180 === 0 ? rect[3] - rect[1] : rect[2] - rect[0];
                  const color = _editor.AnnotationEditor._colorManager.convert(this.ctx.strokeStyle);
                  return {
                    annotationType: _util2.AnnotationEditorType.INK,
                    color,
                    thickness: this.thickness,
                    opacity: this.opacity,
                    paths: __privateMethod(this, _InkEditor_instances, serializePaths_fn).call(this, this.scaleFactor / this.parentScale, this.translationX, this.translationY, height),
                    pageIndex: this.pageIndex,
                    rect,
                    rotation: this.rotation
                  };
                }
              };
              _aspectRatio = new WeakMap();
              _baseHeight = new WeakMap();
              _baseWidth = new WeakMap();
              _boundCanvasPointermove = new WeakMap();
              _boundCanvasPointerleave = new WeakMap();
              _boundCanvasPointerup = new WeakMap();
              _boundCanvasPointerdown = new WeakMap();
              _disableEditing = new WeakMap();
              _isCanvasInitialized = new WeakMap();
              _lastPoint = new WeakMap();
              _observer = new WeakMap();
              _realWidth = new WeakMap();
              _realHeight = new WeakMap();
              _requestFrameCallback = new WeakMap();
              _InkEditor_instances = new WeakSet();
              updateThickness_fn = function(thickness) {
                const savedThickness = this.thickness;
                this.addCommands({
                  cmd: () => {
                    this.thickness = thickness;
                    __privateMethod(this, _InkEditor_instances, fitToContent_fn).call(this);
                  },
                  undo: () => {
                    this.thickness = savedThickness;
                    __privateMethod(this, _InkEditor_instances, fitToContent_fn).call(this);
                  },
                  mustExec: true,
                  type: _util2.AnnotationEditorParamsType.INK_THICKNESS,
                  overwriteIfSameType: true,
                  keepUndo: true
                });
              };
              updateColor_fn = function(color) {
                const savedColor = this.color;
                this.addCommands({
                  cmd: () => {
                    this.color = color;
                    __privateMethod(this, _InkEditor_instances, redraw_fn).call(this);
                  },
                  undo: () => {
                    this.color = savedColor;
                    __privateMethod(this, _InkEditor_instances, redraw_fn).call(this);
                  },
                  mustExec: true,
                  type: _util2.AnnotationEditorParamsType.INK_COLOR,
                  overwriteIfSameType: true,
                  keepUndo: true
                });
              };
              updateOpacity_fn = function(opacity) {
                opacity /= 100;
                const savedOpacity = this.opacity;
                this.addCommands({
                  cmd: () => {
                    this.opacity = opacity;
                    __privateMethod(this, _InkEditor_instances, redraw_fn).call(this);
                  },
                  undo: () => {
                    this.opacity = savedOpacity;
                    __privateMethod(this, _InkEditor_instances, redraw_fn).call(this);
                  },
                  mustExec: true,
                  type: _util2.AnnotationEditorParamsType.INK_OPACITY,
                  overwriteIfSameType: true,
                  keepUndo: true
                });
              };
              getInitialBBox_fn = function() {
                const {
                  parentRotation,
                  parentDimensions: [width, height]
                } = this;
                switch (parentRotation) {
                  case 90:
                    return [0, height, height, width];
                  case 180:
                    return [width, height, width, height];
                  case 270:
                    return [width, 0, height, width];
                  default:
                    return [0, 0, width, height];
                }
              };
              setStroke_fn = function() {
                const {
                  ctx,
                  color,
                  opacity,
                  thickness,
                  parentScale,
                  scaleFactor
                } = this;
                ctx.lineWidth = thickness * parentScale / scaleFactor;
                ctx.lineCap = "round";
                ctx.lineJoin = "round";
                ctx.miterLimit = 10;
                ctx.strokeStyle = `${color}${(0, _tools.opacityToHex)(opacity)}`;
              };
              startDrawing_fn = function(x, y) {
                this.isEditing = true;
                if (!__privateGet(this, _isCanvasInitialized)) {
                  __privateSet(this, _isCanvasInitialized, true);
                  __privateMethod(this, _InkEditor_instances, setCanvasDims_fn).call(this);
                  this.thickness || (this.thickness = _InkEditor._defaultThickness);
                  this.color || (this.color = _InkEditor._defaultColor || _editor.AnnotationEditor._defaultLineColor);
                  this.opacity ?? (this.opacity = _InkEditor._defaultOpacity);
                }
                this.currentPath.push([x, y]);
                __privateSet(this, _lastPoint, null);
                __privateMethod(this, _InkEditor_instances, setStroke_fn).call(this);
                this.ctx.beginPath();
                this.ctx.moveTo(x, y);
                __privateSet(this, _requestFrameCallback, () => {
                  if (!__privateGet(this, _requestFrameCallback)) {
                    return;
                  }
                  if (__privateGet(this, _lastPoint)) {
                    if (this.isEmpty()) {
                      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
                      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                    } else {
                      __privateMethod(this, _InkEditor_instances, redraw_fn).call(this);
                    }
                    this.ctx.lineTo(...__privateGet(this, _lastPoint));
                    __privateSet(this, _lastPoint, null);
                    this.ctx.stroke();
                  }
                  window.requestAnimationFrame(__privateGet(this, _requestFrameCallback));
                });
                window.requestAnimationFrame(__privateGet(this, _requestFrameCallback));
              };
              draw_fn = function(x, y) {
                const [lastX, lastY] = this.currentPath.at(-1);
                if (x === lastX && y === lastY) {
                  return;
                }
                this.currentPath.push([x, y]);
                __privateSet(this, _lastPoint, [x, y]);
              };
              stopDrawing_fn = function(x, y) {
                var _a;
                this.ctx.closePath();
                __privateSet(this, _requestFrameCallback, null);
                x = Math.min(Math.max(x, 0), this.canvas.width);
                y = Math.min(Math.max(y, 0), this.canvas.height);
                const [lastX, lastY] = this.currentPath.at(-1);
                if (x !== lastX || y !== lastY) {
                  this.currentPath.push([x, y]);
                }
                let bezier;
                if (this.currentPath.length !== 1) {
                  bezier = (0, _pdfjsFitCurve.fitCurve)(this.currentPath, 30, null);
                } else {
                  const xy = [x, y];
                  bezier = [[xy, xy.slice(), xy.slice(), xy]];
                }
                const path2D = __privateMethod(_a = _InkEditor, _InkEditor_static, buildPath2D_fn).call(_a, bezier);
                this.currentPath.length = 0;
                const cmd = () => {
                  this.paths.push(bezier);
                  this.bezierPath2D.push(path2D);
                  this.rebuild();
                };
                const undo = () => {
                  this.paths.pop();
                  this.bezierPath2D.pop();
                  if (this.paths.length === 0) {
                    this.remove();
                  } else {
                    if (!this.canvas) {
                      __privateMethod(this, _InkEditor_instances, createCanvas_fn).call(this);
                      __privateMethod(this, _InkEditor_instances, createObserver_fn).call(this);
                    }
                    __privateMethod(this, _InkEditor_instances, fitToContent_fn).call(this);
                  }
                };
                this.addCommands({
                  cmd,
                  undo,
                  mustExec: true
                });
              };
              redraw_fn = function() {
                if (this.isEmpty()) {
                  __privateMethod(this, _InkEditor_instances, updateTransform_fn).call(this);
                  return;
                }
                __privateMethod(this, _InkEditor_instances, setStroke_fn).call(this);
                const {
                  canvas,
                  ctx
                } = this;
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                __privateMethod(this, _InkEditor_instances, updateTransform_fn).call(this);
                for (const path of this.bezierPath2D) {
                  ctx.stroke(path);
                }
              };
              endDrawing_fn = function(event) {
                __privateMethod(this, _InkEditor_instances, stopDrawing_fn).call(this, event.offsetX, event.offsetY);
                this.canvas.removeEventListener("pointerleave", __privateGet(this, _boundCanvasPointerleave));
                this.canvas.removeEventListener("pointermove", __privateGet(this, _boundCanvasPointermove));
                this.addToAnnotationStorage();
              };
              createCanvas_fn = function() {
                this.canvas = document.createElement("canvas");
                this.canvas.width = this.canvas.height = 0;
                this.canvas.className = "inkEditorCanvas";
                _InkEditor._l10nPromise.get("editor_ink_canvas_aria_label").then((msg) => {
                  var _a;
                  return (_a = this.canvas) == null ? void 0 : _a.setAttribute("aria-label", msg);
                });
                this.div.append(this.canvas);
                this.ctx = this.canvas.getContext("2d");
              };
              createObserver_fn = function() {
                let timeoutId = null;
                __privateSet(this, _observer, new ResizeObserver((entries) => {
                  const rect = entries[0].contentRect;
                  if (rect.width && rect.height) {
                    if (timeoutId !== null) {
                      clearTimeout(timeoutId);
                    }
                    timeoutId = setTimeout(() => {
                      this.fixDims();
                      timeoutId = null;
                    }, TIME_TO_WAIT_BEFORE_FIXING_DIMS);
                    this.setDimensions(rect.width, rect.height);
                  }
                }));
                __privateGet(this, _observer).observe(this.div);
              };
              setCanvasDims_fn = function() {
                if (!__privateGet(this, _isCanvasInitialized)) {
                  return;
                }
                const [parentWidth, parentHeight] = this.parentDimensions;
                this.canvas.width = Math.ceil(this.width * parentWidth);
                this.canvas.height = Math.ceil(this.height * parentHeight);
                __privateMethod(this, _InkEditor_instances, updateTransform_fn).call(this);
              };
              setScaleFactor_fn = function(width, height) {
                const padding = __privateMethod(this, _InkEditor_instances, getPadding_fn).call(this);
                const scaleFactorW = (width - padding) / __privateGet(this, _baseWidth);
                const scaleFactorH = (height - padding) / __privateGet(this, _baseHeight);
                this.scaleFactor = Math.min(scaleFactorW, scaleFactorH);
              };
              updateTransform_fn = function() {
                const padding = __privateMethod(this, _InkEditor_instances, getPadding_fn).call(this) / 2;
                this.ctx.setTransform(this.scaleFactor, 0, 0, this.scaleFactor, this.translationX * this.scaleFactor + padding, this.translationY * this.scaleFactor + padding);
              };
              _InkEditor_static = new WeakSet();
              buildPath2D_fn = function(bezier) {
                const path2D = new Path2D();
                for (let i = 0, ii = bezier.length; i < ii; i++) {
                  const [first, control1, control2, second] = bezier[i];
                  if (i === 0) {
                    path2D.moveTo(...first);
                  }
                  path2D.bezierCurveTo(control1[0], control1[1], control2[0], control2[1], second[0], second[1]);
                }
                return path2D;
              };
              serializePaths_fn = function(s, tx, ty, h) {
                const NUMBER_OF_POINTS_ON_BEZIER_CURVE = 4;
                const paths = [];
                const padding = this.thickness / 2;
                let buffer, points;
                for (const bezier of this.paths) {
                  buffer = [];
                  points = [];
                  for (let i = 0, ii = bezier.length; i < ii; i++) {
                    const [first, control1, control2, second] = bezier[i];
                    const p10 = s * (first[0] + tx) + padding;
                    const p11 = h - s * (first[1] + ty) - padding;
                    const p20 = s * (control1[0] + tx) + padding;
                    const p21 = h - s * (control1[1] + ty) - padding;
                    const p30 = s * (control2[0] + tx) + padding;
                    const p31 = h - s * (control2[1] + ty) - padding;
                    const p40 = s * (second[0] + tx) + padding;
                    const p41 = h - s * (second[1] + ty) - padding;
                    if (i === 0) {
                      buffer.push(p10, p11);
                      points.push(p10, p11);
                    }
                    buffer.push(p20, p21, p30, p31, p40, p41);
                    __privateMethod(this, _InkEditor_instances, extractPointsOnBezier_fn).call(this, p10, p11, p20, p21, p30, p31, p40, p41, NUMBER_OF_POINTS_ON_BEZIER_CURVE, points);
                  }
                  paths.push({
                    bezier: buffer,
                    points
                  });
                }
                return paths;
              };
              extractPointsOnBezier_fn = function(p10, p11, p20, p21, p30, p31, p40, p41, n, points) {
                if (__privateMethod(this, _InkEditor_instances, isAlmostFlat_fn).call(this, p10, p11, p20, p21, p30, p31, p40, p41)) {
                  points.push(p40, p41);
                  return;
                }
                for (let i = 1; i < n - 1; i++) {
                  const t = i / n;
                  const mt = 1 - t;
                  let q10 = t * p10 + mt * p20;
                  let q11 = t * p11 + mt * p21;
                  let q20 = t * p20 + mt * p30;
                  let q21 = t * p21 + mt * p31;
                  const q30 = t * p30 + mt * p40;
                  const q31 = t * p31 + mt * p41;
                  q10 = t * q10 + mt * q20;
                  q11 = t * q11 + mt * q21;
                  q20 = t * q20 + mt * q30;
                  q21 = t * q21 + mt * q31;
                  q10 = t * q10 + mt * q20;
                  q11 = t * q11 + mt * q21;
                  points.push(q10, q11);
                }
                points.push(p40, p41);
              };
              isAlmostFlat_fn = function(p10, p11, p20, p21, p30, p31, p40, p41) {
                const tol = 10;
                const ax = (3 * p20 - 2 * p10 - p40) ** 2;
                const ay = (3 * p21 - 2 * p11 - p41) ** 2;
                const bx = (3 * p30 - p10 - 2 * p40) ** 2;
                const by = (3 * p31 - p11 - 2 * p41) ** 2;
                return Math.max(ax, bx) + Math.max(ay, by) <= tol;
              };
              getBbox_fn = function() {
                let xMin = Infinity;
                let xMax = -Infinity;
                let yMin = Infinity;
                let yMax = -Infinity;
                for (const path of this.paths) {
                  for (const [first, control1, control2, second] of path) {
                    const bbox = _util2.Util.bezierBoundingBox(...first, ...control1, ...control2, ...second);
                    xMin = Math.min(xMin, bbox[0]);
                    yMin = Math.min(yMin, bbox[1]);
                    xMax = Math.max(xMax, bbox[2]);
                    yMax = Math.max(yMax, bbox[3]);
                  }
                }
                return [xMin, yMin, xMax, yMax];
              };
              getPadding_fn = function() {
                return __privateGet(this, _disableEditing) ? Math.ceil(this.thickness * this.parentScale) : 0;
              };
              fitToContent_fn = function(firstTime = false) {
                if (this.isEmpty()) {
                  return;
                }
                if (!__privateGet(this, _disableEditing)) {
                  __privateMethod(this, _InkEditor_instances, redraw_fn).call(this);
                  return;
                }
                const bbox = __privateMethod(this, _InkEditor_instances, getBbox_fn).call(this);
                const padding = __privateMethod(this, _InkEditor_instances, getPadding_fn).call(this);
                __privateSet(this, _baseWidth, Math.max(RESIZER_SIZE, bbox[2] - bbox[0]));
                __privateSet(this, _baseHeight, Math.max(RESIZER_SIZE, bbox[3] - bbox[1]));
                const width = Math.ceil(padding + __privateGet(this, _baseWidth) * this.scaleFactor);
                const height = Math.ceil(padding + __privateGet(this, _baseHeight) * this.scaleFactor);
                const [parentWidth, parentHeight] = this.parentDimensions;
                this.width = width / parentWidth;
                this.height = height / parentHeight;
                __privateSet(this, _aspectRatio, width / height);
                __privateMethod(this, _InkEditor_instances, setMinDims_fn).call(this);
                const prevTranslationX = this.translationX;
                const prevTranslationY = this.translationY;
                this.translationX = -bbox[0];
                this.translationY = -bbox[1];
                __privateMethod(this, _InkEditor_instances, setCanvasDims_fn).call(this);
                __privateMethod(this, _InkEditor_instances, redraw_fn).call(this);
                __privateSet(this, _realWidth, width);
                __privateSet(this, _realHeight, height);
                this.setDims(width, height);
                const unscaledPadding = firstTime ? padding / this.scaleFactor / 2 : 0;
                this.translate(prevTranslationX - this.translationX - unscaledPadding, prevTranslationY - this.translationY - unscaledPadding);
              };
              setMinDims_fn = function() {
                const {
                  style
                } = this.div;
                if (__privateGet(this, _aspectRatio) >= 1) {
                  style.minHeight = `${RESIZER_SIZE}px`;
                  style.minWidth = `${Math.round(__privateGet(this, _aspectRatio) * RESIZER_SIZE)}px`;
                } else {
                  style.minWidth = `${RESIZER_SIZE}px`;
                  style.minHeight = `${Math.round(RESIZER_SIZE / __privateGet(this, _aspectRatio))}px`;
                }
              };
              __privateAdd(_InkEditor, _InkEditor_static);
              __publicField(_InkEditor, "_defaultColor", null);
              __publicField(_InkEditor, "_defaultOpacity", 1);
              __publicField(_InkEditor, "_defaultThickness", 1);
              __publicField(_InkEditor, "_l10nPromise");
              __publicField(_InkEditor, "_type", "ink");
              let InkEditor = _InkEditor;
              exports2.InkEditor = InkEditor;
            },
            /* 30 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.fitCurve = void 0;
              const fitCurve = __w_pdfjs_require__2(31);
              exports2.fitCurve = fitCurve;
            },
            /* 31 */
            /***/
            (module2) => {
              function fitCurve(points, maxError, progressCallback) {
                if (!Array.isArray(points)) {
                  throw new TypeError("First argument should be an array");
                }
                points.forEach((point) => {
                  if (!Array.isArray(point) || point.some((item) => typeof item !== "number") || point.length !== points[0].length) {
                    throw Error("Each point should be an array of numbers. Each point should have the same amount of numbers.");
                  }
                });
                points = points.filter((point, i) => i === 0 || !point.every((val, j) => val === points[i - 1][j]));
                if (points.length < 2) {
                  return [];
                }
                const len = points.length;
                const leftTangent = createTangent(points[1], points[0]);
                const rightTangent = createTangent(points[len - 2], points[len - 1]);
                return fitCubic(points, leftTangent, rightTangent, maxError, progressCallback);
              }
              function fitCubic(points, leftTangent, rightTangent, error, progressCallback) {
                const MaxIterations = 20;
                var bezCurve, u, uPrime, maxError, prevErr, splitPoint, prevSplit, centerVector, toCenterTangent, fromCenterTangent, beziers, dist, i;
                if (points.length === 2) {
                  dist = maths.vectorLen(maths.subtract(points[0], points[1])) / 3;
                  bezCurve = [points[0], maths.addArrays(points[0], maths.mulItems(leftTangent, dist)), maths.addArrays(points[1], maths.mulItems(rightTangent, dist)), points[1]];
                  return [bezCurve];
                }
                u = chordLengthParameterize(points);
                [bezCurve, maxError, splitPoint] = generateAndReport(points, u, u, leftTangent, rightTangent, progressCallback);
                if (maxError === 0 || maxError < error) {
                  return [bezCurve];
                }
                if (maxError < error * error) {
                  uPrime = u;
                  prevErr = maxError;
                  prevSplit = splitPoint;
                  for (i = 0; i < MaxIterations; i++) {
                    uPrime = reparameterize(bezCurve, points, uPrime);
                    [bezCurve, maxError, splitPoint] = generateAndReport(points, u, uPrime, leftTangent, rightTangent, progressCallback);
                    if (maxError < error) {
                      return [bezCurve];
                    } else if (splitPoint === prevSplit) {
                      let errChange = maxError / prevErr;
                      if (errChange > 0.9999 && errChange < 1.0001) {
                        break;
                      }
                    }
                    prevErr = maxError;
                    prevSplit = splitPoint;
                  }
                }
                beziers = [];
                centerVector = maths.subtract(points[splitPoint - 1], points[splitPoint + 1]);
                if (centerVector.every((val) => val === 0)) {
                  centerVector = maths.subtract(points[splitPoint - 1], points[splitPoint]);
                  [centerVector[0], centerVector[1]] = [-centerVector[1], centerVector[0]];
                }
                toCenterTangent = maths.normalize(centerVector);
                fromCenterTangent = maths.mulItems(toCenterTangent, -1);
                beziers = beziers.concat(fitCubic(points.slice(0, splitPoint + 1), leftTangent, toCenterTangent, error, progressCallback));
                beziers = beziers.concat(fitCubic(points.slice(splitPoint), fromCenterTangent, rightTangent, error, progressCallback));
                return beziers;
              }
              ;
              function generateAndReport(points, paramsOrig, paramsPrime, leftTangent, rightTangent, progressCallback) {
                var bezCurve, maxError, splitPoint;
                bezCurve = generateBezier(points, paramsPrime, leftTangent, rightTangent, progressCallback);
                [maxError, splitPoint] = computeMaxError(points, bezCurve, paramsOrig);
                if (progressCallback) {
                  progressCallback({
                    bez: bezCurve,
                    points,
                    params: paramsOrig,
                    maxErr: maxError,
                    maxPoint: splitPoint
                  });
                }
                return [bezCurve, maxError, splitPoint];
              }
              function generateBezier(points, parameters, leftTangent, rightTangent) {
                var bezCurve, A, a, C, X, det_C0_C1, det_C0_X, det_X_C1, alpha_l, alpha_r, epsilon, segLength, i, len, tmp, u, ux, firstPoint = points[0], lastPoint = points[points.length - 1];
                bezCurve = [firstPoint, null, null, lastPoint];
                A = maths.zeros_Xx2x2(parameters.length);
                for (i = 0, len = parameters.length; i < len; i++) {
                  u = parameters[i];
                  ux = 1 - u;
                  a = A[i];
                  a[0] = maths.mulItems(leftTangent, 3 * u * (ux * ux));
                  a[1] = maths.mulItems(rightTangent, 3 * ux * (u * u));
                }
                C = [[0, 0], [0, 0]];
                X = [0, 0];
                for (i = 0, len = points.length; i < len; i++) {
                  u = parameters[i];
                  a = A[i];
                  C[0][0] += maths.dot(a[0], a[0]);
                  C[0][1] += maths.dot(a[0], a[1]);
                  C[1][0] += maths.dot(a[0], a[1]);
                  C[1][1] += maths.dot(a[1], a[1]);
                  tmp = maths.subtract(points[i], bezier.q([firstPoint, firstPoint, lastPoint, lastPoint], u));
                  X[0] += maths.dot(a[0], tmp);
                  X[1] += maths.dot(a[1], tmp);
                }
                det_C0_C1 = C[0][0] * C[1][1] - C[1][0] * C[0][1];
                det_C0_X = C[0][0] * X[1] - C[1][0] * X[0];
                det_X_C1 = X[0] * C[1][1] - X[1] * C[0][1];
                alpha_l = det_C0_C1 === 0 ? 0 : det_X_C1 / det_C0_C1;
                alpha_r = det_C0_C1 === 0 ? 0 : det_C0_X / det_C0_C1;
                segLength = maths.vectorLen(maths.subtract(firstPoint, lastPoint));
                epsilon = 1e-6 * segLength;
                if (alpha_l < epsilon || alpha_r < epsilon) {
                  bezCurve[1] = maths.addArrays(firstPoint, maths.mulItems(leftTangent, segLength / 3));
                  bezCurve[2] = maths.addArrays(lastPoint, maths.mulItems(rightTangent, segLength / 3));
                } else {
                  bezCurve[1] = maths.addArrays(firstPoint, maths.mulItems(leftTangent, alpha_l));
                  bezCurve[2] = maths.addArrays(lastPoint, maths.mulItems(rightTangent, alpha_r));
                }
                return bezCurve;
              }
              ;
              function reparameterize(bezier2, points, parameters) {
                return parameters.map((p, i) => newtonRaphsonRootFind(bezier2, points[i], p));
              }
              ;
              function newtonRaphsonRootFind(bez, point, u) {
                var d = maths.subtract(bezier.q(bez, u), point), qprime = bezier.qprime(bez, u), numerator = maths.mulMatrix(d, qprime), denominator = maths.sum(maths.squareItems(qprime)) + 2 * maths.mulMatrix(d, bezier.qprimeprime(bez, u));
                if (denominator === 0) {
                  return u;
                } else {
                  return u - numerator / denominator;
                }
              }
              ;
              function chordLengthParameterize(points) {
                var u = [], currU, prevU, prevP;
                points.forEach((p, i) => {
                  currU = i ? prevU + maths.vectorLen(maths.subtract(p, prevP)) : 0;
                  u.push(currU);
                  prevU = currU;
                  prevP = p;
                });
                u = u.map((x) => x / prevU);
                return u;
              }
              ;
              function computeMaxError(points, bez, parameters) {
                var dist, maxDist, splitPoint, v, i, count, point, t;
                maxDist = 0;
                splitPoint = Math.floor(points.length / 2);
                const t_distMap = mapTtoRelativeDistances(bez, 10);
                for (i = 0, count = points.length; i < count; i++) {
                  point = points[i];
                  t = find_t(bez, parameters[i], t_distMap, 10);
                  v = maths.subtract(bezier.q(bez, t), point);
                  dist = v[0] * v[0] + v[1] * v[1];
                  if (dist > maxDist) {
                    maxDist = dist;
                    splitPoint = i;
                  }
                }
                return [maxDist, splitPoint];
              }
              ;
              var mapTtoRelativeDistances = function(bez, B_parts) {
                var B_t_curr;
                var B_t_dist = [0];
                var B_t_prev = bez[0];
                var sumLen = 0;
                for (var i = 1; i <= B_parts; i++) {
                  B_t_curr = bezier.q(bez, i / B_parts);
                  sumLen += maths.vectorLen(maths.subtract(B_t_curr, B_t_prev));
                  B_t_dist.push(sumLen);
                  B_t_prev = B_t_curr;
                }
                B_t_dist = B_t_dist.map((x) => x / sumLen);
                return B_t_dist;
              };
              function find_t(bez, param, t_distMap, B_parts) {
                if (param < 0) {
                  return 0;
                }
                if (param > 1) {
                  return 1;
                }
                var lenMax, lenMin, tMax, tMin, t;
                for (var i = 1; i <= B_parts; i++) {
                  if (param <= t_distMap[i]) {
                    tMin = (i - 1) / B_parts;
                    tMax = i / B_parts;
                    lenMin = t_distMap[i - 1];
                    lenMax = t_distMap[i];
                    t = (param - lenMin) / (lenMax - lenMin) * (tMax - tMin) + tMin;
                    break;
                  }
                }
                return t;
              }
              function createTangent(pointA, pointB) {
                return maths.normalize(maths.subtract(pointA, pointB));
              }
              class maths {
                static zeros_Xx2x2(x) {
                  var zs = [];
                  while (x--) {
                    zs.push([0, 0]);
                  }
                  return zs;
                }
                static mulItems(items, multiplier) {
                  return items.map((x) => x * multiplier);
                }
                static mulMatrix(m1, m2) {
                  return m1.reduce((sum, x1, i) => sum + x1 * m2[i], 0);
                }
                static subtract(arr1, arr2) {
                  return arr1.map((x1, i) => x1 - arr2[i]);
                }
                static addArrays(arr1, arr2) {
                  return arr1.map((x1, i) => x1 + arr2[i]);
                }
                static addItems(items, addition) {
                  return items.map((x) => x + addition);
                }
                static sum(items) {
                  return items.reduce((sum, x) => sum + x);
                }
                static dot(m1, m2) {
                  return maths.mulMatrix(m1, m2);
                }
                static vectorLen(v) {
                  return Math.hypot(...v);
                }
                static divItems(items, divisor) {
                  return items.map((x) => x / divisor);
                }
                static squareItems(items) {
                  return items.map((x) => x * x);
                }
                static normalize(v) {
                  return this.divItems(v, this.vectorLen(v));
                }
              }
              class bezier {
                static q(ctrlPoly, t) {
                  var tx = 1 - t;
                  var pA = maths.mulItems(ctrlPoly[0], tx * tx * tx), pB = maths.mulItems(ctrlPoly[1], 3 * tx * tx * t), pC = maths.mulItems(ctrlPoly[2], 3 * tx * t * t), pD = maths.mulItems(ctrlPoly[3], t * t * t);
                  return maths.addArrays(maths.addArrays(pA, pB), maths.addArrays(pC, pD));
                }
                static qprime(ctrlPoly, t) {
                  var tx = 1 - t;
                  var pA = maths.mulItems(maths.subtract(ctrlPoly[1], ctrlPoly[0]), 3 * tx * tx), pB = maths.mulItems(maths.subtract(ctrlPoly[2], ctrlPoly[1]), 6 * tx * t), pC = maths.mulItems(maths.subtract(ctrlPoly[3], ctrlPoly[2]), 3 * t * t);
                  return maths.addArrays(maths.addArrays(pA, pB), pC);
                }
                static qprimeprime(ctrlPoly, t) {
                  return maths.addArrays(maths.mulItems(maths.addArrays(maths.subtract(ctrlPoly[2], maths.mulItems(ctrlPoly[1], 2)), ctrlPoly[0]), 6 * (1 - t)), maths.mulItems(maths.addArrays(maths.subtract(ctrlPoly[3], maths.mulItems(ctrlPoly[2], 2)), ctrlPoly[1]), 6 * t));
                }
              }
              module2.exports = fitCurve;
              module2.exports.fitCubic = fitCubic;
              module2.exports.createTangent = createTangent;
            },
            /* 32 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              var _LinkAnnotationElement_instances, setInternalLink_fn, bindSetOCGState_fn, _AnnotationLayer_static, appendElement_fn, setAnnotationCanvasMap_fn;
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.AnnotationLayer = void 0;
              var _util2 = __w_pdfjs_require__2(1);
              var _display_utils2 = __w_pdfjs_require__2(6);
              var _annotation_storage2 = __w_pdfjs_require__2(3);
              var _scripting_utils = __w_pdfjs_require__2(33);
              var _xfa_layer = __w_pdfjs_require__2(34);
              const DEFAULT_TAB_INDEX = 1e3;
              const DEFAULT_FONT_SIZE = 9;
              const GetElementsByNameSet = /* @__PURE__ */ new WeakSet();
              function getRectDims(rect) {
                return {
                  width: rect[2] - rect[0],
                  height: rect[3] - rect[1]
                };
              }
              class AnnotationElementFactory {
                static create(parameters) {
                  const subtype = parameters.data.annotationType;
                  switch (subtype) {
                    case _util2.AnnotationType.LINK:
                      return new LinkAnnotationElement(parameters);
                    case _util2.AnnotationType.TEXT:
                      return new TextAnnotationElement(parameters);
                    case _util2.AnnotationType.WIDGET:
                      const fieldType = parameters.data.fieldType;
                      switch (fieldType) {
                        case "Tx":
                          return new TextWidgetAnnotationElement(parameters);
                        case "Btn":
                          if (parameters.data.radioButton) {
                            return new RadioButtonWidgetAnnotationElement(parameters);
                          } else if (parameters.data.checkBox) {
                            return new CheckboxWidgetAnnotationElement(parameters);
                          }
                          return new PushButtonWidgetAnnotationElement(parameters);
                        case "Ch":
                          return new ChoiceWidgetAnnotationElement(parameters);
                      }
                      return new WidgetAnnotationElement(parameters);
                    case _util2.AnnotationType.POPUP:
                      return new PopupAnnotationElement(parameters);
                    case _util2.AnnotationType.FREETEXT:
                      return new FreeTextAnnotationElement(parameters);
                    case _util2.AnnotationType.LINE:
                      return new LineAnnotationElement(parameters);
                    case _util2.AnnotationType.SQUARE:
                      return new SquareAnnotationElement(parameters);
                    case _util2.AnnotationType.CIRCLE:
                      return new CircleAnnotationElement(parameters);
                    case _util2.AnnotationType.POLYLINE:
                      return new PolylineAnnotationElement(parameters);
                    case _util2.AnnotationType.CARET:
                      return new CaretAnnotationElement(parameters);
                    case _util2.AnnotationType.INK:
                      return new InkAnnotationElement(parameters);
                    case _util2.AnnotationType.POLYGON:
                      return new PolygonAnnotationElement(parameters);
                    case _util2.AnnotationType.HIGHLIGHT:
                      return new HighlightAnnotationElement(parameters);
                    case _util2.AnnotationType.UNDERLINE:
                      return new UnderlineAnnotationElement(parameters);
                    case _util2.AnnotationType.SQUIGGLY:
                      return new SquigglyAnnotationElement(parameters);
                    case _util2.AnnotationType.STRIKEOUT:
                      return new StrikeOutAnnotationElement(parameters);
                    case _util2.AnnotationType.STAMP:
                      return new StampAnnotationElement(parameters);
                    case _util2.AnnotationType.FILEATTACHMENT:
                      return new FileAttachmentAnnotationElement(parameters);
                    default:
                      return new AnnotationElement(parameters);
                  }
                }
              }
              class AnnotationElement {
                constructor(parameters, {
                  isRenderable = false,
                  ignoreBorder = false,
                  createQuadrilaterals = false
                } = {}) {
                  this.isRenderable = isRenderable;
                  this.data = parameters.data;
                  this.layer = parameters.layer;
                  this.page = parameters.page;
                  this.viewport = parameters.viewport;
                  this.linkService = parameters.linkService;
                  this.downloadManager = parameters.downloadManager;
                  this.imageResourcesPath = parameters.imageResourcesPath;
                  this.renderForms = parameters.renderForms;
                  this.svgFactory = parameters.svgFactory;
                  this.annotationStorage = parameters.annotationStorage;
                  this.enableScripting = parameters.enableScripting;
                  this.hasJSActions = parameters.hasJSActions;
                  this._fieldObjects = parameters.fieldObjects;
                  if (isRenderable) {
                    this.container = this._createContainer(ignoreBorder);
                  }
                  if (createQuadrilaterals) {
                    this.quadrilaterals = this._createQuadrilaterals(ignoreBorder);
                  }
                }
                _createContainer(ignoreBorder = false) {
                  const {
                    data,
                    page,
                    viewport
                  } = this;
                  const container = document.createElement("section");
                  container.setAttribute("data-annotation-id", data.id);
                  const {
                    pageWidth,
                    pageHeight,
                    pageX,
                    pageY
                  } = viewport.rawDims;
                  const {
                    width,
                    height
                  } = getRectDims(data.rect);
                  const rect = _util2.Util.normalizeRect([data.rect[0], page.view[3] - data.rect[1] + page.view[1], data.rect[2], page.view[3] - data.rect[3] + page.view[1]]);
                  if (!ignoreBorder && data.borderStyle.width > 0) {
                    container.style.borderWidth = `${data.borderStyle.width}px`;
                    const horizontalRadius = data.borderStyle.horizontalCornerRadius;
                    const verticalRadius = data.borderStyle.verticalCornerRadius;
                    if (horizontalRadius > 0 || verticalRadius > 0) {
                      const radius = `calc(${horizontalRadius}px * var(--scale-factor)) / calc(${verticalRadius}px * var(--scale-factor))`;
                      container.style.borderRadius = radius;
                    } else if (this instanceof RadioButtonWidgetAnnotationElement) {
                      const radius = `calc(${width}px * var(--scale-factor)) / calc(${height}px * var(--scale-factor))`;
                      container.style.borderRadius = radius;
                    }
                    switch (data.borderStyle.style) {
                      case _util2.AnnotationBorderStyleType.SOLID:
                        container.style.borderStyle = "solid";
                        break;
                      case _util2.AnnotationBorderStyleType.DASHED:
                        container.style.borderStyle = "dashed";
                        break;
                      case _util2.AnnotationBorderStyleType.BEVELED:
                        (0, _util2.warn)("Unimplemented border style: beveled");
                        break;
                      case _util2.AnnotationBorderStyleType.INSET:
                        (0, _util2.warn)("Unimplemented border style: inset");
                        break;
                      case _util2.AnnotationBorderStyleType.UNDERLINE:
                        container.style.borderBottomStyle = "solid";
                        break;
                      default:
                        break;
                    }
                    const borderColor = data.borderColor || null;
                    if (borderColor) {
                      container.style.borderColor = _util2.Util.makeHexColor(borderColor[0] | 0, borderColor[1] | 0, borderColor[2] | 0);
                    } else {
                      container.style.borderWidth = 0;
                    }
                  }
                  container.style.left = `${100 * (rect[0] - pageX) / pageWidth}%`;
                  container.style.top = `${100 * (rect[1] - pageY) / pageHeight}%`;
                  const {
                    rotation
                  } = data;
                  if (data.hasOwnCanvas || rotation === 0) {
                    container.style.width = `${100 * width / pageWidth}%`;
                    container.style.height = `${100 * height / pageHeight}%`;
                  } else {
                    this.setRotation(rotation, container);
                  }
                  return container;
                }
                setRotation(angle, container = this.container) {
                  const {
                    pageWidth,
                    pageHeight
                  } = this.viewport.rawDims;
                  const {
                    width,
                    height
                  } = getRectDims(this.data.rect);
                  let elementWidth, elementHeight;
                  if (angle % 180 === 0) {
                    elementWidth = 100 * width / pageWidth;
                    elementHeight = 100 * height / pageHeight;
                  } else {
                    elementWidth = 100 * height / pageWidth;
                    elementHeight = 100 * width / pageHeight;
                  }
                  container.style.width = `${elementWidth}%`;
                  container.style.height = `${elementHeight}%`;
                  container.setAttribute("data-main-rotation", (360 - angle) % 360);
                }
                get _commonActions() {
                  const setColor = (jsName, styleName, event) => {
                    const color = event.detail[jsName];
                    event.target.style[styleName] = _scripting_utils.ColorConverters[`${color[0]}_HTML`](color.slice(1));
                  };
                  return (0, _util2.shadow)(this, "_commonActions", {
                    display: (event) => {
                      const hidden = event.detail.display % 2 === 1;
                      this.container.style.visibility = hidden ? "hidden" : "visible";
                      this.annotationStorage.setValue(this.data.id, {
                        hidden,
                        print: event.detail.display === 0 || event.detail.display === 3
                      });
                    },
                    print: (event) => {
                      this.annotationStorage.setValue(this.data.id, {
                        print: event.detail.print
                      });
                    },
                    hidden: (event) => {
                      this.container.style.visibility = event.detail.hidden ? "hidden" : "visible";
                      this.annotationStorage.setValue(this.data.id, {
                        hidden: event.detail.hidden
                      });
                    },
                    focus: (event) => {
                      setTimeout(() => event.target.focus({
                        preventScroll: false
                      }), 0);
                    },
                    userName: (event) => {
                      event.target.title = event.detail.userName;
                    },
                    readonly: (event) => {
                      if (event.detail.readonly) {
                        event.target.setAttribute("readonly", "");
                      } else {
                        event.target.removeAttribute("readonly");
                      }
                    },
                    required: (event) => {
                      this._setRequired(event.target, event.detail.required);
                    },
                    bgColor: (event) => {
                      setColor("bgColor", "backgroundColor", event);
                    },
                    fillColor: (event) => {
                      setColor("fillColor", "backgroundColor", event);
                    },
                    fgColor: (event) => {
                      setColor("fgColor", "color", event);
                    },
                    textColor: (event) => {
                      setColor("textColor", "color", event);
                    },
                    borderColor: (event) => {
                      setColor("borderColor", "borderColor", event);
                    },
                    strokeColor: (event) => {
                      setColor("strokeColor", "borderColor", event);
                    },
                    rotation: (event) => {
                      const angle = event.detail.rotation;
                      this.setRotation(angle);
                      this.annotationStorage.setValue(this.data.id, {
                        rotation: angle
                      });
                    }
                  });
                }
                _dispatchEventFromSandbox(actions, jsEvent) {
                  const commonActions = this._commonActions;
                  for (const name of Object.keys(jsEvent.detail)) {
                    const action = actions[name] || commonActions[name];
                    action == null ? void 0 : action(jsEvent);
                  }
                }
                _setDefaultPropertiesFromJS(element) {
                  if (!this.enableScripting) {
                    return;
                  }
                  const storedData = this.annotationStorage.getRawValue(this.data.id);
                  if (!storedData) {
                    return;
                  }
                  const commonActions = this._commonActions;
                  for (const [actionName, detail] of Object.entries(storedData)) {
                    const action = commonActions[actionName];
                    if (action) {
                      const eventProxy = {
                        detail: {
                          [actionName]: detail
                        },
                        target: element
                      };
                      action(eventProxy);
                      delete storedData[actionName];
                    }
                  }
                }
                _createQuadrilaterals(ignoreBorder = false) {
                  if (!this.data.quadPoints) {
                    return null;
                  }
                  const quadrilaterals = [];
                  const savedRect = this.data.rect;
                  for (const quadPoint of this.data.quadPoints) {
                    this.data.rect = [quadPoint[2].x, quadPoint[2].y, quadPoint[1].x, quadPoint[1].y];
                    quadrilaterals.push(this._createContainer(ignoreBorder));
                  }
                  this.data.rect = savedRect;
                  return quadrilaterals;
                }
                _createPopup(trigger, data) {
                  let container = this.container;
                  if (this.quadrilaterals) {
                    trigger = trigger || this.quadrilaterals;
                    container = this.quadrilaterals[0];
                  }
                  if (!trigger) {
                    trigger = document.createElement("div");
                    trigger.className = "popupTriggerArea";
                    container.append(trigger);
                  }
                  const popupElement = new PopupElement({
                    container,
                    trigger,
                    color: data.color,
                    titleObj: data.titleObj,
                    modificationDate: data.modificationDate,
                    contentsObj: data.contentsObj,
                    richText: data.richText,
                    hideWrapper: true
                  });
                  const popup = popupElement.render();
                  popup.style.left = "100%";
                  container.append(popup);
                }
                _renderQuadrilaterals(className) {
                  for (const quadrilateral of this.quadrilaterals) {
                    quadrilateral.className = className;
                  }
                  return this.quadrilaterals;
                }
                render() {
                  (0, _util2.unreachable)("Abstract method `AnnotationElement.render` called");
                }
                _getElementsByName(name, skipId = null) {
                  const fields = [];
                  if (this._fieldObjects) {
                    const fieldObj = this._fieldObjects[name];
                    if (fieldObj) {
                      for (const {
                        page,
                        id,
                        exportValues
                      } of fieldObj) {
                        if (page === -1) {
                          continue;
                        }
                        if (id === skipId) {
                          continue;
                        }
                        const exportValue = typeof exportValues === "string" ? exportValues : null;
                        const domElement = document.querySelector(`[data-element-id="${id}"]`);
                        if (domElement && !GetElementsByNameSet.has(domElement)) {
                          (0, _util2.warn)(`_getElementsByName - element not allowed: ${id}`);
                          continue;
                        }
                        fields.push({
                          id,
                          exportValue,
                          domElement
                        });
                      }
                    }
                    return fields;
                  }
                  for (const domElement of document.getElementsByName(name)) {
                    const {
                      exportValue
                    } = domElement;
                    const id = domElement.getAttribute("data-element-id");
                    if (id === skipId) {
                      continue;
                    }
                    if (!GetElementsByNameSet.has(domElement)) {
                      continue;
                    }
                    fields.push({
                      id,
                      exportValue,
                      domElement
                    });
                  }
                  return fields;
                }
              }
              class LinkAnnotationElement extends AnnotationElement {
                constructor(parameters, options = null) {
                  super(parameters, {
                    isRenderable: true,
                    ignoreBorder: !!(options == null ? void 0 : options.ignoreBorder),
                    createQuadrilaterals: true
                  });
                  __privateAdd(this, _LinkAnnotationElement_instances);
                  this.isTooltipOnly = parameters.data.isTooltipOnly;
                }
                render() {
                  const {
                    data,
                    linkService
                  } = this;
                  const link = document.createElement("a");
                  link.setAttribute("data-element-id", data.id);
                  let isBound = false;
                  if (data.url) {
                    linkService.addLinkAttributes(link, data.url, data.newWindow);
                    isBound = true;
                  } else if (data.action) {
                    this._bindNamedAction(link, data.action);
                    isBound = true;
                  } else if (data.attachment) {
                    this._bindAttachment(link, data.attachment);
                    isBound = true;
                  } else if (data.setOCGState) {
                    __privateMethod(this, _LinkAnnotationElement_instances, bindSetOCGState_fn).call(this, link, data.setOCGState);
                    isBound = true;
                  } else if (data.dest) {
                    this._bindLink(link, data.dest);
                    isBound = true;
                  } else {
                    if (data.actions && (data.actions.Action || data.actions["Mouse Up"] || data.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions) {
                      this._bindJSAction(link, data);
                      isBound = true;
                    }
                    if (data.resetForm) {
                      this._bindResetFormAction(link, data.resetForm);
                      isBound = true;
                    } else if (this.isTooltipOnly && !isBound) {
                      this._bindLink(link, "");
                      isBound = true;
                    }
                  }
                  if (this.quadrilaterals) {
                    return this._renderQuadrilaterals("linkAnnotation").map((quadrilateral, index) => {
                      const linkElement = index === 0 ? link : link.cloneNode();
                      quadrilateral.append(linkElement);
                      return quadrilateral;
                    });
                  }
                  this.container.className = "linkAnnotation";
                  if (isBound) {
                    this.container.append(link);
                  }
                  return this.container;
                }
                _bindLink(link, destination) {
                  link.href = this.linkService.getDestinationHash(destination);
                  link.onclick = () => {
                    if (destination) {
                      this.linkService.goToDestination(destination);
                    }
                    return false;
                  };
                  if (destination || destination === "") {
                    __privateMethod(this, _LinkAnnotationElement_instances, setInternalLink_fn).call(this);
                  }
                }
                _bindNamedAction(link, action) {
                  link.href = this.linkService.getAnchorUrl("");
                  link.onclick = () => {
                    this.linkService.executeNamedAction(action);
                    return false;
                  };
                  __privateMethod(this, _LinkAnnotationElement_instances, setInternalLink_fn).call(this);
                }
                _bindAttachment(link, attachment) {
                  link.href = this.linkService.getAnchorUrl("");
                  link.onclick = () => {
                    var _a;
                    (_a = this.downloadManager) == null ? void 0 : _a.openOrDownloadData(this.container, attachment.content, attachment.filename);
                    return false;
                  };
                  __privateMethod(this, _LinkAnnotationElement_instances, setInternalLink_fn).call(this);
                }
                _bindJSAction(link, data) {
                  link.href = this.linkService.getAnchorUrl("");
                  const map = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
                  for (const name of Object.keys(data.actions)) {
                    const jsName = map.get(name);
                    if (!jsName) {
                      continue;
                    }
                    link[jsName] = () => {
                      var _a;
                      (_a = this.linkService.eventBus) == null ? void 0 : _a.dispatch("dispatcheventinsandbox", {
                        source: this,
                        detail: {
                          id: data.id,
                          name
                        }
                      });
                      return false;
                    };
                  }
                  if (!link.onclick) {
                    link.onclick = () => false;
                  }
                  __privateMethod(this, _LinkAnnotationElement_instances, setInternalLink_fn).call(this);
                }
                _bindResetFormAction(link, resetForm) {
                  const otherClickAction = link.onclick;
                  if (!otherClickAction) {
                    link.href = this.linkService.getAnchorUrl("");
                  }
                  __privateMethod(this, _LinkAnnotationElement_instances, setInternalLink_fn).call(this);
                  if (!this._fieldObjects) {
                    (0, _util2.warn)(`_bindResetFormAction - "resetForm" action not supported, ensure that the \`fieldObjects\` parameter is provided.`);
                    if (!otherClickAction) {
                      link.onclick = () => false;
                    }
                    return;
                  }
                  link.onclick = () => {
                    var _a;
                    otherClickAction == null ? void 0 : otherClickAction();
                    const {
                      fields: resetFormFields,
                      refs: resetFormRefs,
                      include
                    } = resetForm;
                    const allFields = [];
                    if (resetFormFields.length !== 0 || resetFormRefs.length !== 0) {
                      const fieldIds = new Set(resetFormRefs);
                      for (const fieldName of resetFormFields) {
                        const fields = this._fieldObjects[fieldName] || [];
                        for (const {
                          id
                        } of fields) {
                          fieldIds.add(id);
                        }
                      }
                      for (const fields of Object.values(this._fieldObjects)) {
                        for (const field of fields) {
                          if (fieldIds.has(field.id) === include) {
                            allFields.push(field);
                          }
                        }
                      }
                    } else {
                      for (const fields of Object.values(this._fieldObjects)) {
                        allFields.push(...fields);
                      }
                    }
                    const storage = this.annotationStorage;
                    const allIds = [];
                    for (const field of allFields) {
                      const {
                        id
                      } = field;
                      allIds.push(id);
                      switch (field.type) {
                        case "text": {
                          const value = field.defaultValue || "";
                          storage.setValue(id, {
                            value
                          });
                          break;
                        }
                        case "checkbox":
                        case "radiobutton": {
                          const value = field.defaultValue === field.exportValues;
                          storage.setValue(id, {
                            value
                          });
                          break;
                        }
                        case "combobox":
                        case "listbox": {
                          const value = field.defaultValue || "";
                          storage.setValue(id, {
                            value
                          });
                          break;
                        }
                        default:
                          continue;
                      }
                      const domElement = document.querySelector(`[data-element-id="${id}"]`);
                      if (!domElement) {
                        continue;
                      } else if (!GetElementsByNameSet.has(domElement)) {
                        (0, _util2.warn)(`_bindResetFormAction - element not allowed: ${id}`);
                        continue;
                      }
                      domElement.dispatchEvent(new Event("resetform"));
                    }
                    if (this.enableScripting) {
                      (_a = this.linkService.eventBus) == null ? void 0 : _a.dispatch("dispatcheventinsandbox", {
                        source: this,
                        detail: {
                          id: "app",
                          ids: allIds,
                          name: "ResetForm"
                        }
                      });
                    }
                    return false;
                  };
                }
              }
              _LinkAnnotationElement_instances = new WeakSet();
              setInternalLink_fn = function() {
                this.container.setAttribute("data-internal-link", "");
              };
              bindSetOCGState_fn = function(link, action) {
                link.href = this.linkService.getAnchorUrl("");
                link.onclick = () => {
                  this.linkService.executeSetOCGState(action);
                  return false;
                };
                __privateMethod(this, _LinkAnnotationElement_instances, setInternalLink_fn).call(this);
              };
              class TextAnnotationElement extends AnnotationElement {
                constructor(parameters) {
                  var _a, _b, _c;
                  const isRenderable = !!(parameters.data.hasPopup || ((_a = parameters.data.titleObj) == null ? void 0 : _a.str) || ((_b = parameters.data.contentsObj) == null ? void 0 : _b.str) || ((_c = parameters.data.richText) == null ? void 0 : _c.str));
                  super(parameters, {
                    isRenderable
                  });
                }
                render() {
                  this.container.className = "textAnnotation";
                  const image = document.createElement("img");
                  image.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg";
                  image.alt = "[{{type}} Annotation]";
                  image.dataset.l10nId = "text_annotation_type";
                  image.dataset.l10nArgs = JSON.stringify({
                    type: this.data.name
                  });
                  if (!this.data.hasPopup) {
                    this._createPopup(image, this.data);
                  }
                  this.container.append(image);
                  return this.container;
                }
              }
              class WidgetAnnotationElement extends AnnotationElement {
                render() {
                  if (this.data.alternativeText) {
                    this.container.title = this.data.alternativeText;
                  }
                  return this.container;
                }
                _getKeyModifier(event) {
                  const {
                    isWin,
                    isMac
                  } = _util2.FeatureTest.platform;
                  return isWin && event.ctrlKey || isMac && event.metaKey;
                }
                _setEventListener(element, baseName, eventName, valueGetter) {
                  if (baseName.includes("mouse")) {
                    element.addEventListener(baseName, (event) => {
                      var _a;
                      (_a = this.linkService.eventBus) == null ? void 0 : _a.dispatch("dispatcheventinsandbox", {
                        source: this,
                        detail: {
                          id: this.data.id,
                          name: eventName,
                          value: valueGetter(event),
                          shift: event.shiftKey,
                          modifier: this._getKeyModifier(event)
                        }
                      });
                    });
                  } else {
                    element.addEventListener(baseName, (event) => {
                      var _a;
                      (_a = this.linkService.eventBus) == null ? void 0 : _a.dispatch("dispatcheventinsandbox", {
                        source: this,
                        detail: {
                          id: this.data.id,
                          name: eventName,
                          value: valueGetter(event)
                        }
                      });
                    });
                  }
                }
                _setEventListeners(element, names, getter) {
                  var _a;
                  for (const [baseName, eventName] of names) {
                    if (eventName === "Action" || ((_a = this.data.actions) == null ? void 0 : _a[eventName])) {
                      this._setEventListener(element, baseName, eventName, getter);
                    }
                  }
                }
                _setBackgroundColor(element) {
                  const color = this.data.backgroundColor || null;
                  element.style.backgroundColor = color === null ? "transparent" : _util2.Util.makeHexColor(color[0], color[1], color[2]);
                }
                _setTextStyle(element) {
                  const TEXT_ALIGNMENT = ["left", "center", "right"];
                  const {
                    fontColor
                  } = this.data.defaultAppearanceData;
                  const fontSize = this.data.defaultAppearanceData.fontSize || DEFAULT_FONT_SIZE;
                  const style = element.style;
                  let computedFontSize;
                  const BORDER_SIZE = 2;
                  const roundToOneDecimal = (x) => Math.round(10 * x) / 10;
                  if (this.data.multiLine) {
                    const height = Math.abs(this.data.rect[3] - this.data.rect[1] - BORDER_SIZE);
                    const numberOfLines = Math.round(height / (_util2.LINE_FACTOR * fontSize)) || 1;
                    const lineHeight = height / numberOfLines;
                    computedFontSize = Math.min(fontSize, roundToOneDecimal(lineHeight / _util2.LINE_FACTOR));
                  } else {
                    const height = Math.abs(this.data.rect[3] - this.data.rect[1] - BORDER_SIZE);
                    computedFontSize = Math.min(fontSize, roundToOneDecimal(height / _util2.LINE_FACTOR));
                  }
                  style.fontSize = `calc(${computedFontSize}px * var(--scale-factor))`;
                  style.color = _util2.Util.makeHexColor(fontColor[0], fontColor[1], fontColor[2]);
                  if (this.data.textAlignment !== null) {
                    style.textAlign = TEXT_ALIGNMENT[this.data.textAlignment];
                  }
                }
                _setRequired(element, isRequired) {
                  if (isRequired) {
                    element.setAttribute("required", true);
                  } else {
                    element.removeAttribute("required");
                  }
                  element.setAttribute("aria-required", isRequired);
                }
              }
              class TextWidgetAnnotationElement extends WidgetAnnotationElement {
                constructor(parameters) {
                  const isRenderable = parameters.renderForms || !parameters.data.hasAppearance && !!parameters.data.fieldValue;
                  super(parameters, {
                    isRenderable
                  });
                }
                setPropertyOnSiblings(base, key, value, keyInStorage) {
                  const storage = this.annotationStorage;
                  for (const element of this._getElementsByName(base.name, base.id)) {
                    if (element.domElement) {
                      element.domElement[key] = value;
                    }
                    storage.setValue(element.id, {
                      [keyInStorage]: value
                    });
                  }
                }
                render() {
                  var _a;
                  const storage = this.annotationStorage;
                  const id = this.data.id;
                  this.container.className = "textWidgetAnnotation";
                  let element = null;
                  if (this.renderForms) {
                    const storedData = storage.getValue(id, {
                      value: this.data.fieldValue
                    });
                    let textContent = storedData.formattedValue || storedData.value || "";
                    const maxLen = storage.getValue(id, {
                      charLimit: this.data.maxLen
                    }).charLimit;
                    if (maxLen && textContent.length > maxLen) {
                      textContent = textContent.slice(0, maxLen);
                    }
                    const elementData = {
                      userValue: textContent,
                      formattedValue: null,
                      lastCommittedValue: null,
                      commitKey: 1
                    };
                    if (this.data.multiLine) {
                      element = document.createElement("textarea");
                      element.textContent = textContent;
                      if (this.data.doNotScroll) {
                        element.style.overflowY = "hidden";
                      }
                    } else {
                      element = document.createElement("input");
                      element.type = "text";
                      element.setAttribute("value", textContent);
                      if (this.data.doNotScroll) {
                        element.style.overflowX = "hidden";
                      }
                    }
                    GetElementsByNameSet.add(element);
                    element.setAttribute("data-element-id", id);
                    element.disabled = this.data.readOnly;
                    element.name = this.data.fieldName;
                    element.tabIndex = DEFAULT_TAB_INDEX;
                    this._setRequired(element, this.data.required);
                    if (maxLen) {
                      element.maxLength = maxLen;
                    }
                    element.addEventListener("input", (event) => {
                      storage.setValue(id, {
                        value: event.target.value
                      });
                      this.setPropertyOnSiblings(element, "value", event.target.value, "value");
                    });
                    element.addEventListener("resetform", (event) => {
                      const defaultValue = this.data.defaultFieldValue ?? "";
                      element.value = elementData.userValue = defaultValue;
                      elementData.formattedValue = null;
                    });
                    let blurListener = (event) => {
                      const {
                        formattedValue
                      } = elementData;
                      if (formattedValue !== null && formattedValue !== void 0) {
                        event.target.value = formattedValue;
                      }
                      event.target.scrollLeft = 0;
                    };
                    if (this.enableScripting && this.hasJSActions) {
                      element.addEventListener("focus", (event) => {
                        const {
                          target
                        } = event;
                        if (elementData.userValue) {
                          target.value = elementData.userValue;
                        }
                        elementData.lastCommittedValue = target.value;
                        elementData.commitKey = 1;
                      });
                      element.addEventListener("updatefromsandbox", (jsEvent) => {
                        const actions = {
                          value(event) {
                            elementData.userValue = event.detail.value ?? "";
                            storage.setValue(id, {
                              value: elementData.userValue.toString()
                            });
                            event.target.value = elementData.userValue;
                          },
                          formattedValue(event) {
                            const {
                              formattedValue
                            } = event.detail;
                            elementData.formattedValue = formattedValue;
                            if (formattedValue !== null && formattedValue !== void 0 && event.target !== document.activeElement) {
                              event.target.value = formattedValue;
                            }
                            storage.setValue(id, {
                              formattedValue
                            });
                          },
                          selRange(event) {
                            event.target.setSelectionRange(...event.detail.selRange);
                          },
                          charLimit: (event) => {
                            var _a2;
                            const {
                              charLimit
                            } = event.detail;
                            const {
                              target
                            } = event;
                            if (charLimit === 0) {
                              target.removeAttribute("maxLength");
                              return;
                            }
                            target.setAttribute("maxLength", charLimit);
                            let value = elementData.userValue;
                            if (!value || value.length <= charLimit) {
                              return;
                            }
                            value = value.slice(0, charLimit);
                            target.value = elementData.userValue = value;
                            storage.setValue(id, {
                              value
                            });
                            (_a2 = this.linkService.eventBus) == null ? void 0 : _a2.dispatch("dispatcheventinsandbox", {
                              source: this,
                              detail: {
                                id,
                                name: "Keystroke",
                                value,
                                willCommit: true,
                                commitKey: 1,
                                selStart: target.selectionStart,
                                selEnd: target.selectionEnd
                              }
                            });
                          }
                        };
                        this._dispatchEventFromSandbox(actions, jsEvent);
                      });
                      element.addEventListener("keydown", (event) => {
                        var _a2;
                        elementData.commitKey = 1;
                        let commitKey = -1;
                        if (event.key === "Escape") {
                          commitKey = 0;
                        } else if (event.key === "Enter" && !this.data.multiLine) {
                          commitKey = 2;
                        } else if (event.key === "Tab") {
                          elementData.commitKey = 3;
                        }
                        if (commitKey === -1) {
                          return;
                        }
                        const {
                          value
                        } = event.target;
                        if (elementData.lastCommittedValue === value) {
                          return;
                        }
                        elementData.lastCommittedValue = value;
                        elementData.userValue = value;
                        (_a2 = this.linkService.eventBus) == null ? void 0 : _a2.dispatch("dispatcheventinsandbox", {
                          source: this,
                          detail: {
                            id,
                            name: "Keystroke",
                            value,
                            willCommit: true,
                            commitKey,
                            selStart: event.target.selectionStart,
                            selEnd: event.target.selectionEnd
                          }
                        });
                      });
                      const _blurListener = blurListener;
                      blurListener = null;
                      element.addEventListener("blur", (event) => {
                        var _a2;
                        if (!event.relatedTarget) {
                          return;
                        }
                        const {
                          value
                        } = event.target;
                        elementData.userValue = value;
                        if (elementData.lastCommittedValue !== value) {
                          (_a2 = this.linkService.eventBus) == null ? void 0 : _a2.dispatch("dispatcheventinsandbox", {
                            source: this,
                            detail: {
                              id,
                              name: "Keystroke",
                              value,
                              willCommit: true,
                              commitKey: elementData.commitKey,
                              selStart: event.target.selectionStart,
                              selEnd: event.target.selectionEnd
                            }
                          });
                        }
                        _blurListener(event);
                      });
                      if ((_a = this.data.actions) == null ? void 0 : _a.Keystroke) {
                        element.addEventListener("beforeinput", (event) => {
                          var _a2;
                          elementData.lastCommittedValue = null;
                          const {
                            data,
                            target
                          } = event;
                          const {
                            value,
                            selectionStart,
                            selectionEnd
                          } = target;
                          let selStart = selectionStart, selEnd = selectionEnd;
                          switch (event.inputType) {
                            case "deleteWordBackward": {
                              const match = value.substring(0, selectionStart).match(/\w*[^\w]*$/);
                              if (match) {
                                selStart -= match[0].length;
                              }
                              break;
                            }
                            case "deleteWordForward": {
                              const match = value.substring(selectionStart).match(/^[^\w]*\w*/);
                              if (match) {
                                selEnd += match[0].length;
                              }
                              break;
                            }
                            case "deleteContentBackward":
                              if (selectionStart === selectionEnd) {
                                selStart -= 1;
                              }
                              break;
                            case "deleteContentForward":
                              if (selectionStart === selectionEnd) {
                                selEnd += 1;
                              }
                              break;
                          }
                          event.preventDefault();
                          (_a2 = this.linkService.eventBus) == null ? void 0 : _a2.dispatch("dispatcheventinsandbox", {
                            source: this,
                            detail: {
                              id,
                              name: "Keystroke",
                              value,
                              change: data || "",
                              willCommit: false,
                              selStart,
                              selEnd
                            }
                          });
                        });
                      }
                      this._setEventListeners(element, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (event) => event.target.value);
                    }
                    if (blurListener) {
                      element.addEventListener("blur", blurListener);
                    }
                    if (this.data.comb) {
                      const fieldWidth = this.data.rect[2] - this.data.rect[0];
                      const combWidth = fieldWidth / maxLen;
                      element.classList.add("comb");
                      element.style.letterSpacing = `calc(${combWidth}px * var(--scale-factor) - 1ch)`;
                    }
                  } else {
                    element = document.createElement("div");
                    element.textContent = this.data.fieldValue;
                    element.style.verticalAlign = "middle";
                    element.style.display = "table-cell";
                  }
                  this._setTextStyle(element);
                  this._setBackgroundColor(element);
                  this._setDefaultPropertiesFromJS(element);
                  this.container.append(element);
                  return this.container;
                }
              }
              class CheckboxWidgetAnnotationElement extends WidgetAnnotationElement {
                constructor(parameters) {
                  super(parameters, {
                    isRenderable: parameters.renderForms
                  });
                }
                render() {
                  const storage = this.annotationStorage;
                  const data = this.data;
                  const id = data.id;
                  let value = storage.getValue(id, {
                    value: data.exportValue === data.fieldValue
                  }).value;
                  if (typeof value === "string") {
                    value = value !== "Off";
                    storage.setValue(id, {
                      value
                    });
                  }
                  this.container.className = "buttonWidgetAnnotation checkBox";
                  const element = document.createElement("input");
                  GetElementsByNameSet.add(element);
                  element.setAttribute("data-element-id", id);
                  element.disabled = data.readOnly;
                  this._setRequired(element, this.data.required);
                  element.type = "checkbox";
                  element.name = data.fieldName;
                  if (value) {
                    element.setAttribute("checked", true);
                  }
                  element.setAttribute("exportValue", data.exportValue);
                  element.tabIndex = DEFAULT_TAB_INDEX;
                  element.addEventListener("change", (event) => {
                    const {
                      name,
                      checked
                    } = event.target;
                    for (const checkbox of this._getElementsByName(name, id)) {
                      const curChecked = checked && checkbox.exportValue === data.exportValue;
                      if (checkbox.domElement) {
                        checkbox.domElement.checked = curChecked;
                      }
                      storage.setValue(checkbox.id, {
                        value: curChecked
                      });
                    }
                    storage.setValue(id, {
                      value: checked
                    });
                  });
                  element.addEventListener("resetform", (event) => {
                    const defaultValue = data.defaultFieldValue || "Off";
                    event.target.checked = defaultValue === data.exportValue;
                  });
                  if (this.enableScripting && this.hasJSActions) {
                    element.addEventListener("updatefromsandbox", (jsEvent) => {
                      const actions = {
                        value(event) {
                          event.target.checked = event.detail.value !== "Off";
                          storage.setValue(id, {
                            value: event.target.checked
                          });
                        }
                      };
                      this._dispatchEventFromSandbox(actions, jsEvent);
                    });
                    this._setEventListeners(element, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (event) => event.target.checked);
                  }
                  this._setBackgroundColor(element);
                  this._setDefaultPropertiesFromJS(element);
                  this.container.append(element);
                  return this.container;
                }
              }
              class RadioButtonWidgetAnnotationElement extends WidgetAnnotationElement {
                constructor(parameters) {
                  super(parameters, {
                    isRenderable: parameters.renderForms
                  });
                }
                render() {
                  this.container.className = "buttonWidgetAnnotation radioButton";
                  const storage = this.annotationStorage;
                  const data = this.data;
                  const id = data.id;
                  let value = storage.getValue(id, {
                    value: data.fieldValue === data.buttonValue
                  }).value;
                  if (typeof value === "string") {
                    value = value !== data.buttonValue;
                    storage.setValue(id, {
                      value
                    });
                  }
                  const element = document.createElement("input");
                  GetElementsByNameSet.add(element);
                  element.setAttribute("data-element-id", id);
                  element.disabled = data.readOnly;
                  this._setRequired(element, this.data.required);
                  element.type = "radio";
                  element.name = data.fieldName;
                  if (value) {
                    element.setAttribute("checked", true);
                  }
                  element.tabIndex = DEFAULT_TAB_INDEX;
                  element.addEventListener("change", (event) => {
                    const {
                      name,
                      checked
                    } = event.target;
                    for (const radio of this._getElementsByName(name, id)) {
                      storage.setValue(radio.id, {
                        value: false
                      });
                    }
                    storage.setValue(id, {
                      value: checked
                    });
                  });
                  element.addEventListener("resetform", (event) => {
                    const defaultValue = data.defaultFieldValue;
                    event.target.checked = defaultValue !== null && defaultValue !== void 0 && defaultValue === data.buttonValue;
                  });
                  if (this.enableScripting && this.hasJSActions) {
                    const pdfButtonValue = data.buttonValue;
                    element.addEventListener("updatefromsandbox", (jsEvent) => {
                      const actions = {
                        value: (event) => {
                          const checked = pdfButtonValue === event.detail.value;
                          for (const radio of this._getElementsByName(event.target.name)) {
                            const curChecked = checked && radio.id === id;
                            if (radio.domElement) {
                              radio.domElement.checked = curChecked;
                            }
                            storage.setValue(radio.id, {
                              value: curChecked
                            });
                          }
                        }
                      };
                      this._dispatchEventFromSandbox(actions, jsEvent);
                    });
                    this._setEventListeners(element, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (event) => event.target.checked);
                  }
                  this._setBackgroundColor(element);
                  this._setDefaultPropertiesFromJS(element);
                  this.container.append(element);
                  return this.container;
                }
              }
              class PushButtonWidgetAnnotationElement extends LinkAnnotationElement {
                constructor(parameters) {
                  super(parameters, {
                    ignoreBorder: parameters.data.hasAppearance
                  });
                }
                render() {
                  const container = super.render();
                  container.className = "buttonWidgetAnnotation pushButton";
                  if (this.data.alternativeText) {
                    container.title = this.data.alternativeText;
                  }
                  const linkElement = container.lastChild;
                  if (this.enableScripting && this.hasJSActions && linkElement) {
                    this._setDefaultPropertiesFromJS(linkElement);
                    linkElement.addEventListener("updatefromsandbox", (jsEvent) => {
                      this._dispatchEventFromSandbox({}, jsEvent);
                    });
                  }
                  return container;
                }
              }
              class ChoiceWidgetAnnotationElement extends WidgetAnnotationElement {
                constructor(parameters) {
                  super(parameters, {
                    isRenderable: parameters.renderForms
                  });
                }
                render() {
                  this.container.className = "choiceWidgetAnnotation";
                  const storage = this.annotationStorage;
                  const id = this.data.id;
                  const storedData = storage.getValue(id, {
                    value: this.data.fieldValue
                  });
                  const selectElement = document.createElement("select");
                  GetElementsByNameSet.add(selectElement);
                  selectElement.setAttribute("data-element-id", id);
                  selectElement.disabled = this.data.readOnly;
                  this._setRequired(selectElement, this.data.required);
                  selectElement.name = this.data.fieldName;
                  selectElement.tabIndex = DEFAULT_TAB_INDEX;
                  let addAnEmptyEntry = this.data.combo && this.data.options.length > 0;
                  if (!this.data.combo) {
                    selectElement.size = this.data.options.length;
                    if (this.data.multiSelect) {
                      selectElement.multiple = true;
                    }
                  }
                  selectElement.addEventListener("resetform", (event) => {
                    const defaultValue = this.data.defaultFieldValue;
                    for (const option of selectElement.options) {
                      option.selected = option.value === defaultValue;
                    }
                  });
                  for (const option of this.data.options) {
                    const optionElement = document.createElement("option");
                    optionElement.textContent = option.displayValue;
                    optionElement.value = option.exportValue;
                    if (storedData.value.includes(option.exportValue)) {
                      optionElement.setAttribute("selected", true);
                      addAnEmptyEntry = false;
                    }
                    selectElement.append(optionElement);
                  }
                  let removeEmptyEntry = null;
                  if (addAnEmptyEntry) {
                    const noneOptionElement = document.createElement("option");
                    noneOptionElement.value = " ";
                    noneOptionElement.setAttribute("hidden", true);
                    noneOptionElement.setAttribute("selected", true);
                    selectElement.prepend(noneOptionElement);
                    removeEmptyEntry = () => {
                      noneOptionElement.remove();
                      selectElement.removeEventListener("input", removeEmptyEntry);
                      removeEmptyEntry = null;
                    };
                    selectElement.addEventListener("input", removeEmptyEntry);
                  }
                  const getValue = (isExport) => {
                    const name = isExport ? "value" : "textContent";
                    const {
                      options,
                      multiple
                    } = selectElement;
                    if (!multiple) {
                      return options.selectedIndex === -1 ? null : options[options.selectedIndex][name];
                    }
                    return Array.prototype.filter.call(options, (option) => option.selected).map((option) => option[name]);
                  };
                  let selectedValues = getValue(false);
                  const getItems = (event) => {
                    const options = event.target.options;
                    return Array.prototype.map.call(options, (option) => {
                      return {
                        displayValue: option.textContent,
                        exportValue: option.value
                      };
                    });
                  };
                  if (this.enableScripting && this.hasJSActions) {
                    selectElement.addEventListener("updatefromsandbox", (jsEvent) => {
                      const actions = {
                        value(event) {
                          removeEmptyEntry == null ? void 0 : removeEmptyEntry();
                          const value = event.detail.value;
                          const values = new Set(Array.isArray(value) ? value : [value]);
                          for (const option of selectElement.options) {
                            option.selected = values.has(option.value);
                          }
                          storage.setValue(id, {
                            value: getValue(true)
                          });
                          selectedValues = getValue(false);
                        },
                        multipleSelection(event) {
                          selectElement.multiple = true;
                        },
                        remove(event) {
                          const options = selectElement.options;
                          const index = event.detail.remove;
                          options[index].selected = false;
                          selectElement.remove(index);
                          if (options.length > 0) {
                            const i = Array.prototype.findIndex.call(options, (option) => option.selected);
                            if (i === -1) {
                              options[0].selected = true;
                            }
                          }
                          storage.setValue(id, {
                            value: getValue(true),
                            items: getItems(event)
                          });
                          selectedValues = getValue(false);
                        },
                        clear(event) {
                          while (selectElement.length !== 0) {
                            selectElement.remove(0);
                          }
                          storage.setValue(id, {
                            value: null,
                            items: []
                          });
                          selectedValues = getValue(false);
                        },
                        insert(event) {
                          const {
                            index,
                            displayValue,
                            exportValue
                          } = event.detail.insert;
                          const selectChild = selectElement.children[index];
                          const optionElement = document.createElement("option");
                          optionElement.textContent = displayValue;
                          optionElement.value = exportValue;
                          if (selectChild) {
                            selectChild.before(optionElement);
                          } else {
                            selectElement.append(optionElement);
                          }
                          storage.setValue(id, {
                            value: getValue(true),
                            items: getItems(event)
                          });
                          selectedValues = getValue(false);
                        },
                        items(event) {
                          const {
                            items
                          } = event.detail;
                          while (selectElement.length !== 0) {
                            selectElement.remove(0);
                          }
                          for (const item of items) {
                            const {
                              displayValue,
                              exportValue
                            } = item;
                            const optionElement = document.createElement("option");
                            optionElement.textContent = displayValue;
                            optionElement.value = exportValue;
                            selectElement.append(optionElement);
                          }
                          if (selectElement.options.length > 0) {
                            selectElement.options[0].selected = true;
                          }
                          storage.setValue(id, {
                            value: getValue(true),
                            items: getItems(event)
                          });
                          selectedValues = getValue(false);
                        },
                        indices(event) {
                          const indices = new Set(event.detail.indices);
                          for (const option of event.target.options) {
                            option.selected = indices.has(option.index);
                          }
                          storage.setValue(id, {
                            value: getValue(true)
                          });
                          selectedValues = getValue(false);
                        },
                        editable(event) {
                          event.target.disabled = !event.detail.editable;
                        }
                      };
                      this._dispatchEventFromSandbox(actions, jsEvent);
                    });
                    selectElement.addEventListener("input", (event) => {
                      var _a;
                      const exportValue = getValue(true);
                      storage.setValue(id, {
                        value: exportValue
                      });
                      event.preventDefault();
                      (_a = this.linkService.eventBus) == null ? void 0 : _a.dispatch("dispatcheventinsandbox", {
                        source: this,
                        detail: {
                          id,
                          name: "Keystroke",
                          value: selectedValues,
                          changeEx: exportValue,
                          willCommit: false,
                          commitKey: 1,
                          keyDown: false
                        }
                      });
                    });
                    this._setEventListeners(selectElement, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (event) => event.target.value);
                  } else {
                    selectElement.addEventListener("input", function(event) {
                      storage.setValue(id, {
                        value: getValue(true)
                      });
                    });
                  }
                  if (this.data.combo) {
                    this._setTextStyle(selectElement);
                  } else {
                  }
                  this._setBackgroundColor(selectElement);
                  this._setDefaultPropertiesFromJS(selectElement);
                  this.container.append(selectElement);
                  return this.container;
                }
              }
              const _PopupAnnotationElement = class _PopupAnnotationElement extends AnnotationElement {
                constructor(parameters) {
                  var _a, _b, _c;
                  const {
                    data
                  } = parameters;
                  const isRenderable = !_PopupAnnotationElement.IGNORE_TYPES.has(data.parentType) && !!(((_a = data.titleObj) == null ? void 0 : _a.str) || ((_b = data.contentsObj) == null ? void 0 : _b.str) || ((_c = data.richText) == null ? void 0 : _c.str));
                  super(parameters, {
                    isRenderable
                  });
                }
                render() {
                  this.container.className = "popupAnnotation";
                  const parentElements = this.layer.querySelectorAll(`[data-annotation-id="${this.data.parentId}"]`);
                  if (parentElements.length === 0) {
                    return this.container;
                  }
                  const popup = new PopupElement({
                    container: this.container,
                    trigger: Array.from(parentElements),
                    color: this.data.color,
                    titleObj: this.data.titleObj,
                    modificationDate: this.data.modificationDate,
                    contentsObj: this.data.contentsObj,
                    richText: this.data.richText
                  });
                  const page = this.page;
                  const rect = _util2.Util.normalizeRect([this.data.parentRect[0], page.view[3] - this.data.parentRect[1] + page.view[1], this.data.parentRect[2], page.view[3] - this.data.parentRect[3] + page.view[1]]);
                  const popupLeft = rect[0] + this.data.parentRect[2] - this.data.parentRect[0];
                  const popupTop = rect[1];
                  const {
                    pageWidth,
                    pageHeight,
                    pageX,
                    pageY
                  } = this.viewport.rawDims;
                  this.container.style.left = `${100 * (popupLeft - pageX) / pageWidth}%`;
                  this.container.style.top = `${100 * (popupTop - pageY) / pageHeight}%`;
                  this.container.append(popup.render());
                  return this.container;
                }
              };
              __publicField(_PopupAnnotationElement, "IGNORE_TYPES", /* @__PURE__ */ new Set(["Line", "Square", "Circle", "PolyLine", "Polygon", "Ink"]));
              let PopupAnnotationElement = _PopupAnnotationElement;
              class PopupElement {
                constructor(parameters) {
                  this.container = parameters.container;
                  this.trigger = parameters.trigger;
                  this.color = parameters.color;
                  this.titleObj = parameters.titleObj;
                  this.modificationDate = parameters.modificationDate;
                  this.contentsObj = parameters.contentsObj;
                  this.richText = parameters.richText;
                  this.hideWrapper = parameters.hideWrapper || false;
                  this.pinned = false;
                }
                render() {
                  var _a, _b;
                  const BACKGROUND_ENLIGHT = 0.7;
                  const wrapper = document.createElement("div");
                  wrapper.className = "popupWrapper";
                  this.hideElement = this.hideWrapper ? wrapper : this.container;
                  this.hideElement.hidden = true;
                  const popup = document.createElement("div");
                  popup.className = "popup";
                  const color = this.color;
                  if (color) {
                    const r = BACKGROUND_ENLIGHT * (255 - color[0]) + color[0];
                    const g = BACKGROUND_ENLIGHT * (255 - color[1]) + color[1];
                    const b = BACKGROUND_ENLIGHT * (255 - color[2]) + color[2];
                    popup.style.backgroundColor = _util2.Util.makeHexColor(r | 0, g | 0, b | 0);
                  }
                  const title = document.createElement("h1");
                  title.dir = this.titleObj.dir;
                  title.textContent = this.titleObj.str;
                  popup.append(title);
                  const dateObject = _display_utils2.PDFDateString.toDateObject(this.modificationDate);
                  if (dateObject) {
                    const modificationDate = document.createElement("span");
                    modificationDate.className = "popupDate";
                    modificationDate.textContent = "{{date}}, {{time}}";
                    modificationDate.dataset.l10nId = "annotation_date_string";
                    modificationDate.dataset.l10nArgs = JSON.stringify({
                      date: dateObject.toLocaleDateString(),
                      time: dateObject.toLocaleTimeString()
                    });
                    popup.append(modificationDate);
                  }
                  if (((_a = this.richText) == null ? void 0 : _a.str) && (!((_b = this.contentsObj) == null ? void 0 : _b.str) || this.contentsObj.str === this.richText.str)) {
                    _xfa_layer.XfaLayer.render({
                      xfaHtml: this.richText.html,
                      intent: "richText",
                      div: popup
                    });
                    popup.lastChild.className = "richText popupContent";
                  } else {
                    const contents = this._formatContents(this.contentsObj);
                    popup.append(contents);
                  }
                  if (!Array.isArray(this.trigger)) {
                    this.trigger = [this.trigger];
                  }
                  for (const element of this.trigger) {
                    element.addEventListener("click", this._toggle.bind(this));
                    element.addEventListener("mouseover", this._show.bind(this, false));
                    element.addEventListener("mouseout", this._hide.bind(this, false));
                  }
                  popup.addEventListener("click", this._hide.bind(this, true));
                  wrapper.append(popup);
                  return wrapper;
                }
                _formatContents({
                  str,
                  dir
                }) {
                  const p = document.createElement("p");
                  p.className = "popupContent";
                  p.dir = dir;
                  const lines = str.split(/(?:\r\n?|\n)/);
                  for (let i = 0, ii = lines.length; i < ii; ++i) {
                    const line = lines[i];
                    p.append(document.createTextNode(line));
                    if (i < ii - 1) {
                      p.append(document.createElement("br"));
                    }
                  }
                  return p;
                }
                _toggle() {
                  if (this.pinned) {
                    this._hide(true);
                  } else {
                    this._show(true);
                  }
                }
                _show(pin = false) {
                  if (pin) {
                    this.pinned = true;
                  }
                  if (this.hideElement.hidden) {
                    this.hideElement.hidden = false;
                    this.container.style.zIndex = parseInt(this.container.style.zIndex) + 1e3;
                  }
                }
                _hide(unpin = true) {
                  if (unpin) {
                    this.pinned = false;
                  }
                  if (!this.hideElement.hidden && !this.pinned) {
                    this.hideElement.hidden = true;
                    this.container.style.zIndex = parseInt(this.container.style.zIndex) - 1e3;
                  }
                }
              }
              class FreeTextAnnotationElement extends AnnotationElement {
                constructor(parameters) {
                  var _a, _b, _c;
                  const isRenderable = !!(parameters.data.hasPopup || ((_a = parameters.data.titleObj) == null ? void 0 : _a.str) || ((_b = parameters.data.contentsObj) == null ? void 0 : _b.str) || ((_c = parameters.data.richText) == null ? void 0 : _c.str));
                  super(parameters, {
                    isRenderable,
                    ignoreBorder: true
                  });
                  this.textContent = parameters.data.textContent;
                }
                render() {
                  this.container.className = "freeTextAnnotation";
                  if (this.textContent) {
                    const content = document.createElement("div");
                    content.className = "annotationTextContent";
                    content.setAttribute("role", "comment");
                    for (const line of this.textContent) {
                      const lineSpan = document.createElement("span");
                      lineSpan.textContent = line;
                      content.append(lineSpan);
                    }
                    this.container.append(content);
                  }
                  if (!this.data.hasPopup) {
                    this._createPopup(null, this.data);
                  }
                  return this.container;
                }
              }
              class LineAnnotationElement extends AnnotationElement {
                constructor(parameters) {
                  var _a, _b, _c;
                  const isRenderable = !!(parameters.data.hasPopup || ((_a = parameters.data.titleObj) == null ? void 0 : _a.str) || ((_b = parameters.data.contentsObj) == null ? void 0 : _b.str) || ((_c = parameters.data.richText) == null ? void 0 : _c.str));
                  super(parameters, {
                    isRenderable,
                    ignoreBorder: true
                  });
                }
                render() {
                  this.container.className = "lineAnnotation";
                  const data = this.data;
                  const {
                    width,
                    height
                  } = getRectDims(data.rect);
                  const svg = this.svgFactory.create(width, height, true);
                  const line = this.svgFactory.createElement("svg:line");
                  line.setAttribute("x1", data.rect[2] - data.lineCoordinates[0]);
                  line.setAttribute("y1", data.rect[3] - data.lineCoordinates[1]);
                  line.setAttribute("x2", data.rect[2] - data.lineCoordinates[2]);
                  line.setAttribute("y2", data.rect[3] - data.lineCoordinates[3]);
                  line.setAttribute("stroke-width", data.borderStyle.width || 1);
                  line.setAttribute("stroke", "transparent");
                  line.setAttribute("fill", "transparent");
                  svg.append(line);
                  this.container.append(svg);
                  this._createPopup(line, data);
                  return this.container;
                }
              }
              class SquareAnnotationElement extends AnnotationElement {
                constructor(parameters) {
                  var _a, _b, _c;
                  const isRenderable = !!(parameters.data.hasPopup || ((_a = parameters.data.titleObj) == null ? void 0 : _a.str) || ((_b = parameters.data.contentsObj) == null ? void 0 : _b.str) || ((_c = parameters.data.richText) == null ? void 0 : _c.str));
                  super(parameters, {
                    isRenderable,
                    ignoreBorder: true
                  });
                }
                render() {
                  this.container.className = "squareAnnotation";
                  const data = this.data;
                  const {
                    width,
                    height
                  } = getRectDims(data.rect);
                  const svg = this.svgFactory.create(width, height, true);
                  const borderWidth = data.borderStyle.width;
                  const square = this.svgFactory.createElement("svg:rect");
                  square.setAttribute("x", borderWidth / 2);
                  square.setAttribute("y", borderWidth / 2);
                  square.setAttribute("width", width - borderWidth);
                  square.setAttribute("height", height - borderWidth);
                  square.setAttribute("stroke-width", borderWidth || 1);
                  square.setAttribute("stroke", "transparent");
                  square.setAttribute("fill", "transparent");
                  svg.append(square);
                  this.container.append(svg);
                  this._createPopup(square, data);
                  return this.container;
                }
              }
              class CircleAnnotationElement extends AnnotationElement {
                constructor(parameters) {
                  var _a, _b, _c;
                  const isRenderable = !!(parameters.data.hasPopup || ((_a = parameters.data.titleObj) == null ? void 0 : _a.str) || ((_b = parameters.data.contentsObj) == null ? void 0 : _b.str) || ((_c = parameters.data.richText) == null ? void 0 : _c.str));
                  super(parameters, {
                    isRenderable,
                    ignoreBorder: true
                  });
                }
                render() {
                  this.container.className = "circleAnnotation";
                  const data = this.data;
                  const {
                    width,
                    height
                  } = getRectDims(data.rect);
                  const svg = this.svgFactory.create(width, height, true);
                  const borderWidth = data.borderStyle.width;
                  const circle = this.svgFactory.createElement("svg:ellipse");
                  circle.setAttribute("cx", width / 2);
                  circle.setAttribute("cy", height / 2);
                  circle.setAttribute("rx", width / 2 - borderWidth / 2);
                  circle.setAttribute("ry", height / 2 - borderWidth / 2);
                  circle.setAttribute("stroke-width", borderWidth || 1);
                  circle.setAttribute("stroke", "transparent");
                  circle.setAttribute("fill", "transparent");
                  svg.append(circle);
                  this.container.append(svg);
                  this._createPopup(circle, data);
                  return this.container;
                }
              }
              class PolylineAnnotationElement extends AnnotationElement {
                constructor(parameters) {
                  var _a, _b, _c;
                  const isRenderable = !!(parameters.data.hasPopup || ((_a = parameters.data.titleObj) == null ? void 0 : _a.str) || ((_b = parameters.data.contentsObj) == null ? void 0 : _b.str) || ((_c = parameters.data.richText) == null ? void 0 : _c.str));
                  super(parameters, {
                    isRenderable,
                    ignoreBorder: true
                  });
                  this.containerClassName = "polylineAnnotation";
                  this.svgElementName = "svg:polyline";
                }
                render() {
                  this.container.className = this.containerClassName;
                  const data = this.data;
                  const {
                    width,
                    height
                  } = getRectDims(data.rect);
                  const svg = this.svgFactory.create(width, height, true);
                  let points = [];
                  for (const coordinate of data.vertices) {
                    const x = coordinate.x - data.rect[0];
                    const y = data.rect[3] - coordinate.y;
                    points.push(x + "," + y);
                  }
                  points = points.join(" ");
                  const polyline = this.svgFactory.createElement(this.svgElementName);
                  polyline.setAttribute("points", points);
                  polyline.setAttribute("stroke-width", data.borderStyle.width || 1);
                  polyline.setAttribute("stroke", "transparent");
                  polyline.setAttribute("fill", "transparent");
                  svg.append(polyline);
                  this.container.append(svg);
                  this._createPopup(polyline, data);
                  return this.container;
                }
              }
              class PolygonAnnotationElement extends PolylineAnnotationElement {
                constructor(parameters) {
                  super(parameters);
                  this.containerClassName = "polygonAnnotation";
                  this.svgElementName = "svg:polygon";
                }
              }
              class CaretAnnotationElement extends AnnotationElement {
                constructor(parameters) {
                  var _a, _b, _c;
                  const isRenderable = !!(parameters.data.hasPopup || ((_a = parameters.data.titleObj) == null ? void 0 : _a.str) || ((_b = parameters.data.contentsObj) == null ? void 0 : _b.str) || ((_c = parameters.data.richText) == null ? void 0 : _c.str));
                  super(parameters, {
                    isRenderable,
                    ignoreBorder: true
                  });
                }
                render() {
                  this.container.className = "caretAnnotation";
                  if (!this.data.hasPopup) {
                    this._createPopup(null, this.data);
                  }
                  return this.container;
                }
              }
              class InkAnnotationElement extends AnnotationElement {
                constructor(parameters) {
                  var _a, _b, _c;
                  const isRenderable = !!(parameters.data.hasPopup || ((_a = parameters.data.titleObj) == null ? void 0 : _a.str) || ((_b = parameters.data.contentsObj) == null ? void 0 : _b.str) || ((_c = parameters.data.richText) == null ? void 0 : _c.str));
                  super(parameters, {
                    isRenderable,
                    ignoreBorder: true
                  });
                  this.containerClassName = "inkAnnotation";
                  this.svgElementName = "svg:polyline";
                }
                render() {
                  this.container.className = this.containerClassName;
                  const data = this.data;
                  const {
                    width,
                    height
                  } = getRectDims(data.rect);
                  const svg = this.svgFactory.create(width, height, true);
                  for (const inkList of data.inkLists) {
                    let points = [];
                    for (const coordinate of inkList) {
                      const x = coordinate.x - data.rect[0];
                      const y = data.rect[3] - coordinate.y;
                      points.push(`${x},${y}`);
                    }
                    points = points.join(" ");
                    const polyline = this.svgFactory.createElement(this.svgElementName);
                    polyline.setAttribute("points", points);
                    polyline.setAttribute("stroke-width", data.borderStyle.width || 1);
                    polyline.setAttribute("stroke", "transparent");
                    polyline.setAttribute("fill", "transparent");
                    this._createPopup(polyline, data);
                    svg.append(polyline);
                  }
                  this.container.append(svg);
                  return this.container;
                }
              }
              class HighlightAnnotationElement extends AnnotationElement {
                constructor(parameters) {
                  var _a, _b, _c;
                  const isRenderable = !!(parameters.data.hasPopup || ((_a = parameters.data.titleObj) == null ? void 0 : _a.str) || ((_b = parameters.data.contentsObj) == null ? void 0 : _b.str) || ((_c = parameters.data.richText) == null ? void 0 : _c.str));
                  super(parameters, {
                    isRenderable,
                    ignoreBorder: true,
                    createQuadrilaterals: true
                  });
                }
                render() {
                  if (!this.data.hasPopup) {
                    this._createPopup(null, this.data);
                  }
                  if (this.quadrilaterals) {
                    return this._renderQuadrilaterals("highlightAnnotation");
                  }
                  this.container.className = "highlightAnnotation";
                  return this.container;
                }
              }
              class UnderlineAnnotationElement extends AnnotationElement {
                constructor(parameters) {
                  var _a, _b, _c;
                  const isRenderable = !!(parameters.data.hasPopup || ((_a = parameters.data.titleObj) == null ? void 0 : _a.str) || ((_b = parameters.data.contentsObj) == null ? void 0 : _b.str) || ((_c = parameters.data.richText) == null ? void 0 : _c.str));
                  super(parameters, {
                    isRenderable,
                    ignoreBorder: true,
                    createQuadrilaterals: true
                  });
                }
                render() {
                  if (!this.data.hasPopup) {
                    this._createPopup(null, this.data);
                  }
                  if (this.quadrilaterals) {
                    return this._renderQuadrilaterals("underlineAnnotation");
                  }
                  this.container.className = "underlineAnnotation";
                  return this.container;
                }
              }
              class SquigglyAnnotationElement extends AnnotationElement {
                constructor(parameters) {
                  var _a, _b, _c;
                  const isRenderable = !!(parameters.data.hasPopup || ((_a = parameters.data.titleObj) == null ? void 0 : _a.str) || ((_b = parameters.data.contentsObj) == null ? void 0 : _b.str) || ((_c = parameters.data.richText) == null ? void 0 : _c.str));
                  super(parameters, {
                    isRenderable,
                    ignoreBorder: true,
                    createQuadrilaterals: true
                  });
                }
                render() {
                  if (!this.data.hasPopup) {
                    this._createPopup(null, this.data);
                  }
                  if (this.quadrilaterals) {
                    return this._renderQuadrilaterals("squigglyAnnotation");
                  }
                  this.container.className = "squigglyAnnotation";
                  return this.container;
                }
              }
              class StrikeOutAnnotationElement extends AnnotationElement {
                constructor(parameters) {
                  var _a, _b, _c;
                  const isRenderable = !!(parameters.data.hasPopup || ((_a = parameters.data.titleObj) == null ? void 0 : _a.str) || ((_b = parameters.data.contentsObj) == null ? void 0 : _b.str) || ((_c = parameters.data.richText) == null ? void 0 : _c.str));
                  super(parameters, {
                    isRenderable,
                    ignoreBorder: true,
                    createQuadrilaterals: true
                  });
                }
                render() {
                  if (!this.data.hasPopup) {
                    this._createPopup(null, this.data);
                  }
                  if (this.quadrilaterals) {
                    return this._renderQuadrilaterals("strikeoutAnnotation");
                  }
                  this.container.className = "strikeoutAnnotation";
                  return this.container;
                }
              }
              class StampAnnotationElement extends AnnotationElement {
                constructor(parameters) {
                  var _a, _b, _c;
                  const isRenderable = !!(parameters.data.hasPopup || ((_a = parameters.data.titleObj) == null ? void 0 : _a.str) || ((_b = parameters.data.contentsObj) == null ? void 0 : _b.str) || ((_c = parameters.data.richText) == null ? void 0 : _c.str));
                  super(parameters, {
                    isRenderable,
                    ignoreBorder: true
                  });
                }
                render() {
                  this.container.className = "stampAnnotation";
                  if (!this.data.hasPopup) {
                    this._createPopup(null, this.data);
                  }
                  return this.container;
                }
              }
              class FileAttachmentAnnotationElement extends AnnotationElement {
                constructor(parameters) {
                  var _a;
                  super(parameters, {
                    isRenderable: true
                  });
                  const {
                    filename,
                    content
                  } = this.data.file;
                  this.filename = (0, _display_utils2.getFilenameFromUrl)(filename, true);
                  this.content = content;
                  (_a = this.linkService.eventBus) == null ? void 0 : _a.dispatch("fileattachmentannotation", {
                    source: this,
                    filename,
                    content
                  });
                }
                render() {
                  var _a, _b;
                  this.container.className = "fileAttachmentAnnotation";
                  let trigger;
                  if (this.data.hasAppearance) {
                    trigger = document.createElement("div");
                  } else {
                    trigger = document.createElement("img");
                    trigger.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(this.data.name) ? "paperclip" : "pushpin"}.svg`;
                  }
                  trigger.className = "popupTriggerArea";
                  trigger.addEventListener("dblclick", this._download.bind(this));
                  if (!this.data.hasPopup && (((_a = this.data.titleObj) == null ? void 0 : _a.str) || ((_b = this.data.contentsObj) == null ? void 0 : _b.str) || this.data.richText)) {
                    this._createPopup(trigger, this.data);
                  }
                  this.container.append(trigger);
                  return this.container;
                }
                _download() {
                  var _a;
                  (_a = this.downloadManager) == null ? void 0 : _a.openOrDownloadData(this.container, this.content, this.filename);
                }
              }
              const _AnnotationLayer = class _AnnotationLayer {
                static render(params) {
                  var _a, _b;
                  const {
                    annotations,
                    div,
                    viewport,
                    accessibilityManager
                  } = params;
                  (0, _display_utils2.setLayerDimensions)(div, viewport);
                  const elementParams = {
                    data: null,
                    layer: div,
                    page: params.page,
                    viewport,
                    linkService: params.linkService,
                    downloadManager: params.downloadManager,
                    imageResourcesPath: params.imageResourcesPath || "",
                    renderForms: params.renderForms !== false,
                    svgFactory: new _display_utils2.DOMSVGFactory(),
                    annotationStorage: params.annotationStorage || new _annotation_storage2.AnnotationStorage(),
                    enableScripting: params.enableScripting === true,
                    hasJSActions: params.hasJSActions,
                    fieldObjects: params.fieldObjects
                  };
                  let zIndex = 0;
                  for (const data of annotations) {
                    if (data.annotationType !== _util2.AnnotationType.POPUP) {
                      const {
                        width,
                        height
                      } = getRectDims(data.rect);
                      if (width <= 0 || height <= 0) {
                        continue;
                      }
                    }
                    elementParams.data = data;
                    const element = AnnotationElementFactory.create(elementParams);
                    if (!element.isRenderable) {
                      continue;
                    }
                    const rendered = element.render();
                    if (data.hidden) {
                      rendered.style.visibility = "hidden";
                    }
                    if (Array.isArray(rendered)) {
                      for (const renderedElement of rendered) {
                        renderedElement.style.zIndex = zIndex++;
                        __privateMethod(_a = _AnnotationLayer, _AnnotationLayer_static, appendElement_fn).call(_a, renderedElement, data.id, div, accessibilityManager);
                      }
                    } else {
                      rendered.style.zIndex = zIndex++;
                      if (element instanceof PopupAnnotationElement) {
                        div.prepend(rendered);
                      } else {
                        __privateMethod(_b = _AnnotationLayer, _AnnotationLayer_static, appendElement_fn).call(_b, rendered, data.id, div, accessibilityManager);
                      }
                    }
                  }
                  __privateMethod(this, _AnnotationLayer_static, setAnnotationCanvasMap_fn).call(this, div, params.annotationCanvasMap);
                }
                static update(params) {
                  const {
                    annotationCanvasMap,
                    div,
                    viewport
                  } = params;
                  (0, _display_utils2.setLayerDimensions)(div, {
                    rotation: viewport.rotation
                  });
                  __privateMethod(this, _AnnotationLayer_static, setAnnotationCanvasMap_fn).call(this, div, annotationCanvasMap);
                  div.hidden = false;
                }
              };
              _AnnotationLayer_static = new WeakSet();
              appendElement_fn = function(element, id, div, accessibilityManager) {
                const contentElement = element.firstChild || element;
                contentElement.id = `${_display_utils2.AnnotationPrefix}${id}`;
                div.append(element);
                accessibilityManager == null ? void 0 : accessibilityManager.moveElementInDOM(div, element, contentElement, false);
              };
              setAnnotationCanvasMap_fn = function(div, annotationCanvasMap) {
                if (!annotationCanvasMap) {
                  return;
                }
                for (const [id, canvas] of annotationCanvasMap) {
                  const element = div.querySelector(`[data-annotation-id="${id}"]`);
                  if (!element) {
                    continue;
                  }
                  const {
                    firstChild
                  } = element;
                  if (!firstChild) {
                    element.append(canvas);
                  } else if (firstChild.nodeName === "CANVAS") {
                    firstChild.replaceWith(canvas);
                  } else {
                    firstChild.before(canvas);
                  }
                }
                annotationCanvasMap.clear();
              };
              __privateAdd(_AnnotationLayer, _AnnotationLayer_static);
              let AnnotationLayer = _AnnotationLayer;
              exports2.AnnotationLayer = AnnotationLayer;
            },
            /* 33 */
            /***/
            (__unused_webpack_module2, exports2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.ColorConverters = void 0;
              function makeColorComp(n) {
                return Math.floor(Math.max(0, Math.min(1, n)) * 255).toString(16).padStart(2, "0");
              }
              class ColorConverters {
                static CMYK_G([c, y, m, k]) {
                  return ["G", 1 - Math.min(1, 0.3 * c + 0.59 * m + 0.11 * y + k)];
                }
                static G_CMYK([g]) {
                  return ["CMYK", 0, 0, 0, 1 - g];
                }
                static G_RGB([g]) {
                  return ["RGB", g, g, g];
                }
                static G_HTML([g]) {
                  const G = makeColorComp(g);
                  return `#${G}${G}${G}`;
                }
                static RGB_G([r, g, b]) {
                  return ["G", 0.3 * r + 0.59 * g + 0.11 * b];
                }
                static RGB_HTML([r, g, b]) {
                  const R = makeColorComp(r);
                  const G = makeColorComp(g);
                  const B = makeColorComp(b);
                  return `#${R}${G}${B}`;
                }
                static T_HTML() {
                  return "#00000000";
                }
                static CMYK_RGB([c, y, m, k]) {
                  return ["RGB", 1 - Math.min(1, c + k), 1 - Math.min(1, m + k), 1 - Math.min(1, y + k)];
                }
                static CMYK_HTML(components) {
                  const rgb = this.CMYK_RGB(components).slice(1);
                  return this.RGB_HTML(rgb);
                }
                static RGB_CMYK([r, g, b]) {
                  const c = 1 - r;
                  const m = 1 - g;
                  const y = 1 - b;
                  const k = Math.min(c, m, y);
                  return ["CMYK", c, m, y, k];
                }
              }
              exports2.ColorConverters = ColorConverters;
            },
            /* 34 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.XfaLayer = void 0;
              var _xfa_text2 = __w_pdfjs_require__2(19);
              class XfaLayer {
                static setupStorage(html, id, element, storage, intent) {
                  const storedData = storage.getValue(id, {
                    value: null
                  });
                  switch (element.name) {
                    case "textarea":
                      if (storedData.value !== null) {
                        html.textContent = storedData.value;
                      }
                      if (intent === "print") {
                        break;
                      }
                      html.addEventListener("input", (event) => {
                        storage.setValue(id, {
                          value: event.target.value
                        });
                      });
                      break;
                    case "input":
                      if (element.attributes.type === "radio" || element.attributes.type === "checkbox") {
                        if (storedData.value === element.attributes.xfaOn) {
                          html.setAttribute("checked", true);
                        } else if (storedData.value === element.attributes.xfaOff) {
                          html.removeAttribute("checked");
                        }
                        if (intent === "print") {
                          break;
                        }
                        html.addEventListener("change", (event) => {
                          storage.setValue(id, {
                            value: event.target.checked ? event.target.getAttribute("xfaOn") : event.target.getAttribute("xfaOff")
                          });
                        });
                      } else {
                        if (storedData.value !== null) {
                          html.setAttribute("value", storedData.value);
                        }
                        if (intent === "print") {
                          break;
                        }
                        html.addEventListener("input", (event) => {
                          storage.setValue(id, {
                            value: event.target.value
                          });
                        });
                      }
                      break;
                    case "select":
                      if (storedData.value !== null) {
                        for (const option of element.children) {
                          if (option.attributes.value === storedData.value) {
                            option.attributes.selected = true;
                          }
                        }
                      }
                      html.addEventListener("input", (event) => {
                        const options = event.target.options;
                        const value = options.selectedIndex === -1 ? "" : options[options.selectedIndex].value;
                        storage.setValue(id, {
                          value
                        });
                      });
                      break;
                  }
                }
                static setAttributes({
                  html,
                  element,
                  storage = null,
                  intent,
                  linkService
                }) {
                  const {
                    attributes
                  } = element;
                  const isHTMLAnchorElement = html instanceof HTMLAnchorElement;
                  if (attributes.type === "radio") {
                    attributes.name = `${attributes.name}-${intent}`;
                  }
                  for (const [key, value] of Object.entries(attributes)) {
                    if (value === null || value === void 0) {
                      continue;
                    }
                    switch (key) {
                      case "class":
                        if (value.length) {
                          html.setAttribute(key, value.join(" "));
                        }
                        break;
                      case "dataId":
                        break;
                      case "id":
                        html.setAttribute("data-element-id", value);
                        break;
                      case "style":
                        Object.assign(html.style, value);
                        break;
                      case "textContent":
                        html.textContent = value;
                        break;
                      default:
                        if (!isHTMLAnchorElement || key !== "href" && key !== "newWindow") {
                          html.setAttribute(key, value);
                        }
                    }
                  }
                  if (isHTMLAnchorElement) {
                    linkService.addLinkAttributes(html, attributes.href, attributes.newWindow);
                  }
                  if (storage && attributes.dataId) {
                    this.setupStorage(html, attributes.dataId, element, storage);
                  }
                }
                static render(parameters) {
                  var _a;
                  const storage = parameters.annotationStorage;
                  const linkService = parameters.linkService;
                  const root = parameters.xfaHtml;
                  const intent = parameters.intent || "display";
                  const rootHtml = document.createElement(root.name);
                  if (root.attributes) {
                    this.setAttributes({
                      html: rootHtml,
                      element: root,
                      intent,
                      linkService
                    });
                  }
                  const stack = [[root, -1, rootHtml]];
                  const rootDiv = parameters.div;
                  rootDiv.append(rootHtml);
                  if (parameters.viewport) {
                    const transform = `matrix(${parameters.viewport.transform.join(",")})`;
                    rootDiv.style.transform = transform;
                  }
                  if (intent !== "richText") {
                    rootDiv.setAttribute("class", "xfaLayer xfaFont");
                  }
                  const textDivs = [];
                  while (stack.length > 0) {
                    const [parent, i, html] = stack.at(-1);
                    if (i + 1 === parent.children.length) {
                      stack.pop();
                      continue;
                    }
                    const child = parent.children[++stack.at(-1)[1]];
                    if (child === null) {
                      continue;
                    }
                    const {
                      name
                    } = child;
                    if (name === "#text") {
                      const node = document.createTextNode(child.value);
                      textDivs.push(node);
                      html.append(node);
                      continue;
                    }
                    let childHtml;
                    if ((_a = child == null ? void 0 : child.attributes) == null ? void 0 : _a.xmlns) {
                      childHtml = document.createElementNS(child.attributes.xmlns, name);
                    } else {
                      childHtml = document.createElement(name);
                    }
                    html.append(childHtml);
                    if (child.attributes) {
                      this.setAttributes({
                        html: childHtml,
                        element: child,
                        storage,
                        intent,
                        linkService
                      });
                    }
                    if (child.children && child.children.length > 0) {
                      stack.push([child, -1, childHtml]);
                    } else if (child.value) {
                      const node = document.createTextNode(child.value);
                      if (_xfa_text2.XfaText.shouldBuildText(name)) {
                        textDivs.push(node);
                      }
                      childHtml.append(node);
                    }
                  }
                  for (const el of rootDiv.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")) {
                    el.setAttribute("readOnly", true);
                  }
                  return {
                    textDivs
                  };
                }
                static update(parameters) {
                  const transform = `matrix(${parameters.viewport.transform.join(",")})`;
                  parameters.div.style.transform = transform;
                  parameters.div.hidden = false;
                }
              }
              exports2.XfaLayer = XfaLayer;
            },
            /* 35 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.SVGGraphics = void 0;
              var _display_utils2 = __w_pdfjs_require__2(6);
              var _util2 = __w_pdfjs_require__2(1);
              var _is_node2 = __w_pdfjs_require__2(10);
              let SVGGraphics = class {
                constructor() {
                  (0, _util2.unreachable)("Not implemented: SVGGraphics");
                }
              };
              exports2.SVGGraphics = SVGGraphics;
              {
                let opListToTree = function(opList) {
                  let opTree = [];
                  const tmp = [];
                  for (const opListElement of opList) {
                    if (opListElement.fn === "save") {
                      opTree.push({
                        fnId: 92,
                        fn: "group",
                        items: []
                      });
                      tmp.push(opTree);
                      opTree = opTree.at(-1).items;
                      continue;
                    }
                    if (opListElement.fn === "restore") {
                      opTree = tmp.pop();
                    } else {
                      opTree.push(opListElement);
                    }
                  }
                  return opTree;
                }, pf = function(value) {
                  if (Number.isInteger(value)) {
                    return value.toString();
                  }
                  const s = value.toFixed(10);
                  let i = s.length - 1;
                  if (s[i] !== "0") {
                    return s;
                  }
                  do {
                    i--;
                  } while (s[i] === "0");
                  return s.substring(0, s[i] === "." ? i : i + 1);
                }, pm = function(m) {
                  if (m[4] === 0 && m[5] === 0) {
                    if (m[1] === 0 && m[2] === 0) {
                      if (m[0] === 1 && m[3] === 1) {
                        return "";
                      }
                      return `scale(${pf(m[0])} ${pf(m[3])})`;
                    }
                    if (m[0] === m[3] && m[1] === -m[2]) {
                      const a = Math.acos(m[0]) * 180 / Math.PI;
                      return `rotate(${pf(a)})`;
                    }
                  } else {
                    if (m[0] === 1 && m[1] === 0 && m[2] === 0 && m[3] === 1) {
                      return `translate(${pf(m[4])} ${pf(m[5])})`;
                    }
                  }
                  return `matrix(${pf(m[0])} ${pf(m[1])} ${pf(m[2])} ${pf(m[3])} ${pf(m[4])} ${pf(m[5])})`;
                };
                const SVG_DEFAULTS = {
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fillColor: "#000000"
                };
                const XML_NS = "http://www.w3.org/XML/1998/namespace";
                const XLINK_NS = "http://www.w3.org/1999/xlink";
                const LINE_CAP_STYLES = ["butt", "round", "square"];
                const LINE_JOIN_STYLES = ["miter", "round", "bevel"];
                const createObjectURL = function(data, contentType = "", forceDataSchema = false) {
                  if (URL.createObjectURL && typeof Blob !== "undefined" && !forceDataSchema) {
                    return URL.createObjectURL(new Blob([data], {
                      type: contentType
                    }));
                  }
                  const digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                  let buffer = `data:${contentType};base64,`;
                  for (let i = 0, ii = data.length; i < ii; i += 3) {
                    const b1 = data[i] & 255;
                    const b2 = data[i + 1] & 255;
                    const b3 = data[i + 2] & 255;
                    const d1 = b1 >> 2, d2 = (b1 & 3) << 4 | b2 >> 4;
                    const d3 = i + 1 < ii ? (b2 & 15) << 2 | b3 >> 6 : 64;
                    const d4 = i + 2 < ii ? b3 & 63 : 64;
                    buffer += digits[d1] + digits[d2] + digits[d3] + digits[d4];
                  }
                  return buffer;
                };
                const convertImgDataToPng = function() {
                  const PNG_HEADER = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]);
                  const CHUNK_WRAPPER_SIZE = 12;
                  const crcTable = new Int32Array(256);
                  for (let i = 0; i < 256; i++) {
                    let c = i;
                    for (let h = 0; h < 8; h++) {
                      if (c & 1) {
                        c = 3988292384 ^ c >> 1 & 2147483647;
                      } else {
                        c = c >> 1 & 2147483647;
                      }
                    }
                    crcTable[i] = c;
                  }
                  function crc32(data, start, end) {
                    let crc = -1;
                    for (let i = start; i < end; i++) {
                      const a = (crc ^ data[i]) & 255;
                      const b = crcTable[a];
                      crc = crc >>> 8 ^ b;
                    }
                    return crc ^ -1;
                  }
                  function writePngChunk(type, body, data, offset) {
                    let p = offset;
                    const len = body.length;
                    data[p] = len >> 24 & 255;
                    data[p + 1] = len >> 16 & 255;
                    data[p + 2] = len >> 8 & 255;
                    data[p + 3] = len & 255;
                    p += 4;
                    data[p] = type.charCodeAt(0) & 255;
                    data[p + 1] = type.charCodeAt(1) & 255;
                    data[p + 2] = type.charCodeAt(2) & 255;
                    data[p + 3] = type.charCodeAt(3) & 255;
                    p += 4;
                    data.set(body, p);
                    p += body.length;
                    const crc = crc32(data, offset + 4, p);
                    data[p] = crc >> 24 & 255;
                    data[p + 1] = crc >> 16 & 255;
                    data[p + 2] = crc >> 8 & 255;
                    data[p + 3] = crc & 255;
                  }
                  function adler32(data, start, end) {
                    let a = 1;
                    let b = 0;
                    for (let i = start; i < end; ++i) {
                      a = (a + (data[i] & 255)) % 65521;
                      b = (b + a) % 65521;
                    }
                    return b << 16 | a;
                  }
                  function deflateSync(literals) {
                    if (!_is_node2.isNodeJS) {
                      return deflateSyncUncompressed(literals);
                    }
                    try {
                      let input;
                      if (parseInt(process.versions.node) >= 8) {
                        input = literals;
                      } else {
                        input = Buffer.from(literals);
                      }
                      const output = require_zlib().deflateSync(input, {
                        level: 9
                      });
                      return output instanceof Uint8Array ? output : new Uint8Array(output);
                    } catch (e) {
                      (0, _util2.warn)("Not compressing PNG because zlib.deflateSync is unavailable: " + e);
                    }
                    return deflateSyncUncompressed(literals);
                  }
                  function deflateSyncUncompressed(literals) {
                    let len = literals.length;
                    const maxBlockLength = 65535;
                    const deflateBlocks = Math.ceil(len / maxBlockLength);
                    const idat = new Uint8Array(2 + len + deflateBlocks * 5 + 4);
                    let pi = 0;
                    idat[pi++] = 120;
                    idat[pi++] = 156;
                    let pos = 0;
                    while (len > maxBlockLength) {
                      idat[pi++] = 0;
                      idat[pi++] = 255;
                      idat[pi++] = 255;
                      idat[pi++] = 0;
                      idat[pi++] = 0;
                      idat.set(literals.subarray(pos, pos + maxBlockLength), pi);
                      pi += maxBlockLength;
                      pos += maxBlockLength;
                      len -= maxBlockLength;
                    }
                    idat[pi++] = 1;
                    idat[pi++] = len & 255;
                    idat[pi++] = len >> 8 & 255;
                    idat[pi++] = ~len & 65535 & 255;
                    idat[pi++] = (~len & 65535) >> 8 & 255;
                    idat.set(literals.subarray(pos), pi);
                    pi += literals.length - pos;
                    const adler = adler32(literals, 0, literals.length);
                    idat[pi++] = adler >> 24 & 255;
                    idat[pi++] = adler >> 16 & 255;
                    idat[pi++] = adler >> 8 & 255;
                    idat[pi++] = adler & 255;
                    return idat;
                  }
                  function encode(imgData, kind, forceDataSchema, isMask) {
                    const width = imgData.width;
                    const height = imgData.height;
                    let bitDepth, colorType, lineSize;
                    const bytes = imgData.data;
                    switch (kind) {
                      case _util2.ImageKind.GRAYSCALE_1BPP:
                        colorType = 0;
                        bitDepth = 1;
                        lineSize = width + 7 >> 3;
                        break;
                      case _util2.ImageKind.RGB_24BPP:
                        colorType = 2;
                        bitDepth = 8;
                        lineSize = width * 3;
                        break;
                      case _util2.ImageKind.RGBA_32BPP:
                        colorType = 6;
                        bitDepth = 8;
                        lineSize = width * 4;
                        break;
                      default:
                        throw new Error("invalid format");
                    }
                    const literals = new Uint8Array((1 + lineSize) * height);
                    let offsetLiterals = 0, offsetBytes = 0;
                    for (let y = 0; y < height; ++y) {
                      literals[offsetLiterals++] = 0;
                      literals.set(bytes.subarray(offsetBytes, offsetBytes + lineSize), offsetLiterals);
                      offsetBytes += lineSize;
                      offsetLiterals += lineSize;
                    }
                    if (kind === _util2.ImageKind.GRAYSCALE_1BPP && isMask) {
                      offsetLiterals = 0;
                      for (let y = 0; y < height; y++) {
                        offsetLiterals++;
                        for (let i = 0; i < lineSize; i++) {
                          literals[offsetLiterals++] ^= 255;
                        }
                      }
                    }
                    const ihdr = new Uint8Array([width >> 24 & 255, width >> 16 & 255, width >> 8 & 255, width & 255, height >> 24 & 255, height >> 16 & 255, height >> 8 & 255, height & 255, bitDepth, colorType, 0, 0, 0]);
                    const idat = deflateSync(literals);
                    const pngLength = PNG_HEADER.length + CHUNK_WRAPPER_SIZE * 3 + ihdr.length + idat.length;
                    const data = new Uint8Array(pngLength);
                    let offset = 0;
                    data.set(PNG_HEADER, offset);
                    offset += PNG_HEADER.length;
                    writePngChunk("IHDR", ihdr, data, offset);
                    offset += CHUNK_WRAPPER_SIZE + ihdr.length;
                    writePngChunk("IDATA", idat, data, offset);
                    offset += CHUNK_WRAPPER_SIZE + idat.length;
                    writePngChunk("IEND", new Uint8Array(0), data, offset);
                    return createObjectURL(data, "image/png", forceDataSchema);
                  }
                  return function convertImgDataToPng2(imgData, forceDataSchema, isMask) {
                    const kind = imgData.kind === void 0 ? _util2.ImageKind.GRAYSCALE_1BPP : imgData.kind;
                    return encode(imgData, kind, forceDataSchema, isMask);
                  };
                }();
                class SVGExtraState {
                  constructor() {
                    this.fontSizeScale = 1;
                    this.fontWeight = SVG_DEFAULTS.fontWeight;
                    this.fontSize = 0;
                    this.textMatrix = _util2.IDENTITY_MATRIX;
                    this.fontMatrix = _util2.FONT_IDENTITY_MATRIX;
                    this.leading = 0;
                    this.textRenderingMode = _util2.TextRenderingMode.FILL;
                    this.textMatrixScale = 1;
                    this.x = 0;
                    this.y = 0;
                    this.lineX = 0;
                    this.lineY = 0;
                    this.charSpacing = 0;
                    this.wordSpacing = 0;
                    this.textHScale = 1;
                    this.textRise = 0;
                    this.fillColor = SVG_DEFAULTS.fillColor;
                    this.strokeColor = "#000000";
                    this.fillAlpha = 1;
                    this.strokeAlpha = 1;
                    this.lineWidth = 1;
                    this.lineJoin = "";
                    this.lineCap = "";
                    this.miterLimit = 0;
                    this.dashArray = [];
                    this.dashPhase = 0;
                    this.dependencies = [];
                    this.activeClipUrl = null;
                    this.clipGroup = null;
                    this.maskId = "";
                  }
                  clone() {
                    return Object.create(this);
                  }
                  setCurrentPoint(x, y) {
                    this.x = x;
                    this.y = y;
                  }
                }
                let clipCount = 0;
                let maskCount = 0;
                let shadingCount = 0;
                exports2.SVGGraphics = SVGGraphics = class {
                  constructor(commonObjs, objs, forceDataSchema = false) {
                    (0, _display_utils2.deprecated)("The SVG back-end is no longer maintained and *may* be removed in the future.");
                    this.svgFactory = new _display_utils2.DOMSVGFactory();
                    this.current = new SVGExtraState();
                    this.transformMatrix = _util2.IDENTITY_MATRIX;
                    this.transformStack = [];
                    this.extraStack = [];
                    this.commonObjs = commonObjs;
                    this.objs = objs;
                    this.pendingClip = null;
                    this.pendingEOFill = false;
                    this.embedFonts = false;
                    this.embeddedFonts = /* @__PURE__ */ Object.create(null);
                    this.cssStyle = null;
                    this.forceDataSchema = !!forceDataSchema;
                    this._operatorIdMapping = [];
                    for (const op in _util2.OPS) {
                      this._operatorIdMapping[_util2.OPS[op]] = op;
                    }
                  }
                  getObject(data, fallback = null) {
                    if (typeof data === "string") {
                      return data.startsWith("g_") ? this.commonObjs.get(data) : this.objs.get(data);
                    }
                    return fallback;
                  }
                  save() {
                    this.transformStack.push(this.transformMatrix);
                    const old = this.current;
                    this.extraStack.push(old);
                    this.current = old.clone();
                  }
                  restore() {
                    this.transformMatrix = this.transformStack.pop();
                    this.current = this.extraStack.pop();
                    this.pendingClip = null;
                    this.tgrp = null;
                  }
                  group(items) {
                    this.save();
                    this.executeOpTree(items);
                    this.restore();
                  }
                  loadDependencies(operatorList) {
                    const fnArray = operatorList.fnArray;
                    const argsArray = operatorList.argsArray;
                    for (let i = 0, ii = fnArray.length; i < ii; i++) {
                      if (fnArray[i] !== _util2.OPS.dependency) {
                        continue;
                      }
                      for (const obj of argsArray[i]) {
                        const objsPool = obj.startsWith("g_") ? this.commonObjs : this.objs;
                        const promise = new Promise((resolve) => {
                          objsPool.get(obj, resolve);
                        });
                        this.current.dependencies.push(promise);
                      }
                    }
                    return Promise.all(this.current.dependencies);
                  }
                  transform(a, b, c, d, e, f) {
                    const transformMatrix = [a, b, c, d, e, f];
                    this.transformMatrix = _util2.Util.transform(this.transformMatrix, transformMatrix);
                    this.tgrp = null;
                  }
                  getSVG(operatorList, viewport) {
                    this.viewport = viewport;
                    const svgElement = this._initialize(viewport);
                    return this.loadDependencies(operatorList).then(() => {
                      this.transformMatrix = _util2.IDENTITY_MATRIX;
                      this.executeOpTree(this.convertOpList(operatorList));
                      return svgElement;
                    });
                  }
                  convertOpList(operatorList) {
                    const operatorIdMapping = this._operatorIdMapping;
                    const argsArray = operatorList.argsArray;
                    const fnArray = operatorList.fnArray;
                    const opList = [];
                    for (let i = 0, ii = fnArray.length; i < ii; i++) {
                      const fnId = fnArray[i];
                      opList.push({
                        fnId,
                        fn: operatorIdMapping[fnId],
                        args: argsArray[i]
                      });
                    }
                    return opListToTree(opList);
                  }
                  executeOpTree(opTree) {
                    for (const opTreeElement of opTree) {
                      const fn = opTreeElement.fn;
                      const fnId = opTreeElement.fnId;
                      const args = opTreeElement.args;
                      switch (fnId | 0) {
                        case _util2.OPS.beginText:
                          this.beginText();
                          break;
                        case _util2.OPS.dependency:
                          break;
                        case _util2.OPS.setLeading:
                          this.setLeading(args);
                          break;
                        case _util2.OPS.setLeadingMoveText:
                          this.setLeadingMoveText(args[0], args[1]);
                          break;
                        case _util2.OPS.setFont:
                          this.setFont(args);
                          break;
                        case _util2.OPS.showText:
                          this.showText(args[0]);
                          break;
                        case _util2.OPS.showSpacedText:
                          this.showText(args[0]);
                          break;
                        case _util2.OPS.endText:
                          this.endText();
                          break;
                        case _util2.OPS.moveText:
                          this.moveText(args[0], args[1]);
                          break;
                        case _util2.OPS.setCharSpacing:
                          this.setCharSpacing(args[0]);
                          break;
                        case _util2.OPS.setWordSpacing:
                          this.setWordSpacing(args[0]);
                          break;
                        case _util2.OPS.setHScale:
                          this.setHScale(args[0]);
                          break;
                        case _util2.OPS.setTextMatrix:
                          this.setTextMatrix(args[0], args[1], args[2], args[3], args[4], args[5]);
                          break;
                        case _util2.OPS.setTextRise:
                          this.setTextRise(args[0]);
                          break;
                        case _util2.OPS.setTextRenderingMode:
                          this.setTextRenderingMode(args[0]);
                          break;
                        case _util2.OPS.setLineWidth:
                          this.setLineWidth(args[0]);
                          break;
                        case _util2.OPS.setLineJoin:
                          this.setLineJoin(args[0]);
                          break;
                        case _util2.OPS.setLineCap:
                          this.setLineCap(args[0]);
                          break;
                        case _util2.OPS.setMiterLimit:
                          this.setMiterLimit(args[0]);
                          break;
                        case _util2.OPS.setFillRGBColor:
                          this.setFillRGBColor(args[0], args[1], args[2]);
                          break;
                        case _util2.OPS.setStrokeRGBColor:
                          this.setStrokeRGBColor(args[0], args[1], args[2]);
                          break;
                        case _util2.OPS.setStrokeColorN:
                          this.setStrokeColorN(args);
                          break;
                        case _util2.OPS.setFillColorN:
                          this.setFillColorN(args);
                          break;
                        case _util2.OPS.shadingFill:
                          this.shadingFill(args[0]);
                          break;
                        case _util2.OPS.setDash:
                          this.setDash(args[0], args[1]);
                          break;
                        case _util2.OPS.setRenderingIntent:
                          this.setRenderingIntent(args[0]);
                          break;
                        case _util2.OPS.setFlatness:
                          this.setFlatness(args[0]);
                          break;
                        case _util2.OPS.setGState:
                          this.setGState(args[0]);
                          break;
                        case _util2.OPS.fill:
                          this.fill();
                          break;
                        case _util2.OPS.eoFill:
                          this.eoFill();
                          break;
                        case _util2.OPS.stroke:
                          this.stroke();
                          break;
                        case _util2.OPS.fillStroke:
                          this.fillStroke();
                          break;
                        case _util2.OPS.eoFillStroke:
                          this.eoFillStroke();
                          break;
                        case _util2.OPS.clip:
                          this.clip("nonzero");
                          break;
                        case _util2.OPS.eoClip:
                          this.clip("evenodd");
                          break;
                        case _util2.OPS.paintSolidColorImageMask:
                          this.paintSolidColorImageMask();
                          break;
                        case _util2.OPS.paintImageXObject:
                          this.paintImageXObject(args[0]);
                          break;
                        case _util2.OPS.paintInlineImageXObject:
                          this.paintInlineImageXObject(args[0]);
                          break;
                        case _util2.OPS.paintImageMaskXObject:
                          this.paintImageMaskXObject(args[0]);
                          break;
                        case _util2.OPS.paintFormXObjectBegin:
                          this.paintFormXObjectBegin(args[0], args[1]);
                          break;
                        case _util2.OPS.paintFormXObjectEnd:
                          this.paintFormXObjectEnd();
                          break;
                        case _util2.OPS.closePath:
                          this.closePath();
                          break;
                        case _util2.OPS.closeStroke:
                          this.closeStroke();
                          break;
                        case _util2.OPS.closeFillStroke:
                          this.closeFillStroke();
                          break;
                        case _util2.OPS.closeEOFillStroke:
                          this.closeEOFillStroke();
                          break;
                        case _util2.OPS.nextLine:
                          this.nextLine();
                          break;
                        case _util2.OPS.transform:
                          this.transform(args[0], args[1], args[2], args[3], args[4], args[5]);
                          break;
                        case _util2.OPS.constructPath:
                          this.constructPath(args[0], args[1]);
                          break;
                        case _util2.OPS.endPath:
                          this.endPath();
                          break;
                        case 92:
                          this.group(opTreeElement.items);
                          break;
                        default:
                          (0, _util2.warn)(`Unimplemented operator ${fn}`);
                          break;
                      }
                    }
                  }
                  setWordSpacing(wordSpacing) {
                    this.current.wordSpacing = wordSpacing;
                  }
                  setCharSpacing(charSpacing) {
                    this.current.charSpacing = charSpacing;
                  }
                  nextLine() {
                    this.moveText(0, this.current.leading);
                  }
                  setTextMatrix(a, b, c, d, e, f) {
                    const current = this.current;
                    current.textMatrix = current.lineMatrix = [a, b, c, d, e, f];
                    current.textMatrixScale = Math.hypot(a, b);
                    current.x = current.lineX = 0;
                    current.y = current.lineY = 0;
                    current.xcoords = [];
                    current.ycoords = [];
                    current.tspan = this.svgFactory.createElement("svg:tspan");
                    current.tspan.setAttributeNS(null, "font-family", current.fontFamily);
                    current.tspan.setAttributeNS(null, "font-size", `${pf(current.fontSize)}px`);
                    current.tspan.setAttributeNS(null, "y", pf(-current.y));
                    current.txtElement = this.svgFactory.createElement("svg:text");
                    current.txtElement.append(current.tspan);
                  }
                  beginText() {
                    const current = this.current;
                    current.x = current.lineX = 0;
                    current.y = current.lineY = 0;
                    current.textMatrix = _util2.IDENTITY_MATRIX;
                    current.lineMatrix = _util2.IDENTITY_MATRIX;
                    current.textMatrixScale = 1;
                    current.tspan = this.svgFactory.createElement("svg:tspan");
                    current.txtElement = this.svgFactory.createElement("svg:text");
                    current.txtgrp = this.svgFactory.createElement("svg:g");
                    current.xcoords = [];
                    current.ycoords = [];
                  }
                  moveText(x, y) {
                    const current = this.current;
                    current.x = current.lineX += x;
                    current.y = current.lineY += y;
                    current.xcoords = [];
                    current.ycoords = [];
                    current.tspan = this.svgFactory.createElement("svg:tspan");
                    current.tspan.setAttributeNS(null, "font-family", current.fontFamily);
                    current.tspan.setAttributeNS(null, "font-size", `${pf(current.fontSize)}px`);
                    current.tspan.setAttributeNS(null, "y", pf(-current.y));
                  }
                  showText(glyphs) {
                    const current = this.current;
                    const font = current.font;
                    const fontSize = current.fontSize;
                    if (fontSize === 0) {
                      return;
                    }
                    const fontSizeScale = current.fontSizeScale;
                    const charSpacing = current.charSpacing;
                    const wordSpacing = current.wordSpacing;
                    const fontDirection = current.fontDirection;
                    const textHScale = current.textHScale * fontDirection;
                    const vertical = font.vertical;
                    const spacingDir = vertical ? 1 : -1;
                    const defaultVMetrics = font.defaultVMetrics;
                    const widthAdvanceScale = fontSize * current.fontMatrix[0];
                    let x = 0;
                    for (const glyph of glyphs) {
                      if (glyph === null) {
                        x += fontDirection * wordSpacing;
                        continue;
                      } else if (typeof glyph === "number") {
                        x += spacingDir * glyph * fontSize / 1e3;
                        continue;
                      }
                      const spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
                      const character = glyph.fontChar;
                      let scaledX, scaledY;
                      let width = glyph.width;
                      if (vertical) {
                        let vx;
                        const vmetric = glyph.vmetric || defaultVMetrics;
                        vx = glyph.vmetric ? vmetric[1] : width * 0.5;
                        vx = -vx * widthAdvanceScale;
                        const vy = vmetric[2] * widthAdvanceScale;
                        width = vmetric ? -vmetric[0] : width;
                        scaledX = vx / fontSizeScale;
                        scaledY = (x + vy) / fontSizeScale;
                      } else {
                        scaledX = x / fontSizeScale;
                        scaledY = 0;
                      }
                      if (glyph.isInFont || font.missingFile) {
                        current.xcoords.push(current.x + scaledX);
                        if (vertical) {
                          current.ycoords.push(-current.y + scaledY);
                        }
                        current.tspan.textContent += character;
                      } else {
                      }
                      let charWidth;
                      if (vertical) {
                        charWidth = width * widthAdvanceScale - spacing * fontDirection;
                      } else {
                        charWidth = width * widthAdvanceScale + spacing * fontDirection;
                      }
                      x += charWidth;
                    }
                    current.tspan.setAttributeNS(null, "x", current.xcoords.map(pf).join(" "));
                    if (vertical) {
                      current.tspan.setAttributeNS(null, "y", current.ycoords.map(pf).join(" "));
                    } else {
                      current.tspan.setAttributeNS(null, "y", pf(-current.y));
                    }
                    if (vertical) {
                      current.y -= x;
                    } else {
                      current.x += x * textHScale;
                    }
                    current.tspan.setAttributeNS(null, "font-family", current.fontFamily);
                    current.tspan.setAttributeNS(null, "font-size", `${pf(current.fontSize)}px`);
                    if (current.fontStyle !== SVG_DEFAULTS.fontStyle) {
                      current.tspan.setAttributeNS(null, "font-style", current.fontStyle);
                    }
                    if (current.fontWeight !== SVG_DEFAULTS.fontWeight) {
                      current.tspan.setAttributeNS(null, "font-weight", current.fontWeight);
                    }
                    const fillStrokeMode = current.textRenderingMode & _util2.TextRenderingMode.FILL_STROKE_MASK;
                    if (fillStrokeMode === _util2.TextRenderingMode.FILL || fillStrokeMode === _util2.TextRenderingMode.FILL_STROKE) {
                      if (current.fillColor !== SVG_DEFAULTS.fillColor) {
                        current.tspan.setAttributeNS(null, "fill", current.fillColor);
                      }
                      if (current.fillAlpha < 1) {
                        current.tspan.setAttributeNS(null, "fill-opacity", current.fillAlpha);
                      }
                    } else if (current.textRenderingMode === _util2.TextRenderingMode.ADD_TO_PATH) {
                      current.tspan.setAttributeNS(null, "fill", "transparent");
                    } else {
                      current.tspan.setAttributeNS(null, "fill", "none");
                    }
                    if (fillStrokeMode === _util2.TextRenderingMode.STROKE || fillStrokeMode === _util2.TextRenderingMode.FILL_STROKE) {
                      const lineWidthScale = 1 / (current.textMatrixScale || 1);
                      this._setStrokeAttributes(current.tspan, lineWidthScale);
                    }
                    let textMatrix = current.textMatrix;
                    if (current.textRise !== 0) {
                      textMatrix = textMatrix.slice();
                      textMatrix[5] += current.textRise;
                    }
                    current.txtElement.setAttributeNS(null, "transform", `${pm(textMatrix)} scale(${pf(textHScale)}, -1)`);
                    current.txtElement.setAttributeNS(XML_NS, "xml:space", "preserve");
                    current.txtElement.append(current.tspan);
                    current.txtgrp.append(current.txtElement);
                    this._ensureTransformGroup().append(current.txtElement);
                  }
                  setLeadingMoveText(x, y) {
                    this.setLeading(-y);
                    this.moveText(x, y);
                  }
                  addFontStyle(fontObj) {
                    if (!fontObj.data) {
                      throw new Error('addFontStyle: No font data available, ensure that the "fontExtraProperties" API parameter is set.');
                    }
                    if (!this.cssStyle) {
                      this.cssStyle = this.svgFactory.createElement("svg:style");
                      this.cssStyle.setAttributeNS(null, "type", "text/css");
                      this.defs.append(this.cssStyle);
                    }
                    const url = createObjectURL(fontObj.data, fontObj.mimetype, this.forceDataSchema);
                    this.cssStyle.textContent += `@font-face { font-family: "${fontObj.loadedName}"; src: url(${url}); }
`;
                  }
                  setFont(details) {
                    const current = this.current;
                    const fontObj = this.commonObjs.get(details[0]);
                    let size = details[1];
                    current.font = fontObj;
                    if (this.embedFonts && !fontObj.missingFile && !this.embeddedFonts[fontObj.loadedName]) {
                      this.addFontStyle(fontObj);
                      this.embeddedFonts[fontObj.loadedName] = fontObj;
                    }
                    current.fontMatrix = fontObj.fontMatrix || _util2.FONT_IDENTITY_MATRIX;
                    let bold = "normal";
                    if (fontObj.black) {
                      bold = "900";
                    } else if (fontObj.bold) {
                      bold = "bold";
                    }
                    const italic = fontObj.italic ? "italic" : "normal";
                    if (size < 0) {
                      size = -size;
                      current.fontDirection = -1;
                    } else {
                      current.fontDirection = 1;
                    }
                    current.fontSize = size;
                    current.fontFamily = fontObj.loadedName;
                    current.fontWeight = bold;
                    current.fontStyle = italic;
                    current.tspan = this.svgFactory.createElement("svg:tspan");
                    current.tspan.setAttributeNS(null, "y", pf(-current.y));
                    current.xcoords = [];
                    current.ycoords = [];
                  }
                  endText() {
                    var _a;
                    const current = this.current;
                    if (current.textRenderingMode & _util2.TextRenderingMode.ADD_TO_PATH_FLAG && ((_a = current.txtElement) == null ? void 0 : _a.hasChildNodes())) {
                      current.element = current.txtElement;
                      this.clip("nonzero");
                      this.endPath();
                    }
                  }
                  setLineWidth(width) {
                    if (width > 0) {
                      this.current.lineWidth = width;
                    }
                  }
                  setLineCap(style) {
                    this.current.lineCap = LINE_CAP_STYLES[style];
                  }
                  setLineJoin(style) {
                    this.current.lineJoin = LINE_JOIN_STYLES[style];
                  }
                  setMiterLimit(limit) {
                    this.current.miterLimit = limit;
                  }
                  setStrokeAlpha(strokeAlpha) {
                    this.current.strokeAlpha = strokeAlpha;
                  }
                  setStrokeRGBColor(r, g, b) {
                    this.current.strokeColor = _util2.Util.makeHexColor(r, g, b);
                  }
                  setFillAlpha(fillAlpha) {
                    this.current.fillAlpha = fillAlpha;
                  }
                  setFillRGBColor(r, g, b) {
                    this.current.fillColor = _util2.Util.makeHexColor(r, g, b);
                    this.current.tspan = this.svgFactory.createElement("svg:tspan");
                    this.current.xcoords = [];
                    this.current.ycoords = [];
                  }
                  setStrokeColorN(args) {
                    this.current.strokeColor = this._makeColorN_Pattern(args);
                  }
                  setFillColorN(args) {
                    this.current.fillColor = this._makeColorN_Pattern(args);
                  }
                  shadingFill(args) {
                    const width = this.viewport.width;
                    const height = this.viewport.height;
                    const inv = _util2.Util.inverseTransform(this.transformMatrix);
                    const bl = _util2.Util.applyTransform([0, 0], inv);
                    const br = _util2.Util.applyTransform([0, height], inv);
                    const ul = _util2.Util.applyTransform([width, 0], inv);
                    const ur = _util2.Util.applyTransform([width, height], inv);
                    const x0 = Math.min(bl[0], br[0], ul[0], ur[0]);
                    const y0 = Math.min(bl[1], br[1], ul[1], ur[1]);
                    const x1 = Math.max(bl[0], br[0], ul[0], ur[0]);
                    const y1 = Math.max(bl[1], br[1], ul[1], ur[1]);
                    const rect = this.svgFactory.createElement("svg:rect");
                    rect.setAttributeNS(null, "x", x0);
                    rect.setAttributeNS(null, "y", y0);
                    rect.setAttributeNS(null, "width", x1 - x0);
                    rect.setAttributeNS(null, "height", y1 - y0);
                    rect.setAttributeNS(null, "fill", this._makeShadingPattern(args));
                    if (this.current.fillAlpha < 1) {
                      rect.setAttributeNS(null, "fill-opacity", this.current.fillAlpha);
                    }
                    this._ensureTransformGroup().append(rect);
                  }
                  _makeColorN_Pattern(args) {
                    if (args[0] === "TilingPattern") {
                      return this._makeTilingPattern(args);
                    }
                    return this._makeShadingPattern(args);
                  }
                  _makeTilingPattern(args) {
                    const color = args[1];
                    const operatorList = args[2];
                    const matrix = args[3] || _util2.IDENTITY_MATRIX;
                    const [x0, y0, x1, y1] = args[4];
                    const xstep = args[5];
                    const ystep = args[6];
                    const paintType = args[7];
                    const tilingId = `shading${shadingCount++}`;
                    const [tx0, ty0, tx1, ty1] = _util2.Util.normalizeRect([..._util2.Util.applyTransform([x0, y0], matrix), ..._util2.Util.applyTransform([x1, y1], matrix)]);
                    const [xscale, yscale] = _util2.Util.singularValueDecompose2dScale(matrix);
                    const txstep = xstep * xscale;
                    const tystep = ystep * yscale;
                    const tiling = this.svgFactory.createElement("svg:pattern");
                    tiling.setAttributeNS(null, "id", tilingId);
                    tiling.setAttributeNS(null, "patternUnits", "userSpaceOnUse");
                    tiling.setAttributeNS(null, "width", txstep);
                    tiling.setAttributeNS(null, "height", tystep);
                    tiling.setAttributeNS(null, "x", `${tx0}`);
                    tiling.setAttributeNS(null, "y", `${ty0}`);
                    const svg = this.svg;
                    const transformMatrix = this.transformMatrix;
                    const fillColor = this.current.fillColor;
                    const strokeColor = this.current.strokeColor;
                    const bbox = this.svgFactory.create(tx1 - tx0, ty1 - ty0);
                    this.svg = bbox;
                    this.transformMatrix = matrix;
                    if (paintType === 2) {
                      const cssColor = _util2.Util.makeHexColor(...color);
                      this.current.fillColor = cssColor;
                      this.current.strokeColor = cssColor;
                    }
                    this.executeOpTree(this.convertOpList(operatorList));
                    this.svg = svg;
                    this.transformMatrix = transformMatrix;
                    this.current.fillColor = fillColor;
                    this.current.strokeColor = strokeColor;
                    tiling.append(bbox.childNodes[0]);
                    this.defs.append(tiling);
                    return `url(#${tilingId})`;
                  }
                  _makeShadingPattern(args) {
                    if (typeof args === "string") {
                      args = this.objs.get(args);
                    }
                    switch (args[0]) {
                      case "RadialAxial":
                        const shadingId = `shading${shadingCount++}`;
                        const colorStops = args[3];
                        let gradient;
                        switch (args[1]) {
                          case "axial":
                            const point0 = args[4];
                            const point1 = args[5];
                            gradient = this.svgFactory.createElement("svg:linearGradient");
                            gradient.setAttributeNS(null, "id", shadingId);
                            gradient.setAttributeNS(null, "gradientUnits", "userSpaceOnUse");
                            gradient.setAttributeNS(null, "x1", point0[0]);
                            gradient.setAttributeNS(null, "y1", point0[1]);
                            gradient.setAttributeNS(null, "x2", point1[0]);
                            gradient.setAttributeNS(null, "y2", point1[1]);
                            break;
                          case "radial":
                            const focalPoint = args[4];
                            const circlePoint = args[5];
                            const focalRadius = args[6];
                            const circleRadius = args[7];
                            gradient = this.svgFactory.createElement("svg:radialGradient");
                            gradient.setAttributeNS(null, "id", shadingId);
                            gradient.setAttributeNS(null, "gradientUnits", "userSpaceOnUse");
                            gradient.setAttributeNS(null, "cx", circlePoint[0]);
                            gradient.setAttributeNS(null, "cy", circlePoint[1]);
                            gradient.setAttributeNS(null, "r", circleRadius);
                            gradient.setAttributeNS(null, "fx", focalPoint[0]);
                            gradient.setAttributeNS(null, "fy", focalPoint[1]);
                            gradient.setAttributeNS(null, "fr", focalRadius);
                            break;
                          default:
                            throw new Error(`Unknown RadialAxial type: ${args[1]}`);
                        }
                        for (const colorStop of colorStops) {
                          const stop = this.svgFactory.createElement("svg:stop");
                          stop.setAttributeNS(null, "offset", colorStop[0]);
                          stop.setAttributeNS(null, "stop-color", colorStop[1]);
                          gradient.append(stop);
                        }
                        this.defs.append(gradient);
                        return `url(#${shadingId})`;
                      case "Mesh":
                        (0, _util2.warn)("Unimplemented pattern Mesh");
                        return null;
                      case "Dummy":
                        return "hotpink";
                      default:
                        throw new Error(`Unknown IR type: ${args[0]}`);
                    }
                  }
                  setDash(dashArray, dashPhase) {
                    this.current.dashArray = dashArray;
                    this.current.dashPhase = dashPhase;
                  }
                  constructPath(ops, args) {
                    const current = this.current;
                    let x = current.x, y = current.y;
                    let d = [];
                    let j = 0;
                    for (const op of ops) {
                      switch (op | 0) {
                        case _util2.OPS.rectangle:
                          x = args[j++];
                          y = args[j++];
                          const width = args[j++];
                          const height = args[j++];
                          const xw = x + width;
                          const yh = y + height;
                          d.push("M", pf(x), pf(y), "L", pf(xw), pf(y), "L", pf(xw), pf(yh), "L", pf(x), pf(yh), "Z");
                          break;
                        case _util2.OPS.moveTo:
                          x = args[j++];
                          y = args[j++];
                          d.push("M", pf(x), pf(y));
                          break;
                        case _util2.OPS.lineTo:
                          x = args[j++];
                          y = args[j++];
                          d.push("L", pf(x), pf(y));
                          break;
                        case _util2.OPS.curveTo:
                          x = args[j + 4];
                          y = args[j + 5];
                          d.push("C", pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]), pf(x), pf(y));
                          j += 6;
                          break;
                        case _util2.OPS.curveTo2:
                          d.push("C", pf(x), pf(y), pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]));
                          x = args[j + 2];
                          y = args[j + 3];
                          j += 4;
                          break;
                        case _util2.OPS.curveTo3:
                          x = args[j + 2];
                          y = args[j + 3];
                          d.push("C", pf(args[j]), pf(args[j + 1]), pf(x), pf(y), pf(x), pf(y));
                          j += 4;
                          break;
                        case _util2.OPS.closePath:
                          d.push("Z");
                          break;
                      }
                    }
                    d = d.join(" ");
                    if (current.path && ops.length > 0 && ops[0] !== _util2.OPS.rectangle && ops[0] !== _util2.OPS.moveTo) {
                      d = current.path.getAttributeNS(null, "d") + d;
                    } else {
                      current.path = this.svgFactory.createElement("svg:path");
                      this._ensureTransformGroup().append(current.path);
                    }
                    current.path.setAttributeNS(null, "d", d);
                    current.path.setAttributeNS(null, "fill", "none");
                    current.element = current.path;
                    current.setCurrentPoint(x, y);
                  }
                  endPath() {
                    const current = this.current;
                    current.path = null;
                    if (!this.pendingClip) {
                      return;
                    }
                    if (!current.element) {
                      this.pendingClip = null;
                      return;
                    }
                    const clipId = `clippath${clipCount++}`;
                    const clipPath = this.svgFactory.createElement("svg:clipPath");
                    clipPath.setAttributeNS(null, "id", clipId);
                    clipPath.setAttributeNS(null, "transform", pm(this.transformMatrix));
                    const clipElement = current.element.cloneNode(true);
                    if (this.pendingClip === "evenodd") {
                      clipElement.setAttributeNS(null, "clip-rule", "evenodd");
                    } else {
                      clipElement.setAttributeNS(null, "clip-rule", "nonzero");
                    }
                    this.pendingClip = null;
                    clipPath.append(clipElement);
                    this.defs.append(clipPath);
                    if (current.activeClipUrl) {
                      current.clipGroup = null;
                      for (const prev of this.extraStack) {
                        prev.clipGroup = null;
                      }
                      clipPath.setAttributeNS(null, "clip-path", current.activeClipUrl);
                    }
                    current.activeClipUrl = `url(#${clipId})`;
                    this.tgrp = null;
                  }
                  clip(type) {
                    this.pendingClip = type;
                  }
                  closePath() {
                    const current = this.current;
                    if (current.path) {
                      const d = `${current.path.getAttributeNS(null, "d")}Z`;
                      current.path.setAttributeNS(null, "d", d);
                    }
                  }
                  setLeading(leading) {
                    this.current.leading = -leading;
                  }
                  setTextRise(textRise) {
                    this.current.textRise = textRise;
                  }
                  setTextRenderingMode(textRenderingMode) {
                    this.current.textRenderingMode = textRenderingMode;
                  }
                  setHScale(scale) {
                    this.current.textHScale = scale / 100;
                  }
                  setRenderingIntent(intent) {
                  }
                  setFlatness(flatness) {
                  }
                  setGState(states) {
                    for (const [key, value] of states) {
                      switch (key) {
                        case "LW":
                          this.setLineWidth(value);
                          break;
                        case "LC":
                          this.setLineCap(value);
                          break;
                        case "LJ":
                          this.setLineJoin(value);
                          break;
                        case "ML":
                          this.setMiterLimit(value);
                          break;
                        case "D":
                          this.setDash(value[0], value[1]);
                          break;
                        case "RI":
                          this.setRenderingIntent(value);
                          break;
                        case "FL":
                          this.setFlatness(value);
                          break;
                        case "Font":
                          this.setFont(value);
                          break;
                        case "CA":
                          this.setStrokeAlpha(value);
                          break;
                        case "ca":
                          this.setFillAlpha(value);
                          break;
                        default:
                          (0, _util2.warn)(`Unimplemented graphic state operator ${key}`);
                          break;
                      }
                    }
                  }
                  fill() {
                    const current = this.current;
                    if (current.element) {
                      current.element.setAttributeNS(null, "fill", current.fillColor);
                      current.element.setAttributeNS(null, "fill-opacity", current.fillAlpha);
                      this.endPath();
                    }
                  }
                  stroke() {
                    const current = this.current;
                    if (current.element) {
                      this._setStrokeAttributes(current.element);
                      current.element.setAttributeNS(null, "fill", "none");
                      this.endPath();
                    }
                  }
                  _setStrokeAttributes(element, lineWidthScale = 1) {
                    const current = this.current;
                    let dashArray = current.dashArray;
                    if (lineWidthScale !== 1 && dashArray.length > 0) {
                      dashArray = dashArray.map(function(value) {
                        return lineWidthScale * value;
                      });
                    }
                    element.setAttributeNS(null, "stroke", current.strokeColor);
                    element.setAttributeNS(null, "stroke-opacity", current.strokeAlpha);
                    element.setAttributeNS(null, "stroke-miterlimit", pf(current.miterLimit));
                    element.setAttributeNS(null, "stroke-linecap", current.lineCap);
                    element.setAttributeNS(null, "stroke-linejoin", current.lineJoin);
                    element.setAttributeNS(null, "stroke-width", pf(lineWidthScale * current.lineWidth) + "px");
                    element.setAttributeNS(null, "stroke-dasharray", dashArray.map(pf).join(" "));
                    element.setAttributeNS(null, "stroke-dashoffset", pf(lineWidthScale * current.dashPhase) + "px");
                  }
                  eoFill() {
                    var _a;
                    (_a = this.current.element) == null ? void 0 : _a.setAttributeNS(null, "fill-rule", "evenodd");
                    this.fill();
                  }
                  fillStroke() {
                    this.stroke();
                    this.fill();
                  }
                  eoFillStroke() {
                    var _a;
                    (_a = this.current.element) == null ? void 0 : _a.setAttributeNS(null, "fill-rule", "evenodd");
                    this.fillStroke();
                  }
                  closeStroke() {
                    this.closePath();
                    this.stroke();
                  }
                  closeFillStroke() {
                    this.closePath();
                    this.fillStroke();
                  }
                  closeEOFillStroke() {
                    this.closePath();
                    this.eoFillStroke();
                  }
                  paintSolidColorImageMask() {
                    const rect = this.svgFactory.createElement("svg:rect");
                    rect.setAttributeNS(null, "x", "0");
                    rect.setAttributeNS(null, "y", "0");
                    rect.setAttributeNS(null, "width", "1px");
                    rect.setAttributeNS(null, "height", "1px");
                    rect.setAttributeNS(null, "fill", this.current.fillColor);
                    this._ensureTransformGroup().append(rect);
                  }
                  paintImageXObject(objId) {
                    const imgData = this.getObject(objId);
                    if (!imgData) {
                      (0, _util2.warn)(`Dependent image with object ID ${objId} is not ready yet`);
                      return;
                    }
                    this.paintInlineImageXObject(imgData);
                  }
                  paintInlineImageXObject(imgData, mask) {
                    const width = imgData.width;
                    const height = imgData.height;
                    const imgSrc = convertImgDataToPng(imgData, this.forceDataSchema, !!mask);
                    const cliprect = this.svgFactory.createElement("svg:rect");
                    cliprect.setAttributeNS(null, "x", "0");
                    cliprect.setAttributeNS(null, "y", "0");
                    cliprect.setAttributeNS(null, "width", pf(width));
                    cliprect.setAttributeNS(null, "height", pf(height));
                    this.current.element = cliprect;
                    this.clip("nonzero");
                    const imgEl = this.svgFactory.createElement("svg:image");
                    imgEl.setAttributeNS(XLINK_NS, "xlink:href", imgSrc);
                    imgEl.setAttributeNS(null, "x", "0");
                    imgEl.setAttributeNS(null, "y", pf(-height));
                    imgEl.setAttributeNS(null, "width", pf(width) + "px");
                    imgEl.setAttributeNS(null, "height", pf(height) + "px");
                    imgEl.setAttributeNS(null, "transform", `scale(${pf(1 / width)} ${pf(-1 / height)})`);
                    if (mask) {
                      mask.append(imgEl);
                    } else {
                      this._ensureTransformGroup().append(imgEl);
                    }
                  }
                  paintImageMaskXObject(img) {
                    const imgData = this.getObject(img.data, img);
                    if (imgData.bitmap) {
                      (0, _util2.warn)("paintImageMaskXObject: ImageBitmap support is not implemented, ensure that the `isOffscreenCanvasSupported` API parameter is disabled.");
                      return;
                    }
                    const current = this.current;
                    const width = imgData.width;
                    const height = imgData.height;
                    const fillColor = current.fillColor;
                    current.maskId = `mask${maskCount++}`;
                    const mask = this.svgFactory.createElement("svg:mask");
                    mask.setAttributeNS(null, "id", current.maskId);
                    const rect = this.svgFactory.createElement("svg:rect");
                    rect.setAttributeNS(null, "x", "0");
                    rect.setAttributeNS(null, "y", "0");
                    rect.setAttributeNS(null, "width", pf(width));
                    rect.setAttributeNS(null, "height", pf(height));
                    rect.setAttributeNS(null, "fill", fillColor);
                    rect.setAttributeNS(null, "mask", `url(#${current.maskId})`);
                    this.defs.append(mask);
                    this._ensureTransformGroup().append(rect);
                    this.paintInlineImageXObject(imgData, mask);
                  }
                  paintFormXObjectBegin(matrix, bbox) {
                    if (Array.isArray(matrix) && matrix.length === 6) {
                      this.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
                    }
                    if (bbox) {
                      const width = bbox[2] - bbox[0];
                      const height = bbox[3] - bbox[1];
                      const cliprect = this.svgFactory.createElement("svg:rect");
                      cliprect.setAttributeNS(null, "x", bbox[0]);
                      cliprect.setAttributeNS(null, "y", bbox[1]);
                      cliprect.setAttributeNS(null, "width", pf(width));
                      cliprect.setAttributeNS(null, "height", pf(height));
                      this.current.element = cliprect;
                      this.clip("nonzero");
                      this.endPath();
                    }
                  }
                  paintFormXObjectEnd() {
                  }
                  _initialize(viewport) {
                    const svg = this.svgFactory.create(viewport.width, viewport.height);
                    const definitions = this.svgFactory.createElement("svg:defs");
                    svg.append(definitions);
                    this.defs = definitions;
                    const rootGroup = this.svgFactory.createElement("svg:g");
                    rootGroup.setAttributeNS(null, "transform", pm(viewport.transform));
                    svg.append(rootGroup);
                    this.svg = rootGroup;
                    return svg;
                  }
                  _ensureClipGroup() {
                    if (!this.current.clipGroup) {
                      const clipGroup = this.svgFactory.createElement("svg:g");
                      clipGroup.setAttributeNS(null, "clip-path", this.current.activeClipUrl);
                      this.svg.append(clipGroup);
                      this.current.clipGroup = clipGroup;
                    }
                    return this.current.clipGroup;
                  }
                  _ensureTransformGroup() {
                    if (!this.tgrp) {
                      this.tgrp = this.svgFactory.createElement("svg:g");
                      this.tgrp.setAttributeNS(null, "transform", pm(this.transformMatrix));
                      if (this.current.activeClipUrl) {
                        this._ensureClipGroup().append(this.tgrp);
                      } else {
                        this.svg.append(this.tgrp);
                      }
                    }
                    return this.tgrp;
                  }
                };
              }
            }
            /******/
          ];
          var __webpack_module_cache__ = {};
          function __w_pdfjs_require__(moduleId) {
            var cachedModule = __webpack_module_cache__[moduleId];
            if (cachedModule !== void 0) {
              return cachedModule.exports;
            }
            var module2 = __webpack_module_cache__[moduleId] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            __webpack_modules__[moduleId](module2, module2.exports, __w_pdfjs_require__);
            return module2.exports;
          }
          var __webpack_exports__ = {};
          (() => {
            var exports2 = __webpack_exports__;
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            Object.defineProperty(exports2, "AbortException", {
              enumerable: true,
              get: function() {
                return _util2.AbortException;
              }
            });
            Object.defineProperty(exports2, "AnnotationEditorLayer", {
              enumerable: true,
              get: function() {
                return _annotation_editor_layer.AnnotationEditorLayer;
              }
            });
            Object.defineProperty(exports2, "AnnotationEditorParamsType", {
              enumerable: true,
              get: function() {
                return _util2.AnnotationEditorParamsType;
              }
            });
            Object.defineProperty(exports2, "AnnotationEditorType", {
              enumerable: true,
              get: function() {
                return _util2.AnnotationEditorType;
              }
            });
            Object.defineProperty(exports2, "AnnotationEditorUIManager", {
              enumerable: true,
              get: function() {
                return _tools.AnnotationEditorUIManager;
              }
            });
            Object.defineProperty(exports2, "AnnotationLayer", {
              enumerable: true,
              get: function() {
                return _annotation_layer.AnnotationLayer;
              }
            });
            Object.defineProperty(exports2, "AnnotationMode", {
              enumerable: true,
              get: function() {
                return _util2.AnnotationMode;
              }
            });
            Object.defineProperty(exports2, "CMapCompressionType", {
              enumerable: true,
              get: function() {
                return _util2.CMapCompressionType;
              }
            });
            Object.defineProperty(exports2, "FeatureTest", {
              enumerable: true,
              get: function() {
                return _util2.FeatureTest;
              }
            });
            Object.defineProperty(exports2, "GlobalWorkerOptions", {
              enumerable: true,
              get: function() {
                return _worker_options2.GlobalWorkerOptions;
              }
            });
            Object.defineProperty(exports2, "InvalidPDFException", {
              enumerable: true,
              get: function() {
                return _util2.InvalidPDFException;
              }
            });
            Object.defineProperty(exports2, "MissingPDFException", {
              enumerable: true,
              get: function() {
                return _util2.MissingPDFException;
              }
            });
            Object.defineProperty(exports2, "OPS", {
              enumerable: true,
              get: function() {
                return _util2.OPS;
              }
            });
            Object.defineProperty(exports2, "PDFDataRangeTransport", {
              enumerable: true,
              get: function() {
                return _api.PDFDataRangeTransport;
              }
            });
            Object.defineProperty(exports2, "PDFDateString", {
              enumerable: true,
              get: function() {
                return _display_utils2.PDFDateString;
              }
            });
            Object.defineProperty(exports2, "PDFWorker", {
              enumerable: true,
              get: function() {
                return _api.PDFWorker;
              }
            });
            Object.defineProperty(exports2, "PasswordResponses", {
              enumerable: true,
              get: function() {
                return _util2.PasswordResponses;
              }
            });
            Object.defineProperty(exports2, "PermissionFlag", {
              enumerable: true,
              get: function() {
                return _util2.PermissionFlag;
              }
            });
            Object.defineProperty(exports2, "PixelsPerInch", {
              enumerable: true,
              get: function() {
                return _display_utils2.PixelsPerInch;
              }
            });
            Object.defineProperty(exports2, "RenderingCancelledException", {
              enumerable: true,
              get: function() {
                return _display_utils2.RenderingCancelledException;
              }
            });
            Object.defineProperty(exports2, "SVGGraphics", {
              enumerable: true,
              get: function() {
                return _svg.SVGGraphics;
              }
            });
            Object.defineProperty(exports2, "UNSUPPORTED_FEATURES", {
              enumerable: true,
              get: function() {
                return _util2.UNSUPPORTED_FEATURES;
              }
            });
            Object.defineProperty(exports2, "UnexpectedResponseException", {
              enumerable: true,
              get: function() {
                return _util2.UnexpectedResponseException;
              }
            });
            Object.defineProperty(exports2, "Util", {
              enumerable: true,
              get: function() {
                return _util2.Util;
              }
            });
            Object.defineProperty(exports2, "VerbosityLevel", {
              enumerable: true,
              get: function() {
                return _util2.VerbosityLevel;
              }
            });
            Object.defineProperty(exports2, "XfaLayer", {
              enumerable: true,
              get: function() {
                return _xfa_layer.XfaLayer;
              }
            });
            Object.defineProperty(exports2, "build", {
              enumerable: true,
              get: function() {
                return _api.build;
              }
            });
            Object.defineProperty(exports2, "createPromiseCapability", {
              enumerable: true,
              get: function() {
                return _util2.createPromiseCapability;
              }
            });
            Object.defineProperty(exports2, "createValidAbsoluteUrl", {
              enumerable: true,
              get: function() {
                return _util2.createValidAbsoluteUrl;
              }
            });
            Object.defineProperty(exports2, "getDocument", {
              enumerable: true,
              get: function() {
                return _api.getDocument;
              }
            });
            Object.defineProperty(exports2, "getFilenameFromUrl", {
              enumerable: true,
              get: function() {
                return _display_utils2.getFilenameFromUrl;
              }
            });
            Object.defineProperty(exports2, "getPdfFilenameFromUrl", {
              enumerable: true,
              get: function() {
                return _display_utils2.getPdfFilenameFromUrl;
              }
            });
            Object.defineProperty(exports2, "getXfaPageViewport", {
              enumerable: true,
              get: function() {
                return _display_utils2.getXfaPageViewport;
              }
            });
            Object.defineProperty(exports2, "isDataScheme", {
              enumerable: true,
              get: function() {
                return _display_utils2.isDataScheme;
              }
            });
            Object.defineProperty(exports2, "isPdfFile", {
              enumerable: true,
              get: function() {
                return _display_utils2.isPdfFile;
              }
            });
            Object.defineProperty(exports2, "loadScript", {
              enumerable: true,
              get: function() {
                return _display_utils2.loadScript;
              }
            });
            Object.defineProperty(exports2, "renderTextLayer", {
              enumerable: true,
              get: function() {
                return _text_layer.renderTextLayer;
              }
            });
            Object.defineProperty(exports2, "setLayerDimensions", {
              enumerable: true,
              get: function() {
                return _display_utils2.setLayerDimensions;
              }
            });
            Object.defineProperty(exports2, "shadow", {
              enumerable: true,
              get: function() {
                return _util2.shadow;
              }
            });
            Object.defineProperty(exports2, "updateTextLayer", {
              enumerable: true,
              get: function() {
                return _text_layer.updateTextLayer;
              }
            });
            Object.defineProperty(exports2, "version", {
              enumerable: true,
              get: function() {
                return _api.version;
              }
            });
            var _util2 = __w_pdfjs_require__(1);
            var _api = __w_pdfjs_require__(2);
            var _display_utils2 = __w_pdfjs_require__(6);
            var _text_layer = __w_pdfjs_require__(26);
            var _annotation_editor_layer = __w_pdfjs_require__(27);
            var _tools = __w_pdfjs_require__(5);
            var _annotation_layer = __w_pdfjs_require__(32);
            var _worker_options2 = __w_pdfjs_require__(14);
            var _svg = __w_pdfjs_require__(35);
            var _xfa_layer = __w_pdfjs_require__(34);
            const pdfjsVersion = "3.4.120";
            const pdfjsBuild = "af6414988";
          })();
          return __webpack_exports__;
        })()
      );
    });
  }
});

// node_modules/@react-pdf-viewer/core/lib/cjs/core.js
var require_core = __commonJS({
  "node_modules/@react-pdf-viewer/core/lib/cjs/core.js"(exports2) {
    "use strict";
    var React = require_react();
    var PdfJsApi = require_pdf();
    function _interopNamespaceDefault(e) {
      var n = /* @__PURE__ */ Object.create(null);
      if (e) {
        Object.keys(e).forEach(function(k) {
          if (k !== "default") {
            var d = Object.getOwnPropertyDescriptor(e, k);
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: function() {
                return e[k];
              }
            });
          }
        });
      }
      n.default = e;
      return Object.freeze(n);
    }
    var React__namespace = _interopNamespaceDefault(React);
    var PdfJsApi__namespace = _interopNamespaceDefault(PdfJsApi);
    exports2.AnnotationType = void 0;
    (function(AnnotationType) {
      AnnotationType[AnnotationType["Text"] = 1] = "Text";
      AnnotationType[AnnotationType["Link"] = 2] = "Link";
      AnnotationType[AnnotationType["FreeText"] = 3] = "FreeText";
      AnnotationType[AnnotationType["Line"] = 4] = "Line";
      AnnotationType[AnnotationType["Square"] = 5] = "Square";
      AnnotationType[AnnotationType["Circle"] = 6] = "Circle";
      AnnotationType[AnnotationType["Polygon"] = 7] = "Polygon";
      AnnotationType[AnnotationType["Polyline"] = 8] = "Polyline";
      AnnotationType[AnnotationType["Highlight"] = 9] = "Highlight";
      AnnotationType[AnnotationType["Underline"] = 10] = "Underline";
      AnnotationType[AnnotationType["Squiggly"] = 11] = "Squiggly";
      AnnotationType[AnnotationType["StrikeOut"] = 12] = "StrikeOut";
      AnnotationType[AnnotationType["Stamp"] = 13] = "Stamp";
      AnnotationType[AnnotationType["Caret"] = 14] = "Caret";
      AnnotationType[AnnotationType["Ink"] = 15] = "Ink";
      AnnotationType[AnnotationType["Popup"] = 16] = "Popup";
      AnnotationType[AnnotationType["FileAttachment"] = 17] = "FileAttachment";
    })(exports2.AnnotationType || (exports2.AnnotationType = {}));
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    function __extends(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function() {
      __assign = Object.assign || function __assign2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    function __spreadArray(to, from, pack) {
      if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
    }
    exports2.TextDirection = void 0;
    (function(TextDirection) {
      TextDirection["RightToLeft"] = "RTL";
      TextDirection["LeftToRight"] = "LTR";
    })(exports2.TextDirection || (exports2.TextDirection = {}));
    var ThemeContext = React__namespace.createContext({
      currentTheme: "light",
      direction: exports2.TextDirection.LeftToRight,
      setCurrentTheme: function() {
      }
    });
    var classNames = function(classes) {
      var result = [];
      Object.keys(classes).forEach(function(clazz) {
        if (clazz && classes[clazz]) {
          result.push(clazz);
        }
      });
      return result.join(" ");
    };
    var Button = function(_a) {
      var children = _a.children, testId = _a.testId, onClick = _a.onClick;
      var direction = React__namespace.useContext(ThemeContext).direction;
      var isRtl = direction === exports2.TextDirection.RightToLeft;
      var attrs = testId ? { "data-testid": testId } : {};
      return React__namespace.createElement("button", __assign({ className: classNames({
        "rpv-core__button": true,
        "rpv-core__button--rtl": isRtl
      }), type: "button", onClick }, attrs), children);
    };
    var useIsomorphicLayoutEffect = typeof window !== "undefined" ? React__namespace.useLayoutEffect : React__namespace.useEffect;
    var useIntersectionObserver = function(props) {
      var containerRef = React__namespace.useRef(null);
      var once = props.once, threshold = props.threshold, onVisibilityChanged = props.onVisibilityChanged;
      useIsomorphicLayoutEffect(function() {
        var container = containerRef.current;
        if (!container) {
          return;
        }
        var intersectionTracker = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            var isVisible = entry.isIntersecting;
            var ratio = entry.intersectionRatio;
            onVisibilityChanged({ isVisible, ratio });
            if (isVisible && once) {
              intersectionTracker.unobserve(container);
              intersectionTracker.disconnect();
            }
          });
        }, {
          threshold: threshold || 0
        });
        intersectionTracker.observe(container);
        return function() {
          intersectionTracker.unobserve(container);
          intersectionTracker.disconnect();
        };
      }, []);
      return containerRef;
    };
    var LazyRender = function(_a) {
      var attrs = _a.attrs, children = _a.children, testId = _a.testId;
      var _b = React__namespace.useState(false), visible = _b[0], setVisible = _b[1];
      var containerAttrs = testId ? __assign(__assign({}, attrs), { "data-testid": testId }) : attrs;
      var handleVisibilityChanged = function(params) {
        if (params.isVisible) {
          setVisible(true);
        }
      };
      var containerRef = useIntersectionObserver({
        once: true,
        onVisibilityChanged: handleVisibilityChanged
      });
      return React__namespace.createElement("div", __assign({ ref: containerRef }, containerAttrs), visible && children);
    };
    var Menu = function(_a) {
      var children = _a.children;
      var containerRef = React__namespace.useRef();
      var visibleMenuItemsRef = React__namespace.useRef([]);
      var direction = React__namespace.useContext(ThemeContext).direction;
      var isRtl = direction === exports2.TextDirection.RightToLeft;
      var handleKeyDown = function(e) {
        var container = containerRef.current;
        if (!container) {
          return;
        }
        switch (e.key) {
          case "Tab":
            e.preventDefault();
            break;
          case "ArrowDown":
            e.preventDefault();
            moveToItem(function(_, currentIndex) {
              return currentIndex + 1;
            });
            break;
          case "ArrowUp":
            e.preventDefault();
            moveToItem(function(_, currentIndex) {
              return currentIndex - 1;
            });
            break;
          case "End":
            e.preventDefault();
            moveToItem(function(items, _) {
              return items.length - 1;
            });
            break;
          case "Home":
            e.preventDefault();
            moveToItem(function(_, __) {
              return 0;
            });
            break;
        }
      };
      var moveToItem = function(getNextItem) {
        var container = containerRef.current;
        if (!container) {
          return;
        }
        var items = visibleMenuItemsRef.current;
        var currentIndex = items.findIndex(function(item) {
          return item.getAttribute("tabindex") === "0";
        });
        var targetIndex = Math.min(items.length - 1, Math.max(0, getNextItem(items, currentIndex)));
        if (currentIndex >= 0 && currentIndex <= items.length - 1) {
          items[currentIndex].setAttribute("tabindex", "-1");
        }
        items[targetIndex].setAttribute("tabindex", "0");
        items[targetIndex].focus();
      };
      var findVisibleItems = function(container) {
        var visibleItems = [];
        container.querySelectorAll('.rpv-core__menu-item[role="menuitem"]').forEach(function(item) {
          if (item instanceof HTMLElement) {
            var parent_1 = item.parentElement;
            if (parent_1 === container) {
              visibleItems.push(item);
            } else {
              if (window.getComputedStyle(parent_1).display !== "none") {
                visibleItems.push(item);
              }
            }
          }
        });
        return visibleItems;
      };
      useIsomorphicLayoutEffect(function() {
        var container = containerRef.current;
        if (!container) {
          return;
        }
        var visibleItems = findVisibleItems(container);
        visibleMenuItemsRef.current = visibleItems;
      }, []);
      useIsomorphicLayoutEffect(function() {
        document.addEventListener("keydown", handleKeyDown);
        return function() {
          document.removeEventListener("keydown", handleKeyDown);
        };
      }, []);
      return React__namespace.createElement("div", { ref: containerRef, "aria-orientation": "vertical", className: classNames({
        "rpv-core__menu": true,
        "rpv-core__menu--rtl": isRtl
      }), role: "menu", tabIndex: 0 }, children);
    };
    var MenuDivider = function() {
      return React__namespace.createElement("div", { "aria-orientation": "horizontal", className: "rpv-core__menu-divider", role: "separator" });
    };
    var Icon = function(_a) {
      var children = _a.children, _b = _a.ignoreDirection, ignoreDirection = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? 24 : _c;
      var direction = React__namespace.useContext(ThemeContext).direction;
      var isRtl = !ignoreDirection && direction === exports2.TextDirection.RightToLeft;
      var width = "".concat(size || 24, "px");
      return React__namespace.createElement("svg", { "aria-hidden": "true", className: classNames({
        "rpv-core__icon": true,
        "rpv-core__icon--rtl": isRtl
      }), focusable: "false", height: width, viewBox: "0 0 24 24", width }, children);
    };
    var CheckIcon = function() {
      return React__namespace.createElement(
        Icon,
        { size: 16 },
        React__namespace.createElement("path", { d: "M23.5,0.499l-16.5,23l-6.5-6.5" })
      );
    };
    var MenuItem = function(_a) {
      var _b = _a.checked, checked = _b === void 0 ? false : _b, children = _a.children, _c = _a.icon, icon = _c === void 0 ? null : _c, _d = _a.isDisabled, isDisabled = _d === void 0 ? false : _d, testId = _a.testId, onClick = _a.onClick;
      var direction = React__namespace.useContext(ThemeContext).direction;
      var isRtl = direction === exports2.TextDirection.RightToLeft;
      var attrs = testId ? { "data-testid": testId } : {};
      return React__namespace.createElement(
        "button",
        __assign({ className: classNames({
          "rpv-core__menu-item": true,
          "rpv-core__menu-item--disabled": isDisabled,
          "rpv-core__menu-item--ltr": !isRtl,
          "rpv-core__menu-item--rtl": isRtl
        }), role: "menuitem", tabIndex: -1, type: "button", onClick }, attrs),
        React__namespace.createElement("div", { className: classNames({
          "rpv-core__menu-item-icon": true,
          "rpv-core__menu-item-icon--ltr": !isRtl,
          "rpv-core__menu-item-icon--rtl": isRtl
        }) }, icon),
        React__namespace.createElement("div", { className: classNames({
          "rpv-core__menu-item-label": true,
          "rpv-core__menu-item-label--ltr": !isRtl,
          "rpv-core__menu-item-label--rtl": isRtl
        }) }, children),
        React__namespace.createElement("div", { className: classNames({
          "rpv-core__menu-item-check": true,
          "rpv-core__menu-item-check--ltr": !isRtl,
          "rpv-core__menu-item-check--rtl": isRtl
        }) }, checked && React__namespace.createElement(CheckIcon, null))
      );
    };
    var MinimalButton = function(_a) {
      var _b = _a.ariaLabel, ariaLabel = _b === void 0 ? "" : _b, _c = _a.ariaKeyShortcuts, ariaKeyShortcuts = _c === void 0 ? "" : _c, children = _a.children, _d = _a.isDisabled, isDisabled = _d === void 0 ? false : _d, _e = _a.isSelected, isSelected = _e === void 0 ? false : _e, testId = _a.testId, onClick = _a.onClick;
      var direction = React__namespace.useContext(ThemeContext).direction;
      var isRtl = direction === exports2.TextDirection.RightToLeft;
      var attrs = testId ? { "data-testid": testId } : {};
      return React__namespace.createElement("button", __assign({ "aria-label": ariaLabel }, ariaKeyShortcuts && { "aria-keyshortcuts": ariaKeyShortcuts }, isDisabled && { "aria-disabled": true }, { className: classNames({
        "rpv-core__minimal-button": true,
        "rpv-core__minimal-button--disabled": isDisabled,
        "rpv-core__minimal-button--rtl": isRtl,
        "rpv-core__minimal-button--selected": isSelected
      }), type: "button", onClick }, attrs), children);
    };
    var PrimaryButton = function(_a) {
      var children = _a.children, testId = _a.testId, onClick = _a.onClick;
      var direction = React__namespace.useContext(ThemeContext).direction;
      var isRtl = direction === exports2.TextDirection.RightToLeft;
      var attrs = testId ? { "data-testid": testId } : {};
      return React__namespace.createElement("button", __assign({ className: classNames({
        "rpv-core__primary-button": true,
        "rpv-core__primary-button--rtl": isRtl
      }), type: "button", onClick }, attrs), children);
    };
    var ProgressBar = function(_a) {
      var progress = _a.progress;
      var direction = React__namespace.useContext(ThemeContext).direction;
      var isRtl = direction === exports2.TextDirection.RightToLeft;
      return React__namespace.createElement(
        "div",
        { className: classNames({
          "rpv-core__progress-bar": true,
          "rpv-core__progress-bar--rtl": isRtl
        }) },
        React__namespace.createElement(
          "div",
          { className: "rpv-core__progress-bar-progress", style: { width: "".concat(progress, "%") } },
          progress,
          "%"
        )
      );
    };
    var Separator = function() {
      return React__namespace.createElement("div", { className: "rpv-core__separator" });
    };
    var Spinner = function(_a) {
      var _b = _a.size, size = _b === void 0 ? "4rem" : _b, testId = _a.testId;
      var _c = React__namespace.useState(false), visible = _c[0], setVisible = _c[1];
      var attrs = testId ? { "data-testid": testId } : {};
      var handleVisibilityChanged = function(params) {
        setVisible(params.isVisible);
      };
      var containerRef = useIntersectionObserver({
        onVisibilityChanged: handleVisibilityChanged
      });
      return React__namespace.createElement("div", __assign({}, attrs, { className: classNames({
        "rpv-core__spinner": true,
        "rpv-core__spinner--animating": visible
      }), ref: containerRef, style: { height: size, width: size } }));
    };
    var Splitter = function(_a) {
      var constrain = _a.constrain;
      var direction = React__namespace.useContext(ThemeContext).direction;
      var isRtl = direction === exports2.TextDirection.RightToLeft;
      var resizerRef = React__namespace.useRef();
      var leftSideRef = React__namespace.useRef();
      var rightSideRef = React__namespace.useRef();
      var xRef = React__namespace.useRef(0);
      var yRef = React__namespace.useRef(0);
      var leftWidthRef = React__namespace.useRef(0);
      var resizerWidthRef = React__namespace.useRef(0);
      var eventOptions = {
        capture: true
      };
      var handleMouseMove = function(e) {
        var resizerEle = resizerRef.current;
        var leftSide = leftSideRef.current;
        var rightSide = rightSideRef.current;
        if (!resizerEle || !leftSide || !rightSide) {
          return;
        }
        var resizerWidth = resizerWidthRef.current;
        var dx = e.clientX - xRef.current;
        var firstHalfSize = leftWidthRef.current + (isRtl ? -dx : dx);
        var containerWidth = resizerEle.parentElement.getBoundingClientRect().width;
        var firstHalfPercentage = firstHalfSize * 100 / containerWidth;
        resizerEle.classList.add("rpv-core__splitter--resizing");
        if (constrain) {
          var secondHalfSize = containerWidth - firstHalfSize - resizerWidth;
          var secondHalfPercentage = secondHalfSize * 100 / containerWidth;
          if (!constrain({ firstHalfPercentage, firstHalfSize, secondHalfPercentage, secondHalfSize })) {
            return;
          }
        }
        leftSide.style.width = "".concat(firstHalfPercentage, "%");
        document.body.classList.add("rpv-core__splitter-body--resizing");
        leftSide.classList.add("rpv-core__splitter-sibling--resizing");
        rightSide.classList.add("rpv-core__splitter-sibling--resizing");
      };
      var handleMouseUp = function(e) {
        var resizerEle = resizerRef.current;
        var leftSide = leftSideRef.current;
        var rightSide = rightSideRef.current;
        if (!resizerEle || !leftSide || !rightSide) {
          return;
        }
        document.body.classList.remove("rpv-core__splitter-body--resizing");
        resizerEle.classList.remove("rpv-core__splitter--resizing");
        leftSide.classList.remove("rpv-core__splitter-sibling--resizing");
        rightSide.classList.remove("rpv-core__splitter-sibling--resizing");
        document.removeEventListener("mousemove", handleMouseMove, eventOptions);
        document.removeEventListener("mouseup", handleMouseUp, eventOptions);
      };
      var handleMouseDown = function(e) {
        var leftSide = leftSideRef.current;
        if (!leftSide) {
          return;
        }
        xRef.current = e.clientX;
        yRef.current = e.clientY;
        leftWidthRef.current = leftSide.getBoundingClientRect().width;
        document.addEventListener("mousemove", handleMouseMove, eventOptions);
        document.addEventListener("mouseup", handleMouseUp, eventOptions);
      };
      React__namespace.useEffect(function() {
        var resizerEle = resizerRef.current;
        if (!resizerEle) {
          return;
        }
        resizerWidthRef.current = resizerEle.getBoundingClientRect().width;
        leftSideRef.current = resizerEle.previousElementSibling;
        rightSideRef.current = resizerEle.nextElementSibling;
      }, []);
      return React__namespace.createElement("div", { ref: resizerRef, className: "rpv-core__splitter", onMouseDown: handleMouseDown });
    };
    var TextBox = function(_a) {
      var _b = _a.ariaLabel, ariaLabel = _b === void 0 ? "" : _b, _c = _a.autoFocus, autoFocus = _c === void 0 ? false : _c, _d = _a.placeholder, placeholder = _d === void 0 ? "" : _d, testId = _a.testId, _e = _a.type, type = _e === void 0 ? "text" : _e, _f = _a.value, value = _f === void 0 ? "" : _f, onChange = _a.onChange, _g = _a.onKeyDown, onKeyDown = _g === void 0 ? function() {
      } : _g;
      var direction = React__namespace.useContext(ThemeContext).direction;
      var textboxRef = React__namespace.useRef();
      var isRtl = direction === exports2.TextDirection.RightToLeft;
      var attrs = {
        ref: textboxRef,
        "data-testid": "",
        "aria-label": ariaLabel,
        className: classNames({
          "rpv-core__textbox": true,
          "rpv-core__textbox--rtl": isRtl
        }),
        placeholder,
        value,
        onChange: function(e) {
          return onChange(e.target.value);
        },
        onKeyDown
      };
      if (testId) {
        attrs["data-testid"] = testId;
      }
      useIsomorphicLayoutEffect(function() {
        if (autoFocus) {
          var textboxEle = textboxRef.current;
          if (textboxEle) {
            var x = window.scrollX;
            var y = window.scrollY;
            textboxEle.focus();
            window.scrollTo(x, y);
          }
        }
      }, []);
      return type === "text" ? React__namespace.createElement("input", __assign({ type: "text" }, attrs)) : React__namespace.createElement("input", __assign({ type: "password" }, attrs));
    };
    var Api;
    (function(Api2) {
      Api2[Api2["ExitFullScreen"] = 0] = "ExitFullScreen";
      Api2[Api2["FullScreenChange"] = 1] = "FullScreenChange";
      Api2[Api2["FullScreenElement"] = 2] = "FullScreenElement";
      Api2[Api2["FullScreenEnabled"] = 3] = "FullScreenEnabled";
      Api2[Api2["RequestFullScreen"] = 4] = "RequestFullScreen";
    })(Api || (Api = {}));
    var defaultVendor = {
      ExitFullScreen: "exitFullscreen",
      FullScreenChange: "fullscreenchange",
      FullScreenElement: "fullscreenElement",
      FullScreenEnabled: "fullscreenEnabled",
      RequestFullScreen: "requestFullscreen"
    };
    var webkitVendor = {
      ExitFullScreen: "webkitExitFullscreen",
      FullScreenChange: "webkitfullscreenchange",
      FullScreenElement: "webkitFullscreenElement",
      FullScreenEnabled: "webkitFullscreenEnabled",
      RequestFullScreen: "webkitRequestFullscreen"
    };
    var msVendor = {
      ExitFullScreen: "msExitFullscreen",
      FullScreenChange: "msFullscreenChange",
      FullScreenElement: "msFullscreenElement",
      FullScreenEnabled: "msFullscreenEnabled",
      RequestFullScreen: "msRequestFullscreen"
    };
    var isBrowser = typeof window !== "undefined";
    var vendor = isBrowser ? Api.FullScreenEnabled in document && defaultVendor || webkitVendor.FullScreenEnabled in document && webkitVendor || msVendor.FullScreenEnabled in document && msVendor || defaultVendor : defaultVendor;
    var isFullScreenEnabled = function() {
      return isBrowser && vendor.FullScreenEnabled in document && document[vendor.FullScreenEnabled] === true;
    };
    var addFullScreenChangeListener = function(handler) {
      if (isBrowser) {
        document.addEventListener(vendor.FullScreenChange, handler);
      }
    };
    var removeFullScreenChangeListener = function(handler) {
      if (isBrowser) {
        document.removeEventListener(vendor.FullScreenChange, handler);
      }
    };
    var exitFullScreen = function(element) {
      return isBrowser ? element[vendor.ExitFullScreen]() : Promise.resolve({});
    };
    var getFullScreenElement = function() {
      return isBrowser ? document[vendor.FullScreenElement] : null;
    };
    var requestFullScreen = function(element) {
      if (isBrowser) {
        element[vendor.RequestFullScreen]();
      }
    };
    var useDebounceCallback = function(callback, wait) {
      var timeout = React__namespace.useRef();
      var cleanup = function() {
        if (timeout.current) {
          clearTimeout(timeout.current);
        }
      };
      React__namespace.useEffect(function() {
        return function() {
          return cleanup();
        };
      }, []);
      return React__namespace.useCallback(function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        cleanup();
        timeout.current = setTimeout(function() {
          callback.apply(void 0, args);
        }, wait);
      }, [callback, wait]);
    };
    var useIsMounted = function() {
      var isMountedRef = React__namespace.useRef(false);
      React__namespace.useEffect(function() {
        isMountedRef.current = true;
        return function() {
          isMountedRef.current = false;
        };
      }, []);
      return isMountedRef;
    };
    var usePrevious = function(value) {
      var ref = React__namespace.useRef(value);
      React__namespace.useEffect(function() {
        ref.current = value;
      }, [value]);
      return ref.current;
    };
    var PageRenderStatus;
    (function(PageRenderStatus2) {
      PageRenderStatus2["NotRenderedYet"] = "NotRenderedYet";
      PageRenderStatus2["Rendering"] = "Rendering";
      PageRenderStatus2["Rendered"] = "Rendered";
    })(PageRenderStatus || (PageRenderStatus = {}));
    var OUT_OF_RANGE_VISIBILITY = -9999;
    var useRenderQueue = function(_a) {
      var doc = _a.doc;
      var numPages = doc.numPages;
      var docId = doc.loadingTask.docId;
      var initialPageVisibilities = React__namespace.useMemo(function() {
        return Array(numPages).fill(null).map(function(_, pageIndex) {
          return {
            pageIndex,
            renderStatus: PageRenderStatus.NotRenderedYet,
            visibility: OUT_OF_RANGE_VISIBILITY
          };
        });
      }, [docId]);
      var latestRef = React__namespace.useRef({
        currentRenderingPage: -1,
        startRange: 0,
        endRange: numPages - 1,
        visibilities: initialPageVisibilities
      });
      var markNotRendered = function() {
        for (var i = 0; i < numPages; i++) {
          latestRef.current.visibilities[i].renderStatus = PageRenderStatus.NotRenderedYet;
        }
      };
      var markRendered = function(pageIndex) {
        latestRef.current.visibilities[pageIndex].renderStatus = PageRenderStatus.Rendered;
      };
      var markRendering = function(pageIndex) {
        if (latestRef.current.currentRenderingPage !== -1 && latestRef.current.currentRenderingPage !== pageIndex && latestRef.current.visibilities[latestRef.current.currentRenderingPage].renderStatus === PageRenderStatus.Rendering) {
          latestRef.current.visibilities[latestRef.current.currentRenderingPage].renderStatus = PageRenderStatus.NotRenderedYet;
        }
        latestRef.current.visibilities[pageIndex].renderStatus = PageRenderStatus.Rendering;
        latestRef.current.currentRenderingPage = pageIndex;
      };
      var setRange = function(startIndex, endIndex) {
        latestRef.current.startRange = startIndex;
        latestRef.current.endRange = endIndex;
        for (var i = 0; i < numPages; i++) {
          if (i < startIndex || i > endIndex) {
            latestRef.current.visibilities[i].visibility = OUT_OF_RANGE_VISIBILITY;
            latestRef.current.visibilities[i].renderStatus = PageRenderStatus.NotRenderedYet;
          }
        }
      };
      var setOutOfRange = function(pageIndex) {
        setVisibility(pageIndex, OUT_OF_RANGE_VISIBILITY);
      };
      var setVisibility = function(pageIndex, visibility) {
        latestRef.current.visibilities[pageIndex].visibility = visibility;
      };
      var getHighestPriorityPage = function() {
        var visiblePages = latestRef.current.visibilities.slice(latestRef.current.startRange, latestRef.current.endRange + 1).filter(function(item) {
          return item.visibility > OUT_OF_RANGE_VISIBILITY;
        });
        if (!visiblePages.length) {
          return -1;
        }
        var firstVisiblePage = visiblePages[0].pageIndex;
        var lastVisiblePage = visiblePages[visiblePages.length - 1].pageIndex;
        var numVisiblePages = visiblePages.length;
        for (var i = 0; i < numVisiblePages; i++) {
          if (visiblePages[i].renderStatus === PageRenderStatus.Rendering) {
            return -1;
          }
          if (visiblePages[i].renderStatus === PageRenderStatus.NotRenderedYet) {
            return visiblePages[i].pageIndex;
          }
        }
        if (lastVisiblePage + 1 < numPages && latestRef.current.visibilities[lastVisiblePage + 1].renderStatus !== PageRenderStatus.Rendered) {
          return lastVisiblePage + 1;
        } else if (firstVisiblePage - 1 >= 0 && latestRef.current.visibilities[firstVisiblePage - 1].renderStatus !== PageRenderStatus.Rendered) {
          return firstVisiblePage - 1;
        }
        return -1;
      };
      var isInRange = function(pageIndex) {
        return pageIndex >= latestRef.current.startRange && pageIndex <= latestRef.current.endRange;
      };
      return {
        getHighestPriorityPage,
        isInRange,
        markNotRendered,
        markRendered,
        markRendering,
        setOutOfRange,
        setRange,
        setVisibility
      };
    };
    var core = {
      askingPassword: {
        requirePasswordToOpen: "This document requires a password to open",
        submit: "Submit"
      },
      wrongPassword: {
        tryAgain: "The password is wrong. Please try again"
      },
      pageLabel: "Page {{pageIndex}}"
    };
    var enUs = {
      core
    };
    var DefaultLocalization = enUs;
    var LocalizationContext = React__namespace.createContext({
      l10n: DefaultLocalization,
      setL10n: function() {
      }
    });
    var id = 0;
    var uniqueId = function() {
      return id++;
    };
    var useClickOutside = function(closeOnClickOutside, targetRef, onClickOutside) {
      var clickHandler = function(e) {
        var target = targetRef.current;
        if (!target) {
          return;
        }
        var clickedTarget = e.target;
        if (clickedTarget instanceof Element && clickedTarget.shadowRoot) {
          var paths = e.composedPath();
          if (paths.length > 0 && !target.contains(paths[0])) {
            onClickOutside();
          }
        } else if (!target.contains(clickedTarget)) {
          onClickOutside();
        }
      };
      React__namespace.useEffect(function() {
        if (!closeOnClickOutside) {
          return;
        }
        var eventOptions = {
          capture: true
        };
        document.addEventListener("click", clickHandler, eventOptions);
        return function() {
          document.removeEventListener("click", clickHandler, eventOptions);
        };
      }, []);
    };
    var useEscape = function(handler) {
      var keyUpHandler = function(e) {
        if (e.key === "Escape") {
          handler();
        }
      };
      React__namespace.useEffect(function() {
        document.addEventListener("keyup", keyUpHandler);
        return function() {
          document.removeEventListener("keyup", keyUpHandler);
        };
      }, []);
    };
    var useLockScroll = function() {
      React__namespace.useEffect(function() {
        var originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = "hidden";
        return function() {
          document.body.style.overflow = originalStyle;
        };
      }, []);
    };
    var ModalBody = function(_a) {
      var ariaControlsSuffix = _a.ariaControlsSuffix, children = _a.children, closeOnClickOutside = _a.closeOnClickOutside, closeOnEscape = _a.closeOnEscape, onToggle = _a.onToggle;
      var contentRef = React__namespace.useRef();
      var direction = React__namespace.useContext(ThemeContext).direction;
      var isRtl = direction === exports2.TextDirection.RightToLeft;
      useLockScroll();
      useEscape(function() {
        if (contentRef.current && closeOnEscape) {
          onToggle();
        }
      });
      useClickOutside(closeOnClickOutside, contentRef, onToggle);
      useIsomorphicLayoutEffect(function() {
        var contentEle = contentRef.current;
        if (!contentEle) {
          return;
        }
        var maxHeight = document.body.clientHeight * 0.75;
        if (contentEle.getBoundingClientRect().height >= maxHeight) {
          contentEle.style.overflow = "auto";
          contentEle.style.maxHeight = "".concat(maxHeight, "px");
        }
      }, []);
      return React__namespace.createElement("div", { "aria-modal": "true", className: classNames({
        "rpv-core__modal-body": true,
        "rpv-core__modal-body--rtl": isRtl
      }), id: "rpv-core__modal-body-".concat(ariaControlsSuffix), ref: contentRef, role: "dialog", tabIndex: -1 }, children);
    };
    var ModalOverlay = function(_a) {
      var children = _a.children;
      return React__namespace.createElement("div", { className: "rpv-core__modal-overlay" }, children);
    };
    exports2.ToggleStatus = void 0;
    (function(ToggleStatus) {
      ToggleStatus["Close"] = "Close";
      ToggleStatus["Open"] = "Open";
      ToggleStatus["Toggle"] = "Toggle";
    })(exports2.ToggleStatus || (exports2.ToggleStatus = {}));
    var useToggle = function(isOpened) {
      var _a = React__namespace.useState(isOpened), opened = _a[0], setOpened = _a[1];
      var toggle = function(status) {
        switch (status) {
          case exports2.ToggleStatus.Close:
            setOpened(false);
            break;
          case exports2.ToggleStatus.Open:
            setOpened(true);
            break;
          case exports2.ToggleStatus.Toggle:
          default:
            setOpened(function(isOpened2) {
              return !isOpened2;
            });
            break;
        }
      };
      return { opened, toggle };
    };
    var Portal = function(_a) {
      var content = _a.content, _b = _a.isOpened, isOpened = _b === void 0 ? false : _b, target = _a.target;
      var _c = useToggle(isOpened), opened = _c.opened, toggle = _c.toggle;
      return React__namespace.createElement(
        React__namespace.Fragment,
        null,
        target && target(toggle, opened),
        opened && content(toggle)
      );
    };
    var Modal = function(_a) {
      var ariaControlsSuffix = _a.ariaControlsSuffix, closeOnClickOutside = _a.closeOnClickOutside, closeOnEscape = _a.closeOnEscape, content = _a.content, _b = _a.isOpened, isOpened = _b === void 0 ? false : _b, target = _a.target;
      var controlsSuffix = ariaControlsSuffix || "".concat(uniqueId());
      var renderTarget = function(toggle, opened) {
        return React__namespace.createElement("div", { "aria-expanded": opened ? "true" : "false", "aria-haspopup": "dialog", "aria-controls": "rpv-core__modal-body-".concat(controlsSuffix) }, target(toggle, opened));
      };
      var renderContent = function(toggle) {
        return React__namespace.createElement(
          ModalOverlay,
          null,
          React__namespace.createElement(ModalBody, { ariaControlsSuffix: controlsSuffix, closeOnClickOutside, closeOnEscape, onToggle: toggle }, content(toggle))
        );
      };
      return React__namespace.createElement(Portal, { target: target ? renderTarget : null, content: renderContent, isOpened });
    };
    exports2.Position = void 0;
    (function(Position) {
      Position["TopLeft"] = "TOP_LEFT";
      Position["TopCenter"] = "TOP_CENTER";
      Position["TopRight"] = "TOP_RIGHT";
      Position["RightTop"] = "RIGHT_TOP";
      Position["RightCenter"] = "RIGHT_CENTER";
      Position["RightBottom"] = "RIGHT_BOTTOM";
      Position["BottomLeft"] = "BOTTOM_LEFT";
      Position["BottomCenter"] = "BOTTOM_CENTER";
      Position["BottomRight"] = "BOTTOM_RIGHT";
      Position["LeftTop"] = "LEFT_TOP";
      Position["LeftCenter"] = "LEFT_CENTER";
      Position["LeftBottom"] = "LEFT_BOTTOM";
    })(exports2.Position || (exports2.Position = {}));
    var calculatePosition = function(content, target, position, offset) {
      var targetRect = target.getBoundingClientRect();
      var contentRect = content.getBoundingClientRect();
      var height = contentRect.height, width = contentRect.width;
      var top = 0;
      var left = 0;
      switch (position) {
        case exports2.Position.TopLeft:
          top = targetRect.top - height;
          left = targetRect.left;
          break;
        case exports2.Position.TopCenter:
          top = targetRect.top - height;
          left = targetRect.left + targetRect.width / 2 - width / 2;
          break;
        case exports2.Position.TopRight:
          top = targetRect.top - height;
          left = targetRect.left + targetRect.width - width;
          break;
        case exports2.Position.RightTop:
          top = targetRect.top;
          left = targetRect.left + targetRect.width;
          break;
        case exports2.Position.RightCenter:
          top = targetRect.top + targetRect.height / 2 - height / 2;
          left = targetRect.left + targetRect.width;
          break;
        case exports2.Position.RightBottom:
          top = targetRect.top + targetRect.height - height;
          left = targetRect.left + targetRect.width;
          break;
        case exports2.Position.BottomLeft:
          top = targetRect.top + targetRect.height;
          left = targetRect.left;
          break;
        case exports2.Position.BottomCenter:
          top = targetRect.top + targetRect.height;
          left = targetRect.left + targetRect.width / 2 - width / 2;
          break;
        case exports2.Position.BottomRight:
          top = targetRect.top + targetRect.height;
          left = targetRect.left + targetRect.width - width;
          break;
        case exports2.Position.LeftTop:
          top = targetRect.top;
          left = targetRect.left - width;
          break;
        case exports2.Position.LeftCenter:
          top = targetRect.top + targetRect.height / 2 - height / 2;
          left = targetRect.left - width;
          break;
        case exports2.Position.LeftBottom:
          top = targetRect.top + targetRect.height - height;
          left = targetRect.left - width;
          break;
      }
      return {
        left: left + (offset.left || 0),
        top: top + (offset.top || 0)
      };
    };
    var usePosition = function(contentRef, targetRef, anchorRef, position, offset) {
      useIsomorphicLayoutEffect(function() {
        var targetEle = targetRef.current;
        var contentEle = contentRef.current;
        var anchorEle = anchorRef.current;
        if (!contentEle || !targetEle || !anchorEle) {
          return;
        }
        var anchorRect = anchorEle.getBoundingClientRect();
        var _a = calculatePosition(contentEle, targetEle, position, offset), top = _a.top, left = _a.left;
        contentEle.style.top = "".concat(top - anchorRect.top, "px");
        contentEle.style.left = "".concat(left - anchorRect.left, "px");
      }, []);
    };
    var Arrow = function(_a) {
      var _b;
      var customClassName = _a.customClassName, position = _a.position;
      return React__namespace.createElement("div", { className: classNames((_b = {
        "rpv-core__arrow": true,
        "rpv-core__arrow--tl": position === exports2.Position.TopLeft,
        "rpv-core__arrow--tc": position === exports2.Position.TopCenter,
        "rpv-core__arrow--tr": position === exports2.Position.TopRight,
        "rpv-core__arrow--rt": position === exports2.Position.RightTop,
        "rpv-core__arrow--rc": position === exports2.Position.RightCenter,
        "rpv-core__arrow--rb": position === exports2.Position.RightBottom,
        "rpv-core__arrow--bl": position === exports2.Position.BottomLeft,
        "rpv-core__arrow--bc": position === exports2.Position.BottomCenter,
        "rpv-core__arrow--br": position === exports2.Position.BottomRight,
        "rpv-core__arrow--lt": position === exports2.Position.LeftTop,
        "rpv-core__arrow--lc": position === exports2.Position.LeftCenter,
        "rpv-core__arrow--lb": position === exports2.Position.LeftBottom
      }, _b["".concat(customClassName)] = customClassName !== "", _b)) });
    };
    var PopoverBody = function(_a) {
      var ariaControlsSuffix = _a.ariaControlsSuffix, children = _a.children, closeOnClickOutside = _a.closeOnClickOutside, offset = _a.offset, position = _a.position, targetRef = _a.targetRef, onClose = _a.onClose;
      var contentRef = React__namespace.useRef();
      var innerRef = React__namespace.useRef();
      var anchorRef = React__namespace.useRef();
      var direction = React__namespace.useContext(ThemeContext).direction;
      var isRtl = direction === exports2.TextDirection.RightToLeft;
      useClickOutside(closeOnClickOutside, contentRef, onClose);
      usePosition(contentRef, targetRef, anchorRef, position, offset);
      useIsomorphicLayoutEffect(function() {
        var innerContentEle = innerRef.current;
        if (!innerContentEle) {
          return;
        }
        var maxHeight = document.body.clientHeight * 0.75;
        if (innerContentEle.getBoundingClientRect().height >= maxHeight) {
          innerContentEle.style.overflow = "auto";
          innerContentEle.style.maxHeight = "".concat(maxHeight, "px");
        }
      }, []);
      var innerId = "rpv-core__popover-body-inner-".concat(ariaControlsSuffix);
      return React__namespace.createElement(
        React__namespace.Fragment,
        null,
        React__namespace.createElement("div", { ref: anchorRef, style: { left: 0, position: "absolute", top: 0 } }),
        React__namespace.createElement(
          "div",
          { "aria-describedby": innerId, className: classNames({
            "rpv-core__popover-body": true,
            "rpv-core__popover-body--rtl": isRtl
          }), id: "rpv-core__popover-body-".concat(ariaControlsSuffix), ref: contentRef, role: "dialog", tabIndex: -1 },
          React__namespace.createElement(Arrow, { customClassName: "rpv-core__popover-body-arrow", position }),
          React__namespace.createElement("div", { id: innerId, ref: innerRef }, children)
        )
      );
    };
    var PopoverOverlay = function(_a) {
      var closeOnEscape = _a.closeOnEscape, onClose = _a.onClose;
      var containerRef = React__namespace.useRef();
      useEscape(function() {
        if (containerRef.current && closeOnEscape) {
          onClose();
        }
      });
      return React__namespace.createElement("div", { className: "rpv-core__popover-overlay", ref: containerRef });
    };
    var Popover = function(_a) {
      var _b = _a.ariaHasPopup, ariaHasPopup = _b === void 0 ? "dialog" : _b, ariaControlsSuffix = _a.ariaControlsSuffix, closeOnClickOutside = _a.closeOnClickOutside, closeOnEscape = _a.closeOnEscape, content = _a.content, _c = _a.lockScroll, lockScroll = _c === void 0 ? true : _c, offset = _a.offset, position = _a.position, target = _a.target;
      var _d = useToggle(false), opened = _d.opened, toggle = _d.toggle;
      var targetRef = React__namespace.useRef();
      var controlsSuffix = React__namespace.useMemo(function() {
        return ariaControlsSuffix || "".concat(uniqueId());
      }, []);
      return React__namespace.createElement(
        "div",
        { ref: targetRef, "aria-expanded": opened ? "true" : "false", "aria-haspopup": ariaHasPopup, "aria-controls": "rpv-core__popver-body-".concat(controlsSuffix) },
        target(toggle, opened),
        opened && React__namespace.createElement(
          React__namespace.Fragment,
          null,
          lockScroll && React__namespace.createElement(PopoverOverlay, { closeOnEscape, onClose: toggle }),
          React__namespace.createElement(PopoverBody, { ariaControlsSuffix: controlsSuffix, closeOnClickOutside, offset, position, targetRef, onClose: toggle }, content(toggle))
        )
      );
    };
    var TooltipBody = function(_a) {
      var ariaControlsSuffix = _a.ariaControlsSuffix, children = _a.children, contentRef = _a.contentRef, offset = _a.offset, position = _a.position, targetRef = _a.targetRef;
      var anchorRef = React__namespace.useRef();
      var direction = React__namespace.useContext(ThemeContext).direction;
      var isRtl = direction === exports2.TextDirection.RightToLeft;
      usePosition(contentRef, targetRef, anchorRef, position, offset);
      return React__namespace.createElement(
        React__namespace.Fragment,
        null,
        React__namespace.createElement("div", { ref: anchorRef, style: { left: 0, position: "absolute", top: 0 } }),
        React__namespace.createElement(
          "div",
          { className: classNames({
            "rpv-core__tooltip-body": true,
            "rpv-core__tooltip-body--rtl": isRtl
          }), id: "rpv-core__tooltip-body-".concat(ariaControlsSuffix), ref: contentRef, role: "tooltip" },
          React__namespace.createElement(Arrow, { customClassName: "rpv-core__tooltip-body-arrow", position }),
          React__namespace.createElement("div", { className: "rpv-core__tooltip-body-content" }, children)
        )
      );
    };
    var Tooltip = function(_a) {
      var ariaControlsSuffix = _a.ariaControlsSuffix, content = _a.content, offset = _a.offset, position = _a.position, target = _a.target;
      var _b = useToggle(false), opened = _b.opened, toggle = _b.toggle;
      var targetRef = React__namespace.useRef();
      var contentRef = React__namespace.useRef();
      var controlsSuffix = React__namespace.useMemo(function() {
        return ariaControlsSuffix || "".concat(uniqueId());
      }, []);
      useEscape(function() {
        if (targetRef.current && document.activeElement && targetRef.current.contains(document.activeElement)) {
          close();
        }
      });
      var open = function() {
        toggle(exports2.ToggleStatus.Open);
      };
      var close = function() {
        toggle(exports2.ToggleStatus.Close);
      };
      var onBlur = function(e) {
        var shouldHideTooltip = e.relatedTarget instanceof HTMLElement && e.currentTarget.parentElement && e.currentTarget.parentElement.contains(e.relatedTarget);
        if (shouldHideTooltip) {
          if (contentRef.current) {
            contentRef.current.style.display = "none";
          }
        } else {
          close();
        }
      };
      return React__namespace.createElement(
        React__namespace.Fragment,
        null,
        React__namespace.createElement("div", { ref: targetRef, "aria-describedby": "rpv-core__tooltip-body-".concat(controlsSuffix), onBlur, onFocus: open, onMouseEnter: open, onMouseLeave: close }, target),
        opened && React__namespace.createElement(TooltipBody, { ariaControlsSuffix: controlsSuffix, contentRef, offset, position, targetRef }, content())
      );
    };
    function createStore(initialState) {
      var state = initialState || {};
      var listeners = {};
      var update = function(key, data) {
        var _a;
        state = __assign(__assign({}, state), (_a = {}, _a[key] = data, _a));
        (listeners[key] || []).forEach(function(handler) {
          return handler(state[key]);
        });
      };
      var get = function(key) {
        return state[key];
      };
      return {
        subscribe: function(key, handler) {
          listeners[key] = (listeners[key] || []).concat(handler);
        },
        unsubscribe: function(key, handler) {
          listeners[key] = (listeners[key] || []).filter(function(f) {
            return f !== handler;
          });
        },
        update: function(key, data) {
          update(key, data);
        },
        updateCurrentValue: function(key, updater) {
          var currentValue = get(key);
          if (currentValue !== void 0) {
            update(key, updater(currentValue));
          }
        },
        get: function(key) {
          return get(key);
        }
      };
    }
    exports2.FullScreenMode = void 0;
    (function(FullScreenMode) {
      FullScreenMode["Normal"] = "Normal";
      FullScreenMode["Entering"] = "Entering";
      FullScreenMode["Entered"] = "Entered";
      FullScreenMode["EnteredCompletely"] = "EnteredCompletely";
      FullScreenMode["Exitting"] = "Exitting";
      FullScreenMode["Exited"] = "Exited";
    })(exports2.FullScreenMode || (exports2.FullScreenMode = {}));
    exports2.LayerRenderStatus = void 0;
    (function(LayerRenderStatus) {
      LayerRenderStatus[LayerRenderStatus["PreRender"] = 0] = "PreRender";
      LayerRenderStatus[LayerRenderStatus["DidRender"] = 1] = "DidRender";
    })(exports2.LayerRenderStatus || (exports2.LayerRenderStatus = {}));
    exports2.PageMode = void 0;
    (function(PageMode) {
      PageMode["Attachments"] = "UseAttachments";
      PageMode["Bookmarks"] = "UseOutlines";
      PageMode["ContentGroup"] = "UseOC";
      PageMode["Default"] = "UserNone";
      PageMode["FullScreen"] = "FullScreen";
      PageMode["Thumbnails"] = "UseThumbs";
    })(exports2.PageMode || (exports2.PageMode = {}));
    exports2.PasswordStatus = void 0;
    (function(PasswordStatus) {
      PasswordStatus["RequiredPassword"] = "RequiredPassword";
      PasswordStatus["WrongPassword"] = "WrongPassword";
    })(exports2.PasswordStatus || (exports2.PasswordStatus = {}));
    exports2.RotateDirection = void 0;
    (function(RotateDirection) {
      RotateDirection["Backward"] = "Backward";
      RotateDirection["Forward"] = "Forward";
    })(exports2.RotateDirection || (exports2.RotateDirection = {}));
    exports2.ScrollMode = void 0;
    (function(ScrollMode) {
      ScrollMode["Page"] = "Page";
      ScrollMode["Horizontal"] = "Horizontal";
      ScrollMode["Vertical"] = "Vertical";
      ScrollMode["Wrapped"] = "Wrapped";
    })(exports2.ScrollMode || (exports2.ScrollMode = {}));
    exports2.SpecialZoomLevel = void 0;
    (function(SpecialZoomLevel) {
      SpecialZoomLevel["ActualSize"] = "ActualSize";
      SpecialZoomLevel["PageFit"] = "PageFit";
      SpecialZoomLevel["PageWidth"] = "PageWidth";
    })(exports2.SpecialZoomLevel || (exports2.SpecialZoomLevel = {}));
    exports2.ViewMode = void 0;
    (function(ViewMode) {
      ViewMode["DualPage"] = "DualPage";
      ViewMode["DualPageWithCover"] = "DualPageWithCover";
      ViewMode["SinglePage"] = "SinglePage";
    })(exports2.ViewMode || (exports2.ViewMode = {}));
    var chunk = function(arr, size) {
      return arr.reduce(function(acc, e, i) {
        return i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc;
      }, []);
    };
    var isMac = function() {
      return typeof window !== "undefined" ? /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) : false;
    };
    var normalizeDestination = function(pageIndex, destArray) {
      switch (destArray[1].name) {
        case "XYZ":
          return {
            bottomOffset: function(_, viewportHeight) {
              return destArray[3] === null ? viewportHeight : destArray[3];
            },
            leftOffset: function(_, __) {
              return destArray[2] === null ? 0 : destArray[2];
            },
            pageIndex,
            scaleTo: destArray[4]
          };
        case "Fit":
        case "FitB":
          return {
            bottomOffset: 0,
            leftOffset: 0,
            pageIndex,
            scaleTo: exports2.SpecialZoomLevel.PageFit
          };
        case "FitH":
        case "FitBH":
          return {
            bottomOffset: destArray[2],
            leftOffset: 0,
            pageIndex,
            scaleTo: exports2.SpecialZoomLevel.PageWidth
          };
        default:
          return {
            bottomOffset: 0,
            leftOffset: 0,
            pageIndex,
            scaleTo: 1
          };
      }
    };
    var pageOutlinesMap = /* @__PURE__ */ new Map();
    var pagesMap = /* @__PURE__ */ new Map();
    var generateRefKey = function(doc, outline) {
      return "".concat(doc.loadingTask.docId, "___").concat(outline.num, "R").concat(outline.gen === 0 ? "" : outline.gen);
    };
    var getPageIndex = function(doc, outline) {
      var key = generateRefKey(doc, outline);
      return pageOutlinesMap.has(key) ? pageOutlinesMap.get(key) : null;
    };
    var cacheOutlineRef = function(doc, outline, pageIndex) {
      pageOutlinesMap.set(generateRefKey(doc, outline), pageIndex);
    };
    var clearPagesCache = function() {
      pageOutlinesMap.clear();
      pagesMap.clear();
    };
    var getPage = function(doc, pageIndex) {
      if (!doc) {
        return Promise.reject("The document is not loaded yet");
      }
      var pageKey = "".concat(doc.loadingTask.docId, "___").concat(pageIndex);
      var page = pagesMap.get(pageKey);
      if (page) {
        return Promise.resolve(page);
      }
      return new Promise(function(resolve, _) {
        doc.getPage(pageIndex + 1).then(function(page2) {
          pagesMap.set(pageKey, page2);
          if (page2.ref) {
            cacheOutlineRef(doc, page2.ref, pageIndex);
          }
          resolve(page2);
        });
      });
    };
    var getDestination = function(doc, dest) {
      return new Promise(function(res) {
        new Promise(function(resolve) {
          if (typeof dest === "string") {
            doc.getDestination(dest).then(function(destArray) {
              resolve(destArray);
            });
          } else {
            resolve(dest);
          }
        }).then(function(destArray) {
          if ("object" === typeof destArray[0] && destArray[0] !== null) {
            var outlineRef_1 = destArray[0];
            var pageIndex = getPageIndex(doc, outlineRef_1);
            if (pageIndex === null) {
              doc.getPageIndex(outlineRef_1).then(function(pageIndex2) {
                cacheOutlineRef(doc, outlineRef_1, pageIndex2);
                getDestination(doc, dest).then(function(result) {
                  return res(result);
                });
              });
            } else {
              res(normalizeDestination(pageIndex, destArray));
            }
          } else {
            var target = normalizeDestination(destArray[0], destArray);
            res(target);
          }
        });
      });
    };
    var useRunOnce = function(cb, condition) {
      var isCalledRef = React__namespace.useRef(false);
      useIsomorphicLayoutEffect(function() {
        if (condition && !isCalledRef.current) {
          isCalledRef.current = true;
          cb();
        }
      }, [cb, condition]);
    };
    var useTrackResize = function(_a) {
      var targetRef = _a.targetRef, onResize = _a.onResize;
      useIsomorphicLayoutEffect(function() {
        var io = new ResizeObserver(function(entries) {
          entries.forEach(function(entry) {
            onResize(entry.target);
          });
        });
        var container = targetRef.current;
        if (!container) {
          return;
        }
        io.observe(container);
        return function() {
          io.unobserve(container);
        };
      }, []);
    };
    var AnnotationBorderStyleType;
    (function(AnnotationBorderStyleType2) {
      AnnotationBorderStyleType2[AnnotationBorderStyleType2["Solid"] = 1] = "Solid";
      AnnotationBorderStyleType2[AnnotationBorderStyleType2["Dashed"] = 2] = "Dashed";
      AnnotationBorderStyleType2[AnnotationBorderStyleType2["Beveled"] = 3] = "Beveled";
      AnnotationBorderStyleType2[AnnotationBorderStyleType2["Inset"] = 4] = "Inset";
      AnnotationBorderStyleType2[AnnotationBorderStyleType2["Underline"] = 5] = "Underline";
    })(AnnotationBorderStyleType || (AnnotationBorderStyleType = {}));
    var dateRegex = new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?");
    var parse = function(value, min, max, defaultValue) {
      var parsed = parseInt(value, 10);
      return parsed >= min && parsed <= max ? parsed : defaultValue;
    };
    var convertDate = function(input) {
      var matches = dateRegex.exec(input);
      if (!matches) {
        return null;
      }
      var year = parseInt(matches[1], 10);
      var month = parse(matches[2], 1, 12, 1) - 1;
      var day = parse(matches[3], 1, 31, 1);
      var hour = parse(matches[4], 0, 23, 0);
      var minute = parse(matches[5], 0, 59, 0);
      var second = parse(matches[6], 0, 59, 0);
      var universalTimeRelation = matches[7] || "Z";
      var offsetHour = parse(matches[8], 0, 23, 0);
      var offsetMinute = parse(matches[9], 0, 59, 0);
      switch (universalTimeRelation) {
        case "-":
          hour += offsetHour;
          minute += offsetMinute;
          break;
        case "+":
          hour -= offsetHour;
          minute -= offsetMinute;
          break;
      }
      return new Date(Date.UTC(year, month, day, hour, minute, second));
    };
    var getContents = function(annotation) {
      return annotation.contentsObj ? annotation.contentsObj.str : annotation.contents || "";
    };
    var getTitle = function(annotation) {
      return annotation.titleObj ? annotation.titleObj.str : annotation.title || "";
    };
    var PopupWrapper = function(_a) {
      var annotation = _a.annotation;
      var direction = React__namespace.useContext(ThemeContext).direction;
      var title = getTitle(annotation);
      var contents = getContents(annotation);
      var isRtl = direction === exports2.TextDirection.RightToLeft;
      var containerRef = React__namespace.useRef();
      var dateStr = "";
      if (annotation.modificationDate) {
        var date = convertDate(annotation.modificationDate);
        dateStr = date ? "".concat(date.toLocaleDateString(), ", ").concat(date.toLocaleTimeString()) : "";
      }
      React__namespace.useLayoutEffect(function() {
        var containerEle = containerRef.current;
        if (!containerEle) {
          return;
        }
        var annotationEle = document.querySelector('[data-annotation-id="'.concat(annotation.id, '"]'));
        if (!annotationEle) {
          return;
        }
        var ele = annotationEle;
        ele.style.zIndex += 1;
        return function() {
          ele.style.zIndex = "".concat(parseInt(ele.style.zIndex, 10) - 1);
        };
      }, []);
      return React__namespace.createElement(
        "div",
        { ref: containerRef, className: classNames({
          "rpv-core__annotation-popup-wrapper": true,
          "rpv-core__annotation-popup-wrapper--rtl": isRtl
        }), style: {
          top: annotation.annotationType === exports2.AnnotationType.Popup ? "" : "100%"
        } },
        title && React__namespace.createElement(
          React__namespace.Fragment,
          null,
          React__namespace.createElement("div", { className: classNames({
            "rpv-core__annotation-popup-title": true,
            "rpv-core__annotation-popup-title--ltr": !isRtl,
            "rpv-core__annotation-popup-title--rtl": isRtl
          }) }, title),
          React__namespace.createElement("div", { className: "rpv-core__annotation-popup-date" }, dateStr)
        ),
        contents && React__namespace.createElement("div", { className: "rpv-core__annotation-popup-content" }, contents.split("\n").map(function(item, index) {
          return React__namespace.createElement(
            React__namespace.Fragment,
            { key: index },
            item,
            React__namespace.createElement("br", null)
          );
        }))
      );
    };
    var TogglePopupBy;
    (function(TogglePopupBy2) {
      TogglePopupBy2["Click"] = "Click";
      TogglePopupBy2["Hover"] = "Hover";
    })(TogglePopupBy || (TogglePopupBy = {}));
    var useTogglePopup = function() {
      var _a = useToggle(false), opened = _a.opened, toggle = _a.toggle;
      var _b = React__namespace.useState(TogglePopupBy.Hover), togglePopupBy = _b[0], setTooglePopupBy = _b[1];
      var toggleOnClick = function() {
        switch (togglePopupBy) {
          case TogglePopupBy.Click:
            opened && setTooglePopupBy(TogglePopupBy.Hover);
            toggle(exports2.ToggleStatus.Toggle);
            break;
          case TogglePopupBy.Hover:
            setTooglePopupBy(TogglePopupBy.Click);
            toggle(exports2.ToggleStatus.Open);
            break;
        }
      };
      var openOnHover = function() {
        togglePopupBy === TogglePopupBy.Hover && toggle(exports2.ToggleStatus.Open);
      };
      var closeOnHover = function() {
        togglePopupBy === TogglePopupBy.Hover && toggle(exports2.ToggleStatus.Close);
      };
      return {
        opened,
        closeOnHover,
        openOnHover,
        toggleOnClick
      };
    };
    var Annotation = function(_a) {
      var annotation = _a.annotation, children = _a.children, ignoreBorder = _a.ignoreBorder, hasPopup = _a.hasPopup, isRenderable = _a.isRenderable, page = _a.page, viewport = _a.viewport;
      var rect = annotation.rect;
      var _b = useTogglePopup(), closeOnHover = _b.closeOnHover, opened = _b.opened, openOnHover = _b.openOnHover, toggleOnClick = _b.toggleOnClick;
      var normalizeRect = function(r) {
        return [
          Math.min(r[0], r[2]),
          Math.min(r[1], r[3]),
          Math.max(r[0], r[2]),
          Math.max(r[1], r[3])
        ];
      };
      var bound = normalizeRect([
        rect[0],
        page.view[3] + page.view[1] - rect[1],
        rect[2],
        page.view[3] + page.view[1] - rect[3]
      ]);
      var width = rect[2] - rect[0];
      var height = rect[3] - rect[1];
      var styles = {
        borderColor: "",
        borderRadius: "",
        borderStyle: "",
        borderWidth: ""
      };
      if (!ignoreBorder && annotation.borderStyle.width > 0) {
        switch (annotation.borderStyle.style) {
          case AnnotationBorderStyleType.Dashed:
            styles.borderStyle = "dashed";
            break;
          case AnnotationBorderStyleType.Solid:
            styles.borderStyle = "solid";
            break;
          case AnnotationBorderStyleType.Underline:
            styles = Object.assign({
              borderBottomStyle: "solid"
            }, styles);
            break;
          case AnnotationBorderStyleType.Beveled:
          case AnnotationBorderStyleType.Inset:
        }
        var borderWidth = annotation.borderStyle.width;
        styles.borderWidth = "".concat(borderWidth, "px");
        if (annotation.borderStyle.style !== AnnotationBorderStyleType.Underline) {
          width = width - 2 * borderWidth;
          height = height - 2 * borderWidth;
        }
        var _c = annotation.borderStyle, horizontalCornerRadius = _c.horizontalCornerRadius, verticalCornerRadius = _c.verticalCornerRadius;
        if (horizontalCornerRadius > 0 || verticalCornerRadius > 0) {
          styles.borderRadius = "".concat(horizontalCornerRadius, "px / ").concat(verticalCornerRadius, "px");
        }
        annotation.color ? styles.borderColor = "rgb(".concat(annotation.color[0] | 0, ", ").concat(annotation.color[1] | 0, ", ").concat(annotation.color[2] | 0, ")") : styles.borderWidth = "0";
      }
      return React__namespace.createElement(React__namespace.Fragment, null, isRenderable && children({
        popup: {
          opened,
          closeOnHover,
          openOnHover,
          toggleOnClick
        },
        slot: {
          attrs: {
            style: Object.assign({
              height: "".concat(height, "px"),
              left: "".concat(bound[0], "px"),
              top: "".concat(bound[1], "px"),
              transform: "matrix(".concat(viewport.transform.join(","), ")"),
              transformOrigin: "-".concat(bound[0], "px -").concat(bound[1], "px"),
              width: "".concat(width, "px")
            }, styles)
          },
          children: React__namespace.createElement(React__namespace.Fragment, null, hasPopup && opened && React__namespace.createElement(PopupWrapper, { annotation }))
        }
      }));
    };
    var Caret = function(_a) {
      var annotation = _a.annotation, page = _a.page, viewport = _a.viewport;
      var hasPopup = annotation.hasPopup === false;
      var title = getTitle(annotation);
      var contents = getContents(annotation);
      var isRenderable = !!(annotation.hasPopup || title || contents);
      return React__namespace.createElement(Annotation, { annotation, hasPopup, ignoreBorder: true, isRenderable, page, viewport }, function(props) {
        return React__namespace.createElement("div", __assign({}, props.slot.attrs, { className: "rpv-core__annotation rpv-core__annotation--caret", "data-annotation-id": annotation.id, onClick: props.popup.toggleOnClick, onMouseEnter: props.popup.openOnHover, onMouseLeave: props.popup.closeOnHover }), props.slot.children);
      });
    };
    var Circle = function(_a) {
      var annotation = _a.annotation, page = _a.page, viewport = _a.viewport;
      var hasPopup = annotation.hasPopup === false;
      var title = getTitle(annotation);
      var contents = getContents(annotation);
      var isRenderable = !!(annotation.hasPopup || title || contents);
      var rect = annotation.rect;
      var width = rect[2] - rect[0];
      var height = rect[3] - rect[1];
      var borderWidth = annotation.borderStyle.width;
      return React__namespace.createElement(Annotation, { annotation, hasPopup, ignoreBorder: true, isRenderable, page, viewport }, function(props) {
        return React__namespace.createElement(
          "div",
          __assign({}, props.slot.attrs, { className: "rpv-core__annotation rpv-core__annotation--circle", "data-annotation-id": annotation.id, onClick: props.popup.toggleOnClick, onMouseEnter: props.popup.openOnHover, onMouseLeave: props.popup.closeOnHover }),
          React__namespace.createElement(
            "svg",
            { height: "".concat(height, "px"), preserveAspectRatio: "none", version: "1.1", viewBox: "0 0 ".concat(width, " ").concat(height), width: "".concat(width, "px") },
            React__namespace.createElement("circle", { cy: height / 2, fill: "none", rx: width / 2 - borderWidth / 2, ry: height / 2 - borderWidth / 2, stroke: "transparent", strokeWidth: borderWidth || 1 })
          ),
          props.slot.children
        );
      });
    };
    var getFileName = function(url) {
      var str = url.split("/").pop();
      return str ? str.split("#")[0].split("?")[0] : url;
    };
    var downloadFile = function(url, data) {
      var blobUrl = typeof data === "string" ? "" : URL.createObjectURL(new Blob([data], { type: "" }));
      var link = document.createElement("a");
      link.style.display = "none";
      link.href = blobUrl || url;
      link.setAttribute("download", getFileName(url));
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      if (blobUrl) {
        URL.revokeObjectURL(blobUrl);
      }
    };
    var FileAttachment = function(_a) {
      var annotation = _a.annotation, page = _a.page, viewport = _a.viewport;
      var title = getTitle(annotation);
      var contents = getContents(annotation);
      var hasPopup = annotation.hasPopup === false && (!!title || !!contents);
      var doubleClick = function() {
        var file = annotation.file;
        file && downloadFile(file.filename, file.content);
      };
      return React__namespace.createElement(Annotation, { annotation, hasPopup, ignoreBorder: true, isRenderable: true, page, viewport }, function(props) {
        return React__namespace.createElement("div", __assign({}, props.slot.attrs, { className: "rpv-core__annotation rpv-core__annotation--file-attachment", "data-annotation-id": annotation.id, onClick: props.popup.toggleOnClick, onDoubleClick: doubleClick, onMouseEnter: props.popup.openOnHover, onMouseLeave: props.popup.closeOnHover }), props.slot.children);
      });
    };
    var FreeText = function(_a) {
      var annotation = _a.annotation, page = _a.page, viewport = _a.viewport;
      var hasPopup = annotation.hasPopup === false;
      var title = getTitle(annotation);
      var contents = getContents(annotation);
      var isRenderable = !!(annotation.hasPopup || title || contents);
      return React__namespace.createElement(Annotation, { annotation, hasPopup, ignoreBorder: true, isRenderable, page, viewport }, function(props) {
        return React__namespace.createElement("div", __assign({}, props.slot.attrs, { className: "rpv-core__annotation rpv-core__annotation--free-text", "data-annotation-id": annotation.id, onClick: props.popup.toggleOnClick, onMouseEnter: props.popup.openOnHover, onMouseLeave: props.popup.closeOnHover }), props.slot.children);
      });
    };
    var Popup = function(_a) {
      var annotation = _a.annotation, page = _a.page, viewport = _a.viewport;
      var title = getTitle(annotation);
      var contents = getContents(annotation);
      var isRenderable = !!(title || contents);
      var ignoredParents = ["Circle", "Ink", "Line", "Polygon", "PolyLine", "Square"];
      var hasPopup = !annotation.parentType || ignoredParents.indexOf(annotation.parentType) !== -1;
      useIsomorphicLayoutEffect(function() {
        if (!annotation.parentId) {
          return;
        }
        var parent = document.querySelector('[data-annotation-id="'.concat(annotation.parentId, '"]'));
        var container = document.querySelector('[data-annotation-id="'.concat(annotation.id, '"]'));
        if (!parent || !container) {
          return;
        }
        var left = parseFloat(parent.style.left);
        var top = parseFloat(parent.style.top) + parseFloat(parent.style.height);
        container.style.left = "".concat(left, "px");
        container.style.top = "".concat(top, "px");
        container.style.transformOrigin = "-".concat(left, "px -").concat(top, "px");
      }, []);
      return React__namespace.createElement(Annotation, { annotation, hasPopup, ignoreBorder: false, isRenderable, page, viewport }, function(props) {
        return React__namespace.createElement(
          "div",
          __assign({}, props.slot.attrs, { className: "rpv-core__annotation rpv-core__annotation--popup", "data-annotation-id": annotation.id }),
          React__namespace.createElement(PopupWrapper, { annotation })
        );
      });
    };
    var Highlight = function(_a) {
      var annotation = _a.annotation, childAnnotation = _a.childAnnotation, page = _a.page, viewport = _a.viewport;
      var hasPopup = annotation.hasPopup === false;
      var title = getTitle(annotation);
      var contents = getContents(annotation);
      var isRenderable = !!(annotation.hasPopup || title || contents);
      var hasQuadPoints = annotation.quadPoints && annotation.quadPoints.length > 0;
      if (hasQuadPoints) {
        var annotations = annotation.quadPoints.map(function(quadPoint) {
          return Object.assign({}, annotation, {
            rect: [quadPoint[2].x, quadPoint[2].y, quadPoint[1].x, quadPoint[1].y],
            quadPoints: []
          });
        });
        return React__namespace.createElement(React__namespace.Fragment, null, annotations.map(function(ann, index) {
          return React__namespace.createElement(Highlight, { key: index, annotation: ann, childAnnotation, page, viewport });
        }));
      }
      return React__namespace.createElement(Annotation, { annotation, hasPopup, ignoreBorder: true, isRenderable, page, viewport }, function(props) {
        return React__namespace.createElement(
          React__namespace.Fragment,
          null,
          React__namespace.createElement("div", __assign({}, props.slot.attrs, { className: "rpv-core__annotation rpv-core__annotation--highlight", "data-annotation-id": annotation.id, onClick: props.popup.toggleOnClick, onMouseEnter: props.popup.openOnHover, onMouseLeave: props.popup.closeOnHover }), props.slot.children),
          childAnnotation && childAnnotation.annotationType === exports2.AnnotationType.Popup && props.popup.opened && React__namespace.createElement(Popup, { annotation: childAnnotation, page, viewport })
        );
      });
    };
    var Ink = function(_a) {
      var annotation = _a.annotation, page = _a.page, viewport = _a.viewport;
      var hasPopup = annotation.hasPopup === false;
      var title = getTitle(annotation);
      var contents = getContents(annotation);
      var isRenderable = !!(annotation.hasPopup || title || contents);
      var rect = annotation.rect;
      var width = rect[2] - rect[0];
      var height = rect[3] - rect[1];
      var borderWidth = annotation.borderStyle.width;
      return React__namespace.createElement(Annotation, { annotation, hasPopup, ignoreBorder: true, isRenderable, page, viewport }, function(props) {
        return React__namespace.createElement(
          "div",
          __assign({}, props.slot.attrs, { className: "rpv-core__annotation rpv-core__annotation--ink", "data-annotation-id": annotation.id, onClick: props.popup.toggleOnClick, onMouseEnter: props.popup.openOnHover, onMouseLeave: props.popup.closeOnHover }),
          annotation.inkLists && annotation.inkLists.length && React__namespace.createElement("svg", { height: "".concat(height, "px"), preserveAspectRatio: "none", version: "1.1", viewBox: "0 0 ".concat(width, " ").concat(height), width: "".concat(width, "px") }, annotation.inkLists.map(function(inkList, index) {
            return React__namespace.createElement("polyline", { key: index, fill: "none", stroke: "transparent", strokeWidth: borderWidth || 1, points: inkList.map(function(item) {
              return "".concat(item.x - rect[0], ",").concat(rect[3] - item.y);
            }).join(" ") });
          })),
          props.slot.children
        );
      });
    };
    var Line = function(_a) {
      var annotation = _a.annotation, page = _a.page, viewport = _a.viewport;
      var hasPopup = annotation.hasPopup === false;
      var title = getTitle(annotation);
      var contents = getContents(annotation);
      var isRenderable = !!(annotation.hasPopup || title || contents);
      var rect = annotation.rect;
      var width = rect[2] - rect[0];
      var height = rect[3] - rect[1];
      var borderWidth = annotation.borderStyle.width;
      return React__namespace.createElement(Annotation, { annotation, hasPopup, ignoreBorder: true, isRenderable, page, viewport }, function(props) {
        return React__namespace.createElement(
          "div",
          __assign({}, props.slot.attrs, { className: "rpv-core__annotation rpv-core__annotation--line", "data-annotation-id": annotation.id, onClick: props.popup.toggleOnClick, onMouseEnter: props.popup.openOnHover, onMouseLeave: props.popup.closeOnHover }),
          React__namespace.createElement(
            "svg",
            { height: "".concat(height, "px"), preserveAspectRatio: "none", version: "1.1", viewBox: "0 0 ".concat(width, " ").concat(height), width: "".concat(width, "px") },
            React__namespace.createElement("line", { stroke: "transparent", strokeWidth: borderWidth || 1, x1: rect[2] - annotation.lineCoordinates[0], x2: rect[2] - annotation.lineCoordinates[2], y1: rect[3] - annotation.lineCoordinates[1], y2: rect[3] - annotation.lineCoordinates[3] })
          ),
          props.slot.children
        );
      });
    };
    var INVALID_PROTOCOL = /^([^\w]*)(javascript|data|vbscript)/im;
    var HTML_ENTITIES = /&#(\w+)(^\w|;)?/g;
    var CTRL_CHARS = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
    var URL_SCHEME = /^([^:]+):/gm;
    var decodeHtmlEntities = function(str) {
      return str.replace(HTML_ENTITIES, function(_, dec) {
        return String.fromCharCode(dec);
      });
    };
    var sanitizeUrl = function(url, defaultUrl) {
      if (defaultUrl === void 0) {
        defaultUrl = "about:blank";
      }
      var result = decodeHtmlEntities(url || "").replace(CTRL_CHARS, "").trim();
      if (!result) {
        return defaultUrl;
      }
      var firstChar = result[0];
      if (firstChar === "." || firstChar === "/") {
        return result;
      }
      var parsedUrlScheme = result.match(URL_SCHEME);
      if (!parsedUrlScheme) {
        return result;
      }
      var scheme = parsedUrlScheme[0];
      return INVALID_PROTOCOL.test(scheme) ? defaultUrl : result;
    };
    var Link = function(_a) {
      var _b;
      var annotation = _a.annotation, annotationContainerRef = _a.annotationContainerRef, doc = _a.doc, outlines = _a.outlines, page = _a.page, pageIndex = _a.pageIndex, scale = _a.scale, viewport = _a.viewport, onExecuteNamedAction = _a.onExecuteNamedAction, onJumpFromLinkAnnotation = _a.onJumpFromLinkAnnotation, onJumpToDest = _a.onJumpToDest;
      var elementRef = React__namespace.useRef();
      var title = outlines && outlines.length && annotation.dest && typeof annotation.dest === "string" ? (_b = outlines.find(function(item) {
        return item.dest === annotation.dest;
      })) === null || _b === void 0 ? void 0 : _b.title : "";
      var link = function(e) {
        e.preventDefault();
        annotation.action ? onExecuteNamedAction(annotation.action) : getDestination(doc, annotation.dest).then(function(target) {
          var element = elementRef.current;
          var annotationContainer = annotationContainerRef.current;
          if (element && annotationContainer) {
            var linkRect = element.getBoundingClientRect();
            annotationContainer.style.setProperty("height", "100%");
            annotationContainer.style.setProperty("width", "100%");
            var annotationLayerRect = annotationContainer.getBoundingClientRect();
            annotationContainer.style.removeProperty("height");
            annotationContainer.style.removeProperty("width");
            var leftOffset = (linkRect.left - annotationLayerRect.left) / scale;
            var bottomOffset = (annotationLayerRect.bottom - linkRect.bottom + linkRect.height) / scale;
            onJumpFromLinkAnnotation({
              bottomOffset,
              label: title,
              leftOffset,
              pageIndex
            });
          }
          onJumpToDest(target);
        });
      };
      var isRenderable = !!(annotation.url || annotation.dest || annotation.action || annotation.unsafeUrl);
      var attrs = {};
      if (annotation.url || annotation.unsafeUrl) {
        var targetUrl = sanitizeUrl(annotation.url || annotation.unsafeUrl, "");
        if (targetUrl) {
          attrs = {
            "data-target": "external",
            href: targetUrl,
            rel: "noopener noreferrer nofollow",
            target: annotation.newWindow ? "_blank" : "",
            title: targetUrl
          };
        } else {
          isRenderable = false;
        }
      } else {
        attrs = {
          href: "",
          "data-annotation-link": annotation.id,
          onClick: link
        };
      }
      if (title) {
        attrs = Object.assign({}, attrs, {
          title,
          "aria-label": title
        });
      }
      return React__namespace.createElement(Annotation, { annotation, hasPopup: false, ignoreBorder: false, isRenderable, page, viewport }, function(props) {
        return React__namespace.createElement(
          "div",
          __assign({}, props.slot.attrs, { className: "rpv-core__annotation rpv-core__annotation--link", "data-annotation-id": annotation.id, "data-testid": "core__annotation--link-".concat(annotation.id) }),
          React__namespace.createElement("a", __assign({ ref: elementRef }, attrs))
        );
      });
    };
    var Polygon = function(_a) {
      var annotation = _a.annotation, page = _a.page, viewport = _a.viewport;
      var hasPopup = annotation.hasPopup === false;
      var title = getTitle(annotation);
      var contents = getContents(annotation);
      var isRenderable = !!(annotation.hasPopup || title || contents);
      var rect = annotation.rect;
      var width = rect[2] - rect[0];
      var height = rect[3] - rect[1];
      var borderWidth = annotation.borderStyle.width;
      return React__namespace.createElement(Annotation, { annotation, hasPopup, ignoreBorder: true, isRenderable, page, viewport }, function(props) {
        return React__namespace.createElement(
          "div",
          __assign({}, props.slot.attrs, { className: "rpv-core__annotation rpv-core__annotation--polygon", "data-annotation-id": annotation.id, onClick: props.popup.toggleOnClick, onMouseEnter: props.popup.openOnHover, onMouseLeave: props.popup.closeOnHover }),
          annotation.vertices && annotation.vertices.length && React__namespace.createElement(
            "svg",
            { height: "".concat(height, "px"), preserveAspectRatio: "none", version: "1.1", viewBox: "0 0 ".concat(width, " ").concat(height), width: "".concat(width, "px") },
            React__namespace.createElement("polygon", { fill: "none", stroke: "transparent", strokeWidth: borderWidth || 1, points: annotation.vertices.map(function(item) {
              return "".concat(item.x - rect[0], ",").concat(rect[3] - item.y);
            }).join(" ") })
          ),
          props.slot.children
        );
      });
    };
    var Polyline = function(_a) {
      var annotation = _a.annotation, page = _a.page, viewport = _a.viewport;
      var hasPopup = annotation.hasPopup === false;
      var title = getTitle(annotation);
      var contents = getContents(annotation);
      var isRenderable = !!(annotation.hasPopup || title || contents);
      var rect = annotation.rect;
      var width = rect[2] - rect[0];
      var height = rect[3] - rect[1];
      var borderWidth = annotation.borderStyle.width;
      return React__namespace.createElement(Annotation, { annotation, hasPopup, ignoreBorder: true, isRenderable, page, viewport }, function(props) {
        return React__namespace.createElement(
          "div",
          __assign({}, props.slot.attrs, { className: "rpv-core__annotation rpv-core__annotation--polyline", "data-annotation-id": annotation.id, onClick: props.popup.toggleOnClick, onMouseEnter: props.popup.openOnHover, onMouseLeave: props.popup.closeOnHover }),
          annotation.vertices && annotation.vertices.length && React__namespace.createElement(
            "svg",
            { height: "".concat(height, "px"), preserveAspectRatio: "none", version: "1.1", viewBox: "0 0 ".concat(width, " ").concat(height), width: "".concat(width, "px") },
            React__namespace.createElement("polyline", { fill: "none", stroke: "transparent", strokeWidth: borderWidth || 1, points: annotation.vertices.map(function(item) {
              return "".concat(item.x - rect[0], ",").concat(rect[3] - item.y);
            }).join(" ") })
          ),
          props.slot.children
        );
      });
    };
    var Square = function(_a) {
      var annotation = _a.annotation, page = _a.page, viewport = _a.viewport;
      var hasPopup = annotation.hasPopup === false;
      var title = getTitle(annotation);
      var contents = getContents(annotation);
      var isRenderable = !!(annotation.hasPopup || title || contents);
      var rect = annotation.rect;
      var width = rect[2] - rect[0];
      var height = rect[3] - rect[1];
      var borderWidth = annotation.borderStyle.width;
      return React__namespace.createElement(Annotation, { annotation, hasPopup, ignoreBorder: true, isRenderable, page, viewport }, function(props) {
        return React__namespace.createElement(
          "div",
          __assign({}, props.slot.attrs, { className: "rpv-core__annotation rpv-core__annotation--square", "data-annotation-id": annotation.id, onClick: props.popup.toggleOnClick, onMouseEnter: props.popup.openOnHover, onMouseLeave: props.popup.closeOnHover }),
          React__namespace.createElement(
            "svg",
            { height: "".concat(height, "px"), preserveAspectRatio: "none", version: "1.1", viewBox: "0 0 ".concat(width, " ").concat(height), width: "".concat(width, "px") },
            React__namespace.createElement("rect", { height: height - borderWidth, fill: "none", stroke: "transparent", strokeWidth: borderWidth || 1, x: borderWidth / 2, y: borderWidth / 2, width: width - borderWidth })
          ),
          props.slot.children
        );
      });
    };
    var Squiggly = function(_a) {
      var annotation = _a.annotation, page = _a.page, viewport = _a.viewport;
      var hasPopup = annotation.hasPopup === false;
      var title = getTitle(annotation);
      var contents = getContents(annotation);
      var isRenderable = !!(annotation.hasPopup || title || contents);
      return React__namespace.createElement(Annotation, { annotation, hasPopup, ignoreBorder: true, isRenderable, page, viewport }, function(props) {
        return React__namespace.createElement("div", __assign({}, props.slot.attrs, { className: "rpv-core__annotation rpv-core__annotation--squiggly", "data-annotation-id": annotation.id, onClick: props.popup.toggleOnClick, onMouseEnter: props.popup.openOnHover, onMouseLeave: props.popup.closeOnHover }), props.slot.children);
      });
    };
    var Stamp = function(_a) {
      var annotation = _a.annotation, page = _a.page, viewport = _a.viewport;
      var hasPopup = annotation.hasPopup === false;
      var title = getTitle(annotation);
      var contents = getContents(annotation);
      var isRenderable = !!(annotation.hasPopup || title || contents);
      return React__namespace.createElement(Annotation, { annotation, hasPopup, ignoreBorder: true, isRenderable, page, viewport }, function(props) {
        return React__namespace.createElement("div", __assign({}, props.slot.attrs, { className: "rpv-core__annotation rpv-core__annotation--stamp", "data-annotation-id": annotation.id, onClick: props.popup.toggleOnClick, onMouseEnter: props.popup.openOnHover, onMouseLeave: props.popup.closeOnHover }), props.slot.children);
      });
    };
    var StrikeOut = function(_a) {
      var annotation = _a.annotation, page = _a.page, viewport = _a.viewport;
      var hasPopup = annotation.hasPopup === false;
      var title = getTitle(annotation);
      var contents = getContents(annotation);
      var isRenderable = !!(annotation.hasPopup || title || contents);
      return React__namespace.createElement(Annotation, { annotation, hasPopup, ignoreBorder: true, isRenderable, page, viewport }, function(props) {
        return React__namespace.createElement("div", __assign({}, props.slot.attrs, { className: "rpv-core__annotation rpv-core__annotation--strike-out", "data-annotation-id": annotation.id, onClick: props.popup.toggleOnClick, onMouseEnter: props.popup.openOnHover, onMouseLeave: props.popup.closeOnHover }), props.slot.children);
      });
    };
    var CommentIcon = function() {
      return React__namespace.createElement(
        Icon,
        { size: 16 },
        React__namespace.createElement("path", { d: "M.5,16.5a1,1,0,0,0,1,1h2v4l4-4h15a1,1,0,0,0,1-1V3.5a1,1,0,0,0-1-1H1.5a1,1,0,0,0-1,1Z" }),
        React__namespace.createElement("path", { d: "M7.25,9.75A.25.25,0,1,1,7,10a.25.25,0,0,1,.25-.25" }),
        React__namespace.createElement("path", { d: "M12,9.75a.25.25,0,1,1-.25.25A.25.25,0,0,1,12,9.75" }),
        React__namespace.createElement("path", { d: "M16.75,9.75a.25.25,0,1,1-.25.25.25.25,0,0,1,.25-.25" })
      );
    };
    var HelpIcon = function() {
      return React__namespace.createElement(
        Icon,
        { size: 16 },
        React__namespace.createElement("path", { d: "M0.500 12.001 A11.500 11.500 0 1 0 23.500 12.001 A11.500 11.500 0 1 0 0.500 12.001 Z" }),
        React__namespace.createElement("path", { d: "M6.000 12.001 A6.000 6.000 0 1 0 18.000 12.001 A6.000 6.000 0 1 0 6.000 12.001 Z" }),
        React__namespace.createElement("path", { d: "M21.423 5.406L17.415 9.414" }),
        React__namespace.createElement("path", { d: "M14.587 6.585L18.607 2.565" }),
        React__namespace.createElement("path", { d: "M5.405 21.424L9.413 17.416" }),
        React__namespace.createElement("path", { d: "M6.585 14.588L2.577 18.596" }),
        React__namespace.createElement("path", { d: "M18.602 21.419L14.595 17.412" }),
        React__namespace.createElement("path", { d: "M17.419 14.58L21.428 18.589" }),
        React__namespace.createElement("path", { d: "M2.582 5.399L6.588 9.406" }),
        React__namespace.createElement("path", { d: "M9.421 6.581L5.412 2.572" })
      );
    };
    var KeyIcon = function() {
      return React__namespace.createElement(
        Icon,
        { size: 16 },
        React__namespace.createElement("path", { d: "M4.000 18.500 A1.500 1.500 0 1 0 7.000 18.500 A1.500 1.500 0 1 0 4.000 18.500 Z" }),
        React__namespace.createElement("path", { d: "M20.5.5l-9.782,9.783a7,7,0,1,0,3,3L17,10h1.5V8.5L19,8h1.5V6.5L21,6h1.5V4.5l1-1V.5Z" })
      );
    };
    var NoteIcon = function() {
      return React__namespace.createElement(
        Icon,
        { size: 16 },
        React__namespace.createElement("path", { d: "M2.000 2.500 L22.000 2.500 L22.000 23.500 L2.000 23.500 Z" }),
        React__namespace.createElement("path", { d: "M6 4.5L6 0.5" }),
        React__namespace.createElement("path", { d: "M18 4.5L18 0.5" }),
        React__namespace.createElement("path", { d: "M10 4.5L10 0.5" }),
        React__namespace.createElement("path", { d: "M14 4.5L14 0.5" })
      );
    };
    var ParagraphIcon = function() {
      return React__namespace.createElement(
        Icon,
        { size: 16 },
        React__namespace.createElement("path", { d: "M17.5 0.498L17.5 23.498" }),
        React__namespace.createElement("path", { d: "M10.5 0.498L10.5 23.498" }),
        React__namespace.createElement("path", { d: "M23.5.5H6.5a6,6,0,0,0,0,12h4" })
      );
    };
    var TriangleIcon = function() {
      return React__namespace.createElement(
        Icon,
        { size: 16 },
        React__namespace.createElement("path", { d: "M2.5 22.995L12 6.005 21.5 22.995 2.5 22.995z" })
      );
    };
    var Text = function(_a) {
      var annotation = _a.annotation, childAnnotation = _a.childAnnotation, page = _a.page, viewport = _a.viewport;
      var hasPopup = annotation.hasPopup === false;
      var title = getTitle(annotation);
      var contents = getContents(annotation);
      var isRenderable = !!(annotation.hasPopup || title || contents);
      var name = annotation.name ? annotation.name.toLowerCase() : "";
      return React__namespace.createElement(Annotation, { annotation, hasPopup, ignoreBorder: false, isRenderable, page, viewport }, function(props) {
        return React__namespace.createElement(
          React__namespace.Fragment,
          null,
          React__namespace.createElement(
            "div",
            __assign({}, props.slot.attrs, { className: "rpv-core__annotation rpv-core__annotation--text", "data-annotation-id": annotation.id, onClick: props.popup.toggleOnClick, onMouseEnter: props.popup.openOnHover, onMouseLeave: props.popup.closeOnHover }),
            name && React__namespace.createElement(
              "div",
              { className: "rpv-core__annotation-text-icon" },
              name === "check" && React__namespace.createElement(CheckIcon, null),
              name === "comment" && React__namespace.createElement(CommentIcon, null),
              name === "help" && React__namespace.createElement(HelpIcon, null),
              name === "insert" && React__namespace.createElement(TriangleIcon, null),
              name === "key" && React__namespace.createElement(KeyIcon, null),
              name === "note" && React__namespace.createElement(NoteIcon, null),
              (name === "newparagraph" || name === "paragraph") && React__namespace.createElement(ParagraphIcon, null)
            ),
            props.slot.children
          ),
          childAnnotation && childAnnotation.annotationType === exports2.AnnotationType.Popup && props.popup.opened && React__namespace.createElement(Popup, { annotation: childAnnotation, page, viewport })
        );
      });
    };
    var Underline = function(_a) {
      var annotation = _a.annotation, page = _a.page, viewport = _a.viewport;
      var hasPopup = annotation.hasPopup === false;
      var title = getTitle(annotation);
      var contents = getContents(annotation);
      var isRenderable = !!(annotation.hasPopup || title || contents);
      return React__namespace.createElement(Annotation, { annotation, hasPopup, ignoreBorder: true, isRenderable, page, viewport }, function(props) {
        return React__namespace.createElement("div", __assign({}, props.slot.attrs, { className: "rpv-core__annotation rpv-core__annotation--underline", "data-annotation-id": annotation.id, onClick: props.popup.toggleOnClick, onMouseEnter: props.popup.openOnHover, onMouseLeave: props.popup.closeOnHover }), props.slot.children);
      });
    };
    var AnnotationLayerBody = function(_a) {
      var annotations = _a.annotations, doc = _a.doc, outlines = _a.outlines, page = _a.page, pageIndex = _a.pageIndex, plugins = _a.plugins, rotation = _a.rotation, scale = _a.scale, onExecuteNamedAction = _a.onExecuteNamedAction, onJumpFromLinkAnnotation = _a.onJumpFromLinkAnnotation, onJumpToDest = _a.onJumpToDest;
      var containerRef = React__namespace.useRef();
      var viewport = page.getViewport({ rotation, scale });
      var clonedViewPort = viewport.clone({ dontFlip: true });
      var filterAnnotations = annotations.filter(function(annotation) {
        return !annotation.parentId;
      });
      useIsomorphicLayoutEffect(function() {
        var container = containerRef.current;
        if (!container) {
          return;
        }
        plugins.forEach(function(plugin) {
          if (plugin.onAnnotationLayerRender) {
            plugin.onAnnotationLayerRender({
              annotations: filterAnnotations,
              container,
              pageIndex,
              rotation,
              scale
            });
          }
        });
      }, []);
      return React__namespace.createElement("div", { ref: containerRef, className: "rpv-core__annotation-layer", "data-testid": "core__annotation-layer-".concat(pageIndex) }, filterAnnotations.map(function(annotation) {
        var childAnnotation = annotations.find(function(item) {
          return item.parentId === annotation.id;
        });
        switch (annotation.annotationType) {
          case exports2.AnnotationType.Caret:
            return React__namespace.createElement(Caret, { key: annotation.id, annotation, page, viewport: clonedViewPort });
          case exports2.AnnotationType.Circle:
            return React__namespace.createElement(Circle, { key: annotation.id, annotation, page, viewport: clonedViewPort });
          case exports2.AnnotationType.FileAttachment:
            return React__namespace.createElement(FileAttachment, { key: annotation.id, annotation, page, viewport: clonedViewPort });
          case exports2.AnnotationType.FreeText:
            return React__namespace.createElement(FreeText, { key: annotation.id, annotation, page, viewport: clonedViewPort });
          case exports2.AnnotationType.Highlight:
            return React__namespace.createElement(Highlight, { key: annotation.id, annotation, childAnnotation, page, viewport: clonedViewPort });
          case exports2.AnnotationType.Ink:
            return React__namespace.createElement(Ink, { key: annotation.id, annotation, page, viewport: clonedViewPort });
          case exports2.AnnotationType.Line:
            return React__namespace.createElement(Line, { key: annotation.id, annotation, page, viewport: clonedViewPort });
          case exports2.AnnotationType.Link:
            return React__namespace.createElement(Link, { key: annotation.id, annotation, annotationContainerRef: containerRef, doc, outlines, page, pageIndex, scale, viewport: clonedViewPort, onExecuteNamedAction, onJumpFromLinkAnnotation, onJumpToDest });
          case exports2.AnnotationType.Polygon:
            return React__namespace.createElement(Polygon, { key: annotation.id, annotation, page, viewport: clonedViewPort });
          case exports2.AnnotationType.Polyline:
            return React__namespace.createElement(Polyline, { key: annotation.id, annotation, page, viewport: clonedViewPort });
          case exports2.AnnotationType.Popup:
            return React__namespace.createElement(Popup, { key: annotation.id, annotation, page, viewport: clonedViewPort });
          case exports2.AnnotationType.Square:
            return React__namespace.createElement(Square, { key: annotation.id, annotation, page, viewport: clonedViewPort });
          case exports2.AnnotationType.Squiggly:
            return React__namespace.createElement(Squiggly, { key: annotation.id, annotation, page, viewport: clonedViewPort });
          case exports2.AnnotationType.Stamp:
            return React__namespace.createElement(Stamp, { key: annotation.id, annotation, page, viewport: clonedViewPort });
          case exports2.AnnotationType.StrikeOut:
            return React__namespace.createElement(StrikeOut, { key: annotation.id, annotation, page, viewport: clonedViewPort });
          case exports2.AnnotationType.Text:
            return React__namespace.createElement(Text, { key: annotation.id, annotation, childAnnotation, page, viewport: clonedViewPort });
          case exports2.AnnotationType.Underline:
            return React__namespace.createElement(Underline, { key: annotation.id, annotation, page, viewport: clonedViewPort });
          default:
            return React__namespace.createElement(React__namespace.Fragment, { key: annotation.id });
        }
      }));
    };
    var AnnotationLoader = function(_a) {
      var page = _a.page, renderAnnotations = _a.renderAnnotations;
      var isMounted = useIsMounted();
      var _b = React__namespace.useState({
        loading: true,
        annotations: []
      }), status = _b[0], setStatus = _b[1];
      React__namespace.useEffect(function() {
        page.getAnnotations({ intent: "display" }).then(function(result) {
          if (isMounted.current) {
            setStatus({
              loading: false,
              annotations: result
            });
          }
        });
      }, []);
      return status.loading ? React__namespace.createElement(React__namespace.Fragment, null) : renderAnnotations(status.annotations);
    };
    var AnnotationLayer = function(_a) {
      var doc = _a.doc, outlines = _a.outlines, page = _a.page, pageIndex = _a.pageIndex, plugins = _a.plugins, rotation = _a.rotation, scale = _a.scale, onExecuteNamedAction = _a.onExecuteNamedAction, onJumpFromLinkAnnotation = _a.onJumpFromLinkAnnotation, onJumpToDest = _a.onJumpToDest;
      var renderAnnotations = function(annotations) {
        return React__namespace.createElement(AnnotationLayerBody, { annotations, doc, outlines, page, pageIndex, plugins, rotation, scale, onExecuteNamedAction, onJumpFromLinkAnnotation, onJumpToDest });
      };
      return React__namespace.createElement(AnnotationLoader, { page, renderAnnotations });
    };
    var floatToRatio = function(x, limit) {
      var _a, _b;
      if (Math.floor(x) === x) {
        return [x, 1];
      }
      var y = 1 / x;
      if (y > limit) {
        return [1, limit];
      }
      if (Math.floor(y) === y) {
        return [1, y];
      }
      var value = x > 1 ? y : x;
      var a = 0;
      var b = 1;
      var c = 1;
      var d = 1;
      while (true) {
        var numerator = a + c;
        var denominator = b + d;
        if (denominator > limit) {
          break;
        }
        value <= numerator / denominator ? (_a = [numerator, denominator], c = _a[0], d = _a[1], _a) : (_b = [numerator, denominator], a = _b[0], b = _b[1], _b);
      }
      var middle = (a / b + c / d) / 2;
      return value < middle ? value === x ? [a, b] : [b, a] : value === x ? [c, d] : [d, c];
    };
    var roundToDivide = function(a, b) {
      var remainder = a % b;
      return remainder === 0 ? a : Math.floor(a - remainder);
    };
    var MAX_CANVAS_SIZE = 4096 * 4096;
    var CanvasLayer = function(_a) {
      var canvasLayerRef = _a.canvasLayerRef, height = _a.height, page = _a.page, pageIndex = _a.pageIndex, plugins = _a.plugins, rotation = _a.rotation, scale = _a.scale, width = _a.width, onRenderCanvasCompleted = _a.onRenderCanvasCompleted;
      var renderTask = React__namespace.useRef();
      useIsomorphicLayoutEffect(function() {
        var task = renderTask.current;
        if (task) {
          task.cancel();
        }
        var canvasEle = canvasLayerRef.current;
        canvasEle.removeAttribute("data-testid");
        plugins.forEach(function(plugin) {
          if (plugin.onCanvasLayerRender) {
            plugin.onCanvasLayerRender({
              ele: canvasEle,
              pageIndex,
              rotation,
              scale,
              status: exports2.LayerRenderStatus.PreRender
            });
          }
        });
        var viewport = page.getViewport({
          rotation,
          scale
        });
        var outputScale = window.devicePixelRatio || 1;
        var maxScale = Math.sqrt(MAX_CANVAS_SIZE / (viewport.width * viewport.height));
        var shouldScaleByCSS = outputScale > maxScale;
        shouldScaleByCSS ? canvasEle.style.transform = "scale(1, 1)" : canvasEle.style.removeProperty("transform");
        var possibleScale = Math.min(maxScale, outputScale);
        var _a2 = floatToRatio(possibleScale, 8), x = _a2[0], y = _a2[1];
        canvasEle.width = roundToDivide(viewport.width * possibleScale, x);
        canvasEle.height = roundToDivide(viewport.height * possibleScale, x);
        canvasEle.style.width = "".concat(roundToDivide(viewport.width, y), "px");
        canvasEle.style.height = "".concat(roundToDivide(viewport.height, y), "px");
        canvasEle.hidden = true;
        var canvasContext = canvasEle.getContext("2d", { alpha: false });
        var transform = shouldScaleByCSS || outputScale !== 1 ? [possibleScale, 0, 0, possibleScale, 0, 0] : null;
        renderTask.current = page.render({ canvasContext, transform, viewport });
        renderTask.current.promise.then(function() {
          canvasEle.hidden = false;
          canvasEle.setAttribute("data-testid", "core__canvas-layer-".concat(pageIndex));
          plugins.forEach(function(plugin) {
            if (plugin.onCanvasLayerRender) {
              plugin.onCanvasLayerRender({
                ele: canvasEle,
                pageIndex,
                rotation,
                scale,
                status: exports2.LayerRenderStatus.DidRender
              });
            }
          });
          onRenderCanvasCompleted();
        }, function() {
          onRenderCanvasCompleted();
        });
        return function() {
          if (canvasEle) {
            canvasEle.width = 0;
            canvasEle.height = 0;
          }
        };
      }, []);
      return React__namespace.createElement(
        "div",
        { className: "rpv-core__canvas-layer", style: {
          height: "".concat(height, "px"),
          width: "".concat(width, "px")
        } },
        React__namespace.createElement("canvas", { ref: canvasLayerRef })
      );
    };
    var SvgLayer = function(_a) {
      var height = _a.height, page = _a.page, rotation = _a.rotation, scale = _a.scale, width = _a.width;
      var containerRef = React__namespace.useRef();
      var empty = function() {
        var containerEle = containerRef.current;
        if (!containerEle) {
          return;
        }
        containerEle.innerHTML = "";
      };
      useIsomorphicLayoutEffect(function() {
        var containerEle = containerRef.current;
        var viewport = page.getViewport({ rotation, scale });
        page.getOperatorList().then(function(operatorList) {
          empty();
          var graphic = new PdfJsApi__namespace.SVGGraphics(page.commonObjs, page.objs);
          graphic.getSVG(operatorList, viewport).then(function(svg) {
            svg.style.height = "".concat(height, "px");
            svg.style.width = "".concat(width, "px");
            containerEle.appendChild(svg);
          });
        });
      }, []);
      return React__namespace.createElement("div", { className: "rpv-core__svg-layer", ref: containerRef });
    };
    var TextLayer = function(_a) {
      var containerRef = _a.containerRef, page = _a.page, pageIndex = _a.pageIndex, plugins = _a.plugins, rotation = _a.rotation, scale = _a.scale, onRenderTextCompleted = _a.onRenderTextCompleted;
      var renderTask = React__namespace.useRef();
      var empty = function() {
        var containerEle = containerRef.current;
        if (!containerEle) {
          return;
        }
        var spans = [].slice.call(containerEle.querySelectorAll(".rpv-core__text-layer-text"));
        spans.forEach(function(span) {
          return containerEle.removeChild(span);
        });
        var breaks = [].slice.call(containerEle.querySelectorAll('br[role="presentation"]'));
        breaks.forEach(function(br) {
          return containerEle.removeChild(br);
        });
      };
      useIsomorphicLayoutEffect(function() {
        var task = renderTask.current;
        if (task) {
          task.cancel();
        }
        var containerEle = containerRef.current;
        if (!containerEle) {
          return;
        }
        containerEle.removeAttribute("data-testid");
        var viewport = page.getViewport({ rotation, scale });
        plugins.forEach(function(plugin) {
          if (plugin.onTextLayerRender) {
            plugin.onTextLayerRender({
              ele: containerEle,
              pageIndex,
              scale,
              status: exports2.LayerRenderStatus.PreRender
            });
          }
        });
        page.getTextContent().then(function(textContent) {
          empty();
          renderTask.current = PdfJsApi__namespace.renderTextLayer({
            container: containerEle,
            textContent,
            textContentSource: textContent,
            viewport
          });
          renderTask.current.promise.then(function() {
            containerEle.setAttribute("data-testid", "core__text-layer-".concat(pageIndex));
            var spans = [].slice.call(containerEle.children);
            spans.forEach(function(span) {
              if (!span.classList.contains("rpv-core__text-layer-text--not")) {
                span.classList.add("rpv-core__text-layer-text");
              }
            });
            plugins.forEach(function(plugin) {
              if (plugin.onTextLayerRender) {
                plugin.onTextLayerRender({
                  ele: containerEle,
                  pageIndex,
                  scale,
                  status: exports2.LayerRenderStatus.DidRender
                });
              }
            });
            onRenderTextCompleted();
          }, function() {
            containerEle.removeAttribute("data-testid");
            onRenderTextCompleted();
          });
        });
        return function() {
          var _a2;
          empty();
          (_a2 = renderTask.current) === null || _a2 === void 0 ? void 0 : _a2.cancel();
        };
      }, []);
      return React__namespace.createElement("div", { className: "rpv-core__text-layer", ref: containerRef });
    };
    var PageLayer = function(_a) {
      var doc = _a.doc, measureRef = _a.measureRef, outlines = _a.outlines, pageIndex = _a.pageIndex, pageRotation = _a.pageRotation, pageSize = _a.pageSize, plugins = _a.plugins, renderPage = _a.renderPage, renderQueueKey = _a.renderQueueKey, rotation = _a.rotation, scale = _a.scale, shouldRender = _a.shouldRender, viewMode = _a.viewMode, onExecuteNamedAction = _a.onExecuteNamedAction, onJumpFromLinkAnnotation = _a.onJumpFromLinkAnnotation, onJumpToDest = _a.onJumpToDest, onRenderCompleted = _a.onRenderCompleted, onRotatePage = _a.onRotatePage;
      var isMounted = useIsMounted();
      var _b = React__namespace.useState(null), page = _b[0], setPage = _b[1];
      var _c = React__namespace.useState(false), canvasLayerRendered = _c[0], setCanvasLayerRendered = _c[1];
      var _d = React__namespace.useState(false), textLayerRendered = _d[0], setTextLayerRendered = _d[1];
      var canvasLayerRef = React__namespace.useRef();
      var textLayerRef = React__namespace.useRef();
      var isVertical = Math.abs(rotation + pageRotation) % 180 === 0;
      var scaledWidth = pageSize.pageWidth * scale;
      var scaledHeight = pageSize.pageHeight * scale;
      var w = isVertical ? scaledWidth : scaledHeight;
      var h = isVertical ? scaledHeight : scaledWidth;
      var rotationValue = (pageSize.rotation + rotation + pageRotation) % 360;
      var renderQueueKeyRef = React__namespace.useRef(0);
      var determinePageInstance = function() {
        getPage(doc, pageIndex).then(function(pdfPage) {
          if (isMounted.current) {
            renderQueueKeyRef.current = renderQueueKey;
            setPage(pdfPage);
          }
        });
      };
      var defaultPageRenderer = function(props) {
        return React__namespace.createElement(
          React__namespace.Fragment,
          null,
          props.canvasLayer.children,
          props.textLayer.children,
          props.annotationLayer.children
        );
      };
      var renderPageLayer = renderPage || defaultPageRenderer;
      var handleRenderCanvasCompleted = function() {
        if (isMounted.current) {
          setCanvasLayerRendered(true);
        }
      };
      var handleRenderTextCompleted = function() {
        if (isMounted.current) {
          setTextLayerRendered(true);
        }
      };
      React__namespace.useEffect(function() {
        setPage(null);
        setCanvasLayerRendered(false);
        setTextLayerRendered(false);
      }, [pageRotation, rotation, scale]);
      React__namespace.useEffect(function() {
        if (shouldRender && isMounted.current && !page) {
          determinePageInstance();
        }
      }, [shouldRender, page]);
      React__namespace.useEffect(function() {
        if (canvasLayerRendered && textLayerRendered) {
          if (renderQueueKey !== renderQueueKeyRef.current) {
            setPage(null);
            setCanvasLayerRendered(false);
            setTextLayerRendered(false);
          } else {
            onRenderCompleted(pageIndex);
          }
        }
      }, [canvasLayerRendered, textLayerRendered]);
      return React__namespace.createElement("div", { className: classNames({
        "rpv-core__page-layer": true,
        "rpv-core__page-layer--dual": viewMode === exports2.ViewMode.DualPage,
        "rpv-core__page-layer--dual-cover": viewMode === exports2.ViewMode.DualPageWithCover,
        "rpv-core__page-layer--single": viewMode === exports2.ViewMode.SinglePage
      }), "data-testid": "core__page-layer-".concat(pageIndex), ref: measureRef, style: {
        height: "".concat(h, "px"),
        width: "".concat(w, "px")
      } }, !page ? React__namespace.createElement(Spinner, { testId: "core__page-layer-loading-".concat(pageIndex) }) : React__namespace.createElement(
        React__namespace.Fragment,
        null,
        renderPageLayer({
          annotationLayer: {
            attrs: {},
            children: React__namespace.createElement(AnnotationLayer, { doc, outlines, page, pageIndex, plugins, rotation: rotationValue, scale, onExecuteNamedAction, onJumpFromLinkAnnotation, onJumpToDest })
          },
          canvasLayer: {
            attrs: {},
            children: React__namespace.createElement(CanvasLayer, { canvasLayerRef, height: h, page, pageIndex, plugins, rotation: rotationValue, scale, width: w, onRenderCanvasCompleted: handleRenderCanvasCompleted })
          },
          canvasLayerRendered,
          doc,
          height: h,
          pageIndex,
          rotation: rotationValue,
          scale,
          svgLayer: {
            attrs: {},
            children: React__namespace.createElement(SvgLayer, { height: h, page, rotation: rotationValue, scale, width: w })
          },
          textLayer: {
            attrs: {},
            children: React__namespace.createElement(TextLayer, { containerRef: textLayerRef, page, pageIndex, plugins, rotation: rotationValue, scale, onRenderTextCompleted: handleRenderTextCompleted })
          },
          textLayerRendered,
          width: w,
          markRendered: onRenderCompleted,
          onRotatePage: function(direction) {
            return onRotatePage(pageIndex, direction);
          }
        }),
        plugins.map(function(plugin, idx) {
          return plugin.renderPageLayer ? React__namespace.createElement(React__namespace.Fragment, { key: idx }, plugin.renderPageLayer({
            canvasLayerRef,
            canvasLayerRendered,
            doc,
            height: h,
            pageIndex,
            rotation: rotationValue,
            scale,
            textLayerRef,
            textLayerRendered,
            width: w
          })) : React__namespace.createElement(React__namespace.Fragment, { key: idx });
        })
      ));
    };
    var getFileExt = function(url) {
      var str = url.split(/\./).pop();
      return str ? str.toLowerCase() : "";
    };
    var rectReducer = function(state, action) {
      var rect = action.rect;
      return state.height !== rect.height || state.width !== rect.width ? rect : state;
    };
    var useMeasureRect = function(_a) {
      var elementRef = _a.elementRef;
      var _b = React__namespace.useState(elementRef.current), element = _b[0], setElement = _b[1];
      var initializedRectRef = React__namespace.useRef(false);
      var _c = React__namespace.useReducer(rectReducer, { height: 0, width: 0 }), rect = _c[0], dispatch = _c[1];
      useIsomorphicLayoutEffect(function() {
        if (elementRef.current !== element) {
          setElement(elementRef.current);
        }
      });
      useIsomorphicLayoutEffect(function() {
        if (element && !initializedRectRef.current) {
          initializedRectRef.current = true;
          var _a2 = element.getBoundingClientRect(), height = _a2.height, width = _a2.width;
          dispatch({
            rect: { height, width }
          });
        }
      }, [element]);
      React__namespace.useEffect(function() {
        if (!element) {
          return;
        }
        var tracker = new ResizeObserver(function(entries, __) {
          entries.forEach(function(entry) {
            if (entry.target === element) {
              var _a2 = entry.contentRect, height = _a2.height, width = _a2.width;
              dispatch({
                rect: { height, width }
              });
            }
          });
        });
        tracker.observe(element);
        return function() {
          tracker.unobserve(element);
        };
      }, [element]);
      return rect;
    };
    var ScrollDirection;
    (function(ScrollDirection2) {
      ScrollDirection2["Horizontal"] = "Horizontal";
      ScrollDirection2["Vertical"] = "Vertical";
      ScrollDirection2["Both"] = "Both";
    })(ScrollDirection || (ScrollDirection = {}));
    var easeOutQuart = function(t) {
      return 1 - Math.pow(1 - t, 4);
    };
    var EPS = 1e-4;
    var smoothScroll = function(ele, scrollDirection, targetPosition, duration, easing, onReachTarget) {
      if (easing === void 0) {
        easing = function(t) {
          return t;
        };
      }
      if (onReachTarget === void 0) {
        onReachTarget = function() {
        };
      }
      var top = 0;
      var left = 0;
      var reachTarget = false;
      switch (scrollDirection) {
        case ScrollDirection.Horizontal:
          left = ele.scrollLeft;
          top = 0;
        case ScrollDirection.Both:
          left = ele.scrollLeft;
          top = ele.scrollTop;
          break;
        case ScrollDirection.Vertical:
        default:
          left = 0;
          top = ele.scrollTop;
          break;
      }
      var markTargetReached = function() {
        if (!reachTarget) {
          reachTarget = true;
          ele.scrollLeft = targetPosition.left;
          ele.scrollTop = targetPosition.top;
          onReachTarget();
        }
      };
      if (Math.abs(top - targetPosition.top) <= EPS && scrollDirection === ScrollDirection.Vertical) {
        markTargetReached();
        return;
      }
      if (Math.abs(left - targetPosition.left) <= EPS && scrollDirection === ScrollDirection.Horizontal) {
        markTargetReached();
        return;
      }
      var startTime = -1;
      var requestId;
      var offset = {
        left: left - targetPosition.left,
        top: top - targetPosition.top
      };
      var loop = function(currentTime) {
        if (startTime === -1) {
          startTime = currentTime;
        }
        var time = currentTime - startTime;
        var percent = Math.min(time / duration, 1);
        var easedPercent = easing(percent);
        var updatePosition = {
          left: left - offset.left * easedPercent,
          top: top - offset.top * easedPercent
        };
        switch (scrollDirection) {
          case ScrollDirection.Horizontal:
            ele.scrollLeft = updatePosition.left;
            break;
          case ScrollDirection.Both:
            ele.scrollLeft = updatePosition.left;
            ele.scrollTop = updatePosition.top;
            break;
          case ScrollDirection.Vertical:
          default:
            ele.scrollTop = updatePosition.top;
            break;
        }
        if (Math.abs(updatePosition.top - targetPosition.top) <= EPS && Math.abs(updatePosition.left - targetPosition.left) <= EPS && !reachTarget) {
          window.cancelAnimationFrame(requestId);
          markTargetReached();
        }
        if (time < duration) {
          requestId = window.requestAnimationFrame(loop);
        } else {
          window.cancelAnimationFrame(requestId);
        }
      };
      requestId = window.requestAnimationFrame(loop);
    };
    var ZERO_OFFSET$6 = {
      left: 0,
      top: 0
    };
    var SCROLL_EVENT_OPTIONS = {
      capture: false,
      passive: true
    };
    var SCROLL_DURATION = 400;
    var useScroll = function(_a) {
      var elementRef = _a.elementRef, enableSmoothScroll = _a.enableSmoothScroll, isRtl = _a.isRtl, scrollDirection = _a.scrollDirection, onSmoothScroll = _a.onSmoothScroll;
      var _b = React__namespace.useState(ZERO_OFFSET$6), scrollOffset = _b[0], setScrollOffset = _b[1];
      var _c = React__namespace.useState(elementRef.current), element = _c[0], setElement = _c[1];
      var factor = isRtl ? -1 : 1;
      var latestRef = React__namespace.useRef(scrollDirection);
      latestRef.current = scrollDirection;
      var latestOffsetRef = React__namespace.useRef(ZERO_OFFSET$6);
      var isSmoothScrollingDoneRef = React__namespace.useRef(true);
      var handleSmoothScrollingComplete = React__namespace.useCallback(function() {
        isSmoothScrollingDoneRef.current = true;
        if (enableSmoothScroll) {
          setScrollOffset(latestOffsetRef.current);
        }
        onSmoothScroll(false);
      }, []);
      var handleScroll = React__namespace.useCallback(function() {
        if (!element) {
          return;
        }
        switch (latestRef.current) {
          case ScrollDirection.Horizontal:
            latestOffsetRef.current = {
              left: factor * element.scrollLeft,
              top: 0
            };
            break;
          case ScrollDirection.Both:
            latestOffsetRef.current = {
              left: factor * element.scrollLeft,
              top: element.scrollTop
            };
            break;
          case ScrollDirection.Vertical:
          default:
            latestOffsetRef.current = {
              left: 0,
              top: element.scrollTop
            };
            break;
        }
        if (!enableSmoothScroll || isSmoothScrollingDoneRef.current) {
          setScrollOffset(latestOffsetRef.current);
        }
      }, [element]);
      useIsomorphicLayoutEffect(function() {
        setElement(elementRef.current);
      });
      useIsomorphicLayoutEffect(function() {
        if (!element) {
          return;
        }
        element.addEventListener("scroll", handleScroll, SCROLL_EVENT_OPTIONS);
        return function() {
          element.removeEventListener("scroll", handleScroll, SCROLL_EVENT_OPTIONS);
        };
      }, [element]);
      var scrollTo = React__namespace.useCallback(function(targetPosition, withSmoothScroll) {
        var ele = elementRef.current;
        if (!ele) {
          return Promise.resolve();
        }
        var updatePosition = {
          left: 0,
          top: 0
        };
        switch (latestRef.current) {
          case ScrollDirection.Horizontal:
            updatePosition.left = factor * targetPosition.left;
            break;
          case ScrollDirection.Both:
            updatePosition.left = factor * targetPosition.left;
            updatePosition.top = targetPosition.top;
            break;
          case ScrollDirection.Vertical:
          default:
            updatePosition.top = targetPosition.top;
            break;
        }
        if (withSmoothScroll) {
          isSmoothScrollingDoneRef.current = false;
          onSmoothScroll(true);
          return new Promise(function(resolve, _) {
            smoothScroll(ele, latestRef.current, updatePosition, SCROLL_DURATION, easeOutQuart, function() {
              handleSmoothScrollingComplete();
              resolve();
            });
          });
        }
        return new Promise(function(resolve, _) {
          switch (latestRef.current) {
            case ScrollDirection.Horizontal:
              ele.scrollLeft = updatePosition.left;
              break;
            case ScrollDirection.Both:
              ele.scrollLeft = updatePosition.left;
              ele.scrollTop = updatePosition.top;
              break;
            case ScrollDirection.Vertical:
            default:
              ele.scrollTop = updatePosition.top;
              break;
          }
          resolve();
        });
      }, [elementRef]);
      return {
        scrollOffset,
        scrollTo
      };
    };
    var clamp = function(min, max, value) {
      return Math.max(min, Math.min(value, max));
    };
    var indexOfMax = function(arr) {
      return arr.reduce(function(prev, curr, i, a) {
        return curr > a[prev] ? i : prev;
      }, 0);
    };
    var buildContainerStyles = function(totalSize, scrollMode) {
      switch (scrollMode) {
        case exports2.ScrollMode.Horizontal:
          return {
            position: "relative",
            height: "100%",
            width: "".concat(totalSize.width, "px")
          };
        case exports2.ScrollMode.Vertical:
        default:
          return {
            position: "relative",
            height: "".concat(totalSize.height, "px"),
            width: "100%"
          };
      }
    };
    var buildItemContainerStyles = function(item, parentRect, scrollMode) {
      return scrollMode !== exports2.ScrollMode.Page ? {} : {
        height: "".concat(parentRect.height, "px"),
        width: "100%",
        position: "absolute",
        top: 0,
        transform: "translateY(".concat(item.start.top, "px)")
      };
    };
    var hasDifferentSizes = function(sizes) {
      var numberOfItems = sizes.length;
      if (numberOfItems === 1) {
        return false;
      }
      for (var i = 1; i < numberOfItems; i++) {
        if (sizes[i].height !== sizes[0].height || sizes[i].width !== sizes[0].width) {
          return true;
        }
      }
      return false;
    };
    var getMinWidthOfCover = function(sizes, viewMode) {
      if (viewMode !== exports2.ViewMode.DualPageWithCover) {
        return 0;
      }
      if (!hasDifferentSizes(sizes)) {
        return 2 * sizes[0].width;
      }
      var chunkWidths = chunk(sizes.slice(1), 2).map(function(eachChunk) {
        return eachChunk.length === 2 ? eachChunk[0].width + eachChunk[1].width : eachChunk[0].width;
      });
      var widths = [sizes[0].width].concat(chunkWidths);
      return Math.max.apply(Math, widths);
    };
    var buildItemStyles = function(item, isRtl, sizes, viewMode, scrollMode) {
      var _a, _b, _c, _d, _e, _f, _g;
      var sideProperty = isRtl ? "right" : "left";
      var factor = isRtl ? -1 : 1;
      var numberOfItems = sizes.length;
      var left = item.start.left * factor;
      var _h = item.size, height = _h.height, width = _h.width;
      if (viewMode === exports2.ViewMode.DualPageWithCover) {
        var transformTop = scrollMode === exports2.ScrollMode.Page ? 0 : item.start.top;
        if (item.index === 0 || numberOfItems % 2 === 0 && item.index === numberOfItems - 1) {
          return _a = {
            height: "".concat(height, "px"),
            minWidth: "".concat(getMinWidthOfCover(sizes, viewMode), "px"),
            width: "100%"
          }, _a[sideProperty] = 0, _a.position = "absolute", _a.top = 0, _a.transform = "translate(".concat(left, "px, ").concat(transformTop, "px)"), _a;
        }
        return _b = {
          height: "".concat(height, "px"),
          width: "".concat(width, "px")
        }, _b[sideProperty] = 0, _b.position = "absolute", _b.top = 0, _b.transform = "translate(".concat(left, "px, ").concat(transformTop, "px)"), _b;
      }
      if (viewMode === exports2.ViewMode.DualPage) {
        return _c = {
          height: "".concat(height, "px"),
          width: "".concat(width, "px")
        }, _c[sideProperty] = 0, _c.position = "absolute", _c.top = 0, _c.transform = "translate(".concat(left, "px, ").concat(scrollMode === exports2.ScrollMode.Page ? 0 : item.start.top, "px)"), _c;
      }
      switch (scrollMode) {
        case exports2.ScrollMode.Horizontal:
          return _d = {
            height: "100%",
            width: "".concat(width, "px")
          }, _d[sideProperty] = 0, _d.position = "absolute", _d.top = 0, _d.transform = "translateX(".concat(left, "px)"), _d;
        case exports2.ScrollMode.Page:
          return _e = {
            height: "".concat(height, "px"),
            width: "".concat(width, "px")
          }, _e[sideProperty] = 0, _e.position = "absolute", _e.top = 0, _e;
        case exports2.ScrollMode.Wrapped:
          return _f = {
            height: "".concat(height, "px"),
            width: "".concat(width, "px")
          }, _f[sideProperty] = 0, _f.position = "absolute", _f.top = 0, _f.transform = "translate(".concat(left, "px, ").concat(item.start.top, "px)"), _f;
        case exports2.ScrollMode.Vertical:
        default:
          return _g = {
            height: "".concat(height, "px"),
            width: "100%"
          }, _g[sideProperty] = 0, _g.position = "absolute", _g.top = 0, _g.transform = "translateY(".concat(item.start.top, "px)"), _g;
      }
    };
    var findNearest = function(low, high, value, getItemValue) {
      while (low <= high) {
        var middle = (low + high) / 2 | 0;
        var currentValue = getItemValue(middle);
        if (currentValue < value) {
          low = middle + 1;
        } else if (currentValue > value) {
          high = middle - 1;
        } else {
          return middle;
        }
      }
      return low > 0 ? low - 1 : 0;
    };
    var calculateRange = function(scrollDirection, measurements, outerSize, scrollOffset) {
      var currentOffset = 0;
      switch (scrollDirection) {
        case ScrollDirection.Horizontal:
          currentOffset = scrollOffset.left;
          break;
        case ScrollDirection.Vertical:
        default:
          currentOffset = scrollOffset.top;
          break;
      }
      var size = measurements.length - 1;
      var getOffset = function(index) {
        switch (scrollDirection) {
          case ScrollDirection.Horizontal:
            return measurements[index].start.left;
          case ScrollDirection.Both:
          case ScrollDirection.Vertical:
          default:
            return measurements[index].start.top;
        }
      };
      var start = findNearest(0, size, currentOffset, getOffset);
      if (scrollDirection === ScrollDirection.Both) {
        var startTop = measurements[start].start.top;
        while (start - 1 >= 0 && measurements[start - 1].start.top === startTop && measurements[start - 1].start.left >= scrollOffset.left) {
          start--;
        }
      }
      var end = start;
      while (end <= size) {
        var topLeftCorner = {
          top: measurements[end].start.top - scrollOffset.top,
          left: measurements[end].start.left - scrollOffset.left
        };
        var visibleSize = {
          height: outerSize.height - topLeftCorner.top,
          width: outerSize.width - topLeftCorner.left
        };
        if (scrollDirection === ScrollDirection.Horizontal && visibleSize.width < 0) {
          break;
        }
        if (scrollDirection === ScrollDirection.Vertical && visibleSize.height < 0) {
          break;
        }
        if (scrollDirection === ScrollDirection.Both && (visibleSize.width < 0 || visibleSize.height < 0)) {
          break;
        }
        end++;
      }
      return {
        start,
        end
      };
    };
    var ZERO_OFFSET$5 = {
      left: 0,
      top: 0
    };
    var measure = function(numberOfItems, parentRect, sizes, scrollMode) {
      var measurements = [];
      var totalWidth = 0;
      var firstOfRow = {
        left: 0,
        top: 0
      };
      var maxHeight = 0;
      var start = ZERO_OFFSET$5;
      for (var i = 0; i < numberOfItems; i++) {
        var size = sizes[i];
        if (i === 0) {
          totalWidth = size.width;
          firstOfRow = {
            left: 0,
            top: 0
          };
          maxHeight = size.height;
        } else {
          switch (scrollMode) {
            case exports2.ScrollMode.Wrapped:
              totalWidth += size.width;
              if (totalWidth < parentRect.width) {
                start = {
                  left: measurements[i - 1].end.left,
                  top: firstOfRow.top
                };
                maxHeight = Math.max(maxHeight, size.height);
              } else {
                totalWidth = size.width;
                start = {
                  left: firstOfRow.left,
                  top: firstOfRow.top + maxHeight
                };
                firstOfRow = {
                  left: start.left,
                  top: start.top
                };
                maxHeight = size.height;
              }
              break;
            case exports2.ScrollMode.Horizontal:
            case exports2.ScrollMode.Vertical:
            default:
              start = measurements[i - 1].end;
              break;
          }
        }
        var end = {
          left: start.left + size.width,
          top: start.top + size.height
        };
        measurements[i] = {
          index: i,
          start,
          size,
          end,
          visibility: -1
        };
      }
      return measurements;
    };
    var ZERO_OFFSET$4 = {
      left: 0,
      top: 0
    };
    var measureDualPage = function(numberOfItems, parentRect, sizes, scrollMode) {
      var measurements = [];
      var top = 0;
      var maxHeight = 0;
      var start = ZERO_OFFSET$4;
      for (var i = 0; i < numberOfItems; i++) {
        var size = {
          height: scrollMode === exports2.ScrollMode.Page ? Math.max(parentRect.height, sizes[i].height) : sizes[i].height,
          width: Math.max(parentRect.width / 2, sizes[i].width)
        };
        if (scrollMode === exports2.ScrollMode.Page) {
          start = {
            left: i % 2 === 0 ? 0 : size.width,
            top: Math.floor(i / 2) * size.height
          };
        } else {
          if (i % 2 === 0) {
            top = top + maxHeight;
            start = {
              left: 0,
              top
            };
            maxHeight = i === numberOfItems - 1 ? sizes[i].height : Math.max(sizes[i].height, sizes[i + 1].height);
          } else {
            start = {
              left: measurements[i - 1].end.left,
              top
            };
          }
        }
        var end = {
          left: start.left + size.width,
          top: start.top + size.height
        };
        measurements[i] = {
          index: i,
          start,
          size,
          end,
          visibility: -1
        };
      }
      return measurements;
    };
    var ZERO_OFFSET$3 = {
      left: 0,
      top: 0
    };
    var measureDualPageWithCover = function(numberOfItems, parentRect, sizes, scrollMode) {
      var measurements = [];
      var top = 0;
      var maxHeight = 0;
      var start = ZERO_OFFSET$3;
      for (var i = 0; i < numberOfItems; i++) {
        var size = i === 0 ? {
          height: scrollMode === exports2.ScrollMode.Page ? Math.max(parentRect.height, sizes[i].height) : sizes[i].height,
          width: scrollMode === exports2.ScrollMode.Page ? Math.max(parentRect.width, sizes[i].width) : sizes[i].width
        } : {
          height: scrollMode === exports2.ScrollMode.Page ? Math.max(parentRect.height, sizes[i].height) : sizes[i].height,
          width: Math.max(parentRect.width / 2, sizes[i].width)
        };
        if (scrollMode === exports2.ScrollMode.Page) {
          start = i === 0 ? ZERO_OFFSET$3 : {
            left: i % 2 === 0 ? size.width : 0,
            top: Math.floor((i - 1) / 2) * size.height + measurements[0].end.top
          };
        } else {
          if (i === 0) {
            start = ZERO_OFFSET$3;
            top = sizes[0].height;
            maxHeight = 0;
          } else if (i % 2 === 1) {
            top = top + maxHeight;
            start = {
              left: 0,
              top
            };
            maxHeight = i === numberOfItems - 1 ? sizes[i].height : Math.max(sizes[i].height, sizes[i + 1].height);
          } else {
            start = {
              left: measurements[i - 1].end.left,
              top
            };
          }
        }
        var end = {
          left: start.left + size.width,
          top: start.top + size.height
        };
        measurements[i] = {
          index: i,
          start,
          size,
          end,
          visibility: -1
        };
      }
      return measurements;
    };
    var ZERO_OFFSET$2 = {
      left: 0,
      top: 0
    };
    var measureSinglePage = function(numberOfItems, parentRect, sizes) {
      var measurements = [];
      for (var i = 0; i < numberOfItems; i++) {
        var size = {
          height: Math.max(parentRect.height, sizes[i].height),
          width: Math.max(parentRect.width, sizes[i].width)
        };
        var start = i === 0 ? ZERO_OFFSET$2 : measurements[i - 1].end;
        var end = {
          left: start.left + size.width,
          top: start.top + size.height
        };
        measurements[i] = {
          index: i,
          start,
          size,
          end,
          visibility: -1
        };
      }
      return measurements;
    };
    var ZERO_RECT$2 = {
      height: 0,
      width: 0
    };
    var ZERO_OFFSET$1 = {
      left: 0,
      top: 0
    };
    var COMPARE_EPSILON = 1e-12;
    var VIRTUAL_INDEX_ATTR = "data-virtual-index";
    var IO_THRESHOLD = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
    var useVirtual = function(_a) {
      var enableSmoothScroll = _a.enableSmoothScroll, isRtl = _a.isRtl, numberOfItems = _a.numberOfItems, parentRef = _a.parentRef, setRenderRange = _a.setRenderRange, sizes = _a.sizes, scrollMode = _a.scrollMode, viewMode = _a.viewMode;
      var _b = React__namespace.useState(false), isSmoothScrolling = _b[0], setSmoothScrolling = _b[1];
      var onSmoothScroll = React__namespace.useCallback(function(isSmoothScrolling2) {
        return setSmoothScrolling(isSmoothScrolling2);
      }, []);
      var scrollModeRef = React__namespace.useRef(scrollMode);
      scrollModeRef.current = scrollMode;
      var viewModeRef = React__namespace.useRef(viewMode);
      viewModeRef.current = viewMode;
      var scrollDirection = scrollMode === exports2.ScrollMode.Wrapped || viewMode === exports2.ViewMode.DualPageWithCover || viewMode === exports2.ViewMode.DualPage ? ScrollDirection.Both : scrollMode === exports2.ScrollMode.Horizontal ? ScrollDirection.Horizontal : ScrollDirection.Vertical;
      var _c = useScroll({
        elementRef: parentRef,
        enableSmoothScroll,
        isRtl,
        scrollDirection,
        onSmoothScroll
      }), scrollOffset = _c.scrollOffset, scrollTo = _c.scrollTo;
      var parentRect = useMeasureRect({
        elementRef: parentRef
      });
      var latestRef = React__namespace.useRef({
        scrollOffset: ZERO_OFFSET$1,
        measurements: []
      });
      latestRef.current.scrollOffset = scrollOffset;
      var defaultVisibilities = React__namespace.useMemo(function() {
        return Array(numberOfItems).fill(-1);
      }, []);
      var _d = React__namespace.useState(defaultVisibilities), visibilities = _d[0], setVisibilities = _d[1];
      var intersectionTracker = React__namespace.useMemo(function() {
        var io = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            var ratio = entry.isIntersecting ? entry.intersectionRatio : -1;
            var target = entry.target;
            var indexAttribute = target.getAttribute(VIRTUAL_INDEX_ATTR);
            if (!indexAttribute) {
              return;
            }
            var index = parseInt(indexAttribute, 10);
            if (0 <= index && index < numberOfItems) {
              setVisibilities(function(old) {
                old[index] = ratio;
                return __spreadArray([], old, true);
              });
            }
          });
        }, {
          threshold: IO_THRESHOLD
        });
        return io;
      }, []);
      var measurements = React__namespace.useMemo(function() {
        if (scrollMode === exports2.ScrollMode.Page && viewMode === exports2.ViewMode.SinglePage) {
          return measureSinglePage(numberOfItems, parentRect, sizes);
        }
        if (viewMode === exports2.ViewMode.DualPageWithCover) {
          return measureDualPageWithCover(numberOfItems, parentRect, sizes, scrollMode);
        }
        if (viewMode === exports2.ViewMode.DualPage) {
          return measureDualPage(numberOfItems, parentRect, sizes, scrollMode);
        }
        return measure(numberOfItems, parentRect, sizes, scrollMode);
      }, [scrollMode, sizes, viewMode, parentRect]);
      var totalSize = measurements[numberOfItems - 1] ? {
        height: measurements[numberOfItems - 1].end.top,
        width: measurements[numberOfItems - 1].end.left
      } : ZERO_RECT$2;
      latestRef.current.measurements = measurements;
      var _e = React__namespace.useMemo(function() {
        var _a2 = calculateRange(scrollDirection, measurements, parentRect, scrollOffset), start = _a2.start, end = _a2.end;
        var visiblePageVisibilities = visibilities.slice(clamp(0, numberOfItems, start), clamp(0, numberOfItems, end));
        var maxVisbilityItem = start + indexOfMax(visiblePageVisibilities);
        maxVisbilityItem = clamp(0, numberOfItems - 1, maxVisbilityItem);
        var maxVisbilityIndex2 = maxVisbilityItem;
        var _b2 = setRenderRange({
          endPage: end,
          numPages: numberOfItems,
          startPage: start
        }), startPage2 = _b2.startPage, endPage2 = _b2.endPage;
        startPage2 = Math.max(startPage2, 0);
        endPage2 = Math.min(endPage2, numberOfItems - 1);
        switch (viewMode) {
          case exports2.ViewMode.DualPageWithCover:
            if (maxVisbilityItem > 0) {
              maxVisbilityIndex2 = maxVisbilityItem % 2 === 1 ? maxVisbilityItem : maxVisbilityItem - 1;
            }
            startPage2 = startPage2 === 0 ? 0 : startPage2 % 2 === 1 ? startPage2 : startPage2 - 1;
            endPage2 = endPage2 % 2 === 1 ? endPage2 - 1 : endPage2;
            if (numberOfItems - endPage2 <= 2) {
              endPage2 = numberOfItems - 1;
            }
            break;
          case exports2.ViewMode.DualPage:
            maxVisbilityIndex2 = maxVisbilityItem % 2 === 0 ? maxVisbilityItem : maxVisbilityItem - 1;
            startPage2 = startPage2 % 2 === 0 ? startPage2 : startPage2 - 1;
            endPage2 = endPage2 % 2 === 1 ? endPage2 : endPage2 - 1;
            break;
          case exports2.ViewMode.SinglePage:
          default:
            maxVisbilityIndex2 = maxVisbilityItem;
            break;
        }
        return {
          startPage: startPage2,
          endPage: endPage2,
          maxVisbilityIndex: maxVisbilityIndex2
        };
      }, [measurements, parentRect, scrollOffset, viewMode, visibilities]), startPage = _e.startPage, endPage = _e.endPage, maxVisbilityIndex = _e.maxVisbilityIndex;
      var virtualItems = React__namespace.useMemo(function() {
        var virtualItems2 = [];
        var _loop_1 = function(i2) {
          var item = measurements[i2];
          var virtualItem = __assign(__assign({}, item), { visibility: visibilities[i2] !== void 0 ? visibilities[i2] : -1, measureRef: function(ele) {
            if (!ele) {
              return;
            }
            ele.setAttribute(VIRTUAL_INDEX_ATTR, "".concat(i2));
            intersectionTracker.observe(ele);
          } });
          virtualItems2.push(virtualItem);
        };
        for (var i = startPage; i <= endPage; i++) {
          _loop_1(i);
        }
        return virtualItems2;
      }, [startPage, endPage, visibilities, measurements]);
      var scrollToItem = React__namespace.useCallback(function(index, offset) {
        var measurements2 = latestRef.current.measurements;
        var normalizedIndex = clamp(0, numberOfItems - 1, index);
        var measurement = measurements2[normalizedIndex];
        var withOffset = scrollModeRef.current === exports2.ScrollMode.Page ? ZERO_OFFSET$1 : offset;
        return measurement ? scrollTo({
          left: withOffset.left + measurement.start.left,
          top: withOffset.top + measurement.start.top
        }, enableSmoothScroll) : Promise.resolve();
      }, [scrollTo, enableSmoothScroll]);
      var scrollToSmallestItemAbove = React__namespace.useCallback(function(index, offset) {
        var measurements2 = latestRef.current.measurements;
        var start = measurements2[index].start;
        var nextItem = measurements2.find(function(item) {
          return item.start.top - start.top > COMPARE_EPSILON;
        });
        if (!nextItem) {
          return Promise.resolve();
        }
        var nextIndex = nextItem.index;
        switch (viewModeRef.current) {
          case exports2.ViewMode.DualPage:
            nextIndex = nextIndex % 2 === 0 ? nextIndex : nextIndex + 1;
            break;
          case exports2.ViewMode.DualPageWithCover:
            nextIndex = nextIndex % 2 === 1 ? nextIndex : nextIndex + 1;
            break;
        }
        return scrollToItem(nextIndex, offset);
      }, []);
      var scrollToBiggestItemBelow = React__namespace.useCallback(function(index, offset) {
        var measurements2 = latestRef.current.measurements;
        var start = measurements2[index].start;
        var prevIndex = index;
        var found = false;
        for (var i = numberOfItems - 1; i >= 0; i--) {
          if (start.top - measurements2[i].start.top > COMPARE_EPSILON) {
            found = true;
            prevIndex = measurements2[i].index;
            break;
          }
        }
        if (!found) {
          return Promise.resolve();
        }
        switch (viewModeRef.current) {
          case exports2.ViewMode.DualPage:
            prevIndex = prevIndex % 2 === 0 ? prevIndex : prevIndex - 1;
            break;
          case exports2.ViewMode.DualPageWithCover:
            prevIndex = prevIndex % 2 === 0 ? prevIndex - 1 : prevIndex;
            break;
        }
        if (prevIndex === index) {
          prevIndex = index - 1;
        }
        return scrollToItem(prevIndex, offset);
      }, []);
      var scrollToNextItem = React__namespace.useCallback(function(index, offset) {
        if (viewModeRef.current === exports2.ViewMode.DualPageWithCover || viewModeRef.current === exports2.ViewMode.DualPage) {
          return scrollToSmallestItemAbove(index, offset);
        }
        switch (scrollModeRef.current) {
          case exports2.ScrollMode.Wrapped:
            return scrollToSmallestItemAbove(index, offset);
          case exports2.ScrollMode.Horizontal:
          case exports2.ScrollMode.Vertical:
          default:
            return scrollToItem(index + 1, offset);
        }
      }, []);
      var scrollToPreviousItem = React__namespace.useCallback(function(index, offset) {
        if (viewModeRef.current === exports2.ViewMode.DualPageWithCover || viewModeRef.current === exports2.ViewMode.DualPage) {
          return scrollToBiggestItemBelow(index, offset);
        }
        switch (scrollModeRef.current) {
          case exports2.ScrollMode.Wrapped:
            return scrollToBiggestItemBelow(index, offset);
          case exports2.ScrollMode.Horizontal:
          case exports2.ScrollMode.Vertical:
          default:
            return scrollToItem(index - 1, offset);
        }
      }, []);
      var getContainerStyles = React__namespace.useCallback(function() {
        return buildContainerStyles(totalSize, scrollModeRef.current);
      }, [totalSize]);
      var getItemContainerStyles = React__namespace.useCallback(function(item) {
        return buildItemContainerStyles(item, parentRect, scrollModeRef.current);
      }, [parentRect]);
      var getItemStyles = React__namespace.useCallback(function(item) {
        return buildItemStyles(item, isRtl, sizes, viewModeRef.current, scrollModeRef.current);
      }, [isRtl, sizes]);
      var zoom = React__namespace.useCallback(function(scale, index) {
        var _a2 = latestRef.current, measurements2 = _a2.measurements, scrollOffset2 = _a2.scrollOffset;
        var normalizedIndex = clamp(0, numberOfItems - 1, index);
        var measurement = measurements2[normalizedIndex];
        if (measurement) {
          var updateOffset = scrollModeRef.current === exports2.ScrollMode.Page ? {
            left: measurement.start.left,
            top: measurement.start.top
          } : {
            left: scrollOffset2.left * scale,
            top: scrollOffset2.top * scale
          };
          return scrollTo(updateOffset, false);
        }
        return Promise.resolve();
      }, []);
      React__namespace.useEffect(function() {
        return function() {
          intersectionTracker.disconnect();
        };
      }, []);
      return {
        boundingClientRect: parentRect,
        isSmoothScrolling,
        startPage,
        endPage,
        maxVisbilityIndex,
        virtualItems,
        getContainerStyles,
        getItemContainerStyles,
        getItemStyles,
        scrollToItem,
        scrollToNextItem,
        scrollToPreviousItem,
        zoom
      };
    };
    var SCROLL_BAR_WIDTH = 17;
    var PAGE_PADDING = 8;
    var calculateScale = function(container, pageHeight, pageWidth, scale, viewMode, numPages) {
      var w = pageWidth;
      switch (true) {
        case (viewMode === exports2.ViewMode.DualPageWithCover && numPages >= 3):
        case (viewMode === exports2.ViewMode.DualPage && numPages >= 3):
          w = 2 * pageWidth;
          break;
        default:
          w = pageWidth;
          break;
      }
      switch (scale) {
        case exports2.SpecialZoomLevel.ActualSize:
          return 1;
        case exports2.SpecialZoomLevel.PageFit:
          return Math.min((container.clientWidth - SCROLL_BAR_WIDTH) / w, (container.clientHeight - 2 * PAGE_PADDING) / pageHeight);
        case exports2.SpecialZoomLevel.PageWidth:
          return (container.clientWidth - SCROLL_BAR_WIDTH) / w;
      }
    };
    var useStack = function(maxLength) {
      var stackRef = React__namespace.useRef([]);
      var map = function(transformer) {
        return stackRef.current.map(function(item) {
          return transformer(item);
        });
      };
      var pop = function() {
        var stack = stackRef.current;
        var size = stack.length;
        if (size === 0) {
          return null;
        }
        var lastItem = stack.pop();
        stackRef.current = stack;
        return lastItem;
      };
      var push = function(item) {
        var stack = stackRef.current;
        if (stack.length + 1 > maxLength) {
          stack.shift();
        }
        stack.push(item);
        stackRef.current = stack;
      };
      React__namespace.useEffect(function() {
        return function() {
          stackRef.current = [];
        };
      }, []);
      return {
        push,
        map,
        pop
      };
    };
    var useQueue = function(maxLength) {
      var queueRef = React__namespace.useRef([]);
      var dequeue = function() {
        var queue = queueRef.current;
        var size = queue.length;
        if (size === 0) {
          return null;
        }
        var firstItem = queue.shift();
        queueRef.current = queue;
        return firstItem || null;
      };
      var enqueue = function(item) {
        var queue = queueRef.current;
        if (queue.length + 1 > maxLength) {
          queue.pop();
        }
        queueRef.current = [item].concat(queue);
      };
      var map = function(transformer) {
        return queueRef.current.map(function(item) {
          return transformer(item);
        });
      };
      React__namespace.useEffect(function() {
        return function() {
          queueRef.current = [];
        };
      }, []);
      return {
        dequeue,
        enqueue,
        map
      };
    };
    var MAX_QUEUE_LENGTH = 50;
    var useDestination = function(_a) {
      var getCurrentPage = _a.getCurrentPage;
      var previousDestinations = useStack(MAX_QUEUE_LENGTH);
      var nextDestinations = useQueue(MAX_QUEUE_LENGTH);
      var getNextDestination = function() {
        var nextDest = nextDestinations.dequeue();
        if (nextDest) {
          previousDestinations.push(nextDest);
        }
        if (nextDest && nextDest.pageIndex === getCurrentPage()) {
          return getNextDestination();
        }
        return nextDest;
      };
      var getPreviousDestination = function() {
        var prevDest = previousDestinations.pop();
        if (prevDest) {
          nextDestinations.enqueue(prevDest);
        }
        if (prevDest && prevDest.pageIndex === getCurrentPage()) {
          return getPreviousDestination();
        }
        return prevDest;
      };
      var markVisitedDestination = React__namespace.useCallback(function(destination) {
        previousDestinations.push(destination);
      }, []);
      return {
        getNextDestination,
        getPreviousDestination,
        markVisitedDestination
      };
    };
    var flaternSingleOutline = function(outline) {
      var result = [];
      if (outline.items && outline.items.length > 0) {
        result = result.concat(flaternOutlines(outline.items));
      }
      return result;
    };
    var flaternOutlines = function(outlines) {
      var result = [];
      outlines.map(function(outline) {
        result = result.concat(outline).concat(flaternSingleOutline(outline));
      });
      return result;
    };
    var useOutlines = function(doc) {
      var isMounted = useIsMounted();
      var _a = React__namespace.useState([]), outlines = _a[0], setOutlines = _a[1];
      React__namespace.useEffect(function() {
        doc.getOutline().then(function(result) {
          if (isMounted.current && result !== null) {
            var items = flaternOutlines(result);
            setOutlines(items);
          }
        });
      }, []);
      return outlines;
    };
    var RESIZE_EVENT_OPTIONS = {
      capture: false,
      passive: true
    };
    var ZERO_RECT$1 = {
      height: 0,
      width: 0
    };
    var useWindowResize = function() {
      var _a = React__namespace.useState(ZERO_RECT$1), windowRect = _a[0], setWindowRect = _a[1];
      var handleResize = useDebounceCallback(function() {
        setWindowRect({
          height: window.innerHeight,
          width: window.innerWidth
        });
      }, 100);
      useIsomorphicLayoutEffect(function() {
        window.addEventListener("resize", handleResize, RESIZE_EVENT_OPTIONS);
        return function() {
          window.removeEventListener("resize", handleResize, RESIZE_EVENT_OPTIONS);
        };
      }, []);
      return windowRect;
    };
    var ZERO_RECT = {
      height: 0,
      width: 0
    };
    var useFullScreen = function(_a) {
      var getCurrentPage = _a.getCurrentPage, getCurrentScrollMode = _a.getCurrentScrollMode, jumpToPage = _a.jumpToPage, targetRef = _a.targetRef;
      var _b = React__namespace.useState(exports2.FullScreenMode.Normal), fullScreenMode = _b[0], setFullScreenMode = _b[1];
      var windowRect = useWindowResize();
      var _c = React__namespace.useState(ZERO_RECT), targetRect = _c[0], setTargetRect = _c[1];
      var windowSizeBeforeFullScreenRef = React__namespace.useRef(ZERO_RECT);
      var targetPageRef = React__namespace.useRef(getCurrentPage());
      var fullScreenSizeRef = React__namespace.useRef(ZERO_RECT);
      var _d = React__namespace.useState(targetRef.current), element = _d[0], setElement = _d[1];
      var fullScreenElementRef = React__namespace.useRef();
      useIsomorphicLayoutEffect(function() {
        if (targetRef.current !== element) {
          setElement(targetRef.current);
        }
      }, []);
      useIsomorphicLayoutEffect(function() {
        if (!element) {
          return;
        }
        var io = new ResizeObserver(function(entries) {
          entries.forEach(function(entry) {
            var _a2 = entry.target.getBoundingClientRect(), height = _a2.height, width = _a2.width;
            setTargetRect({ height, width });
          });
        });
        io.observe(element);
        return function() {
          io.unobserve(element);
          io.disconnect();
        };
      }, [element]);
      var closeOtherFullScreen = React__namespace.useCallback(function(target) {
        var currentFullScreenEle = getFullScreenElement();
        if (currentFullScreenEle && currentFullScreenEle !== target) {
          setFullScreenMode(exports2.FullScreenMode.Normal);
          return exitFullScreen(currentFullScreenEle);
        }
        return Promise.resolve();
      }, []);
      var enterFullScreenMode = React__namespace.useCallback(function(target) {
        if (!target || !isFullScreenEnabled()) {
          return;
        }
        setElement(target);
        closeOtherFullScreen(target).then(function() {
          fullScreenElementRef.current = target;
          setFullScreenMode(exports2.FullScreenMode.Entering);
          requestFullScreen(target);
        });
      }, []);
      var exitFullScreenMode = React__namespace.useCallback(function() {
        var currentFullScreenEle = getFullScreenElement();
        if (currentFullScreenEle) {
          setFullScreenMode(exports2.FullScreenMode.Exitting);
          exitFullScreen(document);
        }
      }, []);
      var handleFullScreenChange = React__namespace.useCallback(function() {
        if (!element) {
          return;
        }
        var currentFullScreenEle = getFullScreenElement();
        if (currentFullScreenEle !== element) {
          setFullScreenMode(exports2.FullScreenMode.Exitting);
        }
      }, [element]);
      React__namespace.useEffect(function() {
        switch (fullScreenMode) {
          case exports2.FullScreenMode.Entering:
            if (fullScreenElementRef.current) {
              fullScreenElementRef.current.style.backgroundColor = "var(--rpv-core__full-screen-target-background-color)";
            }
            targetPageRef.current = getCurrentPage();
            windowSizeBeforeFullScreenRef.current = {
              height: window.innerHeight,
              width: window.innerWidth
            };
            break;
          case exports2.FullScreenMode.Entered:
            if (getCurrentScrollMode() === exports2.ScrollMode.Page) {
              jumpToPage(targetPageRef.current).then(function() {
                setFullScreenMode(exports2.FullScreenMode.EnteredCompletely);
              });
            } else {
              setFullScreenMode(exports2.FullScreenMode.EnteredCompletely);
            }
            break;
          case exports2.FullScreenMode.Exitting:
            if (fullScreenElementRef.current) {
              fullScreenElementRef.current.style.backgroundColor = "";
              fullScreenElementRef.current = null;
            }
            targetPageRef.current = getCurrentPage();
            break;
          case exports2.FullScreenMode.Exited:
            setFullScreenMode(exports2.FullScreenMode.Normal);
            if (getCurrentScrollMode() === exports2.ScrollMode.Page) {
              jumpToPage(targetPageRef.current);
            }
            break;
        }
      }, [fullScreenMode]);
      React__namespace.useEffect(function() {
        if (fullScreenMode === exports2.FullScreenMode.Normal) {
          return;
        }
        if (fullScreenMode === exports2.FullScreenMode.Entering && windowRect.height === targetRect.height && windowRect.width === targetRect.width && windowRect.height > 0 && windowRect.width > 0 && (fullScreenSizeRef.current.height === 0 || windowRect.height == fullScreenSizeRef.current.height)) {
          fullScreenSizeRef.current = {
            height: window.innerHeight,
            width: window.innerWidth
          };
          setFullScreenMode(exports2.FullScreenMode.Entered);
          return;
        }
        if (fullScreenMode === exports2.FullScreenMode.Exitting && windowSizeBeforeFullScreenRef.current.height === windowRect.height && windowSizeBeforeFullScreenRef.current.width === windowRect.width && windowRect.height > 0 && windowRect.width > 0) {
          setFullScreenMode(exports2.FullScreenMode.Exited);
        }
      }, [fullScreenMode, windowRect, targetRect]);
      React__namespace.useEffect(function() {
        addFullScreenChangeListener(handleFullScreenChange);
        return function() {
          removeFullScreenChangeListener(handleFullScreenChange);
        };
      }, [element]);
      return {
        enterFullScreenMode,
        exitFullScreenMode,
        fullScreenMode
      };
    };
    var DEFAULT_PAGE_LAYOUT = {
      buildPageStyles: function() {
        return {};
      },
      transformSize: function(_a) {
        var size = _a.size;
        return size;
      }
    };
    var ZERO_OFFSET = {
      left: 0,
      top: 0
    };
    var Inner = function(_a) {
      var currentFile = _a.currentFile, defaultScale = _a.defaultScale, doc = _a.doc, enableSmoothScroll = _a.enableSmoothScroll, initialPage = _a.initialPage, initialRotation = _a.initialRotation, initialScale = _a.initialScale, pageLayout = _a.pageLayout, pageSizes = _a.pageSizes, plugins = _a.plugins, renderPage = _a.renderPage, scrollMode = _a.scrollMode, setRenderRange = _a.setRenderRange, viewMode = _a.viewMode, viewerState = _a.viewerState, onDocumentLoad = _a.onDocumentLoad, onOpenFile = _a.onOpenFile, onPageChange = _a.onPageChange, onRotate = _a.onRotate, onRotatePage = _a.onRotatePage, onZoom = _a.onZoom;
      var numPages = doc.numPages;
      var docId = doc.loadingTask.docId;
      var l10n = React__namespace.useContext(LocalizationContext).l10n;
      var themeContext = React__namespace.useContext(ThemeContext);
      var isRtl = themeContext.direction === exports2.TextDirection.RightToLeft;
      var containerRef = React__namespace.useRef();
      var pagesRef = React__namespace.useRef();
      var _b = React__namespace.useState(initialPage), currentPage = _b[0], setCurrentPage = _b[1];
      var mostRecentVisitedRef = React__namespace.useRef(null);
      var destinationManager = useDestination({
        getCurrentPage: function() {
          return stateRef.current.pageIndex;
        }
      });
      var _c = React__namespace.useState(initialRotation), rotation = _c[0], setRotation = _c[1];
      var previousRotation = usePrevious(rotation);
      var _d = React__namespace.useState(false), pagesRotationChanged = _d[0], setPagesRotationChanged = _d[1];
      var _e = React__namespace.useState(/* @__PURE__ */ new Map()), pagesRotation = _e[0], setPagesRotation = _e[1];
      var _f = React__namespace.useState(scrollMode), currentScrollMode = _f[0], setCurrentScrollMode = _f[1];
      var previousScrollMode = usePrevious(currentScrollMode);
      var _g = React__namespace.useState(viewMode), currentViewMode = _g[0], setCurrentViewMode = _g[1];
      var previousViewMode = usePrevious(currentViewMode);
      var outlines = useOutlines(doc);
      var _h = React__namespace.useState(initialScale), scale = _h[0], setScale = _h[1];
      var previousScale = usePrevious(scale);
      var stateRef = React__namespace.useRef(viewerState);
      var keepSpecialZoomLevelRef = React__namespace.useRef(typeof defaultScale === "string" ? defaultScale : null);
      var forceTargetFullScreenRef = React__namespace.useRef(-1);
      var forceTargetZoomRef = React__namespace.useRef(-1);
      var forceTargetInitialPageRef = React__namespace.useRef(initialPage);
      var fullScreen = useFullScreen({
        getCurrentPage: function() {
          return stateRef.current.pageIndex;
        },
        getCurrentScrollMode: function() {
          return stateRef.current.scrollMode;
        },
        jumpToPage: function(pageIndex) {
          return jumpToPage(pageIndex);
        },
        targetRef: pagesRef
      });
      var _j = React__namespace.useState(-1), renderPageIndex = _j[0], setRenderPageIndex = _j[1];
      var _k = React__namespace.useState(0), renderQueueKey = _k[0], setRenderQueueKey = _k[1];
      var renderQueue = useRenderQueue({ doc });
      React__namespace.useEffect(function() {
        return function() {
          clearPagesCache();
        };
      }, [docId]);
      var layoutBuilder = React__namespace.useMemo(function() {
        return Object.assign({}, DEFAULT_PAGE_LAYOUT, pageLayout);
      }, []);
      var sizes = React__namespace.useMemo(function() {
        return Array(numPages).fill(0).map(function(_, pageIndex) {
          var pageSize = [pageSizes[pageIndex].pageHeight, pageSizes[pageIndex].pageWidth];
          var rect = Math.abs(rotation) % 180 === 0 ? {
            height: pageSize[0],
            width: pageSize[1]
          } : {
            height: pageSize[1],
            width: pageSize[0]
          };
          var pageRect = {
            height: rect.height * scale,
            width: rect.width * scale
          };
          return layoutBuilder.transformSize({ numPages, pageIndex, size: pageRect });
        });
      }, [rotation, scale]);
      var virtualizer = useVirtual({
        enableSmoothScroll,
        isRtl,
        numberOfItems: numPages,
        parentRef: pagesRef,
        scrollMode: currentScrollMode,
        setRenderRange,
        sizes,
        viewMode: currentViewMode
      });
      var handlePagesResize = useDebounceCallback(function() {
        if (!keepSpecialZoomLevelRef.current || stateRef.current.fullScreenMode !== exports2.FullScreenMode.Normal || initialPage > 0 && forceTargetInitialPageRef.current === initialPage) {
          return;
        }
        zoom(keepSpecialZoomLevelRef.current);
      }, 200);
      useTrackResize({
        targetRef: pagesRef,
        onResize: handlePagesResize
      });
      var setViewerState = function(viewerState2) {
        var newState = viewerState2;
        plugins.forEach(function(plugin) {
          if (plugin.onViewerStateChange) {
            newState = plugin.onViewerStateChange(newState);
          }
        });
        stateRef.current = newState;
      };
      var getPagesContainer = function() {
        return pagesRef.current;
      };
      var getViewerState = function() {
        return stateRef.current;
      };
      var handleJumpFromLinkAnnotation = React__namespace.useCallback(function(destination) {
        destinationManager.markVisitedDestination(destination);
      }, []);
      var handleJumpToDestination = React__namespace.useCallback(function(destination) {
        var pageIndex = destination.pageIndex, bottomOffset = destination.bottomOffset, leftOffset = destination.leftOffset, scaleTo = destination.scaleTo;
        var pagesContainer = pagesRef.current;
        var currentState = stateRef.current;
        if (!pagesContainer || !currentState) {
          return Promise.resolve();
        }
        return new Promise(function(resolve, _) {
          getPage(doc, pageIndex).then(function(page) {
            var viewport = page.getViewport({ scale: 1 });
            var top = 0;
            var bottom = (typeof bottomOffset === "function" ? bottomOffset(viewport.width, viewport.height) : bottomOffset) || 0;
            var left = (typeof leftOffset === "function" ? leftOffset(viewport.width, viewport.height) : leftOffset) || 0;
            var updateScale = currentState.scale;
            switch (scaleTo) {
              case exports2.SpecialZoomLevel.PageFit:
                top = 0;
                left = 0;
                zoom(exports2.SpecialZoomLevel.PageFit);
                break;
              case exports2.SpecialZoomLevel.PageWidth:
                updateScale = calculateScale(pagesContainer, pageSizes[pageIndex].pageHeight, pageSizes[pageIndex].pageWidth, exports2.SpecialZoomLevel.PageWidth, viewMode, numPages);
                top = (viewport.height - bottom) * updateScale;
                left = left * updateScale;
                zoom(updateScale);
                break;
              default:
                top = (viewport.height - bottom) * updateScale;
                left = left * updateScale;
                break;
            }
            switch (currentState.scrollMode) {
              case exports2.ScrollMode.Horizontal:
                virtualizer.scrollToItem(pageIndex, { left, top: 0 }).then(function() {
                  resolve();
                });
                break;
              case exports2.ScrollMode.Vertical:
              default:
                virtualizer.scrollToItem(pageIndex, { left: 0, top }).then(function() {
                  resolve();
                });
                break;
            }
          });
        });
      }, []);
      var jumpToDestination = React__namespace.useCallback(function(destination) {
        destinationManager.markVisitedDestination(destination);
        return handleJumpToDestination(destination);
      }, []);
      var jumpToNextDestination = React__namespace.useCallback(function() {
        var nextDestination = destinationManager.getNextDestination();
        return nextDestination ? handleJumpToDestination(nextDestination) : Promise.resolve();
      }, []);
      var jumpToPreviousDestination = React__namespace.useCallback(function() {
        var lastDestination = destinationManager.getPreviousDestination();
        return lastDestination ? handleJumpToDestination(lastDestination) : Promise.resolve();
      }, []);
      var jumpToNextPage = React__namespace.useCallback(function() {
        return virtualizer.scrollToNextItem(stateRef.current.pageIndex, ZERO_OFFSET);
      }, []);
      var jumpToPage = React__namespace.useCallback(function(pageIndex) {
        return 0 <= pageIndex && pageIndex < numPages ? virtualizer.scrollToItem(pageIndex, ZERO_OFFSET) : Promise.resolve();
      }, []);
      var jumpToPreviousPage = React__namespace.useCallback(function() {
        return virtualizer.scrollToPreviousItem(stateRef.current.pageIndex, ZERO_OFFSET);
      }, []);
      var openFile = React__namespace.useCallback(function(file) {
        if (getFileExt(file.name).toLowerCase() !== "pdf") {
          return;
        }
        new Promise(function(resolve) {
          var reader = new FileReader();
          reader.readAsArrayBuffer(file);
          reader.onload = function() {
            var bytes = new Uint8Array(reader.result);
            resolve(bytes);
          };
        }).then(function(data) {
          onOpenFile(file.name, data);
        });
      }, [onOpenFile]);
      var rotate = React__namespace.useCallback(function(direction) {
        var degrees = direction === exports2.RotateDirection.Backward ? -90 : 90;
        var currentRotation = stateRef.current.rotation;
        var updateRotation = currentRotation === 360 || currentRotation === -360 ? degrees : currentRotation + degrees;
        renderQueue.markNotRendered();
        setRotation(updateRotation);
        setViewerState(__assign(__assign({}, stateRef.current), { rotation: updateRotation }));
        onRotate({ direction, doc, rotation: updateRotation });
      }, []);
      var rotatePage = React__namespace.useCallback(function(pageIndex, direction) {
        var degrees = direction === exports2.RotateDirection.Backward ? -90 : 90;
        var rotations = stateRef.current.pagesRotation;
        var currentPageRotation = rotations.has(pageIndex) ? rotations.get(pageIndex) : initialRotation;
        var finalRotation = currentPageRotation + degrees;
        var updateRotations = rotations.set(pageIndex, finalRotation);
        setPagesRotation(updateRotations);
        setPagesRotationChanged(function(value) {
          return !value;
        });
        setViewerState(__assign(__assign({}, stateRef.current), { pagesRotation: updateRotations, rotatedPage: pageIndex }));
        onRotatePage({ direction, doc, pageIndex, rotation: finalRotation });
        renderQueue.markRendering(pageIndex);
        setRenderPageIndex(pageIndex);
      }, []);
      var switchScrollMode = React__namespace.useCallback(function(scrollMode2) {
        setViewerState(__assign(__assign({}, stateRef.current), { scrollMode: scrollMode2 }));
        setCurrentScrollMode(scrollMode2);
      }, []);
      var switchViewMode = React__namespace.useCallback(function(viewMode2) {
        setViewerState(__assign(__assign({}, stateRef.current), { viewMode: viewMode2 }));
        setCurrentViewMode(viewMode2);
      }, []);
      var zoom = React__namespace.useCallback(function(newScale) {
        var pagesEle = pagesRef.current;
        var currentPage2 = stateRef.current.pageIndex;
        if (currentPage2 < 0 || currentPage2 >= numPages) {
          return;
        }
        var currentPageHeight = pageSizes[currentPage2].pageHeight;
        var currentPageWidth = pageSizes[currentPage2].pageWidth;
        var updateScale = pagesEle ? typeof newScale === "string" ? calculateScale(pagesEle, currentPageHeight, currentPageWidth, newScale, stateRef.current.viewMode, numPages) : newScale : 1;
        keepSpecialZoomLevelRef.current = typeof newScale === "string" ? newScale : null;
        if (updateScale === stateRef.current.scale) {
          return;
        }
        setRenderQueueKey(function(key) {
          return key + 1;
        });
        renderQueue.markNotRendered();
        setScale(updateScale);
        onZoom({ doc, scale: updateScale });
        setViewerState(__assign(__assign({}, stateRef.current), { scale: updateScale }));
      }, []);
      var enterFullScreenMode = React__namespace.useCallback(function(target) {
        fullScreen.enterFullScreenMode(target);
      }, []);
      var exitFullScreenMode = React__namespace.useCallback(function() {
        fullScreen.exitFullScreenMode();
      }, []);
      React__namespace.useEffect(function() {
        setViewerState(__assign(__assign({}, stateRef.current), { fullScreenMode: fullScreen.fullScreenMode }));
      }, [fullScreen.fullScreenMode]);
      React__namespace.useEffect(function() {
        var pluginMethods = {
          enterFullScreenMode,
          exitFullScreenMode,
          getPagesContainer,
          getViewerState,
          jumpToDestination,
          jumpToNextDestination,
          jumpToPreviousDestination,
          jumpToNextPage,
          jumpToPreviousPage,
          jumpToPage,
          openFile,
          rotate,
          rotatePage,
          setViewerState,
          switchScrollMode,
          switchViewMode,
          zoom
        };
        plugins.forEach(function(plugin) {
          if (plugin.install) {
            plugin.install(pluginMethods);
          }
        });
        return function() {
          plugins.forEach(function(plugin) {
            if (plugin.uninstall) {
              plugin.uninstall(pluginMethods);
            }
          });
        };
      }, [docId]);
      React__namespace.useEffect(function() {
        onDocumentLoad({ doc, file: currentFile });
        plugins.forEach(function(plugin) {
          plugin.onDocumentLoad && plugin.onDocumentLoad({ doc, file: currentFile });
        });
      }, [docId]);
      var boundingClientRect = virtualizer.boundingClientRect;
      useRunOnce(function() {
        if (initialPage) {
          jumpToPage(initialPage);
        }
      }, boundingClientRect.height > 0 && boundingClientRect.width > 0);
      useIsomorphicLayoutEffect(function() {
        var latestPage = stateRef.current.pageIndex;
        if (latestPage > -1 && previousScrollMode !== currentScrollMode) {
          virtualizer.scrollToItem(latestPage, ZERO_OFFSET).then(function() {
            if (fullScreen.fullScreenMode === exports2.FullScreenMode.EnteredCompletely) {
              if (!enableSmoothScroll) {
                renderQueue.markNotRendered();
              }
              forceTargetFullScreenRef.current = -1;
            }
          });
        }
      }, [currentScrollMode]);
      useIsomorphicLayoutEffect(function() {
        var latestPage = stateRef.current.pageIndex;
        if (latestPage > -1 && previousRotation !== rotation) {
          virtualizer.scrollToItem(latestPage, ZERO_OFFSET);
        }
      }, [rotation]);
      useIsomorphicLayoutEffect(function() {
        if (previousScale != 0 && previousScale != stateRef.current.scale) {
          virtualizer.zoom(stateRef.current.scale / previousScale, stateRef.current.pageIndex).then(function() {
            if (fullScreen.fullScreenMode === exports2.FullScreenMode.EnteredCompletely) {
              forceTargetZoomRef.current = -1;
            }
          });
        }
      }, [scale]);
      useIsomorphicLayoutEffect(function() {
        if (previousViewMode === stateRef.current.viewMode) {
          return;
        }
        var startPage = virtualizer.startPage, endPage = virtualizer.endPage, virtualItems = virtualizer.virtualItems;
        renderQueue.markNotRendered();
        renderQueue.setRange(startPage, endPage);
        var _loop_1 = function(i2) {
          var item = virtualItems.find(function(item2) {
            return item2.index === i2;
          });
          if (item) {
            renderQueue.setVisibility(i2, item.visibility);
          }
        };
        for (var i = startPage; i <= endPage; i++) {
          _loop_1(i);
        }
        renderNextPage();
      }, [currentViewMode]);
      useIsomorphicLayoutEffect(function() {
        var latestPage = stateRef.current.pageIndex;
        if (latestPage > -1 && previousViewMode !== currentViewMode) {
          virtualizer.scrollToItem(latestPage, ZERO_OFFSET);
        }
      }, [currentViewMode]);
      useIsomorphicLayoutEffect(function() {
        var latestPage = stateRef.current.pageIndex;
        if (latestPage > 0 && latestPage === initialPage && forceTargetInitialPageRef.current === initialPage && keepSpecialZoomLevelRef.current) {
          forceTargetInitialPageRef.current = -1;
          zoom(keepSpecialZoomLevelRef.current);
        }
      }, [currentPage]);
      React__namespace.useEffect(function() {
        var isSmoothScrolling = virtualizer.isSmoothScrolling;
        if (isSmoothScrolling) {
          return;
        }
        if (mostRecentVisitedRef.current === null || mostRecentVisitedRef.current !== currentPage) {
          mostRecentVisitedRef.current = currentPage;
          onPageChange({ currentPage, doc });
        }
      }, [currentPage, virtualizer.isSmoothScrolling]);
      React__namespace.useEffect(function() {
        if (fullScreen.fullScreenMode === exports2.FullScreenMode.Entering && stateRef.current.scrollMode === exports2.ScrollMode.Page) {
          forceTargetFullScreenRef.current = stateRef.current.pageIndex;
        }
        if (fullScreen.fullScreenMode === exports2.FullScreenMode.EnteredCompletely && stateRef.current.scrollMode === exports2.ScrollMode.Page && enableSmoothScroll) {
          forceTargetFullScreenRef.current = -1;
        }
        if (fullScreen.fullScreenMode === exports2.FullScreenMode.EnteredCompletely && keepSpecialZoomLevelRef.current) {
          forceTargetZoomRef.current = stateRef.current.pageIndex;
          zoom(keepSpecialZoomLevelRef.current);
        }
      }, [fullScreen.fullScreenMode]);
      React__namespace.useEffect(function() {
        if (fullScreen.fullScreenMode === exports2.FullScreenMode.Entering || fullScreen.fullScreenMode === exports2.FullScreenMode.Exitting || virtualizer.isSmoothScrolling) {
          return;
        }
        var startPage = virtualizer.startPage, endPage = virtualizer.endPage, maxVisbilityIndex = virtualizer.maxVisbilityIndex, virtualItems = virtualizer.virtualItems;
        var currentPage2 = maxVisbilityIndex;
        var isFullScreen = fullScreen.fullScreenMode === exports2.FullScreenMode.Entered || fullScreen.fullScreenMode === exports2.FullScreenMode.EnteredCompletely;
        if (isFullScreen && currentPage2 !== forceTargetFullScreenRef.current && forceTargetFullScreenRef.current > -1) {
          return;
        }
        if (isFullScreen && currentPage2 !== forceTargetZoomRef.current && forceTargetZoomRef.current > -1) {
          return;
        }
        setCurrentPage(currentPage2);
        setViewerState(__assign(__assign({}, stateRef.current), { pageIndex: currentPage2 }));
        renderQueue.setRange(startPage, endPage);
        var _loop_2 = function(i2) {
          var item = virtualItems.find(function(item2) {
            return item2.index === i2;
          });
          if (item) {
            renderQueue.setVisibility(i2, item.visibility);
          }
        };
        for (var i = startPage; i <= endPage; i++) {
          _loop_2(i);
        }
        renderNextPage();
      }, [
        virtualizer.startPage,
        virtualizer.endPage,
        virtualizer.isSmoothScrolling,
        virtualizer.maxVisbilityIndex,
        fullScreen.fullScreenMode,
        pagesRotationChanged,
        rotation,
        scale
      ]);
      var handlePageRenderCompleted = React__namespace.useCallback(function(pageIndex) {
        renderQueue.markRendered(pageIndex);
        renderNextPage();
      }, [renderQueueKey]);
      var renderNextPage = function() {
        var nextPage = renderQueue.getHighestPriorityPage();
        if (nextPage > -1 && renderQueue.isInRange(nextPage)) {
          renderQueue.markRendering(nextPage);
          setRenderPageIndex(nextPage);
        }
      };
      var executeNamedAction = function(action) {
        var previousPage = currentPage - 1;
        var nextPage = currentPage + 1;
        switch (action) {
          case "FirstPage":
            jumpToPage(0);
            break;
          case "LastPage":
            jumpToPage(numPages - 1);
            break;
          case "NextPage":
            nextPage < numPages && jumpToPage(nextPage);
            break;
          case "PrevPage":
            previousPage >= 0 && jumpToPage(previousPage);
            break;
        }
      };
      var renderViewer = React__namespace.useCallback(function() {
        var virtualItems = virtualizer.virtualItems;
        var chunks = [];
        switch (currentViewMode) {
          case exports2.ViewMode.DualPage:
            chunks = chunk(virtualItems, 2);
            break;
          case exports2.ViewMode.DualPageWithCover:
            if (virtualItems.length) {
              chunks = virtualItems[0].index === 0 ? [[virtualItems[0]]].concat(chunk(virtualItems.slice(1), 2)) : chunk(virtualItems, 2);
            }
            break;
          case exports2.ViewMode.SinglePage:
          default:
            chunks = chunk(virtualItems, 1);
            break;
        }
        var pageLabel = l10n && l10n.core ? l10n.core.pageLabel : "Page {{pageIndex}}";
        var slot = {
          attrs: {
            className: "rpv-core__inner-container",
            "data-testid": "core__inner-container",
            ref: containerRef,
            style: {
              height: "100%"
            }
          },
          children: React__namespace.createElement(React__namespace.Fragment, null),
          subSlot: {
            attrs: {
              "data-testid": "core__inner-pages",
              className: classNames({
                "rpv-core__inner-pages": true,
                "rpv-core__inner-pages--horizontal": currentScrollMode === exports2.ScrollMode.Horizontal,
                "rpv-core__inner-pages--rtl": isRtl,
                "rpv-core__inner-pages--single": currentScrollMode === exports2.ScrollMode.Page,
                "rpv-core__inner-pages--vertical": currentScrollMode === exports2.ScrollMode.Vertical,
                "rpv-core__inner-pages--wrapped": currentScrollMode === exports2.ScrollMode.Wrapped
              }),
              ref: pagesRef,
              style: {
                height: "100%",
                position: "relative"
              }
            },
            children: React__namespace.createElement("div", { "data-testid": "core__inner-current-page-".concat(currentPage), style: Object.assign({
              "--scale-factor": scale
            }, virtualizer.getContainerStyles()) }, chunks.map(function(items) {
              return React__namespace.createElement("div", { className: classNames({
                "rpv-core__inner-page-container": true,
                "rpv-core__inner-page-container--single": currentScrollMode === exports2.ScrollMode.Page
              }), style: virtualizer.getItemContainerStyles(items[0]), key: "".concat(items[0].index, "-").concat(currentViewMode) }, items.map(function(item) {
                var isCover = currentViewMode === exports2.ViewMode.DualPageWithCover && (item.index === 0 || numPages % 2 === 0 && item.index === numPages - 1);
                return React__namespace.createElement(
                  "div",
                  { "aria-label": pageLabel.replace("{{pageIndex}}", "".concat(item.index + 1)), className: classNames({
                    "rpv-core__inner-page": true,
                    "rpv-core__inner-page--dual-even": currentViewMode === exports2.ViewMode.DualPage && item.index % 2 === 0,
                    "rpv-core__inner-page--dual-odd": currentViewMode === exports2.ViewMode.DualPage && item.index % 2 === 1,
                    "rpv-core__inner-page--dual-cover": isCover,
                    "rpv-core__inner-page--dual-cover-even": currentViewMode === exports2.ViewMode.DualPageWithCover && !isCover && item.index % 2 === 0,
                    "rpv-core__inner-page--dual-cover-odd": currentViewMode === exports2.ViewMode.DualPageWithCover && !isCover && item.index % 2 === 1,
                    "rpv-core__inner-page--single": currentViewMode === exports2.ViewMode.SinglePage && currentScrollMode === exports2.ScrollMode.Page
                  }), role: "region", key: "".concat(item.index, "-").concat(currentViewMode), style: Object.assign({}, virtualizer.getItemStyles(item), layoutBuilder.buildPageStyles({
                    numPages,
                    pageIndex: item.index,
                    scrollMode: currentScrollMode,
                    viewMode: currentViewMode
                  })) },
                  React__namespace.createElement(PageLayer, { doc, measureRef: item.measureRef, outlines, pageIndex: item.index, pageRotation: pagesRotation.has(item.index) ? pagesRotation.get(item.index) : 0, pageSize: pageSizes[item.index], plugins, renderPage, renderQueueKey, rotation, scale, shouldRender: renderPageIndex === item.index, viewMode: currentViewMode, onExecuteNamedAction: executeNamedAction, onJumpFromLinkAnnotation: handleJumpFromLinkAnnotation, onJumpToDest: jumpToDestination, onRenderCompleted: handlePageRenderCompleted, onRotatePage: rotatePage })
                );
              }));
            }))
          }
        };
        plugins.forEach(function(plugin) {
          if (plugin.renderViewer) {
            slot = plugin.renderViewer({
              containerRef,
              doc,
              pagesContainerRef: pagesRef,
              pagesRotation,
              pageSizes,
              rotation,
              slot,
              themeContext,
              jumpToPage,
              openFile,
              rotate,
              rotatePage,
              switchScrollMode,
              switchViewMode,
              zoom
            });
          }
        });
        return slot;
      }, [plugins, virtualizer]);
      var renderSlot = React__namespace.useCallback(function(slot) {
        return React__namespace.createElement(
          "div",
          __assign({}, slot.attrs, { style: slot.attrs && slot.attrs.style ? slot.attrs.style : {} }),
          slot.children,
          slot.subSlot && renderSlot(slot.subSlot)
        );
      }, []);
      return renderSlot(renderViewer());
    };
    var LEVELS = [
      0.1,
      0.2,
      0.3,
      0.4,
      0.5,
      0.6,
      0.7,
      0.8,
      0.9,
      1,
      1.1,
      1.3,
      1.5,
      1.7,
      1.9,
      2.1,
      2.4,
      2.7,
      3,
      3.3,
      3.7,
      4.1,
      4.6,
      5.1,
      5.7,
      6.3,
      7,
      7.7,
      8.5,
      9.4,
      10
    ];
    var decrease = function(currentLevel) {
      var found = LEVELS.findIndex(function(item) {
        return item >= currentLevel;
      });
      return found === -1 || found === 0 ? currentLevel : LEVELS[found - 1];
    };
    var RESERVE_HEIGHT = 45;
    var RESERVE_WIDTH = 45;
    var PageSizeCalculator = function(_a) {
      var defaultScale = _a.defaultScale, doc = _a.doc, render = _a.render, scrollMode = _a.scrollMode, viewMode = _a.viewMode;
      var pagesRef = React__namespace.useRef();
      var _b = React__namespace.useState({
        pageSizes: [],
        scale: 0
      }), state = _b[0], setState = _b[1];
      React__namespace.useLayoutEffect(function() {
        var queryPageSizes = Array(doc.numPages).fill(0).map(function(_, i) {
          return new Promise(function(resolve, _2) {
            getPage(doc, i).then(function(pdfPage) {
              var viewport = pdfPage.getViewport({ scale: 1 });
              resolve({
                pageHeight: viewport.height,
                pageWidth: viewport.width,
                rotation: viewport.rotation
              });
            });
          });
        });
        Promise.all(queryPageSizes).then(function(pageSizes) {
          var pagesEle = pagesRef.current;
          if (!pagesEle || pageSizes.length === 0) {
            return;
          }
          var w = pageSizes[0].pageWidth;
          var h = pageSizes[0].pageHeight;
          var parentEle = pagesEle.parentElement;
          var scaleWidth = (parentEle.clientWidth - RESERVE_WIDTH) / w;
          var scaleHeight = (parentEle.clientHeight - RESERVE_HEIGHT) / h;
          var scaled = scaleWidth;
          switch (scrollMode) {
            case exports2.ScrollMode.Horizontal:
              scaled = Math.min(scaleWidth, scaleHeight);
              break;
            case exports2.ScrollMode.Vertical:
            default:
              scaled = scaleWidth;
              break;
          }
          var scale = defaultScale ? typeof defaultScale === "string" ? calculateScale(parentEle, h, w, defaultScale, viewMode, doc.numPages) : defaultScale : decrease(scaled);
          setState({ pageSizes, scale });
        });
      }, [doc.loadingTask.docId]);
      return state.pageSizes.length === 0 || state.scale === 0 ? React__namespace.createElement(
        "div",
        { className: "rpv-core__page-size-calculator", "data-testid": "core__page-size-calculating", ref: pagesRef },
        React__namespace.createElement(Spinner, null)
      ) : render(state.pageSizes, state.scale);
    };
    var LoadingStatus = /* @__PURE__ */ function() {
      function LoadingStatus2() {
      }
      return LoadingStatus2;
    }();
    var AskForPasswordState = function(_super) {
      __extends(AskForPasswordState2, _super);
      function AskForPasswordState2(verifyPassword, passwordStatus) {
        var _this = _super.call(this) || this;
        _this.verifyPassword = verifyPassword;
        _this.passwordStatus = passwordStatus;
        return _this;
      }
      return AskForPasswordState2;
    }(LoadingStatus);
    var AskingPassword = function(_a) {
      var passwordStatus = _a.passwordStatus, renderProtectedView = _a.renderProtectedView, verifyPassword = _a.verifyPassword, onDocumentAskPassword = _a.onDocumentAskPassword;
      var l10n = React__namespace.useContext(LocalizationContext).l10n;
      var _b = React__namespace.useState(""), password = _b[0], setPassword = _b[1];
      var direction = React__namespace.useContext(ThemeContext).direction;
      var isRtl = direction === exports2.TextDirection.RightToLeft;
      var submit = function() {
        return verifyPassword(password);
      };
      var handleKeyDown = function(e) {
        if (e.key === "Enter") {
          submit();
        }
      };
      React__namespace.useEffect(function() {
        if (onDocumentAskPassword) {
          onDocumentAskPassword({
            verifyPassword
          });
        }
      }, []);
      if (renderProtectedView) {
        return renderProtectedView({
          passwordStatus,
          verifyPassword
        });
      }
      return React__namespace.createElement(
        "div",
        { className: "rpv-core__asking-password-wrapper" },
        React__namespace.createElement(
          "div",
          { className: classNames({
            "rpv-core__asking-password": true,
            "rpv-core__asking-password--rtl": isRtl
          }) },
          React__namespace.createElement(
            "div",
            { className: "rpv-core__asking-password-message" },
            passwordStatus === exports2.PasswordStatus.RequiredPassword && l10n.core.askingPassword.requirePasswordToOpen,
            passwordStatus === exports2.PasswordStatus.WrongPassword && l10n.core.wrongPassword.tryAgain
          ),
          React__namespace.createElement(
            "div",
            { className: "rpv-core__asking-password-body" },
            React__namespace.createElement(
              "div",
              { className: classNames({
                "rpv-core__asking-password-input": true,
                "rpv-core__asking-password-input--ltr": !isRtl,
                "rpv-core__asking-password-input--rtl": isRtl
              }) },
              React__namespace.createElement(TextBox, { testId: "core__asking-password-input", type: "password", value: password, onChange: setPassword, onKeyDown: handleKeyDown })
            ),
            React__namespace.createElement(PrimaryButton, { onClick: submit }, l10n.core.askingPassword.submit)
          )
        )
      );
    };
    var CompletedState = function(_super) {
      __extends(CompletedState2, _super);
      function CompletedState2(doc) {
        var _this = _super.call(this) || this;
        _this.doc = doc;
        return _this;
      }
      return CompletedState2;
    }(LoadingStatus);
    var FailureState = function(_super) {
      __extends(FailureState2, _super);
      function FailureState2(error) {
        var _this = _super.call(this) || this;
        _this.error = error;
        return _this;
      }
      return FailureState2;
    }(LoadingStatus);
    var LoadingState = function(_super) {
      __extends(LoadingState2, _super);
      function LoadingState2(percentages) {
        var _this = _super.call(this) || this;
        _this.percentages = percentages;
        return _this;
      }
      return LoadingState2;
    }(LoadingStatus);
    var DocumentLoader = function(_a) {
      var characterMap = _a.characterMap, file = _a.file, httpHeaders = _a.httpHeaders, render = _a.render, renderError = _a.renderError, renderLoader = _a.renderLoader, renderProtectedView = _a.renderProtectedView, transformGetDocumentParams = _a.transformGetDocumentParams, withCredentials = _a.withCredentials, onDocumentAskPassword = _a.onDocumentAskPassword;
      var direction = React__namespace.useContext(ThemeContext).direction;
      var isRtl = direction === exports2.TextDirection.RightToLeft;
      var _b = React__namespace.useState(new LoadingState(0)), status = _b[0], setStatus = _b[1];
      var docRef = React__namespace.useRef("");
      var isMounted = useIsMounted();
      React__namespace.useEffect(function() {
        docRef.current = "";
        setStatus(new LoadingState(0));
        var worker2 = new PdfJsApi__namespace.PDFWorker({ name: "PDFWorker_".concat(Date.now()) });
        var params = Object.assign({
          httpHeaders,
          withCredentials,
          worker: worker2
        }, "string" === typeof file ? { url: file } : { data: file }, characterMap ? {
          cMapUrl: characterMap.url,
          cMapPacked: characterMap.isCompressed
        } : {});
        var transformParams = transformGetDocumentParams ? transformGetDocumentParams(params) : params;
        var loadingTask = PdfJsApi__namespace.getDocument(transformParams);
        loadingTask.onPassword = function(verifyPassword, reason) {
          switch (reason) {
            case PdfJsApi__namespace.PasswordResponses.NEED_PASSWORD:
              isMounted.current && setStatus(new AskForPasswordState(verifyPassword, exports2.PasswordStatus.RequiredPassword));
              break;
            case PdfJsApi__namespace.PasswordResponses.INCORRECT_PASSWORD:
              isMounted.current && setStatus(new AskForPasswordState(verifyPassword, exports2.PasswordStatus.WrongPassword));
              break;
          }
        };
        loadingTask.onProgress = function(progress) {
          var loaded = progress.total > 0 ? Math.min(100, 100 * progress.loaded / progress.total) : 100;
          if (isMounted.current && docRef.current === "") {
            setStatus(new LoadingState(loaded));
          }
        };
        loadingTask.promise.then(function(doc) {
          docRef.current = doc.loadingTask.docId;
          isMounted.current && setStatus(new CompletedState(doc));
        }, function(err) {
          return isMounted.current && !worker2.destroyed && setStatus(new FailureState({
            message: err.message || "Cannot load document",
            name: err.name
          }));
        });
        return function() {
          loadingTask.destroy();
          worker2.destroy();
        };
      }, [file]);
      if (status instanceof AskForPasswordState) {
        return React__namespace.createElement(AskingPassword, { passwordStatus: status.passwordStatus, renderProtectedView, verifyPassword: status.verifyPassword, onDocumentAskPassword });
      }
      if (status instanceof CompletedState) {
        return render(status.doc);
      }
      if (status instanceof FailureState) {
        return renderError ? renderError(status.error) : React__namespace.createElement(
          "div",
          { className: classNames({
            "rpv-core__doc-error": true,
            "rpv-core__doc-error--rtl": isRtl
          }) },
          React__namespace.createElement("div", { className: "rpv-core__doc-error-text" }, status.error.message)
        );
      }
      return React__namespace.createElement("div", { "data-testid": "core__doc-loading", className: classNames({
        "rpv-core__doc-loading": true,
        "rpv-core__doc-loading--rtl": isRtl
      }) }, renderLoader ? renderLoader(status.percentages) : React__namespace.createElement(Spinner, null));
    };
    var isDarkMode = function() {
      return typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    };
    var withTheme = function(theme, onSwitchTheme) {
      var initialTheme = React__namespace.useMemo(function() {
        return theme === "auto" ? isDarkMode() ? "dark" : "light" : theme;
      }, []);
      var _a = React__namespace.useState(initialTheme), currentTheme = _a[0], setCurrentTheme = _a[1];
      var prevTheme = usePrevious(currentTheme);
      React__namespace.useEffect(function() {
        if (theme !== "auto") {
          return;
        }
        var media = window.matchMedia("(prefers-color-scheme: dark)");
        var handler = function(e) {
          setCurrentTheme(e.matches ? "dark" : "light");
        };
        media.addEventListener("change", handler);
        return function() {
          return media.removeEventListener("change", handler);
        };
      }, []);
      React__namespace.useEffect(function() {
        if (currentTheme !== prevTheme && onSwitchTheme) {
          onSwitchTheme(currentTheme);
        }
      }, [currentTheme]);
      React__namespace.useEffect(function() {
        if (theme !== currentTheme) {
          setCurrentTheme(theme);
        }
      }, [theme]);
      return {
        currentTheme,
        setCurrentTheme
      };
    };
    var isSameUrl = function(a, b) {
      var typeA = typeof a;
      var typeB = typeof b;
      if (typeA === "string" && typeB === "string" && a === b) {
        return true;
      }
      if (typeA === "object" && typeB === "object") {
        return a.length === b.length && a.every(function(v, i) {
          return v === b[i];
        });
      }
      return false;
    };
    var NUM_OVERSCAN_PAGES = 3;
    var DEFAULT_RENDER_RANGE = function(visiblePagesRange) {
      return {
        startPage: visiblePagesRange.startPage - NUM_OVERSCAN_PAGES,
        endPage: visiblePagesRange.endPage + NUM_OVERSCAN_PAGES
      };
    };
    var Viewer = function(_a) {
      var characterMap = _a.characterMap, defaultScale = _a.defaultScale, _b = _a.enableSmoothScroll, enableSmoothScroll = _b === void 0 ? true : _b, fileUrl = _a.fileUrl, _c = _a.httpHeaders, httpHeaders = _c === void 0 ? {} : _c, _d = _a.initialPage, initialPage = _d === void 0 ? 0 : _d, pageLayout = _a.pageLayout, _e = _a.initialRotation, initialRotation = _e === void 0 ? 0 : _e, localization = _a.localization, _f = _a.plugins, plugins = _f === void 0 ? [] : _f, renderError = _a.renderError, renderLoader = _a.renderLoader, renderPage = _a.renderPage, renderProtectedView = _a.renderProtectedView, _g = _a.scrollMode, scrollMode = _g === void 0 ? exports2.ScrollMode.Vertical : _g, _h = _a.setRenderRange, setRenderRange = _h === void 0 ? DEFAULT_RENDER_RANGE : _h, transformGetDocumentParams = _a.transformGetDocumentParams, _j = _a.theme, theme = _j === void 0 ? {
        direction: exports2.TextDirection.LeftToRight,
        theme: "light"
      } : _j, _k = _a.viewMode, viewMode = _k === void 0 ? exports2.ViewMode.SinglePage : _k, _l = _a.withCredentials, withCredentials = _l === void 0 ? false : _l, onDocumentAskPassword = _a.onDocumentAskPassword, _m = _a.onDocumentLoad, onDocumentLoad = _m === void 0 ? function() {
      } : _m, _o = _a.onPageChange, onPageChange = _o === void 0 ? function() {
      } : _o, _p = _a.onRotate, onRotate = _p === void 0 ? function() {
      } : _p, _q = _a.onRotatePage, onRotatePage = _q === void 0 ? function() {
      } : _q, _r = _a.onSwitchTheme, onSwitchTheme = _r === void 0 ? function() {
      } : _r, _s = _a.onZoom, onZoom = _s === void 0 ? function() {
      } : _s;
      var _t = React__namespace.useState({
        data: fileUrl,
        name: typeof fileUrl === "string" ? fileUrl : "",
        shouldLoad: false
      }), file = _t[0], setFile = _t[1];
      var openFile = function(fileName, data) {
        setFile({
          data,
          name: fileName,
          shouldLoad: true
        });
      };
      var _u = React__namespace.useState(false), visible = _u[0], setVisible = _u[1];
      var prevFile = usePrevious(file);
      React__namespace.useEffect(function() {
        if (!isSameUrl(prevFile.data, fileUrl)) {
          setFile({
            data: fileUrl,
            name: typeof fileUrl === "string" ? fileUrl : "",
            shouldLoad: visible
          });
        }
      }, [fileUrl, visible]);
      var visibilityChanged = function(params) {
        setVisible(params.isVisible);
        if (params.isVisible) {
          setFile(function(currentFile) {
            return Object.assign({}, currentFile, { shouldLoad: true });
          });
        }
      };
      var containerRef = useIntersectionObserver({
        onVisibilityChanged: visibilityChanged
      });
      var themeProps = typeof theme === "string" ? { direction: exports2.TextDirection.LeftToRight, theme } : theme;
      var _v = React__namespace.useState(localization || DefaultLocalization), l10n = _v[0], setL10n = _v[1];
      var localizationContext = { l10n, setL10n };
      var themeContext = Object.assign({}, { direction: themeProps.direction }, withTheme(themeProps.theme || "light", onSwitchTheme));
      React__namespace.useEffect(function() {
        if (localization) {
          setL10n(localization);
        }
      }, [localization]);
      return React__namespace.createElement(
        LocalizationContext.Provider,
        { value: localizationContext },
        React__namespace.createElement(
          ThemeContext.Provider,
          { value: themeContext },
          React__namespace.createElement("div", { ref: containerRef, className: "rpv-core__viewer rpv-core__viewer--".concat(themeContext.currentTheme), "data-testid": "core__viewer", style: {
            height: "100%",
            width: "100%"
          } }, file.shouldLoad && React__namespace.createElement(DocumentLoader, { characterMap, file: file.data, httpHeaders, render: function(doc) {
            return React__namespace.createElement(PageSizeCalculator, { defaultScale, doc, render: function(pageSizes, initialScale) {
              return React__namespace.createElement(Inner, { currentFile: {
                data: file.data,
                name: file.name
              }, defaultScale, doc, enableSmoothScroll, initialPage, initialRotation, initialScale, pageLayout, pageSizes, plugins, renderPage, scrollMode, setRenderRange, viewMode, viewerState: {
                file,
                fullScreenMode: exports2.FullScreenMode.Normal,
                pageIndex: -1,
                pageHeight: pageSizes[0].pageHeight,
                pageWidth: pageSizes[0].pageWidth,
                pagesRotation: /* @__PURE__ */ new Map(),
                rotation: initialRotation,
                scale: initialScale,
                scrollMode,
                viewMode
              }, onDocumentLoad, onOpenFile: openFile, onPageChange, onRotate, onRotatePage, onZoom });
            }, scrollMode, viewMode });
          }, renderError, renderLoader, renderProtectedView, transformGetDocumentParams, withCredentials, onDocumentAskPassword }))
        )
      );
    };
    var Worker2 = function(_a) {
      var children = _a.children, workerUrl = _a.workerUrl;
      PdfJsApi__namespace.GlobalWorkerOptions.workerSrc = workerUrl;
      return React__namespace.createElement(React__namespace.Fragment, null, children);
    };
    exports2.Button = Button;
    exports2.Icon = Icon;
    exports2.LazyRender = LazyRender;
    exports2.LocalizationContext = LocalizationContext;
    exports2.Menu = Menu;
    exports2.MenuDivider = MenuDivider;
    exports2.MenuItem = MenuItem;
    exports2.MinimalButton = MinimalButton;
    exports2.Modal = Modal;
    exports2.Popover = Popover;
    exports2.PrimaryButton = PrimaryButton;
    exports2.ProgressBar = ProgressBar;
    exports2.Separator = Separator;
    exports2.Spinner = Spinner;
    exports2.Splitter = Splitter;
    exports2.TextBox = TextBox;
    exports2.ThemeContext = ThemeContext;
    exports2.Tooltip = Tooltip;
    exports2.Viewer = Viewer;
    exports2.Worker = Worker2;
    exports2.chunk = chunk;
    exports2.classNames = classNames;
    exports2.createStore = createStore;
    exports2.getDestination = getDestination;
    exports2.getPage = getPage;
    exports2.isFullScreenEnabled = isFullScreenEnabled;
    exports2.isMac = isMac;
    exports2.useDebounceCallback = useDebounceCallback;
    exports2.useIntersectionObserver = useIntersectionObserver;
    exports2.useIsMounted = useIsMounted;
    exports2.useIsomorphicLayoutEffect = useIsomorphicLayoutEffect;
    exports2.usePrevious = usePrevious;
    exports2.useRenderQueue = useRenderQueue;
  }
});

// node_modules/@react-pdf-viewer/core/lib/index.js
var require_lib = __commonJS({
  "node_modules/@react-pdf-viewer/core/lib/index.js"(exports2, module2) {
    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_core();
    }
  }
});

export {
  require_lib
};
/*! Bundled license information:

@react-pdf-viewer/core/lib/index.js:
  (**
   * A React component to view a PDF document
   *
   * @see https://react-pdf-viewer.dev
   * @license https://react-pdf-viewer.dev/license
   * @copyright 2019-2023 Nguyen Huu Phuoc <me@phuoc.ng>
   *)
*/
//# sourceMappingURL=chunk-6EJP4TQN.js.map
