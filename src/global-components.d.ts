import AppCard from './core/components-wrapped/Card.vue'
import AppInput from './core/components-wrapped/InputText.vue'
import AppButton from './core/components-wrapped/Button.vue'
import AppDataTable from './core/components-wrapped/DataTable.vue'
import ProposalDataTable from './core/components-wrapped/ProposalDataTable.vue'
import AppColumn from './core/components-wrapped/Column.vue'
import AppAccordion from './core/components-wrapped/Accordion.vue'
import AppScroll from './core/components-wrapped/Scroll.vue'
import AppFileUpload from './core/components-wrapped/FileUpload.vue'
import AppTab from './core/components-wrapped/Tabs.vue'
import AppChip from './core/components-wrapped/Chip.vue'
import AppTag from './core/components-wrapped/Tag.vue'
import AppToast from './core/components-wrapped/Toast.vue'
import AppInlineMessage from './core/components-wrapped/InlineMessage.vue'
import AppMessage from './core/components-wrapped/Message.vue'
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    AppCard: typeof AppCard
    AppInput: typeof AppInput
    AppButton: typeof AppButton
    AppDataTable: typeof AppDataTable
    ProposalDataTable: typeof ProposalDataTable
    AppColumn: typeof AppColumn
    AppAccordion: typeof AppAccordion
    AppProgressSpinner: typeof AppProgressSpinner
    AppScroll: typeof AppScroll
    AppFileUpload: typeof AppFileUpload
    AppTab: typeof AppTab
    AppChip: typeof AppChip
    AppTag: typeof AppTag
    AppToast: typeof AppToast
    AppInlineMessage: typeof AppInlineMessage
    AppMessage: typeof AppMessage
  }
}
