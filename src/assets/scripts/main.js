import data from '../../data/data.json' assert { type: 'json' };

document.querySelector(".metrics").addEventListener("change", (e) => {
    if (e.target.type !== "radio") {
        return;
    }
    const timeTrackingItems = [...document.querySelectorAll(".time-tracking-item__content")];
    timeTrackingItems.forEach(item => item.dataset["metrics"] = e.target.value);
});

if (data) {
    data.forEach(item => appendDashboardItem(item));
}

function appendDashboardItem(item) {
    const timeTrackingItem = document.createElement("li");
    timeTrackingItem.classList.add(...["time-tracking-item", `time-tracking-item--${item.title.toLowerCase().replace(/\s/g, "-")}`]);
    timeTrackingItem.innerHTML = `
        <div class="time-tracking-item__content" data-metrics="weekly">
            <h2 class="time-tracking-item__category">
                ${item.title}
            </h2>
            <button class="time-tracking-item__options">
                <span class="sr-only">Options</span>
            </button>
            <div class="time-tracking-item__info">
                <p class="time-tracking-item__current-time">
                    <span data-metrics="daily">${item.timeframes.daily.current}hrs</span>
                    <span data-metrics="weekly">${item.timeframes.weekly.current}hrs</span>
                    <span data-metrics="monthly">${item.timeframes.monthly.current}hrs</span>
                </p>
                <p class="time-tracking-item__previous-time">
                    <span data-metrics="daily">Last Day - ${item.timeframes.daily.previous}hrs</span>
                    <span data-metrics="weekly">Last Week - ${item.timeframes.weekly.previous}hrs</span>
                    <span data-metrics="monthly">Last Month - ${item.timeframes.monthly.previous}hrs</span>
                </p>
            </div>
        </div>
    `;
    document.querySelector("#dashboard-list").appendChild(timeTrackingItem);
}