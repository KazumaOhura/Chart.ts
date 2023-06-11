//import './style.css'
import { ChartElement } from './ts/chart'

document.addEventListener('DOMContentLoaded', () => {
    let chart: ChartElement = document.getElementById('chart') as ChartElement;
    chart.add("bar", []);
})
