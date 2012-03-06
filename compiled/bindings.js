var ffi = require('ffi-tools');

var lib = require('path').resolve(__dirname, 'libcef');

exports.Enums = {};
exports.Structs = {};
exports.Methods = {};


function Enum(name, def){
 return exports.Enums[name.replace(/^cef_?/i,'')] = new ffi.Enum(name, def);
}

function Struct(name, def){
 return exports.Structs[name.replace(/^cef_?/i,'')] = new ffi.Struct(name, def);
}

function Method(name, ret, params){
 return exports.Methods[name.replace(/^cef_?/i,'')] = new ffi.ForeignFunction(name, lib, ret, params);
}


function TypeDef(name, ffiType, type){
  return ffiType;
}

var
 size_t = TypeDef('size_t', 'uint16'),
 HDC = TypeDef('HDC', 'pointer'),
 SHORT = TypeDef('SHORT', 'int8'),
 LONG = TypeDef('LONG', 'int32'),
 CEF_STRING_LIST = TypeDef('CEF_STRING_LIST', 'pointer');



var RECT = Struct('RECT', {
 Left: LONG,
 Top: LONG,
 Right: LONG,
 Bottom: LONG
});

var CEF_STRING_WIDE = Struct('CEF_STRING_WIDE', {
 str: 'pointer',
 length: size_t,
 dtor: 'pointer'
});

var CEF_STRING_UTF8 = Struct('CEF_STRING_UTF8', {
 str: 'pointer',
 length: size_t,
 dtor: 'pointer'
});

var CEF_STRING = Struct('CEF_STRING', {
 str: 'pointer',
 length: size_t,
 dtor: 'pointer'
});

var CEF_TIME = Struct('CEF_TIME', {
 year: 'int16',
 month: 'int16',
 day_of_week: 'int16',
 day_of_month: 'int16',
 hour: 'int16',
 minute: 'int16',
 second: 'int16',
 millisecond: 'int16'
});

var CEF_HANDLER_NAVTYPE = Enum('CEF_HANDLER_NAVTYPE', {
 Linkclicked: 0,
 Formsubmitted: 1,
 Backforward: 2,
 Reload: 3,
 Formresubmitted: 4,
 Other: 5,
 Linkdropped: 6
});

var CEF_HANDLER_ERRORCODE = Enum('CEF_HANDLER_ERRORCODE', {
 Failed: 0,
 Aborted: 1,
 InvalidArgument: 2,
 InvalidHandle: 3,
 FileNotFound: 4,
 TimedOut: 5,
 FileTooBig: 6,
 Unexpected: 7,
 AccessDenied: 8,
 NotImplemented: 9,
 ConnectionClosed: 10,
 ConnectionReset: 11,
 ConnectionRefused: 12,
 ConnectionAborted: 13,
 ConnectionFailed: 14,
 NameNotResolved: 15,
 InternetDisconnected: 16,
 SslProtocolError: 17,
 AddressInvalid: 18,
 AddressUnreachable: 19,
 SslClientAuthCertNeeded: 20,
 TunnelConnectionFailed: 21,
 NoSslVersionsEnabled: 22,
 SslVersionCipherMismatch: 23,
 SslRenegotiationRequested: 24,
 CertCommonNameInvalid: 25,
 CertDateInvalid: 26,
 CertAuthorityInvalid: 27,
 CertContainsErrors: 28,
 CertNoRevocationMechanism: 29,
 CertUnableToCheckRevocation: 30,
 CertRevoked: 31,
 CertInvalid: 32,
 CertEnd: 33,
 InvalidUrl: 34,
 DisallowedUrlScheme: 35,
 UnknownUrlScheme: 36,
 TooManyRedirects: 37,
 UnsafeRedirect: 38,
 UnsafePort: 39,
 InvalidResponse: 40,
 InvalidChunkedEncoding: 41,
 MethodNotSupported: 42,
 UnexpectedProxyAuth: 43,
 EmptyResponse: 44,
 ResponseHeadersTooBig: 45,
 CacheMiss: 46,
 InsecureResponse: 47
});

var CEF_DRAG_OPERATIONS_MASK = Enum('CEF_DRAG_OPERATIONS_MASK', {
 None: 0,
 Copy: 1,
 Link: 2,
 Generic: 4,
 Private: 8,
 Move: 16,
 Delete: 32,
 Every: 7
});

var CEF_V8_ACCESSCONTROL = Enum('CEF_V8_ACCESSCONTROL', {
 Default: 0,
 AllCanRead: 1,
 AllCanWrite: 2,
 ProhibitsOverwriting: 3
});

var CEF_V8_PROPERTYATTRIBUTE = Enum('CEF_V8_PROPERTYATTRIBUTE', {
 None: 0,
 Readonly: 1,
 Dontenum: 2,
 Dontdelete: 3
});

var CEF_MENU_TYPEBITS = Enum('CEF_MENU_TYPEBITS', {
 None: 0x0,
 Page: 0x1,
 Frame: 0x2,
 Link: 0x4,
 Image: 0x8,
 Selection: 0x10,
 Editable: 0x20,
 MisspelledWord: 0x40,
 Video: 0x80,
 Audio: 0x100
});

var CEF_MENU_CAPABILITYBITS = Enum('CEF_MENU_CAPABILITYBITS', {
 CanDoNone: 0x0,
 CanUndo: 0x1,
 CanRedo: 0x2,
 CanCut: 0x4,
 CanCopy: 0x8,
 CanPaste: 0x10,
 CanDelete: 0x20,
 CanSelectAll: 0x40,
 CanTranslate: 0x80,
 CanGoForward: 0x10000000,
 CanGoBack: 0x20000000
});

var CEF_MENU_ID = Enum('CEF_MENU_ID', {
 NavBack: 10,
 NavForward: 11,
 NavReload: 12,
 NavReloadNocache: 13,
 NavStop: 14,
 Undo: 20,
 Redo: 21,
 Cut: 22,
 Copy: 23,
 Paste: 24,
 Delete: 25,
 Selectall: 26,
 Print: 30,
 Viewsource: 31
});

var CEF_GRAPHICS_IMPLEMENTATION = Enum('CEF_GRAPHICS_IMPLEMENTATION', {
 AngleInProcess: 0,
 AngleInProcessCommandBuffer: 1,
 DesktopInProcess: 2,
 DesktopInProcessCommandBuffer: 3
});

var CEF_LOG_SEVERITY = Enum('CEF_LOG_SEVERITY', {
 Verbose: 0,
 Info: 1,
 Warning: 2,
 Error: 3,
 ErrorReport: 4,
 Disable: 99
});

var CEF_STORAGE_TYPE = Enum('CEF_STORAGE_TYPE', {
 Localstorage: 0,
 Sessionstorage: 1
});

var CEF_MOUSE_BUTTON_TYPE = Enum('CEF_MOUSE_BUTTON_TYPE', {
 MbtLeft: 0,
 MbtMiddle: 1,
 MbtRight: 2
});

var CEF_KEY_TYPE = Enum('CEF_KEY_TYPE', {
 KtKeyup: 0,
 KtKeydown: 1,
 KtChar: 2
});


var CEF_WEBURLREQUEST_STATE = Enum('CEF_WEBURLREQUEST_STATE', {
 WurUnsent: 0,
 WurStarted: 1,
 WurHeadersReceived: 2,
 WurLoading: 3,
 WurDone: 4,
 WurError: 5,
 WurAbort: 6
});

var CEF_HANDLER_FOCUS_SOURCE = Enum('CEF_HANDLER_FOCUS_SOURCE', {
 Navigation: 0,
 System: 1,
 Widget: 2
});

var CEF_HANDLER_KEYEVENT_TYPE = Enum('CEF_HANDLER_KEYEVENT_TYPE', {
 Rawkeydown: 0,
 Keydown: 1,
 Keyup: 2,
 Char: 3
});

var CEF_HANDLER_KEYEVENT_MODIFIERS = Enum('CEF_HANDLER_KEYEVENT_MODIFIERS', {
 Shift: 0,
 Ctrl: 1,
 Alt: 2,
 Meta: 3
});


var CEF_THREAD_ID = Enum('CEF_THREAD_ID', {
 TidUi: 0,
 TidIo: 1,
 TidFile: 2
});

var CEF_PAPER_TYPE = Enum('CEF_PAPER_TYPE', {
 PtLetter: 0,
 PtLegal: 1,
 PtExecutive: 2,
 PtA3: 3,
 PtA4: 4,
 PtCustom: 5
});


var CEF_PAINT_ELEMENT_TYPE = Enum('CEF_PAINT_ELEMENT_TYPE', {
 View: 0,
 Popup: 1
});

var CEF_POSTDATAELEMENT_TYPE = Enum('CEF_POSTDATAELEMENT_TYPE', {
 PdeEmpty: 0,
 PdeBytes: 1,
 PdeFile: 2
});

var CEF_WEBURLREQUEST_FLAGS = Enum('CEF_WEBURLREQUEST_FLAGS', {
 WurNone: 0,
 WurSkipCache: 0x1,
 WurAllowCachedCredentials: 0x2,
 WurAllowCookies: 0x4,
 WurReportUploadProgress: 0x8,
 WurReportLoadTiming: 0x10,
 WurReportRawHeaders: 0x20
});


var CEF_PAGE_ORIENTATION = Enum('CEF_PAGE_ORIENTATION', {
 Portrait: 0,
 Landscape: 1
});

var CEF_XML_ENCODING_TYPE = Enum('CEF_XML_ENCODING_TYPE', {
 None: 0,
 Utf8: 1,
 Utf16le: 2,
 Utf16be: 3,
 Ascii: 4
});

var CEF_XML_NODE_TYPE = Enum('CEF_XML_NODE_TYPE', {
 Unsupported: 0,
 ProcessingInstruction: 1,
 DocumentType: 2,
 ElementStart: 3,
 ElementEnd: 4,
 Attribute: 5,
 Text: 6,
 Cdata: 7,
 EntityReference: 8,
 Whitespace: 9,
 Comment: 10
});

var CEF_HANDLER_STATUSTYPE = Enum('CEF_HANDLER_STATUSTYPE', {
 Text: 0,
 MouseoverUrl: 1,
 KeyboardFocusUrl: 2
});

var CEF_DOM_DOCUMENT_TYPE = Enum('CEF_DOM_DOCUMENT_TYPE', {
 Unknown: 0,
 Html: 1,
 Xhtml: 2,
 Plugin: 3
});

var CEF_DOM_EVENT_CATEGORY = Enum('CEF_DOM_EVENT_CATEGORY', {
 Unknown: 0x0,
 Ui: 0x1,
 Mouse: 0x2,
 Mutation: 0x4,
 Keyboard: 0x8,
 Text: 0x10,
 Composition: 0x20,
 Drag: 0x40,
 Clipboard: 0x80,
 Message: 0x100,
 Wheel: 0x200,
 BeforeTextInserted: 0x400,
 Overflow: 0x800,
 PageTransition: 0x1000,
 Popstate: 0x2000,
 Progress: 0x4000,
 XmlhttprequestProgress: 0x8000,
 WebkitAnimation: 0x10000,
 WebkitTransition: 0x20000,
 BeforeLoad: 0x40000
});

var CEF_DOM_EVENT_PHASE = Enum('CEF_DOM_EVENT_PHASE', {
 Unknown: 0,
 Capturing: 1,
 AtTarget: 2,
 Bubbling: 3
});

var CEF_DOMNODE_TYPE = Enum('CEF_DOMNODE_TYPE', {
 Unsupported: 0,
 Element: 1,
 Attribute: 2,
 Text: 3,
 CdataSection: 4,
 EntityReference: 5,
 Entity: 6,
 ProcessingInstructions: 7,
 Comment: 8,
 Document: 9,
 DocumentType: 10,
 DocumentFragment: 11,
 Notation: 12,
 XpathNamespace: 13
});

var CEF_PROXY_TYPE = Enum('CEF_PROXY_TYPE', {
 Direct: 0,
 Named: 1,
 PacString: 2
});

var CEF_BASE = Struct('CEF_BASE', {
 size: size_t,
 add_ref: 'pointer',
 release: 'pointer',
 get_refct: 'pointer'
});

var CEF_TASK = Struct('CEF_TASK', {
 base: CEF_BASE,
 execute: 'pointer'
});

var CEF_COOKIE_VISITOR = Struct('CEF_COOKIE_VISITOR', {
 base: CEF_BASE,
 visit: 'pointer'
});

var CEF_STORAGE_VISITOR = Struct('CEF_STORAGE_VISITOR', {
 base: CEF_BASE,
 visit: 'pointer'
});

var CEF_BROWSER = Struct('CEF_BROWSER', {
 base: CEF_BASE,
 parent_window_will_close: 'pointer',
 close_browser: 'pointer',
 can_go_back: 'pointer',
 go_back: 'pointer',
 can_go_forward: 'pointer',
 go_forward: 'pointer',
 reload: 'pointer',
 reload_ignore_cache: 'pointer',
 stop_load: 'pointer',
 set_focus: 'pointer',
 get_window_handle: 'pointer',
 get_opener_window_handle: 'pointer',
 is_popup: 'pointer',
 has_document: 'pointer',
 get_client: 'pointer',
 get_main_frame: 'pointer',
 get_focused_frame: 'pointer',
 get_frame: 'pointer',
 get_frame_names: 'pointer',
 find: 'pointer',
 stop_finding: 'pointer',
 get_zoom_level: 'pointer',
 set_zoom_level: 'pointer',
 clear_history: 'pointer',
 show_dev_tools: 'pointer',
 close_dev_tools: 'pointer',
 is_window_rendering_disabled: 'pointer',
 get_size: 'pointer',
 set_size: 'pointer',
 is_popup_visible: 'pointer',
 hide_popup: 'pointer',
 invalidate: 'pointer',
 get_image: 'pointer',
 send_key_event: 'pointer',
 send_mouse_click_event: 'pointer',
 send_mouse_move_event: 'pointer',
 send_mouse_wheel_event: 'pointer',
 send_focus_event: 'pointer',
 send_capture_lost_event: 'pointer'
});

var CEF_CLIENT = Struct('CEF_CLIENT', {
 base: CEF_BASE,
 get_life_span_handler: 'pointer',
 get_load_handler: 'pointer',
 get_request_handler: 'pointer',
 get_display_handler: 'pointer',
 get_focus_handler: 'pointer',
 get_keyboard_handler: 'pointer',
 get_menu_handler: 'pointer',
 get_print_handler: 'pointer',
 get_find_handler: 'pointer',
 get_jsdialog_handler: 'pointer',
 get_v8context_handler: 'pointer',
 get_render_handler: 'pointer',
 get_drag_handler: 'pointer'
});

var CEF_FRAME = Struct('CEF_FRAME', {
 base: CEF_BASE,
 undo: 'pointer',
 redo: 'pointer',
 cut: 'pointer',
 copy: 'pointer',
 paste: 'pointer',
 del: 'pointer',
 select_all: 'pointer',
 print: 'pointer',
 view_source: 'pointer',
 get_source: 'pointer',
 get_text: 'pointer',
 load_request: 'pointer',
 load_url: 'pointer',
 load_string: 'pointer',
 load_stream: 'pointer',
 execute_java_script: 'pointer',
 is_main: 'pointer',
 is_focused: 'pointer',
 get_name: 'pointer',
 get_identifier: 'pointer',
 get_parent: 'pointer',
 get_url: 'pointer',
 get_browser: 'pointer',
 visit_dom: 'pointer',
 get_v8context: 'pointer'
});

var CEF_PRINT_INFO = Struct('CEF_PRINT_INFO', {
 m_hDC: HDC,
 m_Rect: RECT,
 m_Scale: 'double'
});

var CEF_SETTINGS = Struct('CEF_SETTINGS', {
 size: size_t,
 multi_threaded_message_loop: 'int16',
 cache_path: CEF_STRING,
 user_agent: CEF_STRING,
 product_version: CEF_STRING,
 locale: CEF_STRING,
 extra_plugin_paths: CEF_STRING_LIST,
 log_file: CEF_STRING,
 log_severity: CEF_LOG_SEVERITY,
 graphics_implementation: CEF_GRAPHICS_IMPLEMENTATION,
 local_storage_quota: 'uint16',
 session_storage_quota: 'uint16',
 javascript_flags: CEF_STRING,
 auto_detect_proxy_settings_enabled: 'int16'
});

var CEF_BROWSER_SETTINGS = Struct('CEF_BROWSER_SETTINGS', {
 size: size_t,
 drag_drop_disabled: 'int16',
 load_drops_disabled: 'int16',
 history_disabled: 'int16',
 standard_font_family: CEF_STRING,
 fixed_font_family: CEF_STRING,
 serif_font_family: CEF_STRING,
 sans_serif_font_family: CEF_STRING,
 cursive_font_family: CEF_STRING,
 fantasy_font_family: CEF_STRING,
 default_font_size: 'int16',
 default_fixed_font_size: 'int16',
 minimum_font_size: 'int16',
 minimum_logical_font_size: 'int16',
 remote_fonts_disabled: 'int16',
 default_encoding: CEF_STRING,
 encoding_detector_enabled: 'int16',
 javascript_disabled: 'int16',
 javascript_open_windows_disallowed: 'int16',
 javascript_close_windows_disallowed: 'int16',
 javascript_access_clipboard_disallowed: 'int16',
 dom_paste_disabled: 'int16',
 caret_browsing_enabled: 'int16',
 java_disabled: 'int16',
 plugins_disabled: 'int16',
 universal_access_from_file_urls_allowed: 'int16',
 file_access_from_file_urls_allowed: 'int16',
 web_security_disabled: 'int16',
 xss_auditor_enabled: 'int16',
 image_load_disabled: 'int16',
 shrink_standalone_images_to_fit: 'int16',
 site_specific_quirks_disabled: 'int16',
 text_area_resize_disabled: 'int16',
 page_cache_disabled: 'int16',
 tab_to_links_disabled: 'int16',
 hyperlink_auditing_disabled: 'int16',
 user_style_sheet_enabled: 'int16',
 user_style_sheet_location: CEF_STRING,
 author_and_user_styles_disabled: 'int16',
 local_storage_disabled: 'int16',
 databases_disabled: 'int16',
 application_cache_disabled: 'int16',
 webgl_disabled: 'int16',
 accelerated_compositing_enabled: 'int16',
 threaded_compositing_enabled: 'int16',
 accelerated_layers_disabled: 'int16',
 accelerated_video_disabled: 'int16',
 accelerated_2d_canvas_disabled: 'int16',
 accelerated_drawing_disabled: 'int16',
 accelerated_plugins_disabled: 'int16',
 developer_tools_disabled: 'int16',
 fullscreen_enabled: 'int16'
});

var CEF_URLPARTS = Struct('CEF_URLPARTS', {
 spec: CEF_STRING,
 scheme: CEF_STRING,
 username: CEF_STRING,
 password: CEF_STRING,
 host: CEF_STRING,
 port: CEF_STRING,
 path: CEF_STRING,
 query: CEF_STRING
});

var CEF_COOKIE = Struct('CEF_COOKIE', {
 name: CEF_STRING,
 value: CEF_STRING,
 domain: CEF_STRING,
 path: CEF_STRING,
 secure: 'int16',
 httponly: 'int16',
 creation: CEF_TIME,
 last_access: CEF_TIME,
 has_expires: 'int16',
 expires: CEF_TIME
});

var CEF_MENU_INFO = Struct('CEF_MENU_INFO', {
 typeFlags: 'int16',
 x: 'int16',
 y: 'int16',
 linkUrl: CEF_STRING,
 imageUrl: CEF_STRING,
 pageUrl: CEF_STRING,
 frameUrl: CEF_STRING,
 selectionText: CEF_STRING,
 misspelledWord: CEF_STRING,
 editFlags: 'int16',
 securityInfo: CEF_STRING
});

var CEF_RECT = Struct('CEF_RECT', {
 x: 'int16',
 y: 'int16',
 width: 'int16',
 height: 'int16'
});

var CEF_PAPER_METRICS = Struct('CEF_PAPER_METRICS', {
 paper_type: CEF_PAPER_TYPE,
 length: 'double',
 width: 'double'
});

var CEF_PRINT_MARGINS = Struct('CEF_PRINT_MARGINS', {
 left: 'double',
 right: 'double',
 top: 'double',
 bottom: 'double',
 header: 'double',
 footer: 'double'
});

var CEF_PRINT_OPTIONS = Struct('CEF_PRINT_OPTIONS', {
 page_orientation: CEF_PAGE_ORIENTATION,
 paper_metrics: CEF_PAPER_METRICS,
 paper_margins: CEF_PRINT_MARGINS
});

var CEF_POPUP_FEATURES = Struct('CEF_POPUP_FEATURES', {
 x: 'int16',
 xSet: 'int16',
 y: 'int16',
 ySet: 'int16',
 width: 'int16',
 widthSet: 'int16',
 height: 'int16',
 heightSet: 'int16',
 menuBarVisible: 'int16',
 statusBarVisible: 'int16',
 toolBarVisible: 'int16',
 locationBarVisible: 'int16',
 scrollbarsVisible: 'int16',
 resizable: 'int16',
 fullscreen: 'int16',
 dialog: 'int16',
 additionalFeatures: CEF_STRING_LIST
});

var CEF_PROXY_INFO = Struct('CEF_PROXY_INFO', {
 proxyType: CEF_PROXY_TYPE,
 proxyList: CEF_STRING
});

var CEF_REQUEST = Struct('CEF_REQUEST', {
 base: CEF_BASE,
 get_url: 'pointer',
 set_url: 'pointer',
 get_method: 'pointer',
 set_method: 'pointer',
 get_post_data: 'pointer',
 set_post_data: 'pointer',
 get_header_map: 'pointer',
 set_header_map: 'pointer',
 set: 'pointer',
 get_flags: 'pointer',
 set_flags: 'pointer',
 get_first_party_for_cookies: 'pointer',
 set_first_party_for_cookies: 'pointer'
});

var CEF_STREAM_READER = Struct('CEF_STREAM_READER', {
 base: CEF_BASE,
 read: 'pointer',
 seek: 'pointer',
 tell: 'pointer',
 eof: 'pointer'
});

var CEF_DOMVISITOR = Struct('CEF_DOMVISITOR', {
 base: CEF_BASE,
 visit: 'pointer'
});

var CEF_V8CONTEXT = Struct('CEF_V8CONTEXT', {
 base: CEF_BASE,
 get_browser: 'pointer',
 get_frame: 'pointer',
 get_global: 'pointer',
 enter: 'pointer',
 exit: 'pointer',
 is_same: 'pointer'
});

var CEF_PROXY_HANDLER = Struct('CEF_PROXY_HANDLER', {
 base: CEF_BASE,
 get_proxy_for_url: 'pointer'
});

var CEF_APP = Struct('CEF_APP', {
 base: CEF_BASE,
 get_proxy_handler: 'pointer'
});

var CEF_LIFE_SPAN_HANDLER = Struct('CEF_LIFE_SPAN_HANDLER', {
 base: CEF_BASE,
 on_before_popup: 'pointer',
 on_after_created: 'pointer',
 run_modal: 'pointer',
 do_close: 'pointer',
 on_before_close: 'pointer'
});

var CEF_LOAD_HANDLER = Struct('CEF_LOAD_HANDLER', {
 base: CEF_BASE,
 on_load_start: 'pointer',
 on_load_end: 'pointer',
 on_load_error: 'pointer'
});

var CEF_RESPONSE_HANDLER = Struct('CEF_RESPONSE_HANDLER', {
 base: CEF_BASE,
 on_before_browse: 'pointer',
 on_before_resource_load: 'pointer',
 on_resource_redirect: 'pointer',
 on_resource_response: 'pointer',
 on_protocol_execution: 'pointer',
 get_download_handler: 'pointer',
 get_auth_credentials: 'pointer'
});

var CEF_RESPONSE = Struct('CEF_RESPONSE', {
 base: CEF_BASE,
 get_status: 'pointer',
 set_status: 'pointer',
 get_status_text: 'pointer',
 set_status_text: 'pointer',
 get_mime_type: 'pointer',
 set_mime_type: 'pointer',
 get_header: 'pointer',
 get_header_map: 'pointer',
 set_header_map: 'pointer'
});

var CEF_CONTENT_HANDLER = Struct('CEF_CONTENT_HANDLER', {
 base: CEF_BASE,
 process_data: 'pointer',
 drain: 'pointer'
});

var CEF_DOWNLOAD_HANDLER = Struct('CEF_DOWNLOAD_HANDLER', {
 base: CEF_BASE,
 received_data: 'pointer',
 complete: 'pointer'
});

var CEF_DISPLAY_HANDLER = Struct('CEF_DISPLAY_HANDLER', {
 base: CEF_BASE,
 on_nav_state_change: 'pointer',
 on_address_change: 'pointer',
 on_contents_size_change: 'pointer',
 on_title_change: 'pointer',
 on_tooltip: 'pointer',
 on_status_message: 'pointer',
 on_console_message: 'pointer'
});

var CEF_FOCUS_HANDLER = Struct('CEF_FOCUS_HANDLER', {
 base: CEF_BASE,
 on_take_focus: 'pointer',
 on_set_focus: 'pointer',
 on_focused_node_changed: 'pointer'
});

var CEF_DOMNODE = Struct('CEF_DOMNODE', {
 base: CEF_BASE,
 get_type: 'pointer',
 is_text: 'pointer',
 is_element: 'pointer',
 is_form_control_element: 'pointer',
 get_form_control_element_type: 'pointer',
 is_same: 'pointer',
 get_name: 'pointer',
 get_value: 'pointer',
 set_value: 'pointer',
 get_as_markup: 'pointer',
 get_document: 'pointer',
 get_parent: 'pointer',
 get_previous_sibling: 'pointer',
 get_next_sibling: 'pointer',
 has_children: 'pointer',
 get_first_child: 'pointer',
 get_last_child: 'pointer',
 add_event_listener: 'pointer',
 get_element_tag_name: 'pointer',
 has_element_attributes: 'pointer',
 has_element_attribute: 'pointer',
 get_element_attribute: 'pointer',
 get_element_attributes: 'pointer',
 set_element_attribute: 'pointer',
 get_element_inner_text: 'pointer'
});

var CEF_KEYBOARD_HANDLER = Struct('CEF_KEYBOARD_HANDLER', {
 base: CEF_BASE,
 on_key_event: 'pointer'
});

var CEF_MENU_HANDLER = Struct('CEF_MENU_HANDLER', {
 base: CEF_BASE,
 on_before_menu: 'pointer',
 get_menu_label: 'pointer',
 on_menu_action: 'pointer'
});

var CEF_PRINT_HANDLER = Struct('CEF_PRINT_HANDLER', {
 base: CEF_BASE,
 get_print_options: 'pointer',
 get_print_header_footer: 'pointer'
});

var CEF_FIND_HANDLER = Struct('CEF_FIND_HANDLER', {
 base: CEF_BASE,
 on_find_result: 'pointer'
});

var CEF_JSDIALOG_HANDLER = Struct('CEF_JSDIALOG_HANDLER', {
 base: CEF_BASE,
 on_jsalert: 'pointer',
 on_jsconfirm: 'pointer',
 on_jsprompt: 'pointer'
});

var CEF_V8CONTEXT_HANDLER = Struct('CEF_V8CONTEXT_HANDLER', {
 base: CEF_BASE,
 on_context_created: 'pointer',
 on_context_released: 'pointer'
});

var CEF_RENDER_HANDLER = Struct('CEF_render_HANDLER', {
 base: CEF_BASE,
 get_view_rect: 'pointer',
 get_screen_rect: 'pointer',
 get_screen_point: 'pointer',
 on_popup_show: 'pointer',
 on_popup_size: 'pointer',
 on_paint: 'pointer',
 on_cursor_change: 'pointer'
});

var CEF_DRAG_HANDLER = Struct('CEF_DRAG_HANDLER', {
 base: CEF_BASE,
 on_drag_start: 'pointer',
 on_drag_enter: 'pointer'
});

var CEF_DRAG_DATA = Struct('CEF_DRAG_DATA', {
 base: CEF_BASE,
 is_link: 'pointer',
 is_fragment: 'pointer',
 is_file: 'pointer',
 get_link_url: 'pointer',
 get_link_title: 'pointer',
 get_link_metadata: 'pointer',
 get_fragment_text: 'pointer',
 get_fragment_html: 'pointer',
 get_fragment_base_url: 'pointer',
 get_file_extension: 'pointer',
 get_file_name: 'pointer',
 get_file_names: 'pointer'
});

var CEF_POST_DATA = Struct('CEF_POST_DATA', {
 base: CEF_BASE,
 get_element_count: 'pointer',
 get_elements: 'pointer',
 remove_element: 'pointer',
 add_element: 'pointer',
 remove_elements: 'pointer'
});

var CEF_POST_DATA_ELEMENT = Struct('CEF_POST_DATA_ELEMENT', {
 base: CEF_BASE,
 set_to_empty: 'pointer',
 set_to_file: 'pointer',
 set_to_bytes: 'pointer',
 get_type: 'pointer',
 get_file: 'pointer',
 get_bytes_count: 'pointer',
 get_bytes: 'pointer'
});

var CEF_READ_HANDLER = Struct('CEF_READ_HANDLER', {
 base: CEF_BASE,
 read: 'pointer',
 seek: 'pointer',
 tell: 'pointer',
 eof: 'pointer'
});

var CEF_WRITE_HANDLER = Struct('CEF_WRITE_HANDLER', {
 base: CEF_BASE,
 write: 'pointer',
 seek: 'pointer',
 tell: 'pointer',
 flush: 'pointer'
});

var CEF_STREAM_WRITER = Struct('CEF_STREAM_WRITER', {
 base: CEF_BASE,
 write: 'pointer',
 seek: 'pointer',
 tell: 'pointer',
 flush: 'pointer'
});

var CEF_V8VALUE = Struct('CEF_V8VALUE', {
 base: CEF_BASE,
 is_undefined: 'pointer',
 is_null: 'pointer',
 is_bool: 'pointer',
 is_int: 'pointer',
 is_double: 'pointer',
 is_date: 'pointer',
 is_string: 'pointer',
 is_object: 'pointer',
 is_array: 'pointer',
 is_function: 'pointer',
 is_same: 'pointer',
 get_bool_value: 'pointer',
 get_int_value: 'pointer',
 get_double_value: 'pointer',
 get_date_value: 'pointer',
 get_string_value: 'pointer',
 has_value_bykey: 'pointer',
 has_value_byindex: 'pointer',
 delete_value_bykey: 'pointer',
 delete_value_byindex: 'pointer',
 get_value_bykey: 'pointer',
 get_value_byindex: 'pointer',
 set_value_bykey: 'pointer',
 set_value_byindex: 'pointer',
 set_value_byaccessor: 'pointer',
 get_keys: 'pointer',
 get_user_data: 'pointer',
 get_array_length: 'pointer',
 get_function_name: 'pointer',
 get_function_handler: 'pointer',
 execute_function: 'pointer',
 execute_function_with_context: 'pointer'
});

var CEF_V8HANDLER = Struct('CEF_V8HANDLER', {
 base: CEF_BASE,
 execute: 'pointer'
});

var CEF_V8ACCESSOR = Struct('CEF_V8ACCESSOR', {
 base: CEF_BASE,
 get: 'pointer',
 set: 'pointer'
});

var CEF_V8EXCEPTION = Struct('CEF_V8EXCEPTION', {
 base: CEF_BASE,
 get_message: 'pointer',
 get_source_line: 'pointer',
 get_script_resource_name: 'pointer',
 get_line_number: 'pointer',
 get_start_position: 'pointer',
 get_end_position: 'pointer',
 get_start_column: 'pointer',
 get_end_column: 'pointer'
});

var CEF_SCHEME_HANDLER_FACTORY = Struct('CEF_SCHEME_HANDLER_FACTORY', {
 base: CEF_BASE,
 create: 'pointer'
});

var CEF_SCHEME_HANDLER = Struct('CEF_SCHEME_HANDLER', {
 base: CEF_BASE,
 process_request: 'pointer',
 get_response_headers: 'pointer',
 read_response: 'pointer',
 cancel: 'pointer'
});

var CEF_SCHEME_HANDLER_CALLBACK = Struct('CEF_SCHEME_HANDLER_CALLBACK', {
 base: CEF_BASE,
 headers_available: 'pointer',
 bytes_available: 'pointer',
 cancel: 'pointer'
});

var CEF_WEB_URLREQUEST = Struct('CEF_WEB_URLREQUEST', {
 base: CEF_BASE,
 cancel: 'pointer',
 get_state: 'pointer'
});

var CEF_WEB_URLREQUEST_CLIENT = Struct('CEF_WEB_URLREQUEST_CLIENT', {
 base: CEF_BASE,
 on_state_change: 'pointer',
 on_redirect: 'pointer',
 on_headers_received: 'pointer',
 on_progress: 'pointer',
 on_data: 'pointer',
 on_error: 'pointer'
});

var CEF_XML_READER = Struct('CEF_XML_READER', {
 base: CEF_BASE,
 move_to_next_node: 'pointer',
 close: 'pointer',
 has_error: 'pointer',
 get_error: 'pointer',
 get_type: 'pointer',
 get_depth: 'pointer',
 get_local_name: 'pointer',
 get_prefix: 'pointer',
 get_qualified_name: 'pointer',
 get_namespace_uri: 'pointer',
 get_base_uri: 'pointer',
 get_xml_lang: 'pointer',
 is_empty_element: 'pointer',
 has_value: 'pointer',
 get_value: 'pointer',
 has_attributes: 'pointer',
 get_attribute_count: 'pointer',
 get_attribute_byindex: 'pointer',
 get_attribute_byqname: 'pointer',
 get_attribute_bylname: 'pointer',
 get_inner_xml: 'pointer',
 get_outer_xml: 'pointer',
 get_line_number: 'pointer',
 move_to_attribute_byindex: 'pointer',
 move_to_attribute_byqname: 'pointer',
 move_to_attribute_bylname: 'pointer',
 move_to_first_attribute: 'pointer',
 move_to_next_attribute: 'pointer',
 move_to_carrying_element: 'pointer'
});

var CEF_ZIP_READER = Struct('CEF_ZIP_READER', {
 base: CEF_BASE,
 move_to_first_file: 'pointer',
 move_to_next_file: 'pointer',
 move_to_file: 'pointer',
 close: 'pointer',
 get_file_name: 'pointer',
 get_file_size: 'pointer',
 get_file_last_modified: 'pointer',
 open_file: 'pointer',
 close_file: 'pointer',
 read_file: 'pointer',
 tell: 'pointer',
 eof: 'pointer'
});

var CEF_DOMDOCUMENT = Struct('CEF_DOMDOCUMENT', {
 base: CEF_BASE,
 get_type: 'pointer',
 get_document: 'pointer',
 get_body: 'pointer',
 get_head: 'pointer',
 get_title: 'pointer',
 get_element_by_id: 'pointer',
 get_focused_node: 'pointer',
 has_selection: 'pointer',
 get_selection_start_node: 'pointer',
 get_selection_start_offset: 'pointer',
 get_selection_end_node: 'pointer',
 get_selection_end_offset: 'pointer',
 get_selection_as_markup: 'pointer',
 get_selection_as_text: 'pointer',
 get_base_url: 'pointer',
 get_complete_url: 'pointer'
});

var CEF_DOMEVENT_LISTENER = Struct('CEF_DOMEVENT_LISTENER', {
 base: CEF_BASE,
 handle_event: 'pointer'
});

var CEF_DOMEVENT = Struct('CEF_DOMEVENT', {
 base: CEF_BASE,
 get_type: 'pointer',
 get_category: 'pointer',
 get_phase: 'pointer',
 can_bubble: 'pointer',
 can_cancel: 'pointer',
 get_document: 'pointer',
 get_target: 'pointer',
 get_current_target: 'pointer'
});

var CEF_COMMAND_LINE = Struct('CEF_COMMAND_LINE', {
 base: CEF_BASE,
 init_from_argv: 'pointer',
 init_from_string: 'pointer',
 get_command_line_string: 'pointer',
 get_program: 'pointer',
 set_program: 'pointer',
 has_switches: 'pointer',
 has_switch: 'pointer',
 get_switch_value: 'pointer',
 get_switches: 'pointer',
 append_switch: 'pointer',
 append_switch_with_value: 'pointer',
 has_arguments: 'pointer',
 get_arguments: 'pointer',
 append_argument: 'pointer'
});


Method('cef_initialize', 'void', { settings: 'pointer', application: 'pointer' });
Method('cef_shutdown', 'void', {  });
Method('cef_do_message_loop_work', 'void', {  });
Method('cef_run_message_loop', 'void', {  });
Method('cef_quit_message_loop', 'void', {  });
Method('cef_register_extension', 'void', { extension_name: 'pointer', javascript_code: 'pointer', handler: 'pointer' });
Method('cef_register_custom_scheme', 'void', { scheme_name: 'pointer', is_standard: 'int16', is_local: 'int16', is_display_isolated: 'int16' });
Method('cef_register_scheme_handler_factory', 'void', { scheme_name: 'pointer', domain_name: 'pointer', factory: 'pointer' });
Method('cef_clear_scheme_handler_factories', 'void', {  });
Method('cef_add_cross_origin_whitelist_entry', 'void', { source_origin: 'pointer', target_protocol: 'pointer', target_domain: 'pointer', allow_target_subdomains: 'int16' });
Method('cef_remove_cross_origin_whitelist_entry', 'void', { source_origin: 'pointer', target_protocol: 'pointer', target_domain: 'pointer', allow_target_subdomains: 'int16' });
Method('cef_clear_cross_origin_whitelist', 'void', {  });
Method('cef_currently_on', 'void', { threadId: CEF_THREAD_ID });
Method('cef_post_task', 'void', { threadId: CEF_THREAD_ID, task: 'pointer' });
Method('cef_post_delayed_task', 'void', { threadId: CEF_THREAD_ID, task: 'pointer', delay_ms: 'int32' });
Method('cef_parse_url', 'void', { url: 'pointer', parts: 'pointer' });
Method('cef_create_url', 'void', { parts: 'pointer', url: 'pointer' });
Method('cef_visit_all_cookies', 'void', { visitor: 'pointer' });
Method('cef_visit_url_cookies', 'void', { url: 'pointer', includeHttpOnly: 'int16', visitor: 'pointer' });
Method('cef_set_cookie', 'void', { url: 'pointer', cookie: 'pointer' });
Method('cef_delete_cookies', 'void', { url: 'pointer', cookie_name: 'pointer' });
Method('cef_set_cookie_path', 'void', { path: 'pointer' });
Method('cef_visit_storage', 'void', { type: CEF_STORAGE_TYPE, origin: 'pointer', key: 'pointer', visitor: 'pointer' });
Method('cef_set_storage', 'void', { type: CEF_STORAGE_TYPE, origin: 'pointer', key: 'pointer', value: 'pointer' });
Method('cef_delete_storage', 'void', { type: CEF_STORAGE_TYPE, origin: 'pointer', key: 'pointer' });
Method('cef_set_storage_path', 'void', { type: CEF_STORAGE_TYPE, path: 'pointer' });
Method('cef_browser_create', 'void', { windowInfo: 'pointer', client: 'pointer', url: 'pointer', settings: 'pointer' });
Method('cef_browser_create_sync', CEF_BROWSER, { windowInfo: 'pointer', client: 'pointer', url: 'pointer', settings: 'pointer' });
Method('cef_request_create', CEF_REQUEST, {  });
Method('cef_post_data_create', CEF_POST_DATA, {  });
Method('cef_post_data_element_create', CEF_POST_DATA_ELEMENT, {  });
Method('cef_stream_reader_create_for_file', CEF_STREAM_READER, { fileName: 'pointer' });
Method('cef_stream_reader_create_for_data', CEF_STREAM_READER, { data: 'pointer', size: size_t });
Method('cef_stream_reader_create_for_handler', CEF_STREAM_READER, { handler: 'pointer' });
Method('cef_stream_writer_create_for_file', CEF_STREAM_WRITER, { fileName: 'pointer' });
Method('cef_stream_writer_create_for_handler', CEF_STREAM_WRITER, { handler: 'pointer' });
Method('cef_v8context_get_current_context', CEF_V8CONTEXT, {  });
Method('cef_v8context_get_entered_context', CEF_V8CONTEXT, {  });
Method('cef_v8context_in_context', 'void', {  });
Method('cef_v8value_create_undefined', CEF_V8VALUE, {  });
Method('cef_v8value_create_null', CEF_V8VALUE, {  });
Method('cef_v8value_create_bool', CEF_V8VALUE, { value: 'int16' });
Method('cef_v8value_create_int', CEF_V8VALUE, { value: 'int16' });
Method('cef_v8value_create_double', CEF_V8VALUE, { value: 'double' });
Method('cef_v8value_create_date', CEF_V8VALUE, { date: 'pointer' });
Method('cef_v8value_create_string', CEF_V8VALUE, { value: 'pointer' });
Method('cef_v8value_create_object', CEF_V8VALUE, { user_data: 'pointer' });
Method('cef_v8value_create_object_with_accessor', CEF_V8VALUE, { user_data: 'pointer', accessor: 'pointer' });
Method('cef_v8value_create_array', CEF_V8VALUE, {  });
Method('cef_v8value_create_function', CEF_V8VALUE, { name: 'pointer', handler: 'pointer' });
Method('cef_web_urlrequest_create', CEF_WEB_URLREQUEST, { request: 'pointer', client: 'pointer' });
Method('cef_xml_reader_create', CEF_XML_READER, { stream: 'pointer', encodingType: CEF_XML_ENCODING_TYPE, URI: 'pointer' });
Method('cef_zip_reader_create', CEF_ZIP_READER, { stream: 'pointer' });
Method('cef_command_line_create', CEF_COMMAND_LINE, {  });
