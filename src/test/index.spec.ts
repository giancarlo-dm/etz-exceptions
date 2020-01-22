import {
    Exception, IllegalArgumentException, IllegalStateException, NotImplementedYetException,
    UnsupportedOperationException
} from "../index";

const exception: Exception = new Exception("A simple exception");
const illegalArgumentException: IllegalArgumentException = new IllegalArgumentException("\"quantity\" must be greater than 0 (zero)", "quantity");
const illegalStateException: IllegalStateException<string> = new IllegalStateException("The server is not yet running! Cannot listen to requests.", "ILLEGAL_STATE");
const notImplementedYetException: NotImplementedYetException = new NotImplementedYetException("This feature will be implemented on version 2.0.0");
const unsupportedOperationException: UnsupportedOperationException<{class: Function}> = new UnsupportedOperationException("The operation \"abort\" is not supported in this context.", "UNSUPPORTED_ABORT_OPERATION", {class: UnsupportedOperationException});

console.log(exception);
console.log(illegalArgumentException);
console.log(illegalStateException);
console.log(notImplementedYetException);
console.log(unsupportedOperationException);
