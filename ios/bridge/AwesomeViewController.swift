//
//  AwsomeViewController.swift
//  bridge
//
//  Created by MitsuhideOhi on 2017/11/24.
//  Copyright © 2017年 Facebook. All rights reserved.
//

import Foundation

class AwesomeViewController: UIViewController {
  @IBOutlet weak var label: UILabel!
  
  func showAwsomeMessage(message: String) {
    DispatchQueue.main.async {
      self.label.text = message
    }
  }
}

