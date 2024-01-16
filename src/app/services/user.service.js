import { User } from "../schema/user.schema.js"

export const find = async function ()
{
    return await User.find();
}

export const findByEmail = async function ( email )
{
    return await User.findOne({ email });
}

export const findById = async function ( id )
{
    return await User.findById( id );
}

export const create = async function (payload) {
    return await User.create( payload );
}

export const updateUser = async function ( id, payload ) { }

export const deletUser = async function(id){}