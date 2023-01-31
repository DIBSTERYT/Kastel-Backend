/* !
 *   ██╗  ██╗ █████╗ ███████╗████████╗███████╗██╗
 *   ██║ ██╔╝██╔══██╗██╔════╝╚══██╔══╝██╔════╝██║
 *  █████╔╝ ███████║███████╗   ██║   █████╗  ██║
 *  ██╔═██╗ ██╔══██║╚════██║   ██║   ██╔══╝  ██║
 * ██║  ██╗██║  ██║███████║   ██║   ███████╗███████╗
 * ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝   ╚═╝   ╚══════╝╚══════╝
 * Copyright(c) 2022-2023 DarkerInk
 * GPL 3.0 Licensed
 */

import { model, Schema } from 'mongoose';

const GiftSchema = new Schema({
    _id: { // The gift token/id
        type: String,
        required: true,
    },

    User: {
        type: String,
        required: true,
        ref: 'Users',
    },

    Type: {
        type: Number,
        required: true,
    },

    MaxAge: {
        type: Date,
        required: true,
    },

    GiftLength: {
        type: Date,
        required: true,
    },

    UsedBy: {
        type: String,
        required: true,
        ref: 'Users',
    },
});

export default model('gifts', GiftSchema);

export { GiftSchema }