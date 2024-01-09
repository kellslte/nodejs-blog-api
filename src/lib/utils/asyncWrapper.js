export const asyncWrapper = controller => ( req, res, next ) =>
{
    try {
        controller( req, res );
    } catch (e) {
        next( e );
    }
}