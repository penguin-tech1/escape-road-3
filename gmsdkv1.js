// Stubbed gmsdkv1.js to bypass external SDK/license/ad gate for GitHub Pages hosting.
// This file sets minimal globals and immediately signals the SDK is ready.
(function(){
  try {
    window.GMSOFT_SDKTYPE = window.GMSOFT_SDKTYPE || "gm";
    window.GMSOFT_SIGNED = window.GMSOFT_SIGNED || "";
    window.GMSOFT_ADS_INFO = { enable: "no", sdk_type: "gm" };
    window.GMSOFT_GAME_INFO = window.GMSOFT_GAME_INFO || {};

    // Provide no-op implementations for functions the original script exposed.
    window.ads_h5 = function() { console.log('ads_h5 stub called'); };
    window.ads_wgplayer = function() { console.log('ads_wgplayer stub called'); };
    window.is_diff_host = function() { return false; };

    // Provide a synchronous httpGet that returns an empty JSON string (original used sync XHR).
    window.httpGet = function(url) {
      console.log('httpGet stub called for', url);
      return JSON.stringify({});
    };

    // Signal to the page that the SDK is ready so any listeners proceed.
    document.dispatchEvent(new CustomEvent('gmsoftSdkReady'));
    console.log('gmsdkv1.js stub loaded: SDK/ad gate bypassed for Pages hosting');
  } catch (e) {
    console.error('Error in gmsdkv1 stub:', e);
  }
})();
