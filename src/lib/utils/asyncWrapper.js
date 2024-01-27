export const asyncWrapper = controller => ( req, res, next ) =>
{
    try {
        controller( req, res, next );
    } catch (e) {
        next( e );
    }
}