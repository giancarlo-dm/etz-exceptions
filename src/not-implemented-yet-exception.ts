import { Exception } from "./exception";

/**
 * Indicates that an method/function/constructor is not yet implemented but will be available in the
 * future.
 *
 * @version 1.0.0
 * @author Giancarlo Dalle Mole
 * @since 21/01/2019
 */
export class NotImplementedYetException<D = void> extends Exception<D> {

    //#region Constructor
    constructor()
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
