import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

Vue.use(MLInstaller);

export default new MLCreate({
    initial: 'Rus',
    save: process.env.NODE_ENV === 'production',
    languages: [
        new MLanguage('Eng').create({
            aboutMe: {
                name: 'I am Dmitry Kartash',
                about: 'I am a Web Developer located in Kiev, Ukraine. I currently work on Freelance. I am looking for job, where I can work on hard projects and increase my skill as a Web Developer',
                phone: 'Phone',
                email: 'Email',
                address: 'Address',
                addressLocation: 'Kiev, st. Makeevska 7, 149',
                social: 'Social',
                contactMe: 'Contact Me',
                downloadCV: 'Download CV',
            },
            skills: {
                name: 'Skills',
                desc: 'My dream is to work in a company with people who are also involved in the development of something amazing, like me'
            },
            experience: {
                name: 'Experience',
                desc: 'I have half a year of experience working on freelance, I also try to occupy myself with interesting tasks in my free time'
            },
            education: {
                name: 'Education',
                desc: 'My goal is to achieve independence in life, so I try to learn something new every day'
            },
            feedback: {
                name: 'Feedback',
                desc: 'Some comments about my work'
            },
            contact: {
                name: 'Contact',
                desc: 'Are you working on something great? I would love to help make it happen! Drop me a letter and we discuss your plan!'
            }

        }),

        new MLanguage('Rus').create({
            aboutMe: {
                name: 'Я Дмитрий Карташ',
                about: 'Я Веб-Разработчик. В данный момент проживаю в Киеве, Украина. Сейчас работаю на фрилансе. Ищу работу на которой могу занятся интерессными проектами и повысить свои навыки',
                phone: 'Телефон',
                email: 'Почта',
                address: 'Адрес',
                addressLocation: 'Киев, ул. Макеевская 7, кв.149',
                social: 'Соц. Сети',
                contactMe: 'Связаться Со Мной',
                downloadCV: 'Скачать CV',
            },
            skills: {
                name: 'Навыки',
                desc: 'Моя мечта работать в компании с людьми, которые также как и я вовлечены в разработку чего-то удивительного'
            },
            experience: {
                name: 'Опыт работы',
                desc: 'У меня пол года опыта работы на фрилансе, также стараюсь себя занять интересными задачами в свободное время'
            },
            education: {
                name: 'Образование',
                desc: 'Моя цель достичь независимости в жизни, поэтому я стараюсь узнавать что-то новое каждый день'
            },
            feedback: {
                name: 'Отзывы',
                desc: 'Несколько отзывов о моей работе'
            },
            contact: {
                name: 'Связаться со мной',
                desc: 'Вы работаете над чем-то интерессным? Я хотел бы помочь сделать это! Напишите мне письмо и давайте обсудим детали проекта!'
            }
        })
    ]
})