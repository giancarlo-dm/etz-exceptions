import { Exception } from "./exception";

/**
 * Signals that a method has been invoked at an illegal or inappropriate time. In other words, the
 * NodeJS environment, NodeJS application or the resource is not in an appropriate state for the
 * requested operation.
 *
 * @version 1.0.0
 * @author Giancarlo Dalle Mole
 * @since 09/14/2019
 */
export class IllegalStateException<D = void> extends Exception<D> {

    //#region Constructor
    constructor();
    constructor(message: string);
    constructor(message: string, details: D);
    constructor(...args: []|[string]|[string, D]){

        if (args.length === 0) {
            super();
        }
        else if (args.length === 1) {
            super(args[0]);
        }
        else {
            super(args[0], args[1]);
        }
    }
    //#endregion
}
