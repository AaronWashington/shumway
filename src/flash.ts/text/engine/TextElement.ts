/**
 * Copyright 2013 Mozilla Foundation
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Class: TextElement
module Shumway.AVM2.AS.flash.text.engine {
  import notImplemented = Shumway.Debug.notImplemented;
  import asCoerceString = Shumway.AVM2.Runtime.asCoerceString;
  export class TextElement extends flash.text.engine.ContentElement {
    
    // Called whenever the class is initialized.
    static classInitializer: any = null;
    
    // Called whenever an instance of the class is initialized.
    static initializer: any = null;
    
    // List of static symbols to link.
    static staticBindings: string [] = null; // [];
    
    // List of instance symbols to link.
    static bindings: string [] = null; // [];
    
    constructor (text: string = null, elementFormat: flash.text.engine.ElementFormat = null, eventMirror: flash.events.EventDispatcher = null, textRotation: string = "rotate0") {
      text = asCoerceString(text); elementFormat = elementFormat; eventMirror = eventMirror; textRotation = asCoerceString(textRotation);
      false && super(undefined, undefined, undefined);
      notImplemented("Dummy Constructor: public flash.text.engine.TextElement");
    }
    
    // JS -> AS Bindings
    
    
    // AS -> JS Bindings
    
    // _text: string;
    set text(value: string) {
      value = asCoerceString(value);
      notImplemented("public flash.text.engine.TextElement::set text"); return;
      // this._text = value;
    }
    replaceText(beginIndex: number /*int*/, endIndex: number /*int*/, newText: string): void {
      beginIndex = beginIndex | 0; endIndex = endIndex | 0; newText = asCoerceString(newText);
      notImplemented("public flash.text.engine.TextElement::replaceText"); return;
    }
  }
}
