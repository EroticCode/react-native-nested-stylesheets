import invariant from 'invariant';

export default class NestedStyleSheetValidation {
  static validateNestedStyle(nestedStyles) {
    if (!__DEV__) {
        return;
    }

    // if you are nesting styles no parent element may have anything but
    // objects ({}) as children
    for (let prop of Object.keys(nestedStyles)) {
      const styleObj = nestedStyles[prop];
      if (Object.prototype.toString.call(styleObj) !== '[object Object]') {
        styleError(`"${styleObj}" is not a plain Javascript object`, prop,
          `StyleSheet  ${prop}`, 'Parents of nested styles can only have plain \
          Javascript objects ({...}) as children');
      }
    }
  }
}

const styleError = function(message1, style, caller = '<<unknown>>', message2 = '') {
  invariant(
    false,
    `${message1}\n${caller}: ${JSON.stringify(style, null, '  ')}${message2}`,
  );
};
