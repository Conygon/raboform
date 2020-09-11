export class HelperService {

  /*
      This is an example from: https://codeburst.io/digit-only-directive-in-angular-3db8a94d80c3
      This can be greatly improved since now it allows for copy pasting non numeric characters.
      I do see that the Rabobank site itself has a better implementation ;-)
   */
  static handleNumericOnlyKeyPress(e: KeyboardEvent) {
    if(
      // Allow: Delete, Backspace, Tab, Escape, Enter, etc
      ["Backspace", "Delete", "Tab", "Escape", "Enter", "Home", "End", "ArrowLeft", "ArrowRight", "Clear", "Copy", "Paste"].indexOf(e.key) > -1 ||
      (e.key === 'a' && e.ctrlKey === true) || // Allow: Ctrl+A
      (e.key === 'c' && e.ctrlKey === true) || // Allow: Ctrl+C
      (e.key === 'v' && e.ctrlKey === true) || // Allow: Ctrl+V
      (e.key === 'x' && e.ctrlKey === true) || // Allow: Ctrl+X
      (e.key === 'r' && e.ctrlKey === true) || // Allow: Ctrl+R
      (e.key === 'a' && e.metaKey === true) || // Cmd+A (Mac)
      (e.key === 'c' && e.metaKey === true) || // Cmd+C (Mac)
      (e.key === 'r' && e.metaKey === true) || // Cmd+C (Mac)
      (e.key === 'v' && e.metaKey === true) || // Cmd+V (Mac)
      (e.key === 'x' && e.metaKey === true) // Cmd+X (Mac)
    ) {
      return;  // let it happen, don't do anything
    }
    // Ensure that it is a number and stop the keypress
    if (e.key === ' ' || isNaN(Number(e.key))) {
      e.preventDefault();
    }
  }

}
