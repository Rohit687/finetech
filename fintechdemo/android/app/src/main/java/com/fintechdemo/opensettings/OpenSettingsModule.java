package com.fintechdemo.opensettings;

import static com.facebook.react.bridge.UiThreadUtil.runOnUiThread;

import android.app.Activity;
import android.content.Intent;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.util.DisplayMetrics;
import android.view.Display;
import android.view.KeyCharacterMap;
import android.view.KeyEvent;
import android.view.View;
import android.view.ViewConfiguration;
import android.view.WindowManager;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;

import java.util.HashMap;
import java.util.Map;

public class OpenSettingsModule extends ReactContextBaseJavaModule {
    private ReactApplicationContext context;
    private Callback uninstallCallback;

    @Override
    public String getName() {
        /**
         * return the string name of the NativeModule which represents this class in JavaScript
         * In JS access this module through React.NativeModules.OpenSettings
         */
        return "OpenSettings";
    }

    @ReactMethod
    public void openNetworkSettings(Callback cb) {
        Activity currentActivity = getCurrentActivity();

        if (currentActivity == null) {
            cb.invoke(false);
            return;
        }

        try {
            Intent intent = new Intent(android.provider.Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
            intent.setData(Uri.parse("package:com.fintechdemo"));
            currentActivity.startActivity(intent);
            cb.invoke(true);
        } catch (Exception e) {
            cb.invoke(e.getMessage());
        }
    }

    @ReactMethod
    public void exitApp() {
        android.os.Process.killProcess(android.os.Process.myPid());
        System.exit(1);
    }

    @ReactMethod
    public void bottomNavigationColor(String color) {
        Activity activity = getCurrentActivity();
        if (activity != null && Build.VERSION.SDK_INT >= 21)
            activity.getWindow().setNavigationBarColor(Color.parseColor(color));
    }

    @ReactMethod
    public void statusColor(String color, boolean isDark) {
        Activity activity = getCurrentActivity();
        if (activity != null && Build.VERSION.SDK_INT >= 21) {
            activity.getWindow().setStatusBarColor(Color.parseColor(color));
//            activity.runOnUiThread(new Runnable() {
//                @Override
//                public void run() {
//                    activity.getWindow().setStatusBarColor(Color.parseColor(color));
//                    if (isDark) {
//                        activity.getWindow().getDecorView().setSystemUiVisibility(~View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);//  set status text dark
//                    } else {
//                        activity.getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);//  set status text dark
//                    }
//                }
//            });

        }

    }


    @ReactMethod
    public void uninstallApk(Callback cb) {
        Activity currentActivity = getCurrentActivity();

        if (currentActivity == null) {
            cb.invoke(false);
            return;
        }

        Intent intent = new Intent(Intent.ACTION_DELETE);
        intent.setData(Uri.parse("package:com.fintechdemo"));
        uninstallCallback = cb;
//        currentActivity.startActivityForResult(intent, 111);
        currentActivity.startActivity(intent);
    }


    @ReactMethod
    public void getVersionNumber(Callback error, Callback success) throws PackageManager.NameNotFoundException {

        WritableMap map = new WritableNativeMap();
        PackageInfo pInfo = this.context.getPackageManager().getPackageInfo(this.context.getPackageName(), 0);
        map.putString("version", (String) pInfo.versionName);
        map.putString("build", String.valueOf(pInfo.versionCode));
        success.invoke(map);
    }

    @ReactMethod
    public void setIdleTimerDisabled(final boolean disabled) {
        Activity activity = getCurrentActivity();

        if (activity != null) {
            activity.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    if (disabled) {
                        activity.getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
                    } else {
                        activity.getWindow().clearFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
                    }
                }
            });
        }
    }

    @ReactMethod
    public void disableScreenShot() {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                try {
                    getCurrentActivity().getWindow().addFlags(WindowManager.LayoutParams.FLAG_SECURE);

                } catch (Exception e) {

                }
            }
        });
    }

    @ReactMethod
    public void allowScreenShot() {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                try {
                    getCurrentActivity().getWindow().clearFlags(WindowManager.LayoutParams.FLAG_SECURE);

                } catch (Exception e) {

                }
            }
        });
    }

    @ReactMethod
    public void GetBottomNavigationHeight(Callback cb) {
        int heightValue = 0;
        boolean hasMenuKey = ViewConfiguration.get(this.context).hasPermanentMenuKey();
        int resourceId = this.context.getResources().getIdentifier("navigation_bar_height", "dimen", "android");
        if (resourceId > 0 && !hasMenuKey) {
//            return getResources().getDimensionPixelSize(resourceId);
            heightValue = this.context.getResources().getDimensionPixelSize(resourceId);
            cb.invoke(this.context.getResources().getDimensionPixelSize(resourceId));
            return;
        }
        cb.invoke(heightValue);
    }

    @Override
    public Map<String, Object> getConstants() {
        Map<String, Object> constants = new HashMap<>();

        constants.put("has_soft_keys", hasSoftKeys());

        return constants;
    }

    private boolean hasSoftKeys() {
        boolean hasSoftwareKeys;

        Activity activity = getCurrentActivity();

        if (activity == null) {
            return true;
        }

        WindowManager window = getCurrentActivity().getWindowManager();

        if (window != null && Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR1) {
            Display d = getCurrentActivity().getWindowManager().getDefaultDisplay();

            DisplayMetrics realDisplayMetrics = new DisplayMetrics();
            d.getRealMetrics(realDisplayMetrics);

            int realHeight = realDisplayMetrics.heightPixels;
            int realWidth = realDisplayMetrics.widthPixels;

            DisplayMetrics displayMetrics = new DisplayMetrics();
            d.getMetrics(displayMetrics);

            int displayHeight = displayMetrics.heightPixels;
            int displayWidth = displayMetrics.widthPixels;

            hasSoftwareKeys = (realWidth - displayWidth) > 0 || (realHeight - displayHeight) > 0;
        } else {
            // boolean hasMenuKey = ViewConfiguration.get(mContext).hasPermanentMenuKey();
            boolean hasHomeKey = KeyCharacterMap.deviceHasKey(KeyEvent.KEYCODE_HOME);
            boolean hasBackKey = KeyCharacterMap.deviceHasKey(KeyEvent.KEYCODE_BACK);

            hasSoftwareKeys = !hasHomeKey && !hasBackKey;
        }

        return hasSoftwareKeys;
    }

    /* constructor */
    public OpenSettingsModule(ReactApplicationContext reactContext) {

        super(reactContext);
        this.context = reactContext;
    }
}