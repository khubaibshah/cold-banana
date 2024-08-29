import type { App } from 'vue'

// wrapped-components

import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup' // optional
import Row from 'primevue/row' // optional
import Divider from 'primevue/divider'
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
import ProgressSpinner from 'primevue/progressspinner'
import Scroll from 'primevue/virtualscroller'
import FileUpload from 'primevue/fileupload'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import Chips from 'primevue/chips'
import Tag from 'primevue/tag'
import Toast from 'primevue/toast'
import InlineMessage from 'primevue/inlinemessage'
import Message from 'primevue/message'
import Carousel from 'primevue/carousel'
import DataView from 'primevue/dataview'
// import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions' // optional
import SelectButton from 'primevue/selectbutton'

import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import Rating from 'primevue/rating'

// style classes

import StyleClass from 'primevue/styleclass'

function installComponents(vue: App) {
  vue.component('AppCard', Card)
  vue.component('AppInput', InputText)
  vue.component('AppButton', Button)
  vue.component('AppDropdown', Dropdown)
  vue.component('AppDataTable', DataTable)
  vue.component('ProposalDataTable', DataTable)
  vue.component('AppColumn', Column)
  vue.component('AppDivider', Divider)
  vue.component('AppAccordion', Accordion)
  vue.component('AppProgressSpinner', ProgressSpinner)
  vue.component('AppScroll', Scroll)
  vue.component('AppFileUpload', FileUpload)
  vue.component('AppTab', TabView)
  vue.component('AppChip', Chips)
  vue.component('AppTag', Tag)
  vue.component('AppToast', Toast)
  vue.component('AppInlineMessage', InlineMessage)
  vue.component('AppMessage', Message)
  vue.component('AppCarousel', Carousel)
  vue.component('AppInputGroup', InputGroup)
  vue.component('AppInputGroupAddon', InputGroupAddon)

  vue.component('DataView', DataView)
  //   vue.component('DataViewLayoutOptions', DataViewLayoutOptions)
  vue.component('SelectButton', SelectButton)
  vue.component('PrimeRating', Rating)
  vue.component('PrimeToast', Toast)
  vue.directive('styleclass', StyleClass)
}

export { installComponents }
