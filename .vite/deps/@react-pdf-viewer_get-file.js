import {
  require_lib
} from "./chunk-6EJP4TQN.js";
import {
  __commonJS,
  require_react
} from "./chunk-NS5MW37F.js";

// node_modules/@react-pdf-viewer/get-file/lib/cjs/get-file.js
var require_get_file = __commonJS({
  "node_modules/@react-pdf-viewer/get-file/lib/cjs/get-file.js"(exports) {
    "use strict";
    var core = require_lib();
    var React = require_react();
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
    var DownloadIcon = function() {
      return React__namespace.createElement(
        core.Icon,
        { size: 16 },
        React__namespace.createElement("path", { d: "M5.5,11.5c-.275,0-.341.159-.146.354l6.292,6.293a.5.5,0,0,0,.709,0l6.311-6.275c.2-.193.13-.353-.145-.355L15.5,11.5V1.5a1,1,0,0,0-1-1h-5a1,1,0,0,0-1,1V11a.5.5,0,0,1-.5.5Z" }),
        React__namespace.createElement("path", { d: "M23.5,18.5v4a1,1,0,0,1-1,1H1.5a1,1,0,0,1-1-1v-4" })
      );
    };
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
    var TOOLTIP_OFFSET = { left: 0, top: 8 };
    var DownloadButton = function(_a) {
      var onClick = _a.onClick;
      var l10n = React__namespace.useContext(core.LocalizationContext).l10n;
      var label = l10n && l10n.download ? l10n.download.download : "Download";
      return React__namespace.createElement(core.Tooltip, { ariaControlsSuffix: "get-file", position: core.Position.BottomCenter, target: React__namespace.createElement(
        core.MinimalButton,
        { ariaLabel: label, testId: "get-file__download-button", onClick },
        React__namespace.createElement(DownloadIcon, null)
      ), content: function() {
        return label;
      }, offset: TOOLTIP_OFFSET });
    };
    var isChromeIOS = function() {
      return /iphone|ipod|ipad/i.test(navigator.userAgent) && /CriOS/i.test(navigator.userAgent);
    };
    var isSafariIOS = function() {
      return /iphone|ipod|ipad/i.test(navigator.userAgent) && !/CriOS/i.test(navigator.userAgent);
    };
    var encodeUint8Array = function(data) {
      return btoa(Array(data.length).fill("").map(function(_, i) {
        return String.fromCharCode(data[i]);
      }).join(""));
    };
    var download = function(url, saveAs) {
      var link = document.createElement("a");
      link.style.display = "none";
      link.href = url;
      link.setAttribute("download", saveAs);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    var downloadBlob = function(data, saveAs, mimeType) {
      var blobUrl = URL.createObjectURL(new Blob([data], { type: mimeType }));
      download(blobUrl, saveAs);
      if (blobUrl) {
        URL.revokeObjectURL(blobUrl);
      }
      return;
    };
    var downloadFile = function(doc, saveAs) {
      doc.getData().then(function(data) {
        isSafariIOS() ? downloadBlob(data, saveAs, "application/octet-stream") : isChromeIOS() ? download("data:application/pdf;base64,".concat(encodeUint8Array(data)), saveAs) : downloadBlob(data, saveAs, "application/pdf");
      });
    };
    var Download = function(_a) {
      var children = _a.children, fileNameGenerator = _a.fileNameGenerator, store = _a.store;
      var _b = React__namespace.useState(store.get("file")), currentFile = _b[0], setCurrentFile = _b[1];
      var _c = React__namespace.useState(store.get("doc")), currentDocument = _c[0], setCurrentDocument = _c[1];
      var handleDocumentChanged = function(doc) {
        setCurrentDocument(doc);
      };
      var handleFileChanged = function(file) {
        setCurrentFile(file);
      };
      React__namespace.useEffect(function() {
        store.subscribe("doc", handleDocumentChanged);
        store.subscribe("file", handleFileChanged);
        return function() {
          store.subscribe("doc", handleDocumentChanged);
          store.unsubscribe("file", handleFileChanged);
        };
      }, []);
      var download2 = function() {
        if (currentDocument && currentFile) {
          downloadFile(currentDocument, fileNameGenerator(currentFile));
        }
      };
      var defaultChildren = function(props) {
        return React__namespace.createElement(DownloadButton, { onClick: props.onClick });
      };
      var render = children || defaultChildren;
      return render({
        onClick: download2
      });
    };
    var DownloadMenuItem = function(_a) {
      var onClick = _a.onClick;
      var l10n = React__namespace.useContext(core.LocalizationContext).l10n;
      var label = l10n && l10n.download ? l10n.download.download : "Download";
      return React__namespace.createElement(core.MenuItem, { icon: React__namespace.createElement(DownloadIcon, null), testId: "get-file__download-menu", onClick }, label);
    };
    var getFileName = function(url) {
      var str = url.split("/").pop();
      return str ? str.split("#")[0].split("?")[0] : url;
    };
    var getFilePlugin = function(props) {
      var store = React__namespace.useMemo(function() {
        return core.createStore({});
      }, []);
      var defaultFileNameGenerator = function(file) {
        return file.name ? getFileName(file.name) : "document.pdf";
      };
      var DownloadDecorator = function(downloadProps) {
        return React__namespace.createElement(Download, __assign({}, downloadProps, { fileNameGenerator: props ? props.fileNameGenerator || defaultFileNameGenerator : defaultFileNameGenerator, store }));
      };
      var DownloadButtonDecorator = function() {
        return React__namespace.createElement(DownloadDecorator, null, function(props2) {
          return React__namespace.createElement(DownloadButton, __assign({}, props2));
        });
      };
      var DownloadMenuItemDecorator = function(props2) {
        return React__namespace.createElement(DownloadDecorator, null, function(p) {
          return React__namespace.createElement(DownloadMenuItem, { onClick: function() {
            p.onClick();
            props2.onClick();
          } });
        });
      };
      return {
        onDocumentLoad: function(props2) {
          store.update("doc", props2.doc);
          store.update("file", props2.file);
        },
        Download: DownloadDecorator,
        DownloadButton: DownloadButtonDecorator,
        DownloadMenuItem: DownloadMenuItemDecorator
      };
    };
    exports.DownloadIcon = DownloadIcon;
    exports.getFilePlugin = getFilePlugin;
  }
});

// node_modules/@react-pdf-viewer/get-file/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/@react-pdf-viewer/get-file/lib/index.js"(exports, module) {
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_get_file();
    }
  }
});
export default require_lib2();
/*! Bundled license information:

@react-pdf-viewer/get-file/lib/index.js:
  (**
   * A React component to view a PDF document
   *
   * @see https://react-pdf-viewer.dev
   * @license https://react-pdf-viewer.dev/license
   * @copyright 2019-2023 Nguyen Huu Phuoc <me@phuoc.ng>
   *)
*/
//# sourceMappingURL=@react-pdf-viewer_get-file.js.map
