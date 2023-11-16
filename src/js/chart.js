import Chart from 'chart.js/auto'

const donateChart = document.getElementById('donateproject-chart1');
if (donateChart) {
	(async function () {
		const data = {
			labels: [
				'Собрано',
				'Нужно собрать',
			],
			datasets: [{
				data: [24, 76],
				backgroundColor: [
					'#4D3BBD',
					'#E1E3ED',
				],
				hoverOffset: 0,
				borderWidth: 0,
				hoverBackgroundColor: [
					'#4D3BBD',
					'#E1E3ED',
				],
			}]
		};

		new Chart(
			donateChart,
			{
				type: 'doughnut',
				data: data,
				options: {
					cutout: '93%',
					plugins: {
						legend: {
							display: false
						},
						tooltip: {
							enabled: false
						}
					}
				},
			}
		);
	})();
}