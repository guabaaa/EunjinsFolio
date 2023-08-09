import emoji from 'react-easy-emoji';

export const greeting = {
    username: 'Cho-eunjin',
    title: '반갑습니다 프론트엔드 개발자 조은진입니다.',
    subTitle: emoji("계속해서 공부하고 발전하는 개발자 조은진입니다."),
    role: "프론트엔드 개발(Front-end)",
    resumeLink: "https://drive.google.com/file/d/1NE0J3Q5vC2UjkySUYgKsvQhd5cfcjd8U/view?usp=sharing",
    // IMPORTANT
    // If you don't want to show this, change view to false. DO NOT DELETE!
    view: true
};

export const socialMediaLinks = {
    // IMPORTANT
    // if you don't have, change value to blank or false!! DO NOT DELETE!
    github: 'https://github.com/guabaaa',
    linkedin: '',
    email: 'gdandtop950923@gmail.com',
    facebook: '',
    twitter: "",
    instagram: "",
    medium: '',
    stackoverflow: ''
};

export const skills = {
    title: emoji("I Can Do ⚡"),
    subTitle: "",
    describeSkills: [
        emoji("★ 50% : 기본적인 이해 완료, 남이 작성한 프로그램을 해석 가능"),
        emoji("★ 70% : 활용 가능, 기존 프로그램을 개선할 수 있음"),
        emoji("★ 90% : 원하는 기능의 프로그램을 개발할 수 있음"),
        emoji("✔ DBMS : MariaDB, Oracle"),
        emoji("✔ Deep Learning : Tensorflow, Keras, Torch"),
    ],
    // IMPORTANT
    // You need to find className for font-awesome icon
    // Go to https://fontawesome.com/ and search icon
    lists: [
        {fontAwesome: "fab fa-windows", text: "C#", proficiency: 90},
        {fontAwesome: "fab fa-python", text: "PYTHON", proficiency: 90},
        {fontAwesome: "fab fa-java", text: "JAVA", proficiency: 70},
        {fontAwesome: "fab fa-html5", text: "HTML5", proficiency: 70},
        {fontAwesome: "fab fa-css3-alt", text: "CSS3", proficiency: 70},
        {fontAwesome: "fab fa-js", text: "JS", proficiency: 70},
        {fontAwesome: "fas fa-code", text: "C/C++", proficiency: 50},
        {fontAwesome: "fab fa-ubuntu", text: "UBUNTU", proficiency: 90},
        {fontAwesome: "fab fa-android", text: "ANDROID", proficiency: 70},
        {fontAwesome: "fab fa-aws", text: "AWS", proficiency: 70},
        {fontAwesome: "fas fa-database", text: "DBMS", proficiency: 90},
        {fontAwesome: "fas fa-brain", text: "AI", proficiency: 70},
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

export const achievements = {
    title: emoji("Achievements 🏆"),
    subTitle: "",
    lists: [
        {
            img: require("./assets/191126_공학페스티벌_장려상.jpg"),
            alt: "",
            title: "창의적 종합설계 경진대회 장려상",
            desc: "수상일자: 2019.11.26. / 수여기관: 서울과기대 공학교육거점센터"
        },
        {
            img: require("./assets/190926_캡스톤경진대회_대상.jpg"),
            alt: "",
            title: "제11회 캡스톤디자인경진대회 대상",
            desc: "수상일자: 2019.09.26./수여기관: 건양대학교"
        },
        {
            img: require("./assets/191022_WTA대전하이테크페어_우수상.jpg"),
            alt: "",
            title: "제16회 WTA 대전 하이테크 페어 아이디어 공모전 우수상",
            desc: "수상일자: 2019.10.22. / 수여기관: (재)대전테크노파크"
        },
        {
            img: require("./assets/190413_배재대창업캠프_은상.jpg"),
            alt: "",
            title: "아이디어 발굴창업캠프 은상",
            desc: "수상일자: 2019.04.13./수여기관: 배재대학교 창업교육센터"
        },
        {
            img: require("./assets/191025_학부생논문경진대회_우수상.jpg"),
            alt: "",
            title: "추계학술대회 학부생 논문경진대회 우수논문상",
            desc: "수상일자: 2019.10.25. / 수여기관: 한국지식정보기술학회"
        },
        {
            img: require("./assets/200706_설계교과목경진대회_최우수상.jpg"),
            alt: "",
            title: "설계교과목 경진대회 최우수상",
            desc: "수상일자: 2020.07.06./수여기관: 건양대학교 공학교육혁신센터"
        },
        {
            img: require("./assets/190621_설계교과목경진대회_최우수상.png"),
            alt: "",
            title: "설계교과목 경진대회 최우수상",
            desc: "수상일자: 2019.06.21./수여기관: 건양대학교 공학교육거점센터"
        },
        {
            img: require("./assets/200928_셀프뷰면접경진대회_최우수상.jpg"),
            alt: "",
            title: "셀프뷰 면접 경진대회 최우수상",
            desc: "수상일자: 2020.09.28./수여기관: 건양대학교"
        },
        {
            img: require("./assets/151204_기업LINC영상분석공모전_장려상.png"),
            alt: "",
            title: "기업 LINC 영상분석 공모전 장려상",
            desc: "수상일자: 2015.12.04./수여기관: 건양대학교 LINC 사업단"
        },
        {
            img: require("./assets/190524_ICT융합프로젝트공모전_참가상.jpg"),
            alt: "",
            title: "ICT 융합 프로젝트 공모전 참가상",
            desc: "수상일자: 2019.05.24. / 수여기관: (주)엔테텍스"
        },
    ],
    view: true
};

export const blogs = {
    title: emoji("Certifications 📰"),
    subTitle: "",
    lists: [
        {
            title: "정보처리기사",
            desc: "취득일: 2020.08.28. / 발행처: 한국산업인력공단",
            url: "https://drive.google.com/file/d/1Zf4O48mzJUcoVSOTUrhnCx_YQFnKV7AN/view?usp=sharing"
        },
        {
            title: "Microsoft Office Specialist Master",
            desc: "취득일: 2018.01.31. / 발행처: Microsoft",
            url: "https://drive.google.com/file/d/1qAr9fn5Ri5V3ArigI_ClpGHhcKp5wpQz/view?usp=sharing"
        },
        {
            title: "Certified SOLIDWORKS Associate",
            desc: "취득일: 2019.07.12. / 발행처: Solidworks",
            url: "https://drive.google.com/file/d/1RPGtvR4HRG4rk1oDGCsgyDT8Kie4atKl/view?usp=sharing"
        },
        {
            title: "한국사능력검정 1급",
            desc: "취득일: 2020.08.21./발행처: 국사편찬위원회",
            url: "https://drive.google.com/file/d/1g6I7J-dh5xTqXWfuPoKPFr7bz3fKBj54/view?usp=sharing"
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