interface ImgRef {
    URL: string,
    ALT: string
}

interface AppRef {
    URL: string,
    GIT: string
}

interface Project {
    NAME: string,
    DESCRIPTION: string,
    TECHNOLOGIES: Array<string>,
    IMG_REF: ImgRef,
    APP_REF: AppRef
}

export const projects: Array<Project> = [
    {
        NAME: 'Pokédex',
        DESCRIPTION: 'A javascript based pokédex using REST API.',
        TECHNOLOGIES: ['HTML', 'CSS', 'Bootstrap' ,'Javascript', 'API'],
        IMG_REF: {
            URL: '',
            ALT: 'Screenshot from Pokédex'
        },
        APP_REF: {
            URL: 'https://christof-mark.developerakademie.net/pokedex', // Update URL to own server space
            GIT: 'https://github.com/colorfultrees/pokedex'
        }
    },
    {
        NAME: 'JOIN',
        DESCRIPTION: 'A Kanban Project Management App. Create Tasks, assign users and categories, and change task status by simply using drag-and-drop.',
        TECHNOLOGIES: ['HTML', 'CSS', 'Javascript'],
        IMG_REF: {
            URL: '',
            ALT: 'Screenshot from JOIN'
        },
        APP_REF: {
            URL: 'https://christof-mark.developerakademie.net/join_app/join', // Update URL to own server space
            GIT: 'https://github.com/colorfultrees/join'
        }
    },
    {
        NAME: 'El Pollo Loco',
        DESCRIPTION: 'A funny jump and run game. Help Pepe to fight against crazy chickens, collect salsa bottles and defeat Señora Gallina, the crazy giant chicken.',
        TECHNOLOGIES: ['HTML', 'CSS', 'Javascript', 'OOP'],
        IMG_REF: {
            URL: '',
            ALT: 'Screenshot from El Pollo Loco'
        } ,
        APP_REF: {
            URL: 'https://christof-mark.developerakademie.net/el-pollo-loco', // Update URL to own server space
            GIT: 'https://github.com/colorfultrees/el-pollo-loco'
        }
    },
    {
        NAME: 'gaggler',
        DESCRIPTION: 'A clone of the popular messenger app Slack. Send messages to your friends and colleagues, either in a group channel or as a private message.',
        TECHNOLOGIES: ['HTML', 'SCSS', 'Typescript', 'Angular', 'Material', 'Firebase'],
        IMG_REF: {
            URL: '',
            ALT: 'Screenshot from gaggler'
        },
        APP_REF: {
            URL: 'https://christof-mark.developerakademie.net/slack-clone', // Update URL to own server space
            GIT: 'https://github.com/colorfultrees/slack-clone'
        }
    }
]