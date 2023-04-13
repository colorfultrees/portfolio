interface ImgRef {
    URL: string,
    ALT: string
}

interface Project {
    NAME: string,
    DESCRIPTION: string,
    TECHNOLOGIES: Array<string>,
    IMG_REF: ImgRef
}

export const projects: Array<Project> = [
    {
        NAME: 'Pokédex',
        DESCRIPTION: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quo eligendi incidunt eveniet error ab nostrum nesciunt eum doloremque sint. Eum atque ducimus suscipit corporis quos? Sapiente nisi animi assumenda?',
        TECHNOLOGIES: ['HTML', 'CSS', 'Javascript', 'API'],
        IMG_REF: {
            URL: '',
            ALT: 'Screenshot from Pokédex'
        }
    },
    {
        NAME: 'JOIN Kanban Project Management Tool',
        DESCRIPTION: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quo eligendi incidunt eveniet error ab nostrum nesciunt eum doloremque sint. Eum atque ducimus suscipit corporis quos? Sapiente nisi animi assumenda?',
        TECHNOLOGIES: ['HTML', 'CSS', 'Javascript'],
        IMG_REF: {
            URL: '',
            ALT: 'Screenshot from JOIN'
        }
    },
    {
        NAME: 'El Pollo Loco',
        DESCRIPTION: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quo eligendi incidunt eveniet error ab nostrum nesciunt eum doloremque sint. Eum atque ducimus suscipit corporis quos? Sapiente nisi animi assumenda?',
        TECHNOLOGIES: ['HTML', 'CSS', 'Javascript', 'OOP'],
        IMG_REF: {
            URL: '',
            ALT: 'Screenshot from El Pollo Loco'
        } 
    },
    {
        NAME: 'Slack-Clone',
        DESCRIPTION: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quo eligendi incidunt eveniet error ab nostrum nesciunt eum doloremque sint. Eum atque ducimus suscipit corporis quos? Sapiente nisi animi assumenda?',
        TECHNOLOGIES: ['HTML', 'SCSS', 'Typescript', 'Angular', 'Firebase'],
        IMG_REF: {
            URL: '',
            ALT: 'Screenshot from Slack-Clone'
        } 
    }
]