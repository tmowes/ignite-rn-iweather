/* eslint-disable sonarjs/no-duplicate-string */
export const apiCityByNameExample = {
  coord: {
    lon: -49.0661,
    lat: -26.9194,
  },
  weather: [
    {
      id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: '04d',
    },
  ],
  base: 'stations',
  main: {
    temp: 290.35,
    feels_like: 290.68,
    temp_min: 290.06,
    temp_max: 292.08,
    pressure: 1024,
    humidity: 98,
  },
  visibility: 10000,
  wind: {
    speed: 0.45,
    deg: 222,
    gust: 1.11,
  },
  clouds: {
    all: 65,
  },
  dt: 1690112084,
  sys: {
    type: 2,
    id: 2020861,
    country: 'BR',
    sunrise: 1690106483,
    sunset: 1690145025,
  },
  timezone: -10800,
  id: 3469968,
  name: 'Blumenau',
  cod: 200,
}

export const apiCityForecastExample = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1690113600,
      main: {
        temp: 290.42,
        feels_like: 290.76,
        temp_min: 290.42,
        temp_max: 291.18,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1022,
        humidity: 98,
        temp_kf: -0.76,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 80,
      },
      wind: {
        speed: 0.71,
        deg: 274,
        gust: 1.51,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-07-23 12:00:00',
    },
    {
      dt: 1690124400,
      main: {
        temp: 293.09,
        feels_like: 293.31,
        temp_min: 293.09,
        temp_max: 298.43,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1020,
        humidity: 83,
        temp_kf: -5.34,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 55,
      },
      wind: {
        speed: 1.11,
        deg: 315,
        gust: 3.68,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-07-23 15:00:00',
    },
    {
      dt: 1690135200,
      main: {
        temp: 297.41,
        feels_like: 297.59,
        temp_min: 297.41,
        temp_max: 300.9,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1017,
        humidity: 65,
        temp_kf: -3.49,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 29,
      },
      wind: {
        speed: 1.04,
        deg: 251,
        gust: 3.3,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-07-23 18:00:00',
    },
    {
      dt: 1690146000,
      main: {
        temp: 293.76,
        feels_like: 294.07,
        temp_min: 293.76,
        temp_max: 293.76,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1018,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 4,
      },
      wind: {
        speed: 0.09,
        deg: 230,
        gust: 0.63,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-07-23 21:00:00',
    },
    {
      dt: 1690156800,
      main: {
        temp: 291.48,
        feels_like: 291.74,
        temp_min: 291.48,
        temp_max: 291.48,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1019,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 9,
      },
      wind: {
        speed: 0.66,
        deg: 268,
        gust: 0.68,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-07-24 00:00:00',
    },
    {
      dt: 1690167600,
      main: {
        temp: 290.6,
        feels_like: 290.83,
        temp_min: 290.6,
        temp_max: 290.6,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1019,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 9,
      },
      wind: {
        speed: 0.94,
        deg: 254,
        gust: 0.88,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-07-24 03:00:00',
    },
    {
      dt: 1690178400,
      main: {
        temp: 289.88,
        feels_like: 290.06,
        temp_min: 289.88,
        temp_max: 289.88,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1019,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 7,
      },
      wind: {
        speed: 1.1,
        deg: 239,
        gust: 1.11,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-07-24 06:00:00',
    },
    {
      dt: 1690189200,
      main: {
        temp: 289.28,
        feels_like: 289.46,
        temp_min: 289.28,
        temp_max: 289.28,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1020,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 0.98,
        deg: 217,
        gust: 0.91,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-07-24 09:00:00',
    },
    {
      dt: 1690200000,
      main: {
        temp: 293.49,
        feels_like: 293.62,
        temp_min: 293.49,
        temp_max: 293.49,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1021,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 0.34,
        deg: 288,
        gust: 0.66,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-07-24 12:00:00',
    },
    {
      dt: 1690210800,
      main: {
        temp: 298.86,
        feels_like: 299.05,
        temp_min: 298.86,
        temp_max: 298.86,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1020,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 1.08,
        deg: 35,
        gust: 1.22,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-07-24 15:00:00',
    },
    {
      dt: 1690221600,
      main: {
        temp: 299.1,
        feels_like: 299.1,
        temp_min: 299.1,
        temp_max: 299.1,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1017,
        humidity: 61,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 1.72,
        deg: 56,
        gust: 1.84,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-07-24 18:00:00',
    },
    {
      dt: 1690232400,
      main: {
        temp: 292.19,
        feels_like: 292.71,
        temp_min: 292.19,
        temp_max: 292.19,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1018,
        humidity: 98,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 2,
      },
      wind: {
        speed: 1.19,
        deg: 73,
        gust: 1.08,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-07-24 21:00:00',
    },
    {
      dt: 1690243200,
      main: {
        temp: 290.4,
        feels_like: 290.79,
        temp_min: 290.4,
        temp_max: 290.4,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1019,
        humidity: 100,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      clouds: {
        all: 13,
      },
      wind: {
        speed: 0.54,
        deg: 81,
        gust: 0.62,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-07-25 00:00:00',
    },
    {
      dt: 1690254000,
      main: {
        temp: 289.92,
        feels_like: 290.26,
        temp_min: 289.92,
        temp_max: 289.92,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1019,
        humidity: 100,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 52,
      },
      wind: {
        speed: 0.09,
        deg: 85,
        gust: 0.23,
      },
      visibility: 6007,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-07-25 03:00:00',
    },
    {
      dt: 1690264800,
      main: {
        temp: 290.08,
        feels_like: 290.36,
        temp_min: 290.08,
        temp_max: 290.08,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1017,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 65,
      },
      wind: {
        speed: 0.56,
        deg: 221,
        gust: 0.94,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-07-25 06:00:00',
    },
    {
      dt: 1690275600,
      main: {
        temp: 290.14,
        feels_like: 290.38,
        temp_min: 290.14,
        temp_max: 290.14,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1017,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 94,
      },
      wind: {
        speed: 0.32,
        deg: 278,
        gust: 0.44,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-07-25 09:00:00',
    },
    {
      dt: 1690286400,
      main: {
        temp: 292,
        feels_like: 292.21,
        temp_min: 292,
        temp_max: 292,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1017,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 97,
      },
      wind: {
        speed: 0.43,
        deg: 287,
        gust: 1.08,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-07-25 12:00:00',
    },
    {
      dt: 1690297200,
      main: {
        temp: 298.29,
        feels_like: 298.43,
        temp_min: 298.29,
        temp_max: 298.29,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1015,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 51,
      },
      wind: {
        speed: 0.67,
        deg: 5,
        gust: 1.44,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-07-25 15:00:00',
    },
    {
      dt: 1690308000,
      main: {
        temp: 299.13,
        feels_like: 299.13,
        temp_min: 299.13,
        temp_max: 299.13,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1012,
        humidity: 57,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 59,
      },
      wind: {
        speed: 0.98,
        deg: 51,
        gust: 1.19,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-07-25 18:00:00',
    },
    {
      dt: 1690318800,
      main: {
        temp: 292.48,
        feels_like: 292.95,
        temp_min: 292.48,
        temp_max: 292.48,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1013,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: {
        all: 50,
      },
      wind: {
        speed: 1.02,
        deg: 74,
        gust: 0.97,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-07-25 21:00:00',
    },
    {
      dt: 1690329600,
      main: {
        temp: 290.5,
        feels_like: 290.88,
        temp_min: 290.5,
        temp_max: 290.5,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1014,
        humidity: 99,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 75,
      },
      wind: {
        speed: 0.36,
        deg: 91,
        gust: 0.54,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-07-26 00:00:00',
    },
    {
      dt: 1690340400,
      main: {
        temp: 289.75,
        feels_like: 290.05,
        temp_min: 289.75,
        temp_max: 289.75,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1014,
        humidity: 99,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.22,
        deg: 237,
        gust: 0.28,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-07-26 03:00:00',
    },
    {
      dt: 1690351200,
      main: {
        temp: 289.43,
        feels_like: 289.7,
        temp_min: 289.43,
        temp_max: 289.43,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1013,
        humidity: 99,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 0.35,
        deg: 267,
        gust: 0.32,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-07-26 06:00:00',
    },
    {
      dt: 1690362000,
      main: {
        temp: 289.06,
        feels_like: 289.29,
        temp_min: 289.06,
        temp_max: 289.06,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1013,
        humidity: 99,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 80,
      },
      wind: {
        speed: 0.72,
        deg: 269,
        gust: 0.68,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-07-26 09:00:00',
    },
    {
      dt: 1690372800,
      main: {
        temp: 292.26,
        feels_like: 292.52,
        temp_min: 292.26,
        temp_max: 292.26,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1014,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 87,
      },
      wind: {
        speed: 0.66,
        deg: 280,
        gust: 1.33,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-07-26 12:00:00',
    },
    {
      dt: 1690383600,
      main: {
        temp: 298.48,
        feels_like: 298.5,
        temp_min: 298.48,
        temp_max: 298.48,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1012,
        humidity: 55,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.88,
        deg: 304,
        gust: 2.35,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-07-26 15:00:00',
    },
    {
      dt: 1690394400,
      main: {
        temp: 299,
        feels_like: 299.26,
        temp_min: 299,
        temp_max: 299,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1010,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.14,
        deg: 79,
        gust: 1.21,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-07-26 18:00:00',
    },
    {
      dt: 1690405200,
      main: {
        temp: 294.55,
        feels_like: 294.81,
        temp_min: 294.55,
        temp_max: 294.55,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1011,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.67,
        deg: 274,
        gust: 0.89,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-07-26 21:00:00',
    },
    {
      dt: 1690416000,
      main: {
        temp: 292.8,
        feels_like: 292.96,
        temp_min: 292.8,
        temp_max: 292.8,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1012,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.99,
        deg: 258,
        gust: 0.95,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-07-27 00:00:00',
    },
    {
      dt: 1690426800,
      main: {
        temp: 292.2,
        feels_like: 292.38,
        temp_min: 292.2,
        temp_max: 292.2,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1013,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.35,
        deg: 242,
        gust: 1.69,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-07-27 03:00:00',
    },
    {
      dt: 1690437600,
      main: {
        temp: 291.37,
        feels_like: 291.57,
        temp_min: 291.37,
        temp_max: 291.37,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1014,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.96,
        deg: 216,
        gust: 1.35,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-07-27 06:00:00',
    },
    {
      dt: 1690448400,
      main: {
        temp: 289.54,
        feels_like: 289.79,
        temp_min: 289.54,
        temp_max: 289.54,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1016,
        humidity: 98,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 75,
      },
      wind: {
        speed: 0.28,
        deg: 141,
        gust: 0.8,
      },
      visibility: 10000,
      pop: 0.37,
      rain: {
        '3h': 0.18,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-07-27 09:00:00',
    },
    {
      dt: 1690459200,
      main: {
        temp: 291.06,
        feels_like: 291.33,
        temp_min: 291.06,
        temp_max: 291.06,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1018,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 87,
      },
      wind: {
        speed: 0.83,
        deg: 67,
        gust: 1.68,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-07-27 12:00:00',
    },
    {
      dt: 1690470000,
      main: {
        temp: 290.19,
        feels_like: 290.43,
        temp_min: 290.19,
        temp_max: 290.19,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1020,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.2,
        deg: 28,
        gust: 2.78,
      },
      visibility: 10000,
      pop: 0.3,
      rain: {
        '3h': 0.3,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-07-27 15:00:00',
    },
    {
      dt: 1690480800,
      main: {
        temp: 289.41,
        feels_like: 289.55,
        temp_min: 289.41,
        temp_max: 289.41,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1019,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.34,
        deg: 51,
        gust: 3.23,
      },
      visibility: 10000,
      pop: 0.3,
      rain: {
        '3h': 0.35,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-07-27 18:00:00',
    },
    {
      dt: 1690491600,
      main: {
        temp: 287.88,
        feels_like: 287.81,
        temp_min: 287.88,
        temp_max: 287.88,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1021,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.17,
        deg: 54,
        gust: 3.1,
      },
      visibility: 10000,
      pop: 0.34,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-07-27 21:00:00',
    },
    {
      dt: 1690502400,
      main: {
        temp: 287.12,
        feels_like: 287.05,
        temp_min: 287.12,
        temp_max: 287.12,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1022,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.27,
        deg: 13,
        gust: 1.14,
      },
      visibility: 10000,
      pop: 0.5,
      rain: {
        '3h': 0.58,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-07-28 00:00:00',
    },
    {
      dt: 1690513200,
      main: {
        temp: 286.58,
        feels_like: 286.56,
        temp_min: 286.58,
        temp_max: 286.58,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1022,
        humidity: 99,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.04,
        deg: 352,
        gust: 2.58,
      },
      visibility: 10000,
      pop: 0.65,
      rain: {
        '3h': 3.51,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-07-28 03:00:00',
    },
    {
      dt: 1690524000,
      main: {
        temp: 286.71,
        feels_like: 286.71,
        temp_min: 286.71,
        temp_max: 286.71,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1020,
        humidity: 99,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.34,
        deg: 48,
        gust: 0.82,
      },
      visibility: 10000,
      pop: 0.74,
      rain: {
        '3h': 0.25,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-07-28 06:00:00',
    },
    {
      dt: 1690534800,
      main: {
        temp: 287,
        feels_like: 287.03,
        temp_min: 287,
        temp_max: 287,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1019,
        humidity: 99,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.92,
        deg: 269,
        gust: 1.89,
      },
      visibility: 10000,
      pop: 0.89,
      rain: {
        '3h': 0.81,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-07-28 09:00:00',
    },
  ],
  city: {
    id: 3469968,
    name: 'Blumenau',
    coord: {
      lat: -26.9194,
      lon: -49.0661,
    },
    country: 'BR',
    population: 293949,
    timezone: -10800,
    sunrise: 1690106483,
    sunset: 1690145025,
  },
}