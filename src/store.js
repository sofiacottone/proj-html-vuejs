import { reactive } from "vue";

export const store = reactive({
    pageInfo: {
        place: 'New Jersey, USA',
        tel: '+1 (234) 567 89 10',
        mail: 'example@example.com'
    },
    navLinks: [
        {
            link: 'home',
            category: 'quick links',
            anchor: '',
        },
        {
            link: 'fixtures & results',
            category: 'education',
            anchor: 'fixtures',
        },
        {
            link: 'league table',
            category: 'education',
            anchor: 'league',
        },
        {
            link: 'players',
            category: 'education',
            anchor: 'players',
        },
        {
            link: 'matches',
            category: 'education',
            anchor: 'matches',
        },
        {
            link: 'blog',
            category: 'quick links',
            anchor: 'articles',
        },
        {
            link: 'gallery',
            category: 'quick links',
            anchor: 'hero',
        },
        {
            link: 'contact',
            category: 'quick links',
            anchor: 'contacts',
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
            id: 1,
            name: 'Istanbul Sports',
            logo: 'club-1.png',
            win: 18,
            draw: 2,
            lose: 0,
            points: 42
        },
        {
            id: 2,
            name: 'United Fs Club',
            logo: 'club-2.png',
            win: 14,
            draw: 2,
            lose: 1,
            points: 35
        },
        {
            id: 3,
            name: 'Schalke Club',
            logo: 'club-3.png',
            win: 13,
            draw: 3,
            lose: 0,
            points: 32
        },
        {
            id: 4,
            name: 'Inter Club',
            logo: 'club-4.png',
            win: 13,
            draw: 2,
            lose: 1,
            points: 31
        },
        {
            id: 5,
            name: 'Madrid Club',
            logo: 'league-club-5.png',
            win: 12,
            draw: 1,
            lose: 2,
            points: 30
        },
        {
            id: 6,
            name: 'Schalke Club',
            logo: 'league-club-6.png',
            win: 11,
            draw: 0,
            lose: 3,
            points: 28
        },
        {
            id: 7,
            name: 'Arsenal Club',
            logo: 'league-club-7.png',
            win: 10,
            draw: 6,
            lose: 0,
            points: 26
        },
        {
            id: 8,
            name: 'Bayern Club',
            logo: 'league-club-8.png',
            win: 10,
            draw: 2,
            lose: 2,
            points: 24
        },
        {
            id: 9,
            name: 'Atletico Club',
            logo: 'league-club-9.png',
            win: 9,
            draw: 0,
            lose: 4,
            points: 20
        }
    ],
    upcomingMatches: [
        {
            homeTeam: {
                name: 'Schalke Club',
                logo: 'club-3.png',
            },
            guestTeam: {
                name: 'Inter Club',
                logo: 'club-4.png',
            },
            dateTime: 'October 20, 2022 17:00',
            stadium: 'Expert Stadium'
        },
        {
            homeTeam: {
                name: 'Atletico Club',
                logo: 'league-club-9.png',
            },
            guestTeam: {
                name: 'Schalke Club',
                logo: 'club-3.png',
            },
            dateTime: 'September 18, 2022 21:00',
            stadium: 'Expert Stadium'
        },
        {
            homeTeam: {
                name: 'United Fs Club',
                logo: 'club-2.png',
            },
            guestTeam: {
                name: 'Bayern Club',
                logo: 'league-club-8.png',
            },
            dateTime: 'August 03, 2022 19:00',
            stadium: 'Expert Stadium'
        },
        {
            homeTeam: {
                name: 'Arsenal Club',
                logo: 'league-club-7.png',
            },
            guestTeam: {
                name: 'Atletico Club',
                logo: 'league-club-9.png',
            },
            dateTime: 'July 08, 2022 12:00',
            stadium: 'Expert Stadium'
        },
        {
            homeTeam: {
                name: 'Istanbul Sports',
                logo: 'club-1.png',
            },
            guestTeam: {
                name: 'United Fs Club',
                logo: 'club-2.png',
            },
            dateTime: 'June 12, 2022 09:00',
            stadium: 'Expert Stadium'
        },

    ],
    playersInfo: [
        {
            name: 'Alisson Becker',
            number: '1',
            role: 'Goalkeeper',
            img: 'https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2023-07/pp-23-24-mens-home-body-becker.webp?itok=6dgcMsiw'
        },
        {
            name: 'Joe Gomez',
            number: '2',
            role: 'Defender',
            img: 'https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2023-07/pp-23-24-mens-home-body-gomez.webp?itok=GsV6vg8K'
        },
        {
            name: 'Virgil van Dijk',
            number: '4',
            role: 'Defender',
            img: 'https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2023-09/pp-23-24-mens-home-body-virgil-captain.webp?itok=nBkWChxV'
        },
        {
            name: 'Ibrahima Konate',
            number: '5',
            role: 'Defender',
            img: 'https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2023-07/pp-23-24-mens-home-body-konate.webp?itok=xsjqdL2H'
        },
        {
            name: 'Wataru Endo',
            number: '3',
            role: 'Midfielder',
            img: 'https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2023-09/pp-23-24-mens-home-body-endo.webp?itok=3EoFGswi'
        },
        {
            name: 'Thiago Alcantara',
            number: '6',
            role: 'Midfielder',
            img: 'https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2023-09/pp-23-24-mens-home-body-thiago.webp?itok=3VZqqsTg'
        },
        {
            name: 'Dominik Szoboszlai',
            number: '8',
            role: 'Midfielder',
            img: 'https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2023-07/pp-23-24-mens-home-body-szoboszlai.webp?itok=u2kC9WJq'
        },
        {
            name: 'Alexis Mac Allister',
            number: '10',
            role: 'Midfielder',
            img: 'https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2023-07/pp-23-24-mens-home-body-mac-allister.webp?itok=t_ikLNfk'
        },
        {
            name: 'Luis Diaz',
            number: '7',
            role: 'Forward',
            img: 'https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2023-07/pp-23-24-mens-home-body-diaz.webp?itok=Dbe0lrW8'
        },
        {
            name: 'Darwin Nunez',
            number: '9',
            role: 'Forward',
            img: 'https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2023-07/pp-23-24-mens-home-body-nunez.webp?itok=tJQsb87G'
        },
        {
            name: 'Mohamed Salah',
            number: '11',
            role: 'Forward',
            img: 'https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2023-07/pp-23-24-mens-home-body-salah.webp?itok=Q1VGtFrc'
        },

    ],
    articlesInfo: [
        {
            id: 1,
            title: 'What is Football?',
            date: '29.05.2022',
            topic: 'Football',
            paragraph: 'Football is a sport that is known as a ball game and il loved by [...]',
            img: 'news1-1.png'
        },
        {
            id: 2,
            title: 'Football Rules',
            date: '29.05.2022',
            topic: 'Football',
            paragraph: 'Football: it is an aerobic-based anaerobic sport in which jumps, kicks, turns, running with changing [...]',
            img: 'news2-1.png'
        },
        {
            id: 3,
            title: 'Football Features',
            date: '29.05.2022',
            topic: 'Football',
            paragraph: 'GOLDEN GOAL: In a football match, the goal scored by one of the teams in [...]',
            img: 'news3-1.png'
        },
        {
            id: 4,
            title: 'Football Terms',
            date: '29.05.2022',
            topic: 'Football',
            paragraph: 'GOLDEN GOAL: In a football match, the goal scored by one of the teams in [...]',
            img: 'news4-1.png'
        },
        {
            id: 5,
            title: 'Lorem Football',
            date: '29.05.2022',
            topic: 'Football',
            paragraph: 'Lorem ipsum',
            img: 'news6-1.png'
        }
    ]
});