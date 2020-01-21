import { Exception } from "./exception";

/**
 * Indicates that a given operation is not supported and never will be.
 *
 * @version 1.0.0
 * @author Giancarlo Dalle Mole
 * @since 21/01/2019
 */
export class UnsupportedOperationException<D = void> extends Exception<D> {

    //#region Public Attributes
    /**
     * The reason for the operation not being supported.
     */
    public readonly reason: string;
    //#endregion

    //#region Constructor
    constructor();
    constructor(message: string);
    constructor(message: string, reason: string);
    constructor(message: string, reason: string, details: D);
    constructor(...args: []|[string]|[string, string]|[string, string, D]) {

        if (args.length === 0) {
            super();
        }
        else if (args.length === 1) {
            super(args[0]);
        }
        else if (args.length === 2) {
            super(args[0]);
            this.reason = args[1];
        }
        else {
            super(args[0], args[2]);
            this.reason = args[1];
        }
    }
    //#endregion
}
