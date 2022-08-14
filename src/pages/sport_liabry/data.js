import { v4 as uuidv4 } from 'uuid';

export const  defaultNotes= [
  {
    id:uuidv4(),
    title: 'Побывал в горах',
    content: 'Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития. Идейные соображения высшего порядка, а также укрепление и развитие структуры играет важную роль в формировании существенных финансовых и административных условий.',
    mood: '😌',
    date: 1515424436117,
    image: 'https://cdnn21.img.ria.ru/images/154825/28/1548252847_0:408:2916:2048_600x0_80_0_0_d911c2d66d25f29af1c24c9df9b9b762.jpg'
  },
  {
    id: uuidv4(),
    title: 'Гребля',
    content: 'Делал скоростную работу',
    mood: '😆',
    date: 1660525120000,
    image: 'https://img.olympicchannel.com/images/image/private/t_16-9_3200/primary/szstggrl6q6zeqaixfqa'
  },
  {
  
    id: uuidv4(),
    title: 'Вело тренировка',
    content: 'Аэробная нагрузка',
    mood: '😆',
    date: 1660611520000,
    image: 'https://img.championat.com/s/735x490/news/big/k/r/kak-podgotovitsja-k-velogonke-6-veschej-kotorye-dolzhen-uchest-kazhdyj_15349528211564422105.jpg'
  },
  {
    id: uuidv4(),
    title: 'Активный отдых',
    content: 'Хорошо провел время',
    mood: '😌',
    date: 1626535547228,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuA3wupJ65KOWyUiNjcOuSJLB5KB3dbv9tQA&usqp=CAU'
  }
]

export const  MOODS = ["😌", "😊", "😄", "🤣", "😰", "🥰", "🙃", "😔", "😇", "🤔", "😩", "😭", "😤", "😵", "🤒", "🤤"]

export const API_KEY = '563492ad6f917000010000016a04d3ea4cd3418fbaaefb44f3df6f41'