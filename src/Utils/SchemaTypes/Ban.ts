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

import { Schema } from "../../Types/Schema";

/**
 * @type {import("../../..").Schema}
 */
const Ban: Schema = {
    type: Object,
    data: {
        id: {
            name: '_id',
            expected: String,
            default: null,
            extended: false
        },
        User: {
            name: 'User',
            extends: 'FriendUser',
            extended: true
        },
        Banner: {
            name: 'Banner',
            extends: 'FriendUser',
            extended: true
        },
        Reason: {
            name: 'Reason',
            expected: String,
            default: 'N/A',
            extended: false
        },
        BanDate: {
            name: 'BannedDate',
            expected: Number,
            default: Date.now(),
            extended: false
        },
        UnbanDate: {
            name: 'UnbanDate',
            expected: Number,
            default: null,
            extended: false
        },
    },
};

export default Ban;

export { Ban }