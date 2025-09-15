package com.myreact.app;

import android.os.Bundle;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Get the WebView
        WebView webView = (WebView) this.bridge.getWebView();

        // Disable the overscroll glow effect
        webView.setOverScrollMode(WebView.OVER_SCROLL_NEVER);

        // Optional: Prevent bounce effect too
        webView.setVerticalScrollBarEnabled(false);
        webView.setHorizontalScrollBarEnabled(false);

        // Keep links inside the app instead of external browser
        webView.setWebViewClient(new WebViewClient());
    }
}
