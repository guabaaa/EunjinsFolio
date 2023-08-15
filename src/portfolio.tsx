import emoji from 'react-easy-emoji';

export const greeting = {
    username: 'Cho_Eun Jin',
    title: 'Hello World?',
    subTitle: emoji("발전하는 개발자 조은진입니다."),
    role: "프론트엔드 개발자(Front-end Developer)",
    resumeLink: "https://www.notion.so/6ba6982eaac544b1b12ecd09a2b14ac3?pvs=4",
    view: true
};

export const socialMediaLinks = {
    github: 'https://github.com/guabaaa',
    linkedin:'',
    email: 'gdandtop950923@gmail.com',
    facebook: '',
    twitter: "",
    instagram: "",
    medium: '',
    stackoverflow: ''
};

export const skills = {
    title: emoji("I Can Do ! ⚡"),
    subTitle: "",
    describeSkills: [
        // emoji("★ 50% : 기본적인 이해 완료, 남이 작성한 프로그램을 해석 가능"),
        // emoji("★ 70% : 활용 가능, 기존 프로그램을 개선할 수 있음"),
        // emoji("★ 90% : 원하는 기능의 프로그램을 개발할 수 있음"),
    ],
    // IMPORTANT
    // You need to find className for font-awesome icon
    // Go to https://fontawesome.com/ and search icon
    lists: [
        {fontAwesome: "fab fa-html5", text: "HTML5", proficiency: 90},
        {fontAwesome: "fab fa-css3-alt", text: "CSS", proficiency: 90},
        {fontAwesome: "fab fa-js", text: "JS", proficiency: 70},
        // {fontAwesome: "fab fa-html5", text: "HTML5", proficiency: 70},
        // {fontAwesome: "fab fa-css3-alt", text: "CSS3", proficiency: 70},
        {fontAwesome: "fas fa-react", text: "React", proficiency: 70},
        {fontAwesome: "fab fa-ts", text: "TS", proficiency: 60},
        {fontAwesome: "fab fa-github", text: "Github", proficiency: 70},
        {fontAwesome: "fab fa-docker", text: "Docker", proficiency: 50},
        {fontAwesome: "fas fa-chart", text: "chart.js", proficiency: 70},
        {fontAwesome: "fab fa-recoil", text: "recoil", proficiency: 50},
        {fontAwesome: "fas fa-redux", text: "redux", proficiency: 50},
    ],
    view: true
};

export const experience = {
    title: "Work Experience",
    lists: [
        {
            date: "2018.03~",
            company: "Google",
            role: "Front-End Developer",
        },
        {
            date: "test",
            company: "test",
            role: "test",
        }
    ],
    view: false
}

export const openSourceProjects = {
    title: emoji("Open Source Projects 💻"),
    view: true
}

export const projects = {
    title: emoji("Projects 💻"),
    subTitle: "",
    lists: [
        {
            title: "콘마켓",
            desc: "당근마켓을 오마주하여, 게시판 기능과 채팅기능을 활용해 편리하게 유저가 이용할 수 있도록 만든 사이트",
            url: "https://github.com/guabaaa/Corn-Market"
        },
        {
            title: "넷플릭스 클론",
            desc: "기성프로그램인 넷플릭스 웹사이트를 활용하여 만든 웹페이지",
            url: "https://github.com/guabaaa/NetflixClone"
        },
    ],
    view: true
}


export const contactInfo = {
    title: "Contact To Me! 📞",
    subTitle: "",
    introduce: emoji(""),
    view: true
}