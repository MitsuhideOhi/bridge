//
//  RNTAwesomeView.swift
//  bridge
//
//  Created by MitsuhideOhi on 2017/11/24.
//  Copyright © 2017年 Facebook. All rights reserved.
//

import UIKit

@objc(RNTAwesomeView)
class RNTAwesomeView : RCTViewManager {
  var awesomeViewController: AwesomeViewController?
  
  override func view() -> UIView! {
    awesomeViewController = UIStoryboard(name: "Main", bundle: nil).instantiateViewController(
      withIdentifier: "AwesomeViewController") as? AwesomeViewController
    guard let awesomeViewController = awesomeViewController else {
      return nil
    }
    return awesomeViewController.view
  }
  
  @objc func showAwesomeMessage(_ message: String) -> Void {
    guard let awesomeViewController = awesomeViewController else {
      return
    }
    awesomeViewController.showAwsomeMessage(message: message)
  }
}
