import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showPopup: false, // Отображение фона попапа
    currentPopup: '', // Какой Попап показывать
    selectedTags: [], // Тэги по которым фильтруются проеты
    selectedProject: '', // Выбранный проэкт для показа
    projects: [       // Все проекты
      {
        name: {
          Eng: 'Online Store - "Sanroom"',
          Rus: 'Интернет магазин - "Sanroom"'
        },
        date: {
          Eng: 'July, 2019',
          Rus: 'Июль 2019'
        },
        images: ['img/projects/sanroom/sanroom-card.png','img/projects/sanroom/sanroom2.jpg'],
        description: {
          Eng: 'E-commerce site for sale plumbing. I made 12 easily editable pages, with content filling through the admin panel on the self-written CMS. In this project, it was more difficult to remake the old components in the same with Twig supports',
          Rus: 'Коммерческий сайт по продаже сантехники. Я сделал 12 легко редактируемых страниц, с наполнением контента через админ панель на самописной ЦМС. В проекте сложнее всео было перепись старых компонентов в Twig '
        },
        tags: ['Html', 'Css', 'JavaScript', 'Yii2', 'Twig'],
        site: 'https://sanroom.com.ua/'
      },
      {
        name: {
          Eng: 'Vladiyan - wedding dress shop',
          Rus: 'Vladiyan - магазин свадебных платьев'
        },
        date: {
          Eng: 'September, 2019',
          Rus: 'Сентябрь 2019'
        },
        images: ['img/projects/vladiyan/vladiyan0.png','img/projects/vladiyan/vladiyan0.png', 'img/projects/vladiyan/vladiyan2.png'],
        description: {
          Eng: 'One of the most interesting projects, it required more from design side, by adding different transitions and smooth animations',
          Rus: 'Один из самых интересных проектов, в нём требовался подход больше с дизайнрской стороны, добавлением разных переходов и плавных анимаций'
        },
        tags: ['Html','Css','JavaScript','Yii2', 'Animations'],
        site: 'https://vladiyan.com/ru/',
      },
      {
        name: {
          Eng: 'Gelb',
          Rus: 'Gelb'
        },
        date: {
          Eng: 'November, 2019',
          Rus: 'Ноябрь 2019'
        },
        images: ['img/projects/gelb/gelb0.png','img/projects/gelb/gelb1.png'],
        description: {
          Eng: 'Gelb - Car rental website. The first major project that used Nuxt. My task was to create components for each of the 12 pages. Also i was need to write logic and animations for all components',
          Rus: 'Gelb  - Сайт по прокату машин. Первый серьёзный проект, на котором использовали Nuxt, моей задачей было создание компонентов для каждой из 12 страниц. Помимо написания логики, также были созданы анимации для компонентов и адаптация'
        },
        tags: ['Html', 'Css', 'JavaScript', 'Vue', 'Nuxt'],
        site: 'https://gelb.com.ua/',
      },
      {
        name: {
          Eng: 'BenzHub',
          Rus: 'BenzHub'
        },
        date: {
          Eng: 'September, 2019',
          Rus: 'Сентябрь 2019'
        },
        images: ['img/projects/benzhub/benzhub0.png','img/projects/benzhub/benzhub1.png'],
        description: {
          Eng: 'E-commerce site for auto parts. I made 12 easily editable pages, with content filling through the admin panel on the self-written CMS.',
          Rus: 'Коммерческий сайт по продаже автозапчастей. Я сделал 12 легко редактируемых страниц, с наполнением контента через админ панель на самописной ЦМС.'
        },
        tags: ['Html', 'Css', 'JavaScript', 'Yii2', 'Twig'],
        site: 'https://benzhub.com.ua/'
      },
      {
        name: {
          Eng: 'Timi Toys',
          Rus: 'Timi Toys'
        },
        date: {
          Eng: 'October, 2019',
          Rus: 'Октябрь 2019'
        },
        images: ['img/projects/timitoys/timytoys0.png','img/projects/timitoys/timytoys1.png'],
        description: {
          Eng: 'E-commerce site for kids toys. I made 12 easily editable pages, with content filling through the admin panel on the self-written CMS.',
          Rus: 'Коммерческий сайт по продаже детских игрушек. Я сделал 12 легко редактируемых страниц, с наполнением контента через админ панель на самописной ЦМС.'
        },
        tags: ['Html', 'Css', 'JavaScript', 'Yii2', 'Twig'],
      },
    ],
    skills: [
      {
        global_name: {
          Eng: 'Web Development',
          Rus: 'Веб Разработка'
        },
        stack: ['Javascript', 'MySQL', 'PhpStorm', 'Gulp', 'WebPack', 'Git']
      },
      {
        global_name: {
          Eng: 'Frontend Development',
          Rus: 'Frontend Разработка'
        },
        stack: ['HTML', 'CSS', 'LESS', 'SASS', 'jQuery', 'VueJS', 'VueX', 'VueRouter']
      },
      {
        global_name: {
          Eng: 'UI/UX Design',
          Rus: 'UI/UX Дизайн'
        },
        stack: ['Photoshop', 'Illustrator', 'Figma']
      }
    ],
    experience: [
      {
        position: {
          Eng: 'IT Trainer',
          Rus: 'ИТ Преподаватель'
        },
        company: 'Streamline',
        dates: {
          Eng: '2018 - 2019',
          Rus: '2018 - 2019'
        },
        desc: {
          Eng: 'I taught basic knowledge of HTML, CSS and JS',
          Rus: 'Преподавал школьникам на компьютерных курсах HTML, CSS и JS'
        }
      },
      {
        position: {
          Eng: 'Frontend Developer',
          Rus: 'Frontend Разработчик'
        },
        company: 'GS4B',
        dates: {
          Eng: 'Aug.2019 – Dec.2019',
          Rus: 'Август 2019 – Декабрь 2019'
        },
        desc: {
          Eng: 'I`m worked with CMS of Yii2, where developed E-commerce projects, and also had experience in developing a project on Nuxt.js',
          Rus: 'Работал с CMS написанной на Yii2 на которой разрабатывал Е-коммерс проекты, а также имел опыт в разработке проекта на Nuxt.js'
        }
      }
    ],
    education: [
      {
        name: {
          Eng: 'Junior Information Systems Specialist',
          Rus: 'Специалист с Информационных Систем'
        },
        company: {
          Eng: 'TEK KNUTE',
          Rus: 'TEK КНТЕУ'
        },
        dates: '2016',
        desc: {
          Eng: 'Base knowledge of programming',
          Rus: 'Получил базовые знание программирования '
        }
      },
      {
        name: {
          Eng: 'Program Engineering',
          Rus: 'Программная инженерия'
        },
        company: {
          Eng: 'KNUTE',
          Rus: 'КНТЕУ'
        },
        dates: '2019',
        desc: {
          Eng: 'BSc in Software Development',
          Rus: 'Бакалавр в разработке программного обеспечения.'
        }
      },
    ],
    feedback: [
      {
        photo: 'img/feedback/5ae4fb51-10aa-42c7-91d6-01cc0a716db1.jpg',
        name: {
          Eng: 'Iryna',
          Rus: 'Iryna'
        },
        position: {
          Eng: '',
          Rus: ''
        },
        work: 'Level Consulting Group',
        comment: {
          Eng: 'I worked with Dima several times, I am satisfied with the result of the work. Basically it was a tight deadline, when it was necessary “for yesterday,” and Dima did everything very quickly, on time, according to the agreed deadlines. He understood everything at once from the first RC, I didn’t have to explain it several times additionally) There were always few edits from mine hand, which is very pleasing. And when they were, they were introduced literally within a couple of hours. Excellent work and in the future more than once more I will definitely turn to him.)',
          Rus: 'Работали с Димой несколько раз, результатом работы довольна. В основном это были сжатые сроки, когда нужно "на вчера", и Дима очень быстро всё выполнял, вовремя, по оговорённым дедлайнам. Понимал всё сразу с первого ТЗ, не приходилось объяснять дополнительно по несколько раз) Правок всегда было мало с моей стороны, что очень радует. А когда и были, то вносились буквально в течении пары часов.Отличная работа и в дальнейшем ещё не один раз точно буду обращаться именно к нему.;)'
        }
      },
      {
        photo: 'img/feedback/19050522_2294415584116947_8044520126759829504_a.jpg',
        name: {
          Eng: 'Andrew',
          Rus: 'Андрей'
        },
        position: {
          Eng: 'BackEnd',
          Rus: 'BackEnd'
        },
        work: 'GS4B',
        comment: {
          Eng: 'He learns quickly and is not afraid of the new. He will figure it out and do the task, even if he didn’t do it before',
          Rus: 'Быстро обучается и не боиться нового. Разберется и сделает задание, даже если раньше такого не делал'
        }
      }
    ]
  },
  mutations: {
    changePopupState (state, elem){
      state.showPopup = !state.showPopup;
      state.currentPopup = elem;
    },
    addNewSelectedTag (state, elem){
      let filteredElem = elem.trim().toLowerCase()
      state.selectedTags.push(filteredElem);
    },
    removeSelectedTag (state, elem){
      let index = state.selectedTags.indexOf(elem);
      if (index >= 0 ){
        state.selectedTags.splice(index, 1)
      }
    },
    changeSelectedProject(state, elem){
      state.selectedProject = elem;
      console.log(state.selectedProject)
    }
  },
  getters: {
    getFilteredList: state => {
      if (state.selectedTags.length){     // Требуется ли фильтрация
        let filteredArray = new Set();    // Создание фильтремого списка
        state.projects.forEach(elem => {  // Елемент
          let checkList = [];
          state.selectedTags.forEach( filteredTag => {  // Каждый фильтремый тэг
            elem.tags.forEach( tag => {                 // Тэг внутри елемента
              let rightTag = `#${tag.trim().toLowerCase()}`;  // Переобразование
              if (rightTag === filteredTag){
                checkList.push(rightTag);
              }
              return
            })
          });
          if (checkList.length === state.selectedTags.length && checkList.every((elem,i)=>elem === state.selectedTags[i])){   // Сравнивание всех тэгов между собой
            filteredArray.add(elem)
          }
        });
        return filteredArray;
      } else {
        return state.projects
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
