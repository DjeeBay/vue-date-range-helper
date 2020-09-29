<h1 align="center">Vue Date Range Helper</h1>

### Introduction
VueJS (2) Component with two inputs (type date) with extra helper buttons to range dates

<p align="center">
  <img src="https://s1.gifyu.com/images/vdrh.png" alt="vdrh" border="0" />
</p>

### Features
<ul>
<li>Pre-selected dates</li>
<li>Uses user locale</li>
<li>Custom CSS</li>
<li>Events</li>
<li>Default styles with Bootstrap 4</li>
</ul>

## Installing

Install with npm:
```bash
npm install --save vue-date-range-helper
```

Import globally in app:

```javascript
import VueDateRangeHelperPlugin from 'vue-date-range-helper';

Vue.use(VueDateRangeHelperPlugin);
```

Import into your component
```javascript
import { VueDateRangeHelper } from 'vue-date-range-helper';

// add to component
components: {
  VueDateRangeHelper
}
```

Use in your project
```vue
<v-date-range-helper
    :end-date="new Date()"
    :start-date="new Date()"
    custom-css-classes="myCustomCss"
    button-css-classes="btn btn-sm btn-ghost-info"
    input-css-classes="form-control form-control-sm"
    from-label="From"
    to-label="To"
    month-label="Month"
    year-label="Year"
    input-locale="fr"
    @end-date-changed="updateYourEndDate"
    @start-date-changed="updateYourStartDate"
></v-date-range-helper>
```

### Main Technologies

<ul>
<li>moment.js</li>
<li>Bootstrap 4</li>
</ul>