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
        emoji("★ 50% : 기본적인 이해 완료, 남이 작성한 프로그램을 해석 가능"),
        emoji("★ 70% : 활용 가능, 기존 프로그램을 개선할 수 있음"),
        emoji("★ 90% : 원하는 기능의 프로그램을 개발할 수 있음"),
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
        {fontAwesome: "fab fa-echart", text: "echarts", proficiency: 70},
        {fontAwesome: "fas fa-java", text: "Java", proficiency: 50},
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
            title: "의료표준을 이용한 SW품질평가시스템",
            desc: "국제표준에 기술된 테스트케이스들을 DB화하여 사용자가 체크함으로써 SW의 품질을 평가하도록 함",
            url: "https://github.com/wnsgur1198/SW_Quality_Evaluation_System"
        },
        {
            title: "의사랑2012 역설계",
            desc: "상용SW를 동작시켜보고, 사용자 매뉴얼을 통해 모듈 분석 및 사용자 시나리오를 도출해봄",
            url: "https://drive.google.com/file/d/1NCtpBkVwG-uFf1ObFy109SlowVSXt4Co/view?usp=sharing"
        },
        {
            title: "머신러닝을 이용한 출입통제시스템",
            desc: "머신러닝을 이용하여 출입자의 얼굴인식 수행 및 인가여부에 따라 개폐함",
            url: "https://github.com/wnsgur1198/Access-Control-System_IoT-Project-FaceRecog"
        },
        {
            title: "미세먼지 비교/출력 모바일 앱",
            desc: "현재 위치에 대해 공공데이터와 미세먼지센서값을 비교 출력하는 안드로이드 앱",
            url: "https://github.com/wnsgur1198/Finedust_Check_App"
        },
        {
            title: "JAVA로 구현한 웹 쇼핑몰",
            desc: "Java와 Oracle를 이용하여 기본적인 기능을 갖춘 웹 쇼핑몰을 개발함",
            url: "https://github.com/wnsgur1198/webshoppingmall"
        },
        {
            title: "자동 파일 전송 프로그램",
            desc: "정해진 시간에 지정된 폴더로 지정된 파일들을 전송하는 Windows 프로그램",
            url: "https://github.com/wnsgur1198/Auto_File_Transfer"
        },
        {
            title: "시험일정알림 프로그램",
            desc: "한국사/토익 시험일정을 크롤링하여 최신 일정을 출력하는 Windows 프로그램",
            url: "https://github.com/wnsgur1198/Korean_history-TOEIC-reminder"
        },
        {
            title: "수강관리프로그램",
            desc: "데이터베이스를 이용하여 학생 정보를 관리하는 Windows 프로그램",
            url: "https://github.com/wnsgur1198/Enrollment_Management_Program"
        },
        {
            title: "공공데이터와 R언어을 이용한 빅데이터 분석",
            desc: "약국을 개업한다고 했을 때, 공공데이터를 분석하여 어디에 개업할지 의사결정해봄",
            url: "https://github.com/wnsgur1198/Iksan_Pharmacy_Bigdata_Analysis"
        },
        {
            title: "스마트 블라인드 컨트롤러",
            desc: "블라인드의 줄에 걸어 원격으로 제어하는 스마트 블라인드 컨트롤러를 개발함",
            url: "https://github.com/wnsgur1198/Smart_Blind"
        },
        {
            title: "장애물 피하기 게임",
            desc: "Unity를 이용하여 장애물을 피하는 게임을 개발함",
            url: "https://github.com/wnsgur1198/Avoid_Obstacles_Game"
        },
        {
            title: "스마트 팜테이블",
            desc: "식탁에 화분을 배치하고 모바일 앱과 연결하여 식물을 관리할 수 있음",
            url: "https://drive.google.com/file/d/1Ntazu76RiS_rsxxMmfg8OEC_QNldqgOA/view?usp=sharing"
        }
    ],
    view: true
}


export const contactInfo = {
    title: "Contact To Me! 📞",
    subTitle: "",
    introduce: emoji(""),
    view: true
}