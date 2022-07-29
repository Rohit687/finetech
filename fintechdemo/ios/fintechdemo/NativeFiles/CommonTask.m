//
//  FileManagerTask.m
//  custommediaproject
//
//  Created by Rohit_MacMini on 11/07/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "CommonTask.h"
#import <UIKit/UIKit.h>

@implementation CommonTask

RCT_EXPORT_MODULE();
- (NSArray<NSString *> *)supportedEvents {
  return @[@"CommonTask"];
}

RCT_EXPORT_METHOD(getStatusHeight:(RCTResponseSenderBlock)callback)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    float topPadding = 20;
    float bottomPadding = 0;
    if (@available(iOS 11.0, *)) {
      UIWindow *window = UIApplication.sharedApplication.keyWindow;
      topPadding = window.safeAreaInsets.top;
      bottomPadding = window.safeAreaInsets.bottom;
    }
    
    NSMutableDictionary *statusDict = [NSMutableDictionary dictionary];
    
    [statusDict setObject: [NSNumber numberWithFloat:topPadding]  forKey: @"top"];
    [statusDict setObject: [NSNumber numberWithFloat:bottomPadding] forKey:  @"bottom"];
    
    callback(@[[NSNull null], statusDict]);
  });
}

RCT_EXPORT_METHOD(getVersionNumber:(RCTResponseSenderBlock)callback)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    NSMutableDictionary *versionDict = [NSMutableDictionary dictionary];
    [versionDict setObject: [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleShortVersionString"]  forKey: @"version"];
    [versionDict setObject: [[[NSBundle mainBundle] infoDictionary] objectForKey:@"kCFBundleVersionKey"] forKey:  @"build"];
    callback(@[[NSNull null], versionDict]);
  });
}

RCT_EXPORT_METHOD(setIdleTimerDisabled:(BOOL)disabled)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    [UIApplication sharedApplication].idleTimerDisabled = disabled;
  });
}

@end


