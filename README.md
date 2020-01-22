# Enterprize Exceptions (etz-exceptions)

Tired of using the plain ``Error`` class? Want some common ``Exceptions`` out of the box? Want to add details in an elegant and typed way? Start using ***Enterprize Exceptions***!

[![npm version](https://badge.fury.io/js/%40enterprize%2Fexceptions.svg)](https://badge.fury.io/js/%40enterprize%2Fexceptions) 

# Features

Jokes aside :grin:, the following exceptions are implemented out of the box:

- ``Exception``
- ``IllegalArgumentException``
- ``IllegalStateException``
- ``NotImplementedYetException``
- ``UnsupportedOperationException``

Extend any of the above to create your custom exception.

# Public API

## ``Exception<D = void> extends Error``

Base class of all exceptions. This class and its subclasses are exceptions that are not considered critical (i.e. they are not catastrophic errors), and the application can be safely recovered if the exception is treated by a try-catch block.

Generic types:

- ``D``: (optional) The type of the ``details`` argument. Default: ``void``

Inherits: ``Error``

### Constructors

- ``constructor()``
- ``constructor(message: string)``
- ``constructor(message: string, details: D)``

|Arguments|Type|Description|
|---|:---:|---|
|``message``|``string``|Simple text message. Same parameter as in ``Error``. **Default:** ``"Exception"``|
|``details``|``D``|Some data that represents details of the exception. Can be anything.|

### Attributes

|Attribute|Type|Description|
|---|:---:|---|
|``name``|``string``|Name of the error. **Default:** The class name (or its subclass)|
|``message``|``string``|Error message. **Default:** ``"Exception"``|
|``stack``|``string``|Error stack caputured.|

## ``IllegalArgumentException<D = void> extends Exception<D>``

Indicates that a method or constructor received an illegal or inappropriate parameter/argument.

Generic types:

- ``D``: (optional) The type of the ``details`` argument. Default: ``void``

Inherits: [``Exception``](#exceptiond--void-extends-error)

Constructors:

- ``constructor()``
- ``constructor(message: string)``
- ``constructor(message: string, argumentName: string)``
- ``constructor(message: string, argumentName: string, details: D)``

|Arguments|Type|Description|
|---|:---:|---|
|``message``|``string``|Simple text message. Same parameter as in ``Error``. **Default:** ``"Exception"``|
|``argumentName``|``string``|Name of the argument or parameter that caused the exception.|
|``details``|``D``|Some data that represents details of the exception. Can be anything.|

### Attributes

See ***Inherits*** for the inherited attributes.  

|Attribute|Type|Description|
|---|:---:|---|
|``argumentName``|``string``|Name of the argument that caused the exception.|

## ``IllegalStateException<D = void> extends Exception<D>``

Signals that a method has been invoked at an illegal or inappropriate time. In other words, the NodeJS environment, NodeJS application or the resource is not in an appropriate state for the requested operation.

Generic types:

- ``D``: (optional) The type of the ``details`` argument. Default: ``void``

Inherits: [``Exception``](#exceptiond--void-extends-error)

Constructors:

- ``constructor(message: string)``
- ``constructor(message: string, details: D)``

|Arguments|Type|Description|
|---|:---:|---|
|``message``|``string``|Simple text message. Same parameter as in ``Error``. **Default:** ``"Exception"``|
|``details``|``D``|Some data that represents details of the exception. Can be anything.|

### Attributes

See ***Inherits*** for the inherited attributes.

## ``NotImplementedYetException<D = void> extends Exception<D>``

Indicates that an method/function/constructor is not yet implemented but will be available in the future.

Generic types:

- ``D``: (optional) The type of the ``details`` argument. Default: ``void``

Inherits: [``Exception``](#exceptiond--void-extends-error)

Constructors

- ``constructor(message: string)``
- ``constructor(message: string, details: D)``

|Arguments|Type|Description|
|---|:---:|---|
|``message``|``string``|Simple text message. Same parameter as in ``Error``. **Default:** ``"Exception"``|
|``details``|``D``|Some data that represents details of the exception. Can be anything.|

### Attributes

See ***Inherits*** for the inherited attributes.

## ``UnsupportedOperationException<D = void> extends Exception<D>``

Indicates that a given operation is not supported and never will be.

Generic types:

- ``D``: (optional) The type of the ``details`` argument. Default: ``void``

Inherits: [``Exception``](#exceptiond--void-extends-error)


Constructors:

- ``constructor(message: string)``
- ``constructor(message: string, reason: string)``
-  ``constructor(message: string, reason: string, details: D)``

|Arguments|Type|Description|
|---|:---:|---|
|``message``|``string``|Simple text message. Same parameter as in ``Error``. **Default:** ``"Exception"``|
|``reason``|``string``|The reason for the operation not being supported.|
|``details``|``D``|Some data that represents details of the exception. Can be anything.|

### Attributes

See ***Inherits*** for the inherited attributes.

|Attribute|Type|Description|
|---|:---:|---|
|``reason``|``string``|The reason for the operation not being supported..|

# Sponsor

Use my packages in your projects? You think they are awesome? So, help me give more time to develop them by becoming a sponsor. :wink:

<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=8KT6SPVB84XLY&source=url"><img src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" alt="PayPal - The safer, easier way to pay online!"></a>
