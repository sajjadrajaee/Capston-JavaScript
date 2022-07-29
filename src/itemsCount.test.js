import { countNumberOfItems, setItems } from './mocks/items.js';

test('All items count should be 10', () => {
  const items = [
    {
      score: 0.69568217,
      show: {
        id: 1284,
        url: 'https://www.tvmaze.com/shows/1284/sports-night',
        name: 'Sports Night',
        type: 'Scripted',
        language: 'English',
        genres: [
          'Drama',
          'Comedy',
          'Sports',
        ],
        status: 'Ended',
        runtime: 30,
        averageRuntime: 30,
        premiered: '1998-09-22',
        ended: '2000-05-16',
        officialSite: null,
        schedule: {
          time: '21:30',
          days: [
            'Tuesday',
          ],
        },
        rating: {
          average: 7.3,
        },
        weight: 78,
        network: {
          id: 3,
          name: 'ABC',
          country: {
            name: 'United States',
            code: 'US',
            timezone: 'America/New_York',
          },
          officialSite: 'https://abc.com/',
        },
        webChannel: null,
        dvdCountry: null,
        externals: {
          tvrage: 5309,
          thetvdb: 71969,
          imdb: 'tt0165961',
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/7/18393.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/7/18393.jpg',
        },
        summary: "<p>Taut, exciting, realistic dramedy about the lives of sports journalists. It's a show about a show about sports, that isn't about sports at all.</p>",
        updated: 1577611711,
        _links: {
          self: {
            href: 'https://api.tvmaze.com/shows/1284',
          },
          previousepisode: {
            href: 'https://api.tvmaze.com/episodes/110162',
          },
        },
      },
    },
    {
      score: 0.64636284,
      show: {
        id: 27633,
        url: 'https://www.tvmaze.com/shows/27633/sports-sunday',
        name: 'Sports Sunday',
        type: 'Sports',
        language: 'English',
        genres: [],
        status: 'Running',
        runtime: 60,
        averageRuntime: 60,
        premiered: '2017-04-30',
        ended: null,
        officialSite: 'https://www.9now.com.au/sports-sunday',
        schedule: {
          time: '10:00',
          days: [
            'Sunday',
          ],
        },
        rating: {
          average: null,
        },
        weight: 35,
        network: {
          id: 120,
          name: 'Nine Network',
          country: {
            name: 'Australia',
            code: 'AU',
            timezone: 'Australia/Sydney',
          },
          officialSite: null,
        },
        webChannel: null,
        dvdCountry: null,
        externals: {
          tvrage: null,
          thetvdb: null,
          imdb: null,
        },
        image: null,
        summary: "<p>Featuring Australia's leading sports personalities, <b>Sports Sunday</b> presents a frank and open debate about all the issues in the week of sport, with the promise of heated opinion and a few laughs along the way.</p>",
        updated: 1591970280,
        _links: {
          self: {
            href: 'https://api.tvmaze.com/shows/27633',
          },
          previousepisode: {
            href: 'https://api.tvmaze.com/episodes/1883142',
          },
        },
      },
    },
    {
      score: 0.6456311,
      show: {
        id: 4077,
        url: 'https://www.tvmaze.com/shows/4077/sports-jeopardy',
        name: 'Sports Jeopardy!',
        type: 'Game Show',
        language: 'English',
        genres: [],
        status: 'Ended',
        runtime: 30,
        averageRuntime: 29,
        premiered: '2014-09-24',
        ended: '2017-05-17',
        officialSite: 'http://www.sportsjeopardy.com',
        schedule: {
          time: '00:00',
          days: [
            'Wednesday',
          ],
        },
        rating: {
          average: null,
        },
        weight: 32,
        network: {
          id: 104,
          name: 'NBCSN',
          country: {
            name: 'United States',
            code: 'US',
            timezone: 'America/New_York',
          },
          officialSite: null,
        },
        webChannel: null,
        dvdCountry: null,
        externals: {
          tvrage: null,
          thetvdb: 286055,
          imdb: 'tt4067972',
        },
        image: null,
        summary: '<p>The first season of new television quiz show <b>Sports Jeopardy!</b> with Dan Patrick will premiere on Wednesday, September 24 on Crackle and all Crackle platforms. Hosted by Emmy®-Award winning sportscaster Dan Patrick (The Dan Patrick Show), Sports Jeopardy! is a weekly 30-minute program that combines the excitement and prestige of Emmy Award® winning quiz show Jeopardy! with the rich and diverse world of sports. New episodes will be available to stream on demand year round every Wednesday for a total of 52 episodes each year.</p><p>More than 30,000 contestants registered online for auditions held this past summer in Los Angeles, Las Vegas, Dallas, Chicago and New York. Each contestant was then presented with a qualifying test of 30 clues in 30 sports-related categories for the first phase of the audition process. For those who passed that initial test, the second phase of auditions featured mock game play and a short interview. Qualified contestants who passed the test and interview and met all eligibility requirements went on to appear on the show.</p>',
        updated: 1633429348,
        _links: {
          self: {
            href: 'https://api.tvmaze.com/shows/4077',
          },
          previousepisode: {
            href: 'https://api.tvmaze.com/episodes/1165210',
          },
        },
      },
    },
    {
      score: 0.6406106,
      show: {
        id: 15572,
        url: 'https://www.tvmaze.com/shows/15572/sports-detectives',
        name: 'Sports Detectives',
        type: 'Documentary',
        language: 'English',
        genres: [],
        status: 'Running',
        runtime: 60,
        averageRuntime: 60,
        premiered: '2016-04-24',
        ended: null,
        officialSite: 'http://www.smithsonianchannel.com/shows/the-sports-detectives/1004307',
        schedule: {
          time: '21:00',
          days: [
            'Sunday',
          ],
        },
        rating: {
          average: null,
        },
        weight: 30,
        network: {
          id: 86,
          name: 'Smithsonian Channel',
          country: {
            name: 'United States',
            code: 'US',
            timezone: 'America/New_York',
          },
          officialSite: null,
        },
        webChannel: null,
        dvdCountry: null,
        externals: {
          tvrage: 51916,
          thetvdb: 310518,
          imdb: 'tt5497100',
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/54/136540.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/54/136540.jpg',
        },
        summary: "<p>Some of the most coveted and valuable treasures from history's greatest games and players are missing or misidentified. It's up to the <b>Sports Detectives</b> to find the items and get to the truth. Follow private investigator Kevin Barrows and sports reporter Lauren Gardner as they travel the country on the hunt for Ali's missing Olympic gold medal, Jim Craig's Miracle on Ice flag, Dale Earnhardt's first racecar, and other legendary items.</p>",
        updated: 1620750284,
        _links: {
          self: {
            href: 'https://api.tvmaze.com/shows/15572',
          },
          previousepisode: {
            href: 'https://api.tvmaze.com/episodes/707805',
          },
        },
      },
    },
    {
      score: 0.63896716,
      show: {
        id: 4553,
        url: 'https://www.tvmaze.com/shows/4553/good-sports',
        name: 'Good Sports',
        type: 'Scripted',
        language: 'English',
        genres: [
          'Comedy',
          'Sports',
        ],
        status: 'Ended',
        runtime: 30,
        averageRuntime: 30,
        premiered: '1991-01-10',
        ended: '1991-07-13',
        officialSite: null,
        schedule: {
          time: '21:30',
          days: [
            'Saturday',
          ],
        },
        rating: {
          average: null,
        },
        weight: 29,
        network: {
          id: 2,
          name: 'CBS',
          country: {
            name: 'United States',
            code: 'US',
            timezone: 'America/New_York',
          },
          officialSite: 'https://www.cbs.com/',
        },
        webChannel: null,
        dvdCountry: null,
        externals: {
          tvrage: 129,
          thetvdb: 71869,
          imdb: 'tt0101111',
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/20/52130.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/20/52130.jpg',
        },
        summary: "<p>Farrah Fawcett plays Gayle Roberts, a former model and Sports Illustrated cover girl who wants to be taken seriously as a broadcast journalist She's a co-anchor on an all-sports network along the lines of ESPN. Ryan O'Neal plays \"Downtown\" Bobby Tannen, a man whose talents have always been overshadowed by his self-destructiveness. A star receiver on the Jets' Super Bowl champion team back in '69, Bobby is famous mostly for wasted talent. He once quit football to marry and manage the career of a juggling stripper. His return to the NFL was cut short, first when he punched out a reporter and then when he ended up in jail for tax evasion. Now. he's a 42-year-old pizza delivery man.</p><p>But the on-camera death of Gayle's co-anchor leaves an opening at RSCN. Mr. Rappaport (Lane Smith), a Ted Turnerish cable mogul, spots Bobby on \"Where Are They Now\" and immediately tabs him as the new co-anchor.</p>",
        updated: 1602442741,
        _links: {
          self: {
            href: 'https://api.tvmaze.com/shows/4553',
          },
          previousepisode: {
            href: 'https://api.tvmaze.com/episodes/293903',
          },
        },
      },
    },
    {
      score: 0.627588,
      show: {
        id: 9943,
        url: 'https://www.tvmaze.com/shows/9943/action-sports',
        name: 'Action Sports',
        type: 'Sports',
        language: 'English',
        genres: [
          'Action',
        ],
        status: 'Ended',
        runtime: 60,
        averageRuntime: 86,
        premiered: '2005-06-10',
        ended: '2017-09-10',
        officialSite: 'http://www.allisports.com/',
        schedule: {
          time: '14:00',
          days: [
            'Sunday',
          ],
        },
        rating: {
          average: null,
        },
        weight: 24,
        network: {
          id: 1,
          name: 'NBC',
          country: {
            name: 'United States',
            code: 'US',
            timezone: 'America/New_York',
          },
          officialSite: 'https://www.nbc.com/',
        },
        webChannel: null,
        dvdCountry: null,
        externals: {
          tvrage: null,
          thetvdb: null,
          imdb: null,
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/34/85431.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/34/85431.jpg',
        },
        summary: "<p><b>Action Sports</b> covers the unusual sports that other sports shows don't cover such as skateboarding, snowboarding and BMX racing.</p>",
        updated: 1631020039,
        _links: {
          self: {
            href: 'https://api.tvmaze.com/shows/9943',
          },
          previousepisode: {
            href: 'https://api.tvmaze.com/episodes/1262279',
          },
        },
      },
    },
    {
      score: 0.62352943,
      show: {
        id: 21169,
        url: 'https://www.tvmaze.com/shows/21169/sports-plus',
        name: 'Sports Plus',
        type: 'News',
        language: 'English',
        genres: [
          'Sports',
        ],
        status: 'Ended',
        runtime: 15,
        averageRuntime: 16,
        premiered: '2016-09-10',
        ended: '2016-12-18',
        officialSite: 'http://forces.tv/63516091',
        schedule: {
          time: '17:40',
          days: [
            'Saturday',
            'Sunday',
          ],
        },
        rating: {
          average: null,
        },
        weight: 21,
        network: {
          id: 585,
          name: 'Forces TV',
          country: {
            name: 'United Kingdom',
            code: 'GB',
            timezone: 'Europe/London',
          },
          officialSite: null,
        },
        webChannel: null,
        dvdCountry: null,
        externals: {
          tvrage: null,
          thetvdb: null,
          imdb: null,
        },
        image: null,
        summary: "<p>All the main sport stories from across the forces world. Whatever sport you're in to, <b>Sports Plus</b> has it covered with all the latest headlines.</p>",
        updated: 1591732967,
        _links: {
          self: {
            href: 'https://api.tvmaze.com/shows/21169',
          },
          previousepisode: {
            href: 'https://api.tvmaze.com/episodes/1008313',
          },
        },
      },
    },
    {
      score: 0.61904764,
      show: {
        id: 7494,
        url: 'https://www.tvmaze.com/shows/7494/pure-sports',
        name: 'Pure Sports',
        type: 'Sports',
        language: 'English',
        genres: [],
        status: 'Ended',
        runtime: 30,
        averageRuntime: 30,
        premiered: '2015-04-09',
        ended: '2015-11-09',
        officialSite: null,
        schedule: {
          time: '20:30',
          days: [
            'Monday',
          ],
        },
        rating: {
          average: null,
        },
        weight: 23,
        network: {
          id: 95,
          name: 'Fox Sports 1',
          country: {
            name: 'United States',
            code: 'US',
            timezone: 'America/New_York',
          },
          officialSite: null,
        },
        webChannel: null,
        dvdCountry: null,
        externals: {
          tvrage: 48562,
          thetvdb: null,
          imdb: null,
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/27/68931.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/27/68931.jpg',
        },
        summary: '<p>Fox Sports 1 presents a news magazine series that covers stories across the spectrum of the sports world. The weekly, 30-minute episodes are fronted by longtime NFL sideline reporter Pam Oliver, who makes her FS1 hosting debut.</p>',
        updated: 1632077656,
        _links: {
          self: {
            href: 'https://api.tvmaze.com/shows/7494',
          },
          previousepisode: {
            href: 'https://api.tvmaze.com/episodes/441592',
          },
        },
      },
    },
    {
      score: 0.58933425,
      show: {
        id: 20866,
        url: 'https://www.tvmaze.com/shows/20866/sports-sunday',
        name: 'Sports Sunday',
        type: 'Sports',
        language: 'English',
        genres: [
          'Sports',
        ],
        status: 'Running',
        runtime: 360,
        averageRuntime: 360,
        premiered: '2016-09-11',
        ended: null,
        officialSite: null,
        schedule: {
          time: '12:00',
          days: [
            'Sunday',
          ],
        },
        rating: {
          average: null,
        },
        weight: 11,
        network: {
          id: 612,
          name: 'Sky Sports News',
          country: {
            name: 'United Kingdom',
            code: 'GB',
            timezone: 'Europe/London',
          },
          officialSite: null,
        },
        webChannel: null,
        dvdCountry: null,
        externals: {
          tvrage: null,
          thetvdb: null,
          imdb: null,
        },
        image: null,
        summary: "<p>Stay in touch with the news, as studio guests join the team for live reports and the latest scores from all the afternoon's sporting events.</p>",
        updated: 1628638376,
        _links: {
          self: {
            href: 'https://api.tvmaze.com/shows/20866',
          },
          previousepisode: {
            href: 'https://api.tvmaze.com/episodes/1064157',
          },
        },
      },
    },
    {
      score: 0.57019913,
      show: {
        id: 56861,
        url: 'https://www.tvmaze.com/shows/56861/american-sports-story',
        name: 'American Sports Story',
        type: 'Scripted',
        language: 'English',
        genres: [
          'Drama',
          'Sports',
        ],
        status: 'In Development',
        runtime: null,
        averageRuntime: null,
        premiered: null,
        ended: null,
        officialSite: null,
        schedule: {
          time: '',
          days: [],
        },
        rating: {
          average: null,
        },
        weight: 43,
        network: {
          id: 13,
          name: 'FX',
          country: {
            name: 'United States',
            code: 'US',
            timezone: 'America/New_York',
          },
          officialSite: null,
        },
        webChannel: null,
        dvdCountry: null,
        externals: {
          tvrage: null,
          thetvdb: 408693,
          imdb: null,
        },
        image: null,
        summary: "<p><b>American Sports Story </b>is a scripted anthological limited series focusing on a prominent event involving a sports figure and re-examines it through the prism of today's world, telling that story from multiple perspectives.</p>",
        updated: 1629026126,
        _links: {
          self: {
            href: 'https://api.tvmaze.com/shows/56861',
          },
        },
      },
    },
  ];

  setItems(items);
  expect(countNumberOfItems()).toBe(10);
});
