export const state = () => ({
    projects: {
    '41t71u4bzzqgzfnxlxnq':{
        title: 'HolyStick',
        people: { status: 'Group Project', icon: 'groups' },
        type: { status: 'Website', icon: 'web' },
        image: '/images/holystick_logo.png',
        timeFrame: 'Nov 2024',
        shortDescription: 'Holystick is a website that was built during UCL AI Hackathon 2024. <br> It aims to provide different AI models to access whether a client is eligible for a loan.',
        longDescription: 'Holystic is a website built for the UCL AI Hackathon 2024 with Holistic AI. The website aims to provide different AI models for the client to decide whether they can take a loan. It also states the benefits and disadvantages of each AI model so that the user is more aware of the impacts for each.',
        techniques: ['Python', 'flask', 'Vue', 'Bootstrap', 'AI', 'ML'],
        takeaway: 'Learnt how to use flask for the first type',
        note: 'Data used for this website is based on database provided, might not reflect reality.',
        buttons:[
            {
                text: 'Visit project deployment',
                hyperlink: 'https://holystick.dylankainth.com/'
            },
            {
                text: 'Visit Github for project',
                hyperlink:'https://github.com/dylankainth/holystick' 
            }
        ]
    },
    '8zyt64kzgkhps2hiovrc':{
        title: 'FashTrack',
        people: { status: 'Group Project', icon: 'groups' },
        type: { status: 'Website', icon: 'web' },
        image: '/images/fashtrack_logo.png',
        timeFrame: 'Nov 2024',
        shortDescription: 'Fash track is a website that was built during Culturehack 2024. <br> It aims to simplify job applications and provide mentorship opportunities.',
        longDescription: 'FashTrack is a website built in Culturehack 2024 that aims to ease the job application process in the fashion industry. It contains a job tracker which displays the jobs available at the momenet. It also has a mentorship hub that gives the opportunity for users to interact with professionals in the industry.',
        techniques: ['Nuxt', 'Vue', 'Bootstrap', 'MongoDB'],
        takeaway: 'Learnt about Nuxt, Vue and Bootstrap and used these for the first time.',
        note: 'only a prototype of the final website. Data used is made up.',
        buttons:[
            {
                text: 'Visit project deployment',
                hyperlink: 'https://fashtrack.netlify.app'
            },
            {
                text: 'Visit Github for project',
                hyperlink:'https://github.com/Hiu-Wai/fashtrack' 
            }
        ]
    },
    'n0erng2887b0v0luu579':{
        title: 'Chatter App',
        people: { status: 'Personal Project', icon: 'person' },
        type: { status: 'Website', icon: 'web' },
        image: 'https://ip.lfe.mw.tum.de/sections/moocus.png',
        timeFrame: 'March 2023',
        shortDescription: 'Holystick is a website that was built during UCL AI Hackathon 2024. <br> It aims to provide different AI models to access whether a client is eligible for a loan.',
        longDescription: 'Chatter App is a website created whilst learning about HTML, CSS, JavaScript through an online course in MOOC. It aims to mimic the functionality of a messaging app, where the user can create new channels, send messages. However, it currently does not allow multi-user usage.',
        techniques: ['HTML', 'CSS', 'JavaScript'],
        takeaway: 'Learnt how to use HTML, CSS and JavaScript',
        note: 'Only a prototype of the final website. Data used is made up.',
        buttons:[
            {
                text: 'Visit project deployment',
                hyperlink: 'https://fashtrack.netlify.app'
            },
            {
                text: 'Visit Github for project',
                hyperlink:'https://github.com/Hiu-Wai/chatter-app' 
            }
        ]
    },
}
})

export const projects = state().projects;

export const getters = { 
    getProject: (state) => { 
        return state.projects; 
    },
    getProjectById: (state) => (id) => { 
        return state.projects[id]; 
    }
};