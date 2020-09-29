<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <label for="startDate">{{fromLabel}}</label>
                <input type="date" v-model="start" v-on:change="startChanged" id="startDate" :class="inputClasses">
            </div>
            <div class="col-md-6">
                <label for="endDate">{{toLabel}}</label>
                <input type="date" v-model="end" v-on:change="endChanged" id="endDate" :class="inputClasses">
            </div>
            <div class="col-12">
                <div class="text-center">
                    <button type="button" v-on:click="setShift(-1, 'year')" :class="buttonsClasses"><small>-1</small></button>
                    <button type="button" v-on:click="setCurrent('year')" :class="buttonsClasses"><small>Année ({{getCurrentYear()}})</small></button>
                    <button type="button" v-on:click="setShift(1, 'year')" :class="buttonsClasses"><small>+1</small></button>
                </div>
                <div class="text-center">
                    <button type="button" v-on:click="setShift(-1, 'month')" :class="buttonsClasses"><small>-1</small></button>
                    <button type="button" v-on:click="setCurrent('month')" :class="buttonsClasses"><small>Mois ({{getCurrentMonth()}})</small></button>
                    <button type="button" v-on:click="setShift(1, 'month')" :class="buttonsClasses"><small>+1</small></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    name: 'DateRangeHelper',
    props: {
        buttonsClasses: {
            type: String,
            required: false,
            default: 'btn btn-sm btn-ghost-info'
        },
        endDate: {
            type: Date,
            required: false
        },
        fromLabel: {
            type: String,
            required: false,
            default: 'From'
        },
        inputClasses: {
            type: String,
            required: false,
            default: 'form-control'
        },
        startDate: {
            type: Date,
            required: false
        },
        toLabel: {
            type: String,
            required: false,
            default: 'To'
        },
    },
    methods: {
        endChanged(ev) {
            this.$emit('end-date-changed', ev.target.value)
        },
        getCurrentMonth() {
            return moment().locale(window.navigator.language).format('MMMM')
        },
        getCurrentYear() {
            return moment().year()
        },
        setCurrent(type) {
            this.start = moment().startOf(type).format(moment.HTML5_FMT.DATE)
            this.$emit('start-date-changed', this.start)
            this.end = moment().endOf(type).format(moment.HTML5_FMT.DATE)
            this.$emit('end-date-changed', this.end)
        },
        setShift(amount, type) {
            let referential = this.start ? moment(this.start)[type]() : moment()[type]()
            this.start = moment()[type]((referential + amount)).startOf(type).format(moment.HTML5_FMT.DATE)
            this.$emit('start-date-changed', this.start)
            this.end = moment(this.start).endOf(type).format(moment.HTML5_FMT.DATE)
            this.$emit('end-date-changed', this.end)
        },
        startChanged(ev) {
            this.$emit('start-date-changed', ev.target.value)
        },
    },
    mounted() {
        this.end = this.endDate ? moment(this.endDate).format(moment.HTML5_FMT.DATE) : null
        this.start = this.startDate ? moment(this.startDate).format(moment.HTML5_FMT.DATE) : null
    },
    data() {
        return {
            end: null,
            start: null,
        }
    }
}
</script>

<style scoped>

</style>
