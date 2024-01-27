export class NotFoundException extends Error
{
    constructor( message )
    {
        super( message );

        this.statuscode = 404;
    }
}

export class UnauthenticatedException extends Error
{
    constructor( message )
    {
        super( message );

        this.statuscode = 401;
    }
}

export class UnauthorizedException extends Error {
  constructor(message) {
    super(message);

    this.statuscode = 403;
  }
}

export class BadRequestException extends Error {
  constructor(message) {
    super(message);

    this.statuscode = 422;
  }
}

export class ValidationException extends Error
{
  constructor(errors, message )
  {
    super( message );
    
    this.statuscode = 422;
    this.errors = errors;
  }
}

export class ApplicationException extends Error {
  constructor(message) {
    super(message);

    this.statuscode = 500;
  }
}