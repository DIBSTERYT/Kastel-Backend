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

import type { Schema } from "../../Types/Schema";

const GuildMember: Schema = {
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
            extended: true,
            extends: 'FriendUser',
        },
        Roles: {
            name: 'Roles',
            extended: true,
            extends: 'Roles',
        },
        Nickname: {
            name: 'Nickname',
            expected: String,
            default: null,
            extended: false
        },
    },
};

export default GuildMember;

export { GuildMember }