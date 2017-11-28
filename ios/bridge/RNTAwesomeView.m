//
//  RNTAwesomeView.m
//  bridge
//
//  Created by MitsuhideOhi on 2017/11/24.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(RNTAwesomeView, RCTViewManager)
RCT_EXTERN_METHOD(showAwesomeMessage:(NSString *)message)
@end

