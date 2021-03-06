export default {
    SETTING_DEFAULTS: {
        FAIL_CHANCE: 0.5,
        SUCCESS_CHANCE: 0.5,
        STATS_CMD: `!sadness`,
        DIE_TYPE: 20,
        CRT_FAIL: 1,
        CRT_SUCCESS: 20,
    },
    SETTING_KEYS: {
        FAIL_CHANCE: 'failComChance',
        SUCCESS_CHANCE: 'successComChance',
        STATS_CMD: 'statsCmd',
        DIE_TYPE: 'dieType',
        CRT_FAIL: 'crtFail',
        CRT_SUCCESS: 'crtSuccess',
        COUNTER: 'counter',
        LISTS: 'lists',
        LISTS_EDITOR: 'listsEditor',
    },
    ERROR_MESSAGES: {
        NOT_ENOUGH_PERMISSIONS: 'Sorry but this command is only for the big guy.',
        SETTINGS_RESET: 'Who are you, again?',
        COUNTER_RESET: 'Are you THAT embarrassed about your rolls?',
        LISTS_RESET: 'Oh good... I can be myself again (◔_◔)',
        INVALID_ARGUMENTS: 'Do you even know what you\'re doing?',
    },
    SETTINGS: [
        {
            key: "counter",
            data: {
                type: String,
                default: "{}",
                scope: "world",
                config: false,
                restricted: true,
            },
        },
        {
            key: "statsCmd",
            data: {
                name: "Stats command:",
                hint: "Do you fell happy? I can change that (｡◕‿◕｡)",
                type: String,
                default: "!sadness",
                scope: "world",
                config: true,
                restricted: true,

            }
        },
        {
            key: "dieType",
            data: {
                name: "Observed die:",
                hint: "How many faces does your shiny fail rock has?",
                type: Number,
                default: 20,
                scope: "world",
                config: true,
                restricted: true,

            }
        },
        {
            key: "crtFail",
            data: {
                name: "Critical fail value:",
                hint: "What number makes you the saddest?",
                type: Number,
                default: 1,
                scope: "world",
                config: true,
                restricted: true,

            }
        },
        {
            key: "crtSuccess",
            data: {
                name: "Critical success value:",
                hint: "You're never gonna see this. Does it even matter?",
                type: Number,
                default: 20,
                scope: "world",
                config: true,
                restricted: true,

            }
        },
        {
            key: "failComChance",
            data: {
                name: "Chance for a message on critical fail:",
                hint: "How often do I have to talk with you? 0 for never, 1 for always, I guess...",
                type: Number,
                default: 0.5,
                scope: "world",
                config: true,
                restricted: true,

            }
        },
        {
            key: "successComChance",
            data: {
                name: "Chance for a message on critical success:",
                hint: "Like the other one, you dummy ╰| ⊡ _ ⊡ |╯",
                type: Number,
                default: 0.5,
                scope: "world",
                config: true,
                restricted: true,

            }
        }
    ],
};