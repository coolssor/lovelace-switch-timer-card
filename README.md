# Switch Timer Card

[![Buy me a beer](https://img.shields.io/badge/Support-Buy%20me%20a%20beer-fdd734?logo=buy-me-a-coffee)](https://www.buymeacoffee.com/joseluis9595)
[![Last commit](https://img.shields.io/github/last-commit/joseluis9595/lovelace-switch-timer-card)](#)
![Downloads](https://img.shields.io/github/downloads/joseluis9595/lovelace-switch-timer-card/total)
[![Version](https://img.shields.io/github/v/release/joseluis9595/lovelace-switch-timer-card)](#)

Switch Timer Card is a custom Lovelace card for Home Assistant that provides a user-friendly interface to control a switch entity with added timer functionality. This card allows you to turn a switch ON or OFF and set a timer to automatically turn it off after a specified duration. It also features a collapsible design for a neat and organized UI.

https://github.com/joseluis9595/lovelace-switch-timer-card/assets/29345499/b9f451e9-46b8-4d59-a675-03b827574ff8

<br>

[**Installation**](#-installation) • [**Usage/Instructions**](#-usageinstructions) • [**Configuration**](#%EF%B8%8F-configuration) • [**Dashboard adjustements**](#%EF%B8%8F-dashboard-adjustements) • [**Example configurations**](#-example-configurations) • [**Help**](#-help) • [**Donate**](#-donate)

<br>

## 🚀 Installation

<details open>
  <summary>HACS manual configuration</summary>

<br>

1. Go to HACS in Home Assistant.
2. On the top right, click "Custom repositories".
3. Enter the repository URL: https://github.com/joseluis9595/lovelace-switch-timer-card.git
4. Search for "Switch Timer Card".
5. Click Install!

</details>

<details>
  <summary>Manual installation without HACS</summary>

<br>

1. Download [switch-timer-card.js](https://github.com/joseluis9595/lovelace-switch-timer-card/releases/latest/download/switch-timer-card.js) from the latest release.
2. Move this file to home assistant's `<config>/www` folder.
3. In home assistant, go to `Settings > Dashboards`.
4. On the top right corner, click `Resources`.
5. Add a new resource with the following:
   - **URL**: `/local/switch-timer-card.js`
   - **Resource type**: JavaScript module
6. Go to your dashboard, refresh your page and add your new switch-timer-card!

</details>

<br>

---

<br>

## 📖 Usage/Instructions

Before using the Switch Timer Card, you need to create a Timer Helper in Home Assistant. Follow these steps to set it up:

1. Open your Home Assistant Configuration and navigate to "Configuration" > "Helpers."

[![Open your Home Assistant instance and show your helper entities.](https://my.home-assistant.io/badges/helpers.svg)](https://my.home-assistant.io/redirect/helpers/)

2. Click the "+ Add Helper" button.

3. Choose "Timer" as the Helper type.

4. Fill in the details for your timer, including a name and an optional icon.

5. Save the Helper.

Now, you can add the Switch Timer Card to your Lovelace dashboard and configure it as follows:

```yaml
type: custom:switch-timer-card
switch_entity: switch.your_switch_entity
timer_entity: timer.your_timer_entity
title: Title of the card
```

- `switch_entity`: Replace `switch.your_switch_entity` with the entity ID of the switch you want to control.

- `timer_entity`: Replace `timer.your_timer_entity` with the entity ID of the timer helper you created in Home Assistant.

- `title` (optional): You can specify a title for the card if desired.

<br>

---

<br>

## ⚙️ Configuration

| Name            | Type                | Default    | Description                                                                         |
| --------------- | ------------------- | ---------- | ----------------------------------------------------------------------------------- |
| `switch_entity` | string              | `Required` | Entity ID of the switch you want to control.                                        |
| `timer_entity`  | string              | `Required` | Entity ID of the timer helper used for this card.                                   |
| `title`         | string              | -          | Optional title for the card. Will use the `switch_entity` friendly name by default. |
| `buttons`       | [Button](#button)[] | -          | Customizable array of buttons with different time lengths for the timer.            |

### Button

Configuration for each button in `switch-timer-card`. You can configure the length of time with which the timer will start when pressing each button, plus manually configuring the text to display in the button if needed.

| Name      | Type   | Default | Description                                                       |
| --------- | ------ | ------- | ----------------------------------------------------------------- |
| `seconds` | number | -       | Seconds to add to the timer.                                      |
| `minutes` | number | -       | Minutes to add to the timer.                                      |
| `hours`   | number | -       | Hours to add to the timer.                                        |
| `text`    | number | -       | Optional text to override the auto-generated human readable time. |

<br>

---

<br>

## 📚 Example Configurations

<img width="514" height="166" alt="example_configuration" src="https://github.com/user-attachments/assets/48e83e78-d898-4f61-87df-cef1578f6f62" />

```yaml
type: custom:switch-timer-card
title: Room radiator
switch_entity: switch.radiator
timer_entity: timer.test_timer
buttons:
  - minutes: 30
  - minutes: 60
  - hours: 1
    minutes: 30
```

<br>

---

<br>

## 💬 Help

Need help using `switch-timer-card`, have ideas, or found a bug? Here's how you can reach out:

- **🐛 Found a bug or have a feature request?**<br>
  [Open an issue on GitHub](https://github.com/joseluis9595/lovelace-switch-timer-card/issues) so we can track and fix it.

- **💬 Have questions, want to share feedback, or just chat?**<br>
  Start [a discussion on GitHub](https://github.com/joseluis9595/lovelace-switch-timer-card/discussions).

Your feedback helps make switch-timer-card better for everyone. Don’t hesitate to reach out!

<br>

---

<br>

## 🍻 Donate

If you enjoy using `switch-timer-card` and want to support its continued development, consider buying me a coffee (or a beer 🍺), or becoming a GitHub Sponsor!

[![Buy Me A Coffee](https://img.shields.io/badge/Buy_Me_a_Beer-fdd734?&logo=buy-me-a-coffee&logoColor=black&style=for-the-badge)](https://www.buymeacoffee.com/joseluis9595) [![GitHub Sponsors](https://img.shields.io/badge/GitHub_Sponsors-30363d?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sponsors/joseluis9595)

Your support means a lot and helps keep the project alive and growing. Thank you! 🙌
