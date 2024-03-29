module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './**/*.html',
    ]
  },

  theme: {
    extend: {
      fontFamily: {
        mont: "Montserrat",
        poppins: "Poppins",
        cabinet: "cabinet",
        bigSholders: "Big Shoulders Display",
      },
      fontSize: {
        "f-12": "12px",
        "f-13": "13px",
        "f-14": "14px",
        "f-15": "15px",
        "f-18": "18px",
        "f-20": "20px",
        "f-21": "21px",
        "f-23": "23px",
        "f-25": "25px",
        "f-26": "26px",
        "f-27": "27px",
        "f-30": "30px",
        "f-35": "35px",
        "f-40": "40px",
        "f-42": "42px",
        "f-43": "43px",
        "f-45": "45px",
        "f-55": "55px",
        "f-56": "56px",
        "f-70": "70px",
        "f-75": "75px",
        "f-145": "145px",
      },
      colors: {
        "black-333": "#333333",
        "black": "#000000",
        "light-black": "#131313",
        "dim-black": "#333",
        "default-color": "#fff",
        "color-green": "#1c8a82",
        "color-red": "#bf2424",
        "color-yellow": "#f7b318",
        "color-gradiant": "(45deg, #17c0ae, #f9b416)",
        "dark-green": "rgb(8, 73, 82)",

      },
      screens: {
        'sm': '360px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        'xxl': '1400px',
      },
      boxShadow: {
        "shadowlight": "0 0 24px #0000000f;",
        "shadowmd": "0px 10px 31px 0 #0000000a;",
      }
    },
  },
  plugins: [
    'prettier-plugin-tailwindcss',
  ],
}