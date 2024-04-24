import { reactive } from "vue";

export const store = reactive({
    pageInfo: {
        place: 'New Jersey, USA',
        tel: '+1(234) 567 89 10',
        mail: 'example@example.com'
    },
    navLinks: [
        {
            link: 'home',
            category: 'quick links'
        },
        {
            link: 'fixtures & results',
            category: 'education'
        },
        {
            link: 'league table',
            category: 'education'
        },
        {
            link: 'players',
            category: 'education'
        },
        {
            link: 'gallery',
            category: 'education'
        },
        {
            link: 'blog',
            category: 'quick links'
        },
        {
            link: 'gallery',
            category: 'quick links'
        },
        {
            link: 'contact',
            category: 'quick links'
        },
    ],
    slider: [
        {
            image: 'slider1-1.jpg'
        },
        {
            image: 'slider2-1.jpg'
        },
        {
            image: 'slider3.jpg'
        },
        {
            image: 'slider4.jpg'
        }
    ],
    teamsInfo: [
        {
            name: 'Istanbul Sports',
            logo: 'club-1.png',
            win: 18,
            draw: 2,
            lose: 0,
            points: 42
        },
        {
            name: 'United Fs Club',
            logo: 'club-2.png',
            win: 14,
            draw: 2,
            lose: 1,
            points: 35
        },
        {
            name: 'Schalke Club',
            logo: 'club-3.png',
            win: 13,
            draw: 3,
            lose: 0,
            points: 32
        },
        {
            name: 'Inter Club',
            logo: 'club-4.png',
            win: 13,
            draw: 2,
            lose: 1,
            points: 31
        },
        {
            name: 'Madrid Club',
            logo: 'league-club-5.png',
            win: 12,
            draw: 1,
            lose: 2,
            points: 30
        },
        {
            name: 'Schalke Club',
            logo: 'league-club-6.png',
            win: 11,
            draw: 0,
            lose: 3,
            points: 28
        },
        {
            name: 'Arsenal Club',
            logo: 'league-club-7.png',
            win: 10,
            draw: 6,
            lose: 0,
            points: 26
        },
        {
            name: 'Bayern Club',
            logo: 'league-club-8.png',
            win: 10,
            draw: 2,
            lose: 2,
            points: 24
        },
        {
            name: 'Atletico Club',
            logo: 'league-club-9.png',
            win: 9,
            draw: 0,
            lose: 4,
            points: 20
        }
    ],
    articlesInfo: [
        {
            id: 1,
            title: 'What is Football?',
            date: '29.05.2022',
            topic: 'Football',
            paragraph: 'Football is a sport that is known as a ball game and il loved by [...]',
            img: 'news1-1'
        },
        {
            id: 2,
            title: 'What is Football?',
            date: '29.05.2022',
            topic: 'Football',
            paragraph: 'Football: it is an aerobic-based anaerobic sport in which jumps, kicks, turns, running with changing [...]',
            img: 'news2-1'
        },
        {
            id: 3,
            title: 'What is Football?',
            date: '29.05.2022',
            topic: 'Football',
            paragraph: 'GOLDEN GOAL: In a football match, the goal scored by one of the teams in [...]',
            img: 'news3-1'
        },
        {
            id: 4,
            title: 'What is Football?',
            date: '29.05.2022',
            topic: 'Football',
            paragraph: 'GOLDEN GOAL: In a football match, the goal scored by one of the teams in [...]',
            img: 'news4-1'
        },
        {
            id: 5,
            title: 'What is Football?',
            date: '29.05.2022',
            topic: 'Football',
            paragraph: 'Lorem ipsum',
            img: 'news6-1'
        }
    ]
});