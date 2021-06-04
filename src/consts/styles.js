import {THEME} from './index'
import asia from '../assets/images/asia.jpg'
import africa from '../assets/images/africa.jpg'
import america from '../assets/images/america.jpg'
import europe from '../assets/images/europe.jpg'
import oceania from '../assets/images/oceania-.jpg'

//,url(./assets/images/asia.jpg})
export const STYLES ={
    [THEME.AFRICA]:{
        color: '#bb8309',
        backgroundImage: `linear-gradient(#00000023,#00000023) ,url(${africa})`
    },
    [THEME.ASIA]:{
        color: '#d85b13',
        backgroundImage: `linear-gradient(#00000023,#00000023) ,url(${asia})`
    },
    [THEME.AMERICA]:{
        color: '#da2231',
        backgroundImage: `linear-gradient(#00000023,#00000023) ,url(${america})`
    },
    [THEME.EUROPE]:{
        color: '#008000',
        backgroundImage: `linear-gradient(#00000023,#00000023) ,url(${europe})`
    },
    [THEME.OCEANIA]:{
        color: '#22a6da',
        backgroundImage: `linear-gradient(#00000023,#00000023) ,url(${oceania})`
    },

}