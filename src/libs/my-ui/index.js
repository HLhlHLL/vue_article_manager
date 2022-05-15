import MyForm from './components/MyForm'
import MyFormItem from './components/MyFormItem'
import MyInput from './components/MyInput'
import MyButton from './components/MyButton'
import MyHeader from './components/MyHeader'
import MyNavBar from './components/MyNavBar'
import MyCard from './components/MyCard'
import MyUpload from './components/MyUpload'
import MyModal from './components/MyModal'
import MyTable from './components/MyTable'
import MyPagination from './components/MyPagination'
import MySelector from './components/MySelector'

const COMP = [
  MyForm,
  MyFormItem,
  MyInput,
  MyButton,
  MyHeader,
  MyNavBar,
  MyCard,
  MyUpload,
  MyModal,
  MyTable,
  MyPagination,
  MySelector
]

export default {
  install: function (Vue, options) {
    if (options && options.components) {
      options.components.forEach((oCmp) => {
        COMP.forEach((cmp) => {
          if (oCmp.name === cmp.name) {
            Vue.component(cmp.name, cmp)
          }
        })
      })
    } else {
      COMP.forEach((cmp) => {
        Vue.component(cmp.name, cmp)
      })
    }
  }
}
