/**
 * This class and its subclasses are exceptions that are not considered critical (i.e. they are not
 * catastrophic errors), and the application can be safely recovered if the exception is treated
 * by a try-catch block.
 * @param D (optional) The type of the ``details`` argument. Default: ``void``
 *
 * @version 1.0.0
 * @author Giancarlo Dalle Mole
 * @since 21/01/2019
 */
export class Exception<D = void> extends Error {

    //#region Public Attributes
    /**
     * Some extra details.
     */
    public readonly details: D;
    //#endregion

    //#region Constructor
    constructor();
    constructor(message: string);
    constructor(message: string, details: D);
    constructor(...args: []|[string]|[string, D]) {

        if (args.length === 0) {
            super("Exception");
        }
        else if (args.length === 1) {
            super(args[0]);
        }
        else {
            super(args[0]);
            this.details = args[1];
        }

        this.name = this.constructor.name;
    }
    //#endregion
}
