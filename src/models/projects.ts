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
    APP_REF: AppRef,
    TEAM: boolean
}

export const projects: Array<Project> = [
    {
        NAME: 'Pokédex',
        DESCRIPTION: 'A javascript based pokédex using REST API.',
        TECHNOLOGIES: ['HTML', 'CSS', 'Bootstrap' ,'Javascript', 'API'],
        IMG_REF: {
            URL: 'assets/img/pokedex.jpg',
            ALT: 'Screenshot from Pokédex'
        },
        APP_REF: {
            URL: 'https://christof-mark.developerakademie.net/pokedex', // Update URL to own server space
            GIT: 'https://github.com/colorfultrees/pokedex'
        },
        TEAM: false
    },
    {
        NAME: 'JOIN',
        DESCRIPTION: 'A Kanban Project Management App. Create Tasks, assign users and categories, and change task status by simply using drag-and-drop.',
        TECHNOLOGIES: ['HTML', 'CSS', 'Javascript'],
        IMG_REF: {
            URL: 'assets/img/join.jpg',
            ALT: 'Screenshot from JOIN'
        },
        APP_REF: {
            URL: 'https://christof-mark.developerakademie.net/join_app/join', // Update URL to own server space
            GIT: 'https://github.com/colorfultrees/join'
        },
        TEAM: true
    },
    {
        NAME: 'El Pollo Loco',
        DESCRIPTION: 'A funny jump and run game. Help Pepe to fight against crazy chickens, collect salsa bottles and defeat Señora Gallina, the crazy giant chicken.',
        TECHNOLOGIES: ['HTML', 'CSS', 'Javascript', 'OOP'],
        IMG_REF: {
            URL: 'assets/img/el-pollo-loco.jpg',
            ALT: 'Screenshot from El Pollo Loco'
        } ,
        APP_REF: {
            URL: 'https://christof-mark.developerakademie.net/el-pollo-loco', // Update URL to own server space
            GIT: 'https://github.com/colorfultrees/el-pollo-loco'
        },
        TEAM: false
    },
    {
        NAME: 'Cynapse',
        DESCRIPTION: 'A clone of the popular messenger app Slack. Send messages to your friends and colleagues, either in a group channel or in a private chat.',
        TECHNOLOGIES: ['HTML', 'SCSS', 'Typescript', 'Angular', 'Material', 'Firebase'],
        IMG_REF: {
            URL: 'assets/img/cynapse.jpg',
            ALT: 'Screenshot from Cynapse'
        },
        APP_REF: {
            URL: 'https://christof-mark.developerakademie.net/cynapse', // Update URL to own server space
            GIT: 'https://github.com/colorfultrees/cynapse'
        },
        TEAM: true
    }
]