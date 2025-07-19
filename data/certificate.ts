export const certificateData = [
    {
        title: "보유기술",
        transcription: "Technical Skills",
        items: [
            {
                title: "드론측량",
                subTitle: "건설, 토목, 토지, 임야, 해양, 맵핑, 모델링",
                level: "",
                description: "",
            },
            {
                title: "디지털트윈",
                subTitle: "건축, 문화재, 에너지, 환경",
                level: "",
                description: "",
            },
            {
                title: "드론 관제시스템",
                subTitle: "산불감시, 안전관제, 시설점검, 교통관제",
                level: "",
                description: "",
            },
            {
                title: "드론 라이트쇼",
                subTitle: "기획&설계, 콘텐츠 디자인, 알고리즘 개발, 3D 시뮬레이션",
                level: "",
                description: "",
            },
            {
                title: "항공촬영",
                subTitle: "모니터링, 공정관리, 행사촬영",
                level: "",
                description: "",
            },
            {
                title: "스마트 농업",
                subTitle: "항공방제, 식생관리, 산림관리",
                level: "",
                description: "",
            },
            {
                title: "드론 콘텐츠",
                subTitle: "드론 라이트쇼, 드론 체험 프로그램",
                level: "",
                description: "",
            },

            {
                title: "파이썬",
                subTitle: "데이터 분석, 머신러닝, 딥러닝, 웹 개발",
                level: "",
                description: "",
            },
            {
                title: "모바일 앱 개발",
                subTitle: "Flutter, Dart, React Native",
                level: "",
                description: "",
            },
            {
                title: "영상제작",
                subTitle: "Davinci Resolve, Final Cut Pro X",
                level: "",
                description: "",
            },


        ],
    },
    {
        title: "자격사항",
        transcription: "License & Certificate",
        items: [
            {
                title: "초경량비행장지 지도조종자 자격",
                subTitle: "한국교통안전공단",
                level: "교관과정 수료",
                description: "",
            },

            {
                title: "초경량비행장치 조종자 자격",
                subTitle: "한국교통안전공단",
                level: "1종",
                description: "",
            },
            {
                title: "정보처리기사",
                subTitle: "한국산업인력공단",
                level: "1급",
                description: "",
            },
            {
                title: "드론교육지도사",
                subTitle: "",
                level: "2급",
                description: "",
            },
            {
                title: "드론정비사",
                subTitle: "",
                level: "2급",
                description: "",
            },
            {
                title: "AI GPT 교육전문가",
                subTitle: "한국직업능력연구원",
                level: "1급",
                description: "",
            },
        ],
    },


];

export type Certificate = {
    title: string;
    transcription: string;
    items: {
        title: string;
        subTitle: string;
        level: string;
        description: string;
    }[];
};

export type CertificateData = Certificate[];
