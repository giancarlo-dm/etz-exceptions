import { Exception } from "./exception";

/**
 * Indicates that a method or constructor received an illegal or inappropriate parameter/argument.
 *
 * @version 1.0.0
 * @author Giancarlo Dalle Mole
 * @since 21/01/2019
 */
export class IllegalArgumentException<D = void> extends Exception<D> {

    //#region Public Attributes
    /**
     * Name of the argument that caused the exception.
     */
    public readonly argumentName: string;
    //#endregion

    //#region Constructor
    constructor();
    constructor(message: string);
    constructor(message: string, argumentName: string);
    constructor(message: string, argumentName: string, details: D);
    constructor(...args: []|[string]|[string, string]|[string, string, D]) {

        if (args.length === 0) {
            super();
        }
        else if (args.length === 1) {
            super(args[0]);
        }
        else if (args.length === 2) {
            super(args[0]);
            this.argumentName = args[1];
        }
        else {
            super(args[0], args[2]);
            this.argumentName = args[1];
        }
    }
    //#endregion
}
