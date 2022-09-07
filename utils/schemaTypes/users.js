/*! 
 *   ██╗  ██╗ █████╗ ███████╗████████╗███████╗██╗     
 *   ██║ ██╔╝██╔══██╗██╔════╝╚══██╔══╝██╔════╝██║     
 *  █████╔╝ ███████║███████╗   ██║   █████╗  ██║     
 *  ██╔═██╗ ██╔══██║╚════██║   ██║   ██╔══╝  ██║     
 * ██║  ██╗██║  ██║███████║   ██║   ███████╗███████╗
 * ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝   ╚═╝   ╚══════╝╚══════╝
 * Copyright(c) 2022-2023 DarkerInk
 * GPL 3.0 Licensed
 */

/**
 * @type {import('./SchemaTypes').Schema}
 */
const user = {
    type: Array,
    data: {
        id: {
            name: "_id",
            expected: String,
            default: null
        },
        email: {
            name: "email",
            expected: String,
            default: null
        },
        username: {
            name: "username",
            expected: String,
            default: "Unknown Username"
        },
        tag: {
            name: "tag",
            expected: String,
            default: "0000"
        },
        creation_date: {
            name: "created_date",
            expected: Date,
            default: Date.now()
        },
        two_fa: {
            name: "two_fa",
            expected: Boolean,
            default: false
        },
        two_fa_verified: {
            name: "two_fa_verified",
            expected: Boolean,
            default: false
        },
        ip_verify: {
            name: "ip_verify",
            expected: Boolean,
            default: false
        },
        ip_lock: {
            name: "ip_lock",
            expected: Boolean,
            default: false
        },
        badges: {
            name: "badges",
            expected: Number,
            default: 0
        },
        flags: {
            name: "flags",
            expected: Array,
            default: []
        }
    }
}

module.exports = user