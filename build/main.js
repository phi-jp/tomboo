// generatedy by JSX compiler 0.9.44 (2013-06-25 09:37:20 +0900; 9591ad3b92a4fae6ef2dcde12a60e65f94bc7c1e)
var JSX = {};
(function (JSX) {
/**
 * extends the class
 */
function $__jsx_extend(derivations, base) {
	var ctor = function () {};
	ctor.prototype = base.prototype;
	var proto = new ctor();
	for (var i in derivations) {
		derivations[i].prototype = proto;
	}
}

/**
 * copies the implementations from source interface to target
 */
function $__jsx_merge_interface(target, source) {
	for (var k in source.prototype)
		if (source.prototype.hasOwnProperty(k))
			target.prototype[k] = source.prototype[k];
}

/**
 * defers the initialization of the property
 */
function $__jsx_lazy_init(obj, prop, func) {
	function reset(obj, prop, value) {
		delete obj[prop];
		obj[prop] = value;
		return value;
	}

	Object.defineProperty(obj, prop, {
		get: function () {
			return reset(obj, prop, func());
		},
		set: function (v) {
			reset(obj, prop, v);
		},
		enumerable: true,
		configurable: true
	});
}

/**
 * sideeffect().a /= b
 */
function $__jsx_div_assign(obj, prop, divisor) {
	return obj[prop] = (obj[prop] / divisor) | 0;
}

/*
 * global functions, renamed to avoid conflict with local variable names
 */
var $__jsx_parseInt = parseInt;
var $__jsx_parseFloat = parseFloat;
var $__jsx_isNaN = isNaN;
var $__jsx_isFinite = isFinite;

var $__jsx_encodeURIComponent = encodeURIComponent;
var $__jsx_decodeURIComponent = decodeURIComponent;
var $__jsx_encodeURI = encodeURI;
var $__jsx_decodeURI = decodeURI;

var $__jsx_ObjectToString = Object.prototype.toString;
var $__jsx_ObjectHasOwnProperty = Object.prototype.hasOwnProperty;

/*
 * profiler object, initialized afterwards
 */
function $__jsx_profiler() {
}

/*
 * public interface to JSX code
 */
JSX.require = function (path) {
	var m = $__jsx_classMap[path];
	return m !== undefined ? m : null;
};

JSX.profilerIsRunning = function () {
	return $__jsx_profiler.getResults != null;
};

JSX.getProfileResults = function () {
	return ($__jsx_profiler.getResults || function () { return {}; })();
};

JSX.postProfileResults = function (url, cb) {
	if ($__jsx_profiler.postResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.postResults(url, cb);
};

JSX.resetProfileResults = function () {
	if ($__jsx_profiler.resetResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.resetResults();
};
JSX.DEBUG = true;
function g_StopIteration() {
	Error.call(this);
};

$__jsx_extend([g_StopIteration], Error);
function _Main() {
};

$__jsx_extend([_Main], Object);
function _Main$main$AS(args) {
	var size;
	var canvas;
	var eye;
	var layer;
	var img;
	size = dom.window.location.hash.substring(1).split(',').concat([ "", "" ]);
	canvas = (function ($v) {
		if (! ($v == null || $v instanceof HTMLCanvasElement)) {
			debugger;
			throw new Error("[./src/Main.jsx:12:49] detected invalid cast, value is not an instance of the designated type or null\n        var canvas = dom.createElement(\"canvas\") as HTMLCanvasElement;\n                                                 ^^\n");
		}
		return $v;
	}(dom$createElement$S("canvas")));
	canvas.width = 465;
	canvas.height = 465;
	dom.document.body.appendChild(canvas);
	eye = new Eye(canvas);
	layer = new Layer(465, 465);
	eye.appendLayer$LLayer$(layer);
	img = (function ($v) {
		if (! ($v == null || $v instanceof HTMLImageElement)) {
			debugger;
			throw new Error("[./src/Main.jsx:22:43] detected invalid cast, value is not an instance of the designated type or null\n        var img = dom.createElement(\"img\") as HTMLImageElement;\n                                           ^^\n");
		}
		return $v;
	}(dom$createElement$S("img")));
	img.src = "img/tombo.jpg";
	img.onload = (function (e) {
		var imgShape;
		var node;
		imgShape = new ImageShape(img);
		node = new DisplayNode$0(imgShape, 160, 90, 0.5, 0.5);
		layer.root.appendChild$LDisplayNode$(node);
		eye.render$();
		canvas.addEventListener("mousemove", (function (e) {
			var m;
			var x;
			var y;
			m = (function ($v) {
				if (! ($v == null || $v instanceof MouseEvent)) {
					debugger;
					throw new Error("[./src/Main.jsx:33:26] detected invalid cast, value is not an instance of the designated type or null\n                var m = e as MouseEvent;\n                          ^^\n");
				}
				return $v;
			}(e));
			if (m) {
				x = m.clientX - canvas.offsetLeft + dom.window.scrollX;
				y = m.clientY - canvas.offsetTop + dom.window.scrollY;
				node.setPosition$NN(x, y);
			}
			eye.render$();
		}));
	});
};

_Main.main = _Main$main$AS;
_Main.main$AS = _Main$main$AS;

function dom() {
};

$__jsx_extend([dom], Object);
function dom$id$S(id) {
	return (function ($v) {
		if (! ($v == null || $v instanceof HTMLElement)) {
			debugger;
			throw new Error("[/Users/phi/.nvm/v0.10.0/lib/node_modules/jsx/lib/js/js/web.jsx:29:47] detected invalid cast, value is not an instance of the designated type or null\n        return dom.document.getElementById(id) as HTMLElement;\n                                               ^^\n");
		}
		return $v;
	}(dom.document.getElementById(id)));
};

dom.id$S = dom$id$S;

function dom$getElementById$S(id) {
	return (function ($v) {
		if (! ($v == null || $v instanceof HTMLElement)) {
			debugger;
			throw new Error("[/Users/phi/.nvm/v0.10.0/lib/node_modules/jsx/lib/js/js/web.jsx:37:47] detected invalid cast, value is not an instance of the designated type or null\n        return dom.document.getElementById(id) as HTMLElement;\n                                               ^^\n");
		}
		return $v;
	}(dom.document.getElementById(id)));
};

dom.getElementById$S = dom$getElementById$S;

function dom$createElement$S(tag) {
	return (function ($v) {
		if (! ($v == null || $v instanceof HTMLElement)) {
			debugger;
			throw new Error("[/Users/phi/.nvm/v0.10.0/lib/node_modules/jsx/lib/js/js/web.jsx:45:47] detected invalid cast, value is not an instance of the designated type or null\n        return dom.document.createElement(tag) as __noconvert__ HTMLElement;\n                                               ^^\n");
		}
		return $v;
	}(dom.document.createElement(tag)));
};

dom.createElement$S = dom$createElement$S;

function EventInit() {
	this.bubbles = false;
	this.cancelable = false;
};

$__jsx_extend([EventInit], Object);
function CustomEventInit() {
	EventInit.call(this);
	this.detail = null;
};

$__jsx_extend([CustomEventInit], EventInit);
function MutationObserverInit() {
	this.childList = false;
	this.attributes = false;
	this.characterData = false;
	this.subtree = false;
	this.attributeOldValue = false;
	this.characterDataOldValue = false;
	this.attributeFilter = null;
};

$__jsx_extend([MutationObserverInit], Object);
function UIEventInit() {
	EventInit.call(this);
	this.view = null;
	this.detail = 0;
};

$__jsx_extend([UIEventInit], EventInit);
function FocusEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.relatedTarget = null;
};

$__jsx_extend([FocusEventInit], Object);
function MouseEventInit() {
	UIEventInit.call(this);
	this.screenX = 0;
	this.screenY = 0;
	this.clientX = 0;
	this.clientY = 0;
	this.ctrlKey = false;
	this.shiftKey = false;
	this.altKey = false;
	this.metaKey = false;
	this.button = 0;
	this.buttons = 0;
	this.relatedTarget = null;
	this.region = null;
};

$__jsx_extend([MouseEventInit], UIEventInit);
function WheelEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.screenX = 0;
	this.screenY = 0;
	this.clientX = 0;
	this.clientY = 0;
	this.ctrlKey = false;
	this.shiftKey = false;
	this.altKey = false;
	this.metaKey = false;
	this.button = 0;
	this.buttons = 0;
	this.relatedTarget = null;
	this.deltaX = 0;
	this.deltaY = 0;
	this.deltaZ = 0;
	this.deltaMode = 0;
};

$__jsx_extend([WheelEventInit], Object);
function KeyboardEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.char = "";
	this.key = "";
	this.location = 0;
	this.ctrlKey = false;
	this.shiftKey = false;
	this.altKey = false;
	this.metaKey = false;
	this.repeat = false;
	this.locale = "";
	this.charCode = 0;
	this.keyCode = 0;
	this.which = 0;
};

$__jsx_extend([KeyboardEventInit], Object);
function CompositionEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.data = null;
	this.locale = "";
};

$__jsx_extend([CompositionEventInit], Object);
function ProgressEventInit() {
	EventInit.call(this);
	this.lengthComputable = false;
	this.loaded = 0;
	this.total = 0;
};

$__jsx_extend([ProgressEventInit], EventInit);
function XMLHttpRequestOptions() {
	this.anon = false;
};

$__jsx_extend([XMLHttpRequestOptions], Object);
function TrackEventInit() {
	EventInit.call(this);
	this.track = null;
};

$__jsx_extend([TrackEventInit], EventInit);
function PopStateEventInit() {
	EventInit.call(this);
	this.state = null;
};

$__jsx_extend([PopStateEventInit], EventInit);
function HashChangeEventInit() {
	EventInit.call(this);
	this.oldURL = "";
	this.newURL = "";
};

$__jsx_extend([HashChangeEventInit], EventInit);
function PageTransitionEventInit() {
	EventInit.call(this);
	this.persisted = false;
};

$__jsx_extend([PageTransitionEventInit], EventInit);
function DragEventInit() {
	EventInit.call(this);
	this.view = null;
	this.detail = 0;
	this.screenX = 0;
	this.screenY = 0;
	this.clientX = 0;
	this.clientY = 0;
	this.ctrlKey = false;
	this.shiftKey = false;
	this.altKey = false;
	this.metaKey = false;
	this.button = 0;
	this.buttons = 0;
	this.relatedTarget = null;
	this.dataTransfer = null;
};

$__jsx_extend([DragEventInit], EventInit);
function CloseEventInit() {
	EventInit.call(this);
	this.wasClean = false;
	this.code = 0;
	this.reason = "";
};

$__jsx_extend([CloseEventInit], EventInit);
function StorageEventInit() {
	EventInit.call(this);
	this.key = null;
	this.oldValue = null;
	this.newValue = null;
	this.url = "";
	this.storageArea = null;
};

$__jsx_extend([StorageEventInit], EventInit);
function MessageEventInit() {
	EventInit.call(this);
	this.data = null;
	this.origin = "";
	this.lastEventId = "";
	this.source = null;
	this.ports = null;
};

$__jsx_extend([MessageEventInit], EventInit);
function ErrorEventInit() {
	EventInit.call(this);
	this.message = "";
	this.filename = "";
	this.lineno = 0;
};

$__jsx_extend([ErrorEventInit], EventInit);
function EventSourceInit() {
	this.withCredentials = false;
};

$__jsx_extend([EventSourceInit], Object);
function IDBObjectStoreParameters() {
	this.keyPath = null;
	this.autoIncrement = false;
};

$__jsx_extend([IDBObjectStoreParameters], Object);
function IDBIndexParameters() {
	this.unique = false;
	this.multiEntry = false;
};

$__jsx_extend([IDBIndexParameters], Object);
function IDBVersionChangeEventInit() {
	EventInit.call(this);
	this.oldVersion = 0;
	this.newVersion = null;
};

$__jsx_extend([IDBVersionChangeEventInit], EventInit);
function NotificationOptions() {
	this.titleDir = "";
	this.body = "";
	this.bodyDir = "";
	this.tag = "";
	this.iconUrl = "";
};

$__jsx_extend([NotificationOptions], Object);
function RTCSessionDescriptionInit() {
	this.type = "";
	this.sdp = "";
};

$__jsx_extend([RTCSessionDescriptionInit], Object);
function RTCIceCandidateInit() {
	this.candidate = "";
	this.sdpMid = "";
	this.sdpMLineIndex = 0;
};

$__jsx_extend([RTCIceCandidateInit], Object);
function RTCIceServer() {
	this.url = "";
	this.credential = null;
};

$__jsx_extend([RTCIceServer], Object);
function RTCConfiguration() {
	this.iceServers = null;
};

$__jsx_extend([RTCConfiguration], Object);
function DataChannelInit() {
	this.reliable = false;
};

$__jsx_extend([DataChannelInit], Object);
function RTCPeerConnectionIceEventInit() {
	EventInit.call(this);
	this.candidate = null;
};

$__jsx_extend([RTCPeerConnectionIceEventInit], EventInit);
function MediaStreamEventInit() {
	EventInit.call(this);
	this.stream = null;
};

$__jsx_extend([MediaStreamEventInit], EventInit);
function DataChannelEventInit() {
	EventInit.call(this);
	this.channel = null;
};

$__jsx_extend([DataChannelEventInit], EventInit);
function MediaStreamConstraints() {
	this.video = null;
	this.audio = null;
};

$__jsx_extend([MediaStreamConstraints], Object);
function MediaTrackConstraints() {
	this.mandatory = null;
	this.optional = null;
};

$__jsx_extend([MediaTrackConstraints], Object);
function HitRegionOptions() {
	this.path = null;
	this.id = "";
	this.parentID = null;
	this.cursor = "";
	this.control = null;
	this.label = null;
	this.role = null;
};

$__jsx_extend([HitRegionOptions], Object);
function WebGLContextAttributes() {
	this.alpha = false;
	this.depth = false;
	this.stencil = false;
	this.antialias = false;
	this.premultipliedAlpha = false;
	this.preserveDrawingBuffer = false;
};

$__jsx_extend([WebGLContextAttributes], Object);
function WebGLContextEventInit() {
	EventInit.call(this);
	this.statusMessage = "";
};

$__jsx_extend([WebGLContextEventInit], EventInit);
function DeviceOrientationEventInit() {
	EventInit.call(this);
	this.alpha = null;
	this.beta = null;
	this.gamma = null;
	this.absolute = false;
};

$__jsx_extend([DeviceOrientationEventInit], EventInit);
function DeviceMotionEventInit() {
	EventInit.call(this);
	this.acceleration = null;
	this.accelerationIncludingGravity = null;
	this.rotationRate = null;
	this.interval = null;
};

$__jsx_extend([DeviceMotionEventInit], EventInit);
function Eye(canvas) {
	this._canvas = null;
	this._width = 0;
	this._height = 0;
	this._ctx = null;
	this._layerList = null;
	this._initialize$LHTMLCanvasElement$(canvas);
};

function Eye$0(width, height) {
	this._canvas = null;
	this._width = 0;
	this._height = 0;
	this._ctx = null;
	this._layerList = null;
	this._initialize$NN(width, height);
};

function Eye$1() {
	this._canvas = null;
	this._width = 0;
	this._height = 0;
	this._ctx = null;
	this._layerList = null;
	this._initialize$NN(640, 960);
};

$__jsx_extend([Eye, Eye$0, Eye$1], Object);
Eye.prototype._initialize$NN = function (width, height) {
	var canvas;
	canvas = (function ($v) {
		if (! ($v == null || $v instanceof HTMLCanvasElement)) {
			debugger;
			throw new Error("[../Tombo.js/src/Eye/Eye.jsx:50:49] detected invalid cast, value is not an instance of the designated type or null\n        var canvas = dom.createElement(\"canvas\") as HTMLCanvasElement;\n                                                 ^^\n");
		}
		return $v;
	}(dom$createElement$S("canvas")));
	canvas.width = width;
	canvas.height = height;
	this._initialize$LHTMLCanvasElement$(canvas);
};


Eye.prototype._initialize$LHTMLCanvasElement$ = function (canvas) {
	if (this._canvas) {
		Tombo$error$S("[Eye#initialize] Tombo Eye is already initialized");
	}
	this._setCanvas$LHTMLCanvasElement$(canvas);
	this._layerList = [  ];
};


Eye.prototype._setCanvas$LHTMLCanvasElement$ = function (canvas) {
	this._canvas = canvas;
	this._width = canvas.width;
	this._height = canvas.height;
	this._ctx = (function ($v) {
		if (! ($v == null || $v instanceof CanvasRenderingContext2D)) {
			debugger;
			throw new Error("[../Tombo.js/src/Eye/Eye.jsx:67:44] detected invalid cast, value is not an instance of the designated type or null\n        this._ctx = canvas.getContext(\"2d\") as CanvasRenderingContext2D;\n                                            ^^\n");
		}
		return $v;
	}(canvas.getContext("2d")));
};


Eye.prototype.findTouchedNode$NN = function (x, y) {
	var i;
	var layer;
	var width;
	var height;
	var transform;
	var node;
	for (i = 0; i < this._layerList.length; i++) {
		layer = this._layerList[i];
		width = layer.layout.clientWidth;
		height = layer.layout.clientHeight;
		if (! width || ! height) {
			Tombo$warn$S("[Eye#findTouchedNode] layoutInformation.clientWidth/Height is not initialized");
		} else {
			transform = this._calculateLayoutTransform$LLayer$(layer);
			node = layer._findTouchedNode$LTransform$NN(transform, x, y);
			if (node) {
				return node;
			}
		}
	}
	return null;
};


Eye.prototype.appendLayer$LLayer$ = function (layer) {
	var scale;
	if (layer._isChild) {
		Tombo$warn$S("[Eye#appendLayer] now trying to append a layer which is already appended");
	}
	if (layer.layout.layoutMode & LayoutInformation.AUTO_SCALE) {
		scale = Math.min(this._width / layer.width, this._height / layer.height);
		layer._setLayoutScale$N(scale);
	}
	this._layerList.push(layer);
	layer._isChild = true;
};


Eye.prototype.removeLayer$LLayer$ = function (layer) {
	var i;
	if (! layer._isChild) {
		return false;
	}
	for (i = 0; i < this._layerList.length; i++) {
		if (this._layerList[i] == layer) {
			this._layerList.splice(i, 1);
			return true;
		}
	}
	return false;
};


Eye.prototype._calculateLayoutTransform$LLayer$ = function (layer) {
	var width;
	var height;
	var left;
	var top;
	width = layer.layout.clientWidth;
	height = layer.layout.clientHeight;
	left = 0;
	top = 0;
	if (layer.layout.layoutMode & LayoutInformation.CENTER) {
		left = (this._width - width) / 2;
		top = (this._height - height) / 2;
	}
	if (layer.layout.layoutMode & LayoutInformation.LEFT) {
		left = layer.layout.left;
	}
	if (layer.layout.layoutMode & LayoutInformation.TOP) {
		top = layer.layout.top;
	}
	if (layer.layout.layoutMode & LayoutInformation.RIGHT) {
		left = this._width - width - layer.layout.right;
	}
	if (layer.layout.layoutMode & LayoutInformation.BOTTOM) {
		top = this._height - height - layer.layout.bottom;
	}
	return new Transform$0(left, top, layer.layout.scale, layer.layout.scale);
};


Eye.prototype.render$ = function () {
	var i;
	var layer;
	var width;
	var height;
	var transform;
	this._ctx.clearRect(0, 0, this._width, this._height);
	this._ctx.fillStyle = "#505050";
	this._ctx.fillRect(0, 0, this._width, this._height);
	for (i = 0; i < this._layerList.length; i++) {
		layer = this._layerList[i];
		layer._render$();
		width = layer.layout.clientWidth;
		height = layer.layout.clientHeight;
		if (! width || ! height) {
			Tombo$error$S("[Eye#render] layoutInformation.clientWidth/Height is not initialized");
		}
		transform = this._calculateLayoutTransform$LLayer$(layer);
		this._ctx.globalCompositeOperation = layer.layout.compositeOperation;
		this._ctx.drawImage(this._layerList[i]._canvas, transform.left, transform.top);
	}
};


function Layer(width, height) {
	var layout;
	this._canvas = null;
	this._ctx = null;
	this.width = 0;
	this.height = 0;
	this.root = new DisplayGroup$1(0, 0);
	this.layout = null;
	this._isChild = false;
	this._touchableNodeList = [  ];
	this._dirtyRegions = null;
	this._drawBins = ({  });
	this._orderDrawBins = [  ];
	this._dirtyDrawBins = ({  });
	layout = new LayoutInformation();
	this._initialize$NNLLayoutInformation$(width, height, layout);
};

function Layer$0(width, height, layout) {
	this._canvas = null;
	this._ctx = null;
	this.width = 0;
	this.height = 0;
	this.root = new DisplayGroup$1(0, 0);
	this.layout = null;
	this._isChild = false;
	this._touchableNodeList = [  ];
	this._dirtyRegions = null;
	this._drawBins = ({  });
	this._orderDrawBins = [  ];
	this._dirtyDrawBins = ({  });
	this._initialize$NNLLayoutInformation$(width, height, layout);
};

$__jsx_extend([Layer, Layer$0], Object);
Layer.prototype._initialize$NNLLayoutInformation$ = function (width, height, layout) {
	this.layout = layout;
	this.width = width;
	this.height = height;
	this.root._setLayer$LLayer$(this);
	if (layout.layoutMode & LayoutInformation.FIXED_SCALE) {
		this._modifyCanvas$();
	}
	this._dirtyRegions = [  ];
};


Layer.prototype._modifyCanvas$ = function () {
	var scale;
	var width;
	var height;
	scale = this.layout.scale;
	width = scale * this.width;
	height = scale * this.height;
	if (! this._canvas) {
		this._canvas = (function ($v) {
			if (! ($v == null || $v instanceof HTMLCanvasElement)) {
				debugger;
				throw new Error("[../Tombo.js/src/Eye/Layer.jsx:81:55] detected invalid cast, value is not an instance of the designated type or null\n            this._canvas = dom.createElement(\"canvas\") as HTMLCanvasElement;\n                                                       ^^\n");
			}
			return $v;
		}(dom$createElement$S("canvas")));
	}
	this._canvas.width = width;
	this._canvas.height = height;
	this.layout.clientWidth = width;
	this.layout.clientHeight = height;
	this._ctx = (function ($v) {
		if (! ($v == null || $v instanceof CanvasRenderingContext2D)) {
			debugger;
			throw new Error("[../Tombo.js/src/Eye/Layer.jsx:87:50] detected invalid cast, value is not an instance of the designated type or null\n        this._ctx = this._canvas.getContext(\"2d\") as CanvasRenderingContext2D;\n                                                  ^^\n");
		}
		return $v;
	}(this._canvas.getContext("2d")));
	this._ctx.setTransform(scale, 0, 0, scale, 0, 0);
};


Layer.prototype._setLayoutScale$N = function (scale) {
	this.layout.scale = scale;
	this._modifyCanvas$();
};


Layer.prototype._addNode$LDisplayNode$ = function (node) {
	this._addNodeToBin$LDisplayNode$(node);
};


Layer.prototype._addNodeToBin$LDisplayNode$ = function (node) {
	var $this = this;
	var index;
	var bin;
	index = node._drawBin + "";
	bin = this._drawBins[index];
	if (! bin) {
		bin = this._drawBins[index] = [  ];
		this._orderDrawBins.push(node._drawBin);
		this._orderDrawBins.sort((function (a, b) {
			return (function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[../Tombo.js/src/Eye/Layer.jsx:105:56] null access\n            this._orderDrawBins.sort((a, b) -> { return a - b; });\n                                                        ^\n");
				}
				return v;
			}(a)) - (function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[../Tombo.js/src/Eye/Layer.jsx:105:60] null access\n            this._orderDrawBins.sort((a, b) -> { return a - b; });\n                                                            ^\n");
				}
				return v;
			}(b));
		}));
	}
	bin.push(node);
	this._dirtyDrawBins[index] = true;
};


Layer.prototype._removeNode$LDisplayNode$ = function (node) {
	this._removeNodeFromBin$LDisplayNode$S(node, node._drawBin + "");
};


Layer.prototype._removeNodeFromBin$LDisplayNode$S = function (node, index) {
	var bin;
	var i;
	bin = this._drawBins[index];
	for (i = 0; i < bin.length; i++) {
		if (bin[i] == node) {
			bin.splice(i, 1);
			return;
		}
	}
};


Layer.prototype._moveDrawBin$LDisplayNode$I = function (node, oldBin) {
	this._removeNodeFromBin$LDisplayNode$S(node, oldBin + "");
	this._addNodeToBin$LDisplayNode$(node);
};


Layer.prototype._dirtyDrawBin$I = function (index) {
	this._dirtyDrawBins[index + ""] = true;
};


Layer.prototype._addTouchableNode$LDisplayNode$ = function (node) {
	this._touchableNodeList.push(node);
};


Layer.prototype._removeTouchableNode$LDisplayNode$ = function (node) {
	var i;
	for (i = 0; i < this._touchableNodeList.length; i++) {
		if (this._touchableNodeList[i] == node) {
			this._touchableNodeList.splice(i, 1);
			return;
		}
	}
};


Layer.prototype._findTouchedNode$LTransform$NN = function (transform, x, y) {
	var i;
	var node;
	var clientRect;
	for (i = 0; i < this._touchableNodeList.length; i++) {
		node = this._touchableNodeList[i];
		clientRect = node.getClientRect$();
		if (clientRect && transform.transformRect$LRect$(clientRect).isInside$NN(x, y)) {
			return node;
		}
	}
	return null;
};


Layer.prototype._render$ = function () {
	var $this = this;
	var context;
	var length;
	var i;
	var region;
	var x;
	var y;
	var width;
	var height;
	var binIndex;
	var bin;
	var j;
	if (! this._canvas) {
		Tombo$warn$S("[Layer#render] Layer's canvas is not created");
		this._modifyCanvas$();
	}
	if (Layer.USE_NEW_RENDERER) {
		if (this._dirtyRegions.length === 0) {
			return;
		}
		context = this._ctx;
		if (! this.root.hasChildren$()) {
			context.clearRect(0, 0, this.width, this.height);
			this._dirtyRegions = [  ];
			return;
		}
		context.save();
		context.beginPath();
		length = this._dirtyRegions.length;
		for (i = 0; i < length; ++ i) {
			region = this._dirtyRegions[i];
			x = region[0];
			y = region[1];
			width = (function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[../Tombo.js/src/Eye/Layer.jsx:186:34] null access\n                var width = region[2] - x;\n                                  ^\n");
				}
				return v;
			}(region[2])) - (function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[../Tombo.js/src/Eye/Layer.jsx:186:40] null access\n                var width = region[2] - x;\n                                        ^\n");
				}
				return v;
			}(x));
			height = (function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[../Tombo.js/src/Eye/Layer.jsx:187:35] null access\n                var height = region[3] - y;\n                                   ^\n");
				}
				return v;
			}(region[3])) - (function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[../Tombo.js/src/Eye/Layer.jsx:187:41] null access\n                var height = region[3] - y;\n                                         ^\n");
				}
				return v;
			}(y));
			context.rect((function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[../Tombo.js/src/Eye/Layer.jsx:188:29] null access\n                context.rect(x, y, width, height);\n                             ^\n");
				}
				return v;
			}(x)), (function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[../Tombo.js/src/Eye/Layer.jsx:188:32] null access\n                context.rect(x, y, width, height);\n                                ^\n");
				}
				return v;
			}(y)), width, height);
		}
		context.clip();
		context.clearRect(0, 0, this.width, this.height);
		for (i = 0; i < this._orderDrawBins.length; i++) {
			binIndex = (function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[../Tombo.js/src/Eye/Layer.jsx:193:50] null access\n                var binIndex = this._orderDrawBins[i] as string;\n                                                  ^\n");
				}
				return v;
			}(this._orderDrawBins[i])) + "";
			bin = this._drawBins[binIndex];
			if (this._dirtyDrawBins[binIndex]) {
				bin.sort((function (a, b) {
					return a._drawOrder - b._drawOrder;
				}));
			}
			for (j = 0; j < bin.length; j++) {
				bin[j]._render$LCanvasRenderingContext2D$(this._ctx);
			}
		}
		context.restore();
		this._dirtyRegions = [  ];
		return;
	}
	this._ctx.clearRect(0, 0, this.width, this.height);
	for (i = 0; i < this._orderDrawBins.length; i++) {
		binIndex = (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[../Tombo.js/src/Eye/Layer.jsx:209:46] null access\n            var binIndex = this._orderDrawBins[i] as string;\n                                              ^\n");
			}
			return v;
		}(this._orderDrawBins[i])) + "";
		bin = this._drawBins[binIndex];
		if (this._dirtyDrawBins[binIndex]) {
			bin.sort((function (a, b) {
				return (a._drawOrder - b._drawOrder ? a._drawOrder - b._drawOrder : a._id - b._id);
			}));
		}
		for (j = 0; j < bin.length; j++) {
			bin[j]._render$LCanvasRenderingContext2D$(this._ctx);
		}
	}
};


Layer.prototype.addDirtyRectangle$LRect$ = function (rectangle) {
	this._dirtyRegions.push([ rectangle.left, rectangle.top, rectangle.left + rectangle.width, rectangle.top + rectangle.height ]);
};


Layer.prototype.hasIntersection$LRect$ = function (rectangle) {
	var minX;
	var minY;
	var maxX;
	var maxY;
	var length;
	var i;
	var region;
	minX = rectangle.left;
	minY = rectangle.top;
	maxX = minX + rectangle.width;
	maxY = minY + rectangle.height;
	if (maxX < 0 || maxY < 0 || minX >= this.width || minY >= this.height) {
		return false;
	}
	length = this._dirtyRegions.length;
	for (i = 0; i < length; ++ i) {
		region = this._dirtyRegions[i];
		if (Math.max(minX, (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[../Tombo.js/src/Eye/Layer.jsx:245:36] null access\n            if(Math.max(minX, region[0]) < Math.min(maxX, region[2]) && Math.max(minY, region[1]) < Math.min(maxY, region[3])) {\n                                    ^\n");
			}
			return v;
		}(region[0]))) < Math.min(maxX, (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[../Tombo.js/src/Eye/Layer.jsx:245:64] null access\n            if(Math.max(minX, region[0]) < Math.min(maxX, region[2]) && Math.max(minY, region[1]) < Math.min(maxY, region[3])) {\n                                                                ^\n");
			}
			return v;
		}(region[2]))) && Math.max(minY, (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[../Tombo.js/src/Eye/Layer.jsx:245:93] null access\n            if(Math.max(minX, region[0]) < Math.min(maxX, region[2]) && Math.max(minY, region[1]) < Math.min(maxY, region[3])) {\n                                                                                             ^\n");
			}
			return v;
		}(region[1]))) < Math.min(maxY, (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[../Tombo.js/src/Eye/Layer.jsx:245:121] null access\n            if(Math.max(minX, region[0]) < Math.min(maxX, region[2]) && Math.max(minY, region[1]) < Math.min(maxY, region[3])) {\n                                                                                                                         ^\n");
			}
			return v;
		}(region[3])))) {
			return true;
		}
	}
	return false;
};


function DisplayNode(shape, left, top, scaleX, scaleY, rotation) {
	this._clientRect = null;
	this._compositeTransform = null;
	this.parent = null;
	this._drawBin = 0 | 0;
	this._drawOrder = 0;
	this._layer = null;
	this._isTouchable = false;
	this._dirtyRect = true;
	this._dirty = true;
	this.shape = shape;
	this._transform = new Transform(left, top, scaleX, scaleY, rotation);
	this._id = DisplayNode._counter++;
};

function DisplayNode$0(shape, left, top, scaleX, scaleY) {
	this._clientRect = null;
	this._compositeTransform = null;
	this.parent = null;
	this._drawBin = 0 | 0;
	this._drawOrder = 0;
	this._layer = null;
	this._isTouchable = false;
	this._dirtyRect = true;
	this._dirty = true;
	this.shape = shape;
	this._transform = new Transform$0(left, top, scaleX, scaleY);
	this._id = DisplayNode._counter++;
};

function DisplayNode$1(shape, left, top) {
	this._clientRect = null;
	this._compositeTransform = null;
	this.parent = null;
	this._drawBin = 0 | 0;
	this._drawOrder = 0;
	this._layer = null;
	this._isTouchable = false;
	this._dirtyRect = true;
	this._dirty = true;
	this.shape = shape;
	this._transform = new Transform$1(left, top);
	this._id = DisplayNode._counter++;
};

function DisplayNode$2(shape) {
	this._clientRect = null;
	this._compositeTransform = null;
	this.parent = null;
	this._drawBin = 0 | 0;
	this._drawOrder = 0;
	this._layer = null;
	this._isTouchable = false;
	this._dirtyRect = true;
	this._dirty = true;
	this.shape = shape;
	this._transform = new Transform$1(0, 0);
	this._id = DisplayNode._counter++;
};

function DisplayNode$3(shape, matrix) {
	this._clientRect = null;
	this._compositeTransform = null;
	this.parent = null;
	this._drawBin = 0 | 0;
	this._drawOrder = 0;
	this._layer = null;
	this._isTouchable = false;
	this._dirtyRect = true;
	this._dirty = true;
	this.shape = shape;
	this._transform = new Transform$2(matrix);
	this._id = DisplayNode._counter++;
};

$__jsx_extend([DisplayNode, DisplayNode$0, DisplayNode$1, DisplayNode$2, DisplayNode$3], Object);
DisplayNode.prototype.setPosition$NN = function (left, top) {
	if (Layer.USE_NEW_RENDERER) {
		if (left !== this._transform.left || top !== this._transform.top) {
			this._addDirtyRectangle$();
			this._transform.setPosition$NN(left, top);
		}
		return;
	}
	this._transform.setPosition$NN(left, top);
	this._setDirtyRect$B(true);
};


DisplayNode.prototype.setScale$NN = function (scaleX, scaleY) {
	if (Layer.USE_NEW_RENDERER) {
		if (scaleX !== this._transform.scaleX || scaleY !== this._transform.scaleY) {
			this._addDirtyRectangle$();
			this._transform.setScale$NN(scaleX, scaleY);
		}
		return;
	}
	this._transform.setScale$NN(scaleX, scaleY);
	this._setDirtyRect$B(true);
};


DisplayNode.prototype.setRotation$N = function (rotation) {
	if (Layer.USE_NEW_RENDERER) {
		if (rotation !== this._transform.rotation) {
			this._addDirtyRectangle$();
			this._transform.setRotation$N(rotation);
		}
		return;
	}
	this._transform.setRotation$N(rotation);
	this._setDirtyRect$B(true);
};


DisplayNode.prototype.setMatrix$AN = function (matrix) {
	this._transform.setMatrix$AN(matrix);
	this._setDirtyRect$B(true);
};


DisplayNode.prototype._setLayer$LLayer$ = function (layer) {
	if (this._layer == layer) {
		return;
	}
	if (this._layer) {
		this._layer._removeNode$LDisplayNode$(this);
		if (this._isTouchable) {
			this._layer._removeTouchableNode$LDisplayNode$(this);
		}
		if (Layer.USE_NEW_RENDERER) {
			this._addDirtyRectangle$();
		}
	}
	this._layer = layer;
	if (layer) {
		this._layer._addNode$LDisplayNode$(this);
		if (this._isTouchable) {
			layer._addTouchableNode$LDisplayNode$(this);
		}
		if (Layer.USE_NEW_RENDERER) {
			this._addDirtyRectangle$();
		}
	}
};


DisplayNode.prototype._setParent$LDisplayGroup$ = function (parent) {
	this.parent = parent;
	this._setDirtyRect$B(true);
};


DisplayNode.prototype._setDirtyRect$B = function (value) {
	this._dirtyRect = value;
	if (value) {
		this._compositeTransform = null;
	}
};


DisplayNode.prototype.setDrawBin$I = function (value) {
	var oldBin;
	oldBin = this._drawBin;
	this._drawBin = value;
	if (this._layer) {
		this._layer._moveDrawBin$LDisplayNode$I(this, (oldBin | 0));
	}
};


DisplayNode.prototype.getDrawBin$ = function () {
	return this._drawBin;
};


DisplayNode.prototype.setDrawOrder$N = function (value) {
	this._drawOrder = value;
	if (this._layer) {
		this._layer._dirtyDrawBin$I(this._drawBin);
	}
};


DisplayNode.prototype.getDrawOrder$ = function () {
	return this._drawOrder;
};


DisplayNode.prototype.setTouchable$B = function (touchable) {
	if (this._isTouchable && ! touchable && this._layer) {
		this._layer._removeTouchableNode$LDisplayNode$(this);
	} else {
		if (! this._isTouchable && touchable && this._layer) {
			this._layer._addTouchableNode$LDisplayNode$(this);
		}
	}
	this._isTouchable = touchable;
};


DisplayNode.prototype.getClientRect$ = function () {
	if (this._dirtyRect) {
		this._calcClientRect$();
	}
	return this._clientRect;
};


DisplayNode.prototype.getCompositeTransform$ = function () {
	if (Layer.USE_NEW_RENDERER) {
		this._compositeTransform = this._calcCompositeTransform$();
		return this._compositeTransform;
	}
	if (! this._compositeTransform) {
		this._compositeTransform = this._calcCompositeTransform$();
	}
	return this._compositeTransform;
};


DisplayNode.prototype._calcCompositeTransform$ = function () {
	if (this.parent) {
		return Transform$mul$LTransform$LTransform$(this.parent.getCompositeTransform$(), this._transform);
	} else {
		return this._transform;
	}
};


DisplayNode.prototype._calcClientRect$ = function () {
	this._clientRect = this.getCompositeTransform$().transformRect$LRect$(this.shape.bounds);
	this._setDirtyRect$B(false);
};


DisplayNode.prototype._addDirtyRectangle$ = function () {
	if (this._layer) {
		this._clientRect = this.getCompositeTransform$().transformRect$LRect$(this.shape.bounds);
		this._layer.addDirtyRectangle$LRect$(this._clientRect);
		this._dirty = true;
	}
};


DisplayNode.prototype._render$LCanvasRenderingContext2D$ = function (ctx) {
	var matrix;
	if (Layer.USE_NEW_RENDERER) {
		if (! this._dirty && ! this._layer.hasIntersection$LRect$(this._clientRect)) {
			return;
		}
		this._dirty = false;
		ctx.save();
		matrix = this.getCompositeTransform$().getMatrix$();
		(function (o, p, a) { return o[p].apply(o, a); }(ctx, "transform", (function ($v) {
			if (! ($v == null || $v instanceof Array)) {
				debugger;
				throw new Error("[../Tombo.js/src/Eye/DisplayNode.jsx:277:47] detected invalid cast, value is not an Array or null\n            js.invoke(ctx, \"transform\", matrix as __noconvert__ variant[]);\n                                               ^^\n");
			}
			return $v;
		}(matrix))));
		this.shape.draw$LCanvasRenderingContext2D$(ctx);
		ctx.restore();
		return;
	}
	ctx.save();
	matrix = this.getCompositeTransform$().getMatrix$();
	(function (o, p, a) { return o[p].apply(o, a); }(ctx, "transform", (function ($v) {
		if (! ($v == null || $v instanceof Array)) {
			debugger;
			throw new Error("[../Tombo.js/src/Eye/DisplayNode.jsx:284:43] detected invalid cast, value is not an Array or null\n        js.invoke(ctx, \"transform\", matrix as __noconvert__ variant[]);\n                                           ^^\n");
		}
		return $v;
	}(matrix))));
	this.shape.draw$LCanvasRenderingContext2D$(ctx);
	ctx.restore();
};


function LayoutInformation() {
	this.left = 0;
	this.top = 0;
	this.right = 0;
	this.bottom = 0;
	this.scale = 1;
	this.clientWidth = 0;
	this.clientHeight = 0;
	this.layoutMode = LayoutInformation.CENTER | LayoutInformation.AUTO_SCALE;
	this.compositeOperation = "source-over";
};

function LayoutInformation$0(compositeOperation) {
	this.left = 0;
	this.top = 0;
	this.right = 0;
	this.bottom = 0;
	this.scale = 1;
	this.clientWidth = 0;
	this.clientHeight = 0;
	this.layoutMode = LayoutInformation.CENTER | LayoutInformation.AUTO_SCALE;
	this.compositeOperation = compositeOperation;
};

function LayoutInformation$1(layoutMode) {
	this.left = 0;
	this.top = 0;
	this.right = 0;
	this.bottom = 0;
	this.scale = 1;
	this.clientWidth = 0;
	this.clientHeight = 0;
	this.layoutMode = layoutMode;
	this.compositeOperation = "source-over";
};

function LayoutInformation$2(layoutMode, compositeOperation) {
	this.left = 0;
	this.top = 0;
	this.right = 0;
	this.bottom = 0;
	this.scale = 1;
	this.clientWidth = 0;
	this.clientHeight = 0;
	this.layoutMode = layoutMode;
	this.compositeOperation = compositeOperation;
};

$__jsx_extend([LayoutInformation, LayoutInformation$0, LayoutInformation$1, LayoutInformation$2], Object);
LayoutInformation.prototype._setLeft$N = function (left) {
	this.left = left;
};


LayoutInformation.prototype._setTop$N = function (top) {
	this.top = top;
};


LayoutInformation.prototype._setRight$N = function (right) {
	this.right = right;
};


LayoutInformation.prototype._setBottom$N = function (bottom) {
	this.bottom = bottom;
};


LayoutInformation.prototype._setScale$N = function (scale) {
	this.scale = scale;
};


function Tombo() {
};

$__jsx_extend([Tombo], Object);
function Tombo$error$S(msg) {
	console.error(msg);
	throw msg;
};

Tombo.error$S = Tombo$error$S;

function Tombo$warn$S(msg) {
	console.warn(msg);
};

Tombo.warn$S = Tombo$warn$S;

function Rect(left, top, width, height) {
	this.left = left;
	this.top = top;
	this.width = width;
	this.height = height;
};

function Rect$0() {
	this.left = 0;
	this.top = 0;
	this.width = 0;
	this.height = 0;
};

$__jsx_extend([Rect, Rect$0], Object);
Rect.prototype.isInside$NN = function (x, y) {
	if (x < this.left || y < this.top || x >= this.left + this.width || y >= this.top + this.height) {
		return false;
	}
	return true;
};


function Transform(left, top, scaleX, scaleY, rotation) {
	this.matrix = null;
	this.userMatrix = false;
	this.left = left;
	this.top = top;
	this.scaleX = scaleX;
	this.scaleY = scaleY;
	this.rotation = rotation;
	if (this.rotation) {
		this.calcMatrix$();
	}
};

function Transform$0(left, top, scaleX, scaleY) {
	this.rotation = 0;
	this.matrix = null;
	this.userMatrix = false;
	this.left = left;
	this.top = top;
	this.scaleX = scaleX;
	this.scaleY = scaleY;
};

function Transform$1(left, top) {
	this.scaleX = 1;
	this.scaleY = 1;
	this.rotation = 0;
	this.matrix = null;
	this.userMatrix = false;
	this.left = left;
	this.top = top;
};

function Transform$2(matrix) {
	this.left = 0;
	this.top = 0;
	this.scaleX = 1;
	this.scaleY = 1;
	this.rotation = 0;
	this.matrix = matrix;
	this.userMatrix = true;
};

$__jsx_extend([Transform, Transform$0, Transform$1, Transform$2], Object);
Transform.prototype.setPosition$NN = function (left, top) {
	this.left = left;
	this.top = top;
	if (this.rotation) {
		this.calcMatrix$();
	}
};


Transform.prototype.setScale$NN = function (scaleX, scaleY) {
	this.scaleX = scaleX;
	this.scaleY = scaleY;
	if (this.rotation) {
		this.calcMatrix$();
	}
};


Transform.prototype.setRotation$N = function (rotation) {
	this.rotation = rotation;
	this.calcMatrix$();
};


Transform.prototype.setMatrix$AN = function (matrix) {
	if (matrix) {
		this.userMatrix = true;
		this.matrix = matrix;
	} else {
		this.userMatrix = false;
		this.calcMatrix$();
	}
};


Transform.prototype.setIdentity$ = function () {
	this.userMatrix = false;
	this.matrix = null;
	this.top = 0;
	this.left = 0;
	this.scaleX = 1;
	this.scaleY = 1;
	this.rotation = 0;
};


Transform.prototype.calcMatrix$ = function () {
	var cos;
	var sin;
	if (this.userMatrix) {
		return;
	}
	if (this.rotation) {
		cos = Math.cos(this.rotation);
		sin = Math.sin(this.rotation);
		this.matrix = [ cos * this.scaleX, sin, - sin, cos * this.scaleY, this.left, this.top ];
	} else {
		this.matrix = null;
	}
};


Transform.prototype.getMatrix$ = function () {
	if (this.matrix) {
		return this.matrix;
	} else {
		return [ this.scaleX, 0, 0, this.scaleY, this.left, this.top ];
	}
};


Transform.prototype.transformRect$LRect$ = function (rect) {
	if (this.matrix) {
		throw "[Transform#mul] sorry, not implemented";
	} else {
		return new Rect(this.scaleX * rect.left + this.left, this.scaleY * rect.top + this.top, this.scaleX * rect.width, this.scaleY * rect.height);
	}
};


function Transform$mul$LTransform$LTransform$(a, b) {
	var scaleX;
	var scaleY;
	var left;
	var top;
	if (a.matrix || b.matrix) {
		throw "[Transform#mul] sorry, not implemented";
	} else {
		scaleX = a.scaleX * b.scaleY;
		scaleY = a.scaleX * b.scaleY;
		left = a.scaleX * b.left + a.left;
		top = a.scaleY * b.top + a.top;
		return new Transform$0(left, top, scaleX, scaleY);
	}
};

Transform.mul$LTransform$LTransform$ = Transform$mul$LTransform$LTransform$;

function Color() {
};

$__jsx_extend([Color], Object);
function Color$createRGB$III(r, g, b) {
	return Color$createRGBA$IIII(r, g, b, 255);
};

Color.createRGB$III = Color$createRGB$III;

function Color$createRGBA$IIII(r, g, b, a) {
	return (r & 0xFF) << 24 | (g & 0xFF) << 16 | (b & 0xFF) << 8 | a & 0xFF;
};

Color.createRGBA$IIII = Color$createRGBA$IIII;

function Color$stringify$I(color) {
	var r;
	var g;
	var b;
	var a;
	r = color >> 24 & 0xFF;
	g = color >> 16 & 0xFF;
	b = color >> 8 & 0xFF;
	a = color & 0xFF;
	return "rgba(" + (r + "") + "," + (g + "") + "," + (b + "") + "," + (a / 255 + "") + ")";
};

Color.stringify$I = Color$stringify$I;

function DisplayGroup(left, top, scaleX, scaleY, rotation) {
	DisplayNode.call(this, null, left, top, scaleX, scaleY, rotation);
	this._children = [  ];
};

function DisplayGroup$0(left, top, scaleX, scaleY) {
	DisplayNode$0.call(this, null, left, top, scaleX, scaleY);
	this._children = [  ];
};

function DisplayGroup$1(left, top) {
	DisplayNode$1.call(this, null, left, top);
	this._children = [  ];
};

function DisplayGroup$2(matrix) {
	DisplayNode$3.call(this, null, matrix);
	this._children = [  ];
};

function DisplayGroup$3() {
	DisplayNode$2.call(this, null);
	this._children = [  ];
};

$__jsx_extend([DisplayGroup, DisplayGroup$0, DisplayGroup$1, DisplayGroup$2, DisplayGroup$3], DisplayNode);
DisplayGroup.prototype.appendChild$LDisplayNode$ = function (node) {
	this._children.push(node);
	node._setParent$LDisplayGroup$(this);
	node._setLayer$LLayer$(this._layer);
};


DisplayGroup.prototype.removeChild$LDisplayNode$ = function (node) {
	var i;
	for (i = 0; i < this._children.length; i++) {
		if (this._children[i] == node) {
			this._children.splice(i, 1);
			node._setParent$LDisplayGroup$(null);
			node._setLayer$LLayer$(null);
		}
	}
};


DisplayGroup.prototype.hasChildren$ = function () {
	return this._children.length > 0;
};


DisplayGroup.prototype._setLayer$LLayer$ = function (layer) {
	var i;
	DisplayNode.prototype._setLayer$LLayer$.call(this, layer);
	for (i = 0; i < this._children.length; i++) {
		this._children[i]._setLayer$LLayer$(layer);
	}
};


DisplayGroup.prototype._setDirtyRect$B = function (value) {
	var i;
	DisplayNode.prototype._setDirtyRect$B.call(this, value);
	if (value) {
		for (i = 0; i < this._children.length; i++) {
			this._children[i]._setDirtyRect$B(value);
		}
	}
};


DisplayGroup.prototype._calcClientRect$ = function () {
	var i;
	for (i = 0; i < this._children.length; i++) {
		this._children[i]._calcClientRect$();
	}
};


DisplayGroup.prototype._addDirtyRectangle$ = function () {
	var i;
	for (i = 0; i < this._children.length; i++) {
		this._children[i]._addDirtyRectangle$();
	}
};


DisplayGroup.prototype._render$LCanvasRenderingContext2D$ = function (ctx) {
};


function Shape() {
};

$__jsx_extend([Shape], Object);
Shape.prototype.$__jsx_implements_Shape = true;

function ImageShape(img) {
	Shape.call(this);
	this.bounds = null;
	this.isMutable = false;
	this._img = img;
	if (! img.width || ! img.height) {
		Tombo$warn$S("[ImageShape#constructor] image is not initialized");
	}
	this.bounds = new Rect(0, 0, img.width, img.height);
};

$__jsx_extend([ImageShape], Object);
$__jsx_merge_interface(ImageShape, Shape);

ImageShape.prototype.draw$LCanvasRenderingContext2D$ = function (ctx) {
	ctx.drawImage(this._img, 0, 0);
};


$__jsx_lazy_init(dom, "window", function () {
	return js.global.window;
});
$__jsx_lazy_init(dom, "document", function () {
	return (function ($v) {
		if (! ($v == null || $v instanceof HTMLDocument)) {
			debugger;
			throw new Error("[/Users/phi/.nvm/v0.10.0/lib/node_modules/jsx/lib/js/js/web.jsx:23:50] detected invalid cast, value is not an instance of the designated type or null\n    static const document = js.global[\"document\"] as __noconvert__ HTMLDocument;\n                                                  ^^\n");
		}
		return $v;
	}(js.global.document));
});
Layer.USE_NEW_RENDERER = false;
DisplayNode._counter = 0;
var js = { global: function () { return this; }() };
LayoutInformation.CENTER = 0x0001;
LayoutInformation.TOP = 0x0002;
LayoutInformation.BOTTOM = 0x0004;
LayoutInformation.LEFT = 0x0008;
LayoutInformation.RIGHT = 0x0010;
LayoutInformation.CUSTOM = 0x0020;
LayoutInformation.AUTO_SCALE = 0x0100;
LayoutInformation.FIXED_SCALE = 0x0200;

var $__jsx_classMap = {
	"system:lib/built-in.jsx": {
		g_StopIteration: g_StopIteration,
		g_StopIteration$: g_StopIteration
	},
	"./src/Main.jsx": {
		_Main: _Main,
		_Main$: _Main
	},
	"system:lib/js/js/web.jsx": {
		dom: dom,
		dom$: dom,
		EventInit: EventInit,
		EventInit$: EventInit,
		CustomEventInit: CustomEventInit,
		CustomEventInit$: CustomEventInit,
		MutationObserverInit: MutationObserverInit,
		MutationObserverInit$: MutationObserverInit,
		UIEventInit: UIEventInit,
		UIEventInit$: UIEventInit,
		FocusEventInit: FocusEventInit,
		FocusEventInit$: FocusEventInit,
		MouseEventInit: MouseEventInit,
		MouseEventInit$: MouseEventInit,
		WheelEventInit: WheelEventInit,
		WheelEventInit$: WheelEventInit,
		KeyboardEventInit: KeyboardEventInit,
		KeyboardEventInit$: KeyboardEventInit,
		CompositionEventInit: CompositionEventInit,
		CompositionEventInit$: CompositionEventInit,
		ProgressEventInit: ProgressEventInit,
		ProgressEventInit$: ProgressEventInit,
		XMLHttpRequestOptions: XMLHttpRequestOptions,
		XMLHttpRequestOptions$: XMLHttpRequestOptions,
		TrackEventInit: TrackEventInit,
		TrackEventInit$: TrackEventInit,
		PopStateEventInit: PopStateEventInit,
		PopStateEventInit$: PopStateEventInit,
		HashChangeEventInit: HashChangeEventInit,
		HashChangeEventInit$: HashChangeEventInit,
		PageTransitionEventInit: PageTransitionEventInit,
		PageTransitionEventInit$: PageTransitionEventInit,
		DragEventInit: DragEventInit,
		DragEventInit$: DragEventInit,
		CloseEventInit: CloseEventInit,
		CloseEventInit$: CloseEventInit,
		StorageEventInit: StorageEventInit,
		StorageEventInit$: StorageEventInit,
		MessageEventInit: MessageEventInit,
		MessageEventInit$: MessageEventInit,
		ErrorEventInit: ErrorEventInit,
		ErrorEventInit$: ErrorEventInit,
		EventSourceInit: EventSourceInit,
		EventSourceInit$: EventSourceInit,
		IDBObjectStoreParameters: IDBObjectStoreParameters,
		IDBObjectStoreParameters$: IDBObjectStoreParameters,
		IDBIndexParameters: IDBIndexParameters,
		IDBIndexParameters$: IDBIndexParameters,
		IDBVersionChangeEventInit: IDBVersionChangeEventInit,
		IDBVersionChangeEventInit$: IDBVersionChangeEventInit,
		NotificationOptions: NotificationOptions,
		NotificationOptions$: NotificationOptions,
		RTCSessionDescriptionInit: RTCSessionDescriptionInit,
		RTCSessionDescriptionInit$: RTCSessionDescriptionInit,
		RTCIceCandidateInit: RTCIceCandidateInit,
		RTCIceCandidateInit$: RTCIceCandidateInit,
		RTCIceServer: RTCIceServer,
		RTCIceServer$: RTCIceServer,
		RTCConfiguration: RTCConfiguration,
		RTCConfiguration$: RTCConfiguration,
		DataChannelInit: DataChannelInit,
		DataChannelInit$: DataChannelInit,
		RTCPeerConnectionIceEventInit: RTCPeerConnectionIceEventInit,
		RTCPeerConnectionIceEventInit$: RTCPeerConnectionIceEventInit,
		MediaStreamEventInit: MediaStreamEventInit,
		MediaStreamEventInit$: MediaStreamEventInit,
		DataChannelEventInit: DataChannelEventInit,
		DataChannelEventInit$: DataChannelEventInit,
		MediaStreamConstraints: MediaStreamConstraints,
		MediaStreamConstraints$: MediaStreamConstraints,
		MediaTrackConstraints: MediaTrackConstraints,
		MediaTrackConstraints$: MediaTrackConstraints,
		HitRegionOptions: HitRegionOptions,
		HitRegionOptions$: HitRegionOptions,
		WebGLContextAttributes: WebGLContextAttributes,
		WebGLContextAttributes$: WebGLContextAttributes,
		WebGLContextEventInit: WebGLContextEventInit,
		WebGLContextEventInit$: WebGLContextEventInit,
		DeviceOrientationEventInit: DeviceOrientationEventInit,
		DeviceOrientationEventInit$: DeviceOrientationEventInit,
		DeviceMotionEventInit: DeviceMotionEventInit,
		DeviceMotionEventInit$: DeviceMotionEventInit
	},
	"../Tombo.js/src/Eye/Eye.jsx": {
		Eye: Eye,
		Eye$LHTMLCanvasElement$: Eye,
		Eye$NN: Eye$0,
		Eye$: Eye$1
	},
	"../Tombo.js/src/Eye/Layer.jsx": {
		Layer: Layer,
		Layer$NN: Layer,
		Layer$NNLLayoutInformation$: Layer$0
	},
	"../Tombo.js/src/Eye/DisplayNode.jsx": {
		DisplayNode: DisplayNode,
		DisplayNode$LShape$NNNNN: DisplayNode,
		DisplayNode$LShape$NNNN: DisplayNode$0,
		DisplayNode$LShape$NN: DisplayNode$1,
		DisplayNode$LShape$: DisplayNode$2,
		DisplayNode$LShape$AN: DisplayNode$3
	},
	"../Tombo.js/src/Eye/LayoutInformation.jsx": {
		LayoutInformation: LayoutInformation,
		LayoutInformation$: LayoutInformation,
		LayoutInformation$S: LayoutInformation$0,
		LayoutInformation$I: LayoutInformation$1,
		LayoutInformation$IS: LayoutInformation$2
	},
	"../Tombo.js/src/Tombo.jsx": {
		Tombo: Tombo,
		Tombo$: Tombo
	},
	"../Tombo.js/src/BasicTypes.jsx": {
		Rect: Rect,
		Rect$NNNN: Rect,
		Rect$: Rect$0,
		Transform: Transform,
		Transform$NNNNN: Transform,
		Transform$NNNN: Transform$0,
		Transform$NN: Transform$1,
		Transform$AN: Transform$2,
		Color: Color,
		Color$: Color
	},
	"../Tombo.js/src/Eye/DisplayGroup.jsx": {
		DisplayGroup: DisplayGroup,
		DisplayGroup$NNNNN: DisplayGroup,
		DisplayGroup$NNNN: DisplayGroup$0,
		DisplayGroup$NN: DisplayGroup$1,
		DisplayGroup$AN: DisplayGroup$2,
		DisplayGroup$: DisplayGroup$3
	},
	"../Tombo.js/src/Eye/Shape.jsx": {
		Shape: Shape,
		Shape$: Shape
	},
	"../Tombo.js/src/Eye/Shapes/ImageShape.jsx": {
		ImageShape: ImageShape,
		ImageShape$LHTMLImageElement$: ImageShape
	}
};


/**
 * launches _Main.main(:string[]):void invoked by jsx --run|--executable
 */
JSX.runMain = function (sourceFile, args) {
	var module = JSX.require(sourceFile);
	if (! module) {
		throw new ReferenceError("entry point module not found in " + sourceFile);
	}
	if (! module._Main) {
		throw new ReferenceError("entry point _Main not found in " + sourceFile);
	}
	if (! module._Main.main) {
		throw new ReferenceError("entry point _Main.main(:string[]):void not found in " + sourceFile);
	}
	module._Main.main(args);
};

/**
 * launches _Test#test*():void invoked by jsx --test
 */
JSX.runTests = function (sourceFile, tests) {
	var module = JSX.require(sourceFile);
	var testClass = module._Test;

	if (!testClass) return; // skip if there's no test class

	if(tests.length === 0) {
		var p = testClass.prototype;
		for (var m in p) {
			if (p[m] instanceof Function && m.match(/^test\w*$/)) {
				tests.push(m);
			}
		}
	}

	var testCase = new testClass();

	if (testCase.beforeClass != null)
		testCase.beforeClass(tests);

	for (var i = 0; i < tests.length; ++i) {
		(function (method) {
			if (method in testCase) {
				testCase.run(method, function() { testCase[method](); });
			}
			else {
				throw new ReferenceError("No such test method: " + method);
			}
		}(tests[i]));
	}

	if (testCase.afterClass != null)
		testCase.afterClass();
};
/**
 * call a function on load/DOMContentLoaded
 */
function $__jsx_onload (event) {
	window.removeEventListener("load", $__jsx_onload);
	document.removeEventListener("DOMContentLoaded", $__jsx_onload);
	JSX.runMain("./src/Main.jsx", [])
}

window.addEventListener("load", $__jsx_onload);
document.addEventListener("DOMContentLoaded", $__jsx_onload);

})(JSX);
